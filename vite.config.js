import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimisations pour la production
    minify: 'esbuild',
    // Code splitting pour de meilleures performances
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
    // Optimisation de la taille des chunks
    chunkSizeWarningLimit: 1000,
  },
  // Optimisations pour le dev
  server: {
    hmr: {
      overlay: false, // Désactive l'overlay d'erreur pour de meilleures perfs
    },
  },
})
