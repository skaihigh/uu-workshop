import { defineConfig, loadEnv, PluginOption } from 'vite'
import react, { Options } from '@vitejs/plugin-react'
import path from 'path'
import pa11y from 'pa11y'
const envDir = path.resolve(__dirname, 'env')

/**
 * A11ly plugin for Vite
 * @param opts
 * @returns array
 * https://squizlabs.github.io/HTML_CodeSniffer/Standards/WCAG2/
 */
function a11yPlugin(opts?: Options): PluginOption {
  let config: {}

  return {
    name: 'a11y-plugin',
    configResolved(resolvedConfig) {
      // store the resolved config
      config = resolvedConfig
    },
    async handleHotUpdate({ server }) {
      const result = await pa11y(`http://localhost:${process.env.VITE_PORT}`, {
        rules: [
          'Principle1.Guideline1_3.1_3_1_AAA',
          'Principle1.Guideline1_4.1_4_1',
          'Principle1.Guideline1_3.1_3_1',
        ],
      })

      if (result.issues.length > 0) {
        server.ws.send({
          type: 'custom',
          event: 'pa11y:updated',
          data: result,
        })
      }
    },
  }
}

export default ({ mode, server }) => {
  if (mode !== 'production') {
    Object.assign(process.env, loadEnv(mode, envDir, ''))
    return defineConfig({
      plugins: [react(), a11yPlugin()],
      envDir: 'env',
      server: {
        port: parseInt(process.env.VITE_PORT),
      },
    })
  } else {
    return defineConfig({
      plugins: [react()],
    })
  }
}
