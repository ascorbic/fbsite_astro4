import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  site: 'https://fbsite-astro4.vercel.app/',
  output: 'hybrid',
  adapter: vercelServerless(),
  /*
  vite: {
    ssr: {
      noExternal: ['cookie']
    }
  },
   */
  integrations: [react(), mdx()]
});
