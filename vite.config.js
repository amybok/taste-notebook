import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default (({mode}) => {
  const env = loadEnv(mode, process.cwd());

  return {
  plugins: [react(),tailwindcss()],
  define: {
      __APP_ENV__: env.APP_ENV,
    }
  }
})
