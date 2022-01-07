import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'


/**
 * @type {import('vite').UserConfig}
 * @description https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [
      vue(),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      viteMockServe({
        // default
        mockPath: './src/request/mock',
      
      }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  build:{
    sourcemap:true,
  },
  server:{
    port:5200,
    open:true
  }
})
