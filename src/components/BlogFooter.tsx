import { ArrowRight, Mail, MessageCircle } from "lucide-react";

export default function BlogFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 to-blue-500 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center">
          <div><span className="text-sm font-bold uppercase tracking-[.2em] text-blue-100">Transforme conhecimento em resultado</span><h2 className="mt-4 max-w-3xl text-3xl font-extrabold sm:text-4xl">Sua empresa precisa de um site, sistema ou automação sob medida?</h2><p className="mt-4 max-w-2xl text-blue-100">A GPY entende seu desafio e desenvolve a solução digital adequada para reduzir trabalho manual, melhorar decisões e atrair novas oportunidades.</p></div>
          <a href="https://wa.me/5531992218398?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20blog%20da%20GPY%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:bg-blue-50"><MessageCircle size={20} /> Conversar com a GPY</a>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center"><div><strong className="text-white">GPY Soluções</strong><p className="mt-1">Tecnologia aplicada ao crescimento de empresas.</p></div><div className="flex flex-wrap gap-6"><a href="/" className="hover:text-white">Site institucional</a><a href="/desenvolvimento-de-sites" className="hover:text-white">Desenvolvimento de sites</a><a href="mailto:gpysolucoes@gmail.com" className="flex items-center gap-2 hover:text-white"><Mail size={15} /> gpysolucoes@gmail.com</a><a href="/#contato" className="flex items-center gap-1 font-bold text-blue-400 hover:text-blue-300">Contato <ArrowRight size={15} /></a></div></div>
      </div>
    </footer>
  );
}
