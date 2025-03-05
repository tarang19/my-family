import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: './src/main.js',
      name: 'Home',
      fileName: 'Home',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        exports: 'named',  // Ensures named exports are preserved
      }
    }
  },
})