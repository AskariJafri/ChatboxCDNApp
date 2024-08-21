// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'), // Path to your entry file
      name: 'Chatbox',
      fileName: (format) => `chatbox.${format}.js`,
      formats: ['umd'], // Specify UMD format
    },
  },
});
