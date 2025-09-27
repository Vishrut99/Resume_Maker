import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/]
    },
    target: 'esnext',
    minify: 'terser'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'jspdf', 'dompurify'],
    force: true
  },
  define: {
    global: 'globalThis',
  },
  resolve: {
    alias: {
      'dompurify': 'dompurify/dist/purify.min.js'
    }
  }
})
