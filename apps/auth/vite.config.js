import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/main.js',  // Ensure this points to your main.js
      name: 'Auth',
      fileName: 'auth',
      formats: ['es'],  // Ensure ES module format
    },
    rollupOptions: {
      output: {
        exports: 'named',  // Ensures named exports are preserved
      }
    }
  }
});
