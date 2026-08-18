import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.tamarackrestoration.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy/') &&
        !page.includes('/terms-of-service/'),
    }),
    mdx(),
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
