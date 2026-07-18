import { copyFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const dist = resolve('dist');
const spaRoutes = ['desenvolvimento-de-sites', 'sites'];

await Promise.all(spaRoutes.map(async (route) => {
  const target = resolve(dist, route);
  await mkdir(target, { recursive: true });
  await copyFile(resolve(dist, 'index.html'), resolve(target, 'index.html'));
}));

// Keeps the React catch-all page while allowing Cloudflare to return a real 404 status.
await copyFile(resolve(dist, 'index.html'), resolve(dist, '404.html'));
