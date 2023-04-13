import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://lehtoinen.github.io',
  base: '/t10-11-stats',
  integrations: [react()]
});