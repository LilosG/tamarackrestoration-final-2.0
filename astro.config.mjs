import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.tamarackrestoration.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    // sitemap temporarily disabled - version incompatibility
    // Will generate sitemap manually or fix after core polish complete
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
