import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.js',
      name: 'Tree',
      fileName: 'Tree',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        exports: 'named',  // Ensures named exports are preserved
      }
    }
  },
})