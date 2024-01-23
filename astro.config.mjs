import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';
import remarkToc from 'remark-toc';
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://fbsite-astro4.vercel.app/',
  output: 'hybrid',
  adapter: vercelServerless(),

  integrations: [react(), tailwind(), mdx(), sitemap()]
});
