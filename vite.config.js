import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Dynamically include all .html files in root for Vite build
const htmlFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.html') && !file.startsWith('drive_') && !file.startsWith('demo_'))
const input = {}
htmlFiles.forEach(file => {
  const name = file.replace(/\.html$/, '')
  input[name] = resolve(__dirname, file)
})

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

