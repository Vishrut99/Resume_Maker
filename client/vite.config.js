import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  define: {
    global: 'globalThis',
  },
  // No special resolve aliases needed now
})
