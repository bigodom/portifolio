import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image?: string;
}

const PostCard = ({ id, title, excerpt, category, date }: PostCardProps) => {
  return (
    <article className="flex flex-col h-full bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <header className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {category}
          </span>
        </div>
        <time className="text-sm text-slate-500">{new Date(date).toLocaleDateString('pt-BR')}</time>
      </header>

      <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-3 line-clamp-2">{title}</h3>

      <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">{excerpt}</p>

      <footer className="mt-4">
        <Link to={`/blog/${id}`} className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-500">
          Ler mais
          <ArrowRight className="h-4 w-4" />
        </Link>
      </footer>
    </article>
  );
};

export default PostCard;
