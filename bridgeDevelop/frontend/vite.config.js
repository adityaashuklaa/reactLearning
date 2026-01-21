import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': "http://localhost:3000"
    }
  },
  plugins: [react()],
})

// Proxy will append localhost everywhere before /api, and not only append this but also provide a proxy that all the requests are coming from this url.