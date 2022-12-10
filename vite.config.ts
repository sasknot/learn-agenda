import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webfontDownload from 'vite-plugin-webfont-dl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap',
      'https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@400;700&display=swap'
    ])
  ]
})
