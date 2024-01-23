import { defineConfig } from 'astro/config';
import vercelServerless from '@astrojs/vercel/serverless';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: vercelServerless(),
  integrations: [react(), tailwind(), mdx()]
});