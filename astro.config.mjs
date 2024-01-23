import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';
import remarkToc from 'remark-toc';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercelServerless(),
  markdown: {
    remarkPlugins: [[remarkToc, {
      heading: 'TOPICS',
      // skip: 'delta',
      maxDepth: 1
    }], remarkReadingTime],
    // remarkPlugins: [remarkToc, remarkReadingTime],
    shikiConfig: {}
  },
  integrations: [react(), tailwind(), mdx()]
});
