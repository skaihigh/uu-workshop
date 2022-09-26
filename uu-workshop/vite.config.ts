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

  /**
   *  The default accessibility standard used by pa11y to test a page is the WCAG2AA.
   * However, we can change it to any of the following options
   *  - Section508, WCAG2A, WCAG2AA, or WCAG2AAA.
   *
   * PALLY DOCS : https://bitsofco.de/pa11y/
   */
  return {
    name: 'a11y-plugin',
    configResolved(resolvedConfig) {
      config = resolvedConfig
    },
    async handleHotUpdate({ server }) {
      const result = await pa11y(`http://localhost:${process.env.VITE_PORT}`, {
        standard: 'WCAG2AAA', // Posible values: Section508, WCAG2A, WCAG2AA, WCAG2AAA
        //rules: ['Principle1.Guideline1_1.1_1_1'], // Add rules to test Eks:
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
