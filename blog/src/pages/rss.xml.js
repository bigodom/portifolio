import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { publishedPosts } from '../lib/posts';
export async function GET(context) { const posts = publishedPosts(await getCollection('blog')); return rss({ title: 'Blog GPY Soluções', description: 'Experiências reais construindo software e produtos digitais.', site: context.site, trailingSlash: false, items: posts.map((post) => ({ title: post.data.title, description: post.data.description, pubDate: post.data.publishedAt, link: `/blog/${post.id}/`, categories: [post.data.category, ...post.data.tags] })) }); }
