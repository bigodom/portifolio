import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load das páginas para otimizar o build
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Componente de loading
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-900">
    <div className="text-white text-2xl">Carregando...</div>
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
      path: '/blog',
      element: (
        <Suspense fallback={<Loading />}>
          <Blog />
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
    // Use Vite's BASE_URL so the router matches the deployed base path.
    // Default is '/' when not configured, avoiding mismatch with '/'.
    basename: import.meta.env.BASE_URL,
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
