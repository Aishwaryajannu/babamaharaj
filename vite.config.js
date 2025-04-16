import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from network/Ngrok
    port: 5173,
    allowedHosts: [
      '1a05-2409-40f2-116a-be68-105e-b2a5-2f0e-7ae.ngrok-free.app',
      '6cbf-2409-40f2-116a-be68-105e-b2a5-2f0e-7ae.ngrok-free.app', // Add your Ngrok URL here
    ],       // You can change this if needed
  }
})
