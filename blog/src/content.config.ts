import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().default('/blog/og.png'),
    coverAlt: z.string(),
    author: z.string().default('Pedro Henrique'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
