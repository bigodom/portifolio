import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">404 — Página não encontrada</h1>
        <p className="mb-6 text-lg">A página que você tentou acessar não existe.</p>
        <Link
          to="/"
          className="inline-block bg-white text-slate-900 px-4 py-2 rounded hover:opacity-90"
        >
          Voltar para o portfólio
        </Link>
      </div>
    </div>
  );
}
