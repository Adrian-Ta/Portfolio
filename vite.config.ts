import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Die Seite läuft unter der eigenen Domain www.adriantajik.dev (siehe public/CNAME),
  // also direkt im Wurzelverzeichnis – lokal wie auf GitHub Pages.
  base: '/',
  plugins: [react()],
})
