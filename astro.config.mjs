import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: 'https://aitrends.miyaryo1212.com',

  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },

  adapter: cloudflare()
});