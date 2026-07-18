import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://gpysolucoes.com.br',
  base: '/blog',
  output: 'static',
  outDir: '../dist/blog',
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-dark' } },
});
