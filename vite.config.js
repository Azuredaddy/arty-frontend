import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Ensure correct aliasing for components, etc.
    },
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'], // Externalize React to avoid bundling
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000', // Adjust if you need a different API proxy
    },
  },
});
