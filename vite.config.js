import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

function getHtmlEntries(dir = __dirname, baseDir = __dirname) {
  let entries = {}
  const items = fs.readdirSync(dir, { withFileTypes: true })
  for (const item of items) {
    if (item.isDirectory()) {
      if (['node_modules', 'dist', '.git', '.vscode', 'public', 'scratch', 'Edvanta-Edutech1-main', 'flutter_app'].includes(item.name)) continue
      Object.assign(entries, getHtmlEntries(resolve(dir, item.name), baseDir))
    } else if (item.name.endsWith('.html')) {
      const fullPath = resolve(dir, item.name)
      const relativePath = fullPath.substring(baseDir.length + 1).replace(/\\/g, '/')
      const key = relativePath.replace(/\.html$/, '').replace(/[\/\\]/g, '_')
      entries[key] = fullPath
    }
  }
  return entries
}

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: getHtmlEntries(__dirname, __dirname)
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})