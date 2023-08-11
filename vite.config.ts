import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe} from 'vite-plugin-mock'
// https://vitejs.dev/config/

export default defineConfig(({ command }) => {
  return {
      plugins: [
        vue(),
        createSvgIconsPlugin({
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          symbolId: 'icon-[dir]-[name]',
        }),
        viteMockServe({
          mockPath: 'mock',
          localEnabled: command === 'serve',
        }),
      ],
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
        }
      },
      css: {
        preprocessorOptions: {
          scss: {
            javascriptEnabled: true,
            additionalData: '@import "./src/styles/variable.scss";',
          },
        },
      },
    }
})

