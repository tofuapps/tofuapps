import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import autoprefixer from "autoprefixer";
import { mdsvex } from 'mdsvex';

import remarkGfm from "remark-gfm";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      fallback: '404.html',
    }),
  },
  extensions: ['.svelte', '.md'],
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;',
      },
      postcss: {
        plugins: [
          autoprefixer(),
        ]
      }
    }),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/_post.svelte'
      },
      remarkPlugins: [
        remarkGfm,
      ],
    })
  ],
};

export default config;
