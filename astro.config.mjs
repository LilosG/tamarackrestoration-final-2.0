import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.tamarackrestoration.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/thank-you/') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        // Homepage - highest priority
        if (item.url === 'https://www.tamarackrestoration.com/') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        // Service pillar pages
        if (item.url.match(/\/services\/[^/]+\/$/)) {
          return { ...item, priority: 0.9, changefreq: 'weekly' };
        }
        // City landing pages
        if (item.url.match(/\/service-area\/[^/]+\/$/)) {
          return { ...item, priority: 0.85, changefreq: 'weekly' };
        }
        // Money pages (city + service)
        if (item.url.match(/\/service-area\/[^/]+\/[^/]+\/$/)) {
          return { ...item, priority: 0.8, changefreq: 'weekly' };
        }
        // Insurance pages
        if (item.url.includes('/insurance/')) {
          return { ...item, priority: 0.7, changefreq: 'monthly' };
        }
        // Blog posts
        if (item.url.match(/\/blog\/[^/]+\/$/)) {
          return { ...item, priority: 0.6, changefreq: 'monthly' };
        }
        // About section
        if (item.url.includes('/about/')) {
          return { ...item, priority: 0.5, changefreq: 'monthly' };
        }
        return item;
      },
    }),
  ],
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  image: {
    domains: [],
    remotePatterns: [],
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  vite: {
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
    },
  },
});
