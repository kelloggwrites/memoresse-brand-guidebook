// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: awsAmplify(),
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://brand.memoresse.com', // Update with your actual domain
  build: {
    assets: '_astro'
  }
});