import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://aitrends.miyaryo1212.com',
  adapter: cloudflare()
});