import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// remark plugins
import remarkGfm from 'remark-gfm';

// rehype plugins
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobrosenlund.com",
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeAstroRelativeMarkdownLinks,
    ],
  },
});
