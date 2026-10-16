import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://exploreans.com',
  trailingSlash: 'always',
  build: {
    assets: 'assets',
    format: 'directory',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  devToolbar: { enabled: false },
});
