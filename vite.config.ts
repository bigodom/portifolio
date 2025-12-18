import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {cloudflare} from '@cloudflare/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    cloudflare()
  ],
  base: '/',
  server: {
    port: 3016,
    open: true,
    host: true,
    allowedHosts: ['hcm159'],
  },
})
