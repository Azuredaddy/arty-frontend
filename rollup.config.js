import path from 'path';

export default {
  input: 'src/main.jsx', // Adjust according to your entry point
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true, // Optional: for debugging purposes
  },
  plugins: [
    // Your plugins (e.g., React, etc.) go here
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Ensure the alias is working for imports
    },
  },
  external: ['react', 'react-dom'], // Ensure React is not bundled again
};
