import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr({ include: '**/*.svg?svgr' })],
  // root: path.resolve(__dirname, './'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // '@libs': path.resolve(__dirname, '../../libs'),
    },
  },
});
