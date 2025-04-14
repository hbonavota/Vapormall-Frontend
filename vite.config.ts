import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Cambia esto al nombre de la carpeta
  server: {
    port: 3000,
host: true,  // Expone el servidor en todas las interfaces
    allowedHosts: ['vapormall.store']  // Permite solicitudes desde tu dominio
  },
})
