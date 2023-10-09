import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

import { resolve } from 'path';
const src = resolve(__dirname, './src');

export default defineConfig({
  base: '/vite-react/',
  plugins: [
    react(),
    legacy({ targets: ['IE >= 11'] }),
  ],
  server: { port: 3030 },
  build: { minify: true },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/vars.scss";
          @import "@/styles/mixins.scss";
        `
      }
    },
    // postcss: { plugins: [autoprefixer()] }
  },
  resolve: {
    alias: {
      '@': resolve(src),
      '@scripts': resolve(src, 'scripts'),
      '@styles': resolve(src, 'styles'),
      '@store': resolve(src, 'store'),
      // assets
      '@images': resolve(src, 'assets/images'),
      '@icons': resolve(src, 'assets/icons'),
      '@fonts': resolve(src, 'assets/fonts'),
      // react
      '@pages': resolve(src, 'pages'),
      '@components': resolve(src, 'react/components'),
      '@hooks': resolve(src, 'react/hooks'),
      '@sections': resolve(src, 'react/sections'),
      '@ui': resolve(src, 'react/ui'),
      '@layout': resolve(src, 'react/layout'),
      '@contexts': resolve(src, 'react/contexts'),
    }
  }
})