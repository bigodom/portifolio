import type { CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const publishedPosts = (posts: Post[]) => posts
  .filter((post) => import.meta.env.DEV || !post.data.draft)
  .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

export const formatDate = (date: Date) => new Intl.DateTimeFormat('pt-BR', {
  day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC',
}).format(date);

export const readingTime = (body = '') => Math.max(1, Math.ceil(body.trim().split(/\s+/).length / 210));

export const absoluteUrl = (path: string) => new URL(path, 'https://gpysolucoes.com.br').toString();
