import { defineConfig } from 'vite'

export default defineConfig({
  base: '/slidev/static/', // Use relative paths
  build: {
    // outDir: 'dist', // Output directory
    outDir: 'static', // Output directory
    emptyOutDir: true, // Empty outDir on build
    // Additional SPA configuration
  },
})
