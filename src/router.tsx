import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load das páginas para otimizar o build
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Sites = lazy(() => import('./pages/Sites'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Componente de loading
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-2xl">Carregando...</div>
  </div>
);

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      ),
    },
    {
      path: '/desenvolvimento-de-sites',
      element: (
        <Suspense fallback={<Loading />}>
          <Sites />
        </Suspense>
      ),
    },
    {
      path: '/sites',
      element: (
        <Suspense fallback={<Loading />}>
          <Sites />
        </Suspense>
      ),
    },
    {
      path: '/blog',
      element: (
        <Suspense fallback={<Loading />}>
          <Blog />
        </Suspense>
      ),
    },
    {
      path: '/blog/:id',
      element: (
        <Suspense fallback={<Loading />}>
          <BlogPost />
        </Suspense>
      ),
    },
    {
      path: '*',
      element: (
        <Suspense fallback={<Loading />}>
          <NotFound />
        </Suspense>
      ),
    },
  ],
  {
    // Always use '/' as basename since Vite base is set to './' (relative paths)
    basename: '/',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
