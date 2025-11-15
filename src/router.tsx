import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy load das páginas para otimizar o build
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));

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
  ],
  {
    basename: import.meta.env.MODE === 'production' ? '/portifolio' : '/',
  }
);

export function Router() {
  return <RouterProvider router={router} />;
}
