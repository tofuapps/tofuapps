import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import viteYaml from '@modyfi/vite-plugin-yaml';

export default defineConfig({
  plugins: [
    sveltekit(), viteYaml()
  ],
  build: {
    target: 'es2015'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/variables.scss" as *;',
      },
    },
  },
});

