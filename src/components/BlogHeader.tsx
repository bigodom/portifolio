import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "../assets/logologo_a4.svg";

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 text-slate-900 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/blog" className="flex items-center gap-3" aria-label="Página inicial do blog da GPY">
          <img src={icon} alt="" className="h-9 w-9" />
          <div className="leading-none"><span className="block text-xl font-extrabold">GPY<span className="text-blue-600">Soluções</span></span><span className="text-[10px] font-bold uppercase tracking-[.25em] text-slate-500">Conteúdo & Negócios</span></div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação do blog">
          <Link to="/blog" className="text-sm font-semibold hover:text-blue-600">Artigos</Link>
          <Link to="/desenvolvimento-de-sites" className="text-sm font-semibold hover:text-blue-600">Criação de sites</Link>
          <a href="/#servicos" className="text-sm font-semibold hover:text-blue-600">Sistemas e automação</a>
          <a href="/#contato" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700">Falar com a GPY <ArrowRight size={16} /></a>
        </nav>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-lg p-2 md:hidden" aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && <nav className="flex flex-col gap-4 border-t border-slate-200 bg-white px-6 py-5 md:hidden"><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Artigos</Link><Link to="/desenvolvimento-de-sites" onClick={() => setIsMenuOpen(false)}>Criação de sites</Link><a href="/#servicos">Sistemas e automação</a><a href="/#contato" className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white">Falar com a GPY</a></nav>}
    </header>
  );
}
