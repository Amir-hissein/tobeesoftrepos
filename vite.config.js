import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Target pour compatibilité maximale avec tous les navigateurs
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari13'],

    // Optimisations pour la production
    minify: 'esbuild',

    // Transpiler le code pour les anciens navigateurs
    cssTarget: ['chrome87', 'safari13', 'firefox78', 'edge88'],

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

    // S'assurer que tous les assets sont correctement gérés
    assetsInlineLimit: 4096,
  },

  // CSS processing avec autoprefixer
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            'last 2 versions',
            '> 0.5%',
            'not dead',
            'not op_mini all',
            'Chrome >= 87',
            'Safari >= 13',
            'Firefox >= 78',
            'Edge >= 88',
            'iOS >= 13',
            'Android >= 87'
          ],
          grid: 'autoplace',
          flexbox: 'no-2009'
        })
      ]
    }
  },

  // Optimisations pour le dev
  server: {
    hmr: {
      overlay: false, // Désactive l'overlay d'erreur pour de meilleures perfs
    },
  },

  // Optimizations générales
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
  },
})
