// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://brand.memoresse.com', // Update with your actual domain
  build: {
    assets: '_astro'
  }
});