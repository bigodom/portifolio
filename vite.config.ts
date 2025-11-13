import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  // Use relative base so built files reference assets relative to `dist/`.
  // This avoids absolute `/portifolio/` paths which break when serving `dist` locally.
  base: './',
  server: {
    port: 3016,
    open: true,
    host: true,
    allowedHosts: [
      'hcm159'
    ],
  },
})
