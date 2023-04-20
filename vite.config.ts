/// <reference types="vitest" />
import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webfontDownload from 'vite-plugin-webfont-dl'
import eslint from '@nabla/vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false
  },

  plugins: [
    vue(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap'
    ]),
    eslint({
      eslintOptions: {
        cache: true,
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue'],
        cwd: path.resolve(__dirname, 'src')
      }
    })
  ],

  server: {
    host: '0.0.0.0',
    port: 8080,
    open: false
  },

  test: {
    globals: false,
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    environment: 'jsdom',
    reporters: ['verbose']
  }
})
