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
    // Avoid attempting to pre-bundle server-only libs if present in deps
    exclude: ['html-pdf', 'html-to-text']
  },
  // Do not override global. Some libs mis-detect environments when this is set.
  // If any library expects `global`, we alias it to window via a tiny polyfill loaded in main.jsx
  // No special resolve aliases needed now
})
