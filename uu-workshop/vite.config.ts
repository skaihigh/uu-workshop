import { defineConfig, loadEnv, PluginOption } from 'vite'
import react, { Options } from '@vitejs/plugin-react'
import path from 'path'
import pa11y from 'pa11y'
const envDir = path.resolve(__dirname, 'env')

/**
 * A11ly plugin for Vite
 * @param opts
 * @returns array
 */
function a11yPlugin(opts?: Options): PluginOption[] {
  console.log('Woop: ', process.env.VITE_PORT)
  pa11y(`http://localhost:${process.env.VITE_PORT}`, {
    rules: [
      //  "Principle1.Guideline1_3.1_3_1_AAA",
      'Principle1.Guideline1_4.1_4_1',
    ],
  }).then(async (results) => {
    console.log('Number of errors: ', results.issues.length)
    console.log('results', results)
  })
  return []
}

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, envDir, ''))
  console.log('process.env.VITE_PORT', process.env.VITE_PORT)

  return defineConfig({
    plugins: [react(), a11yPlugin()],
    envDir: 'env',
    server: {
      port: parseInt(process.env.VITE_PORT) || 3000,
    },
  })
}
