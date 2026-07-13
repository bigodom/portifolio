import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps { id: string; title: string; excerpt: string; category: string; date: string; readingTime?: string; featured?: boolean; }

export default function PostCard({ id, title, excerpt, category, date, readingTime = "5 min", featured = false }: PostCardProps) {
  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured ? "md:grid md:grid-cols-[.9fr_1.1fr]" : ""}`}>
      <div className={`relative min-h-48 overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-600 p-7 text-white ${featured ? "md:min-h-80" : ""}`}>
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border-[26px] border-white/10" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-xl" />
        <div className="relative flex h-full flex-col justify-between"><span className="w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">{category}</span><span className="text-sm font-semibold text-blue-100">GPY Soluções • Conteúdo prático</span></div>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500"><time>{new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time><span className="flex items-center gap-1"><Clock3 size={14} />{readingTime} de leitura</span></div>
        <h2 className={`${featured ? "text-2xl sm:text-3xl" : "text-xl"} mb-3 font-extrabold leading-tight text-slate-900 transition group-hover:text-blue-700`}>{title}</h2>
        <p className="mb-6 flex-grow leading-relaxed text-slate-600">{excerpt}</p>
        <Link to={`/blog/${id}`} className="inline-flex items-center gap-2 font-bold text-blue-600">Ler artigo completo <ArrowRight size={17} className="transition group-hover:translate-x-1" /></Link>
      </div>
    </article>
  );
}
