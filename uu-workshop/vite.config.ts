import { defineConfig, loadEnv, PluginOption, ViteDevServer } from 'vite'
import react, { Options } from '@vitejs/plugin-react'
import path from 'path'
import pa11y from 'pa11y'
const envDir = path.resolve(__dirname, 'env')

/**
 * A11ly plugin for Vite
 * @param opts
 * @returns array
 */
function a11yPlugin(opts?: Options): PluginOption {
  let config: {}
  let pluginViteServer: ViteDevServer

  return {
    name: 'a11y-plugin',
    configResolved(resolvedConfig) {
      // store the resolved config
      config = resolvedConfig
    },
    configureServer(server) {
      pluginViteServer = server
      server.ws.send('my:greetings', { msg: 'hello' })
    },
    async handleHotUpdate({ server }) {
      const result = await pa11y(`http://localhost:${process.env.VITE_PORT}`, {
        rules: [
          //  "Principle1.Guideline1_3.1_3_1_AAA",
          'Principle1.Guideline1_4.1_4_1',
        ],
      })

      server.ws.send({
        type: 'custom',
        event: 'pa11y:updated',
        data: result,
      })
    },
  }
}

export default ({ mode, server }) => {
  console.log('server', server)
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
