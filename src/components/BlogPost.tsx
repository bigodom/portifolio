import ReactMarkdown from 'react-markdown';
import { Calendar, Tag, Clock } from 'lucide-react';
import { useParams } from 'react-router-dom';
import type { ComponentPropsWithoutRef } from 'react';
import BlogFooter from './BlogFooter';
import BlogHeader from './BlogHeader';
import { useEffect } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface BlogPostProps {
  content?: string;
  title?: string;
  date?: string;
  category?: string;
  readingTime?: string; // Opcional, se você quiser calcular depois
}

interface ParsedPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
}

export default function BlogPost({ content, title, date, category, readingTime }: BlogPostProps) {
  // Quando usado como página (rota), carregamos o post pelo id
  const params = useParams();

  if (!content && params?.id) {
    // carregar posts dinamicamente
    const rawPosts = import.meta.glob('../posts/*.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;
    const parsed = Object.entries(rawPosts).map(([path, fileContent]) => {
      const fm = fileContent.match(/^---\s*([\s\S]*?)---\s*/m);
      let frontMatter: Record<string, string> = {};
      let body = fileContent;
      if (fm) {
        const entries = fm[1]
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean)
          .map((line) => {
            const [k, ...rest] = line.split(':');
            return [k.trim(), rest.join(':').trim().replace(/^"|"$/g, '')];
          });
        frontMatter = Object.fromEntries(entries);
        body = fileContent.slice(fm[0].length).trim();
      }

      const slug = path.split('/').pop() ?? '';
      return {
        id: slug.replace('.md', ''),
        title: frontMatter.title ?? '',
        excerpt: frontMatter.excerpt ?? '',
        date: frontMatter.date ?? '',
        category: frontMatter.category ?? '',
        content: body,
      } satisfies ParsedPost;
    });

    const found = parsed.find((p) => p.id === params.id);
    if (found) {
      content = found.content;
      title = found.title;
      date = found.date;
      category = found.category;
      readingTime = `${Math.ceil(found.content.split(/\s+/).length / 200)} min`;
    }
  }

  useEffect(() => {
    if (!title || !params?.id) return;
    document.title = `${title} | Blog GPY Soluções`;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    description?.setAttribute('content', `Leia no blog da GPY Soluções: ${title}. Conteúdo sobre tecnologia, sites, sistemas e automação para empresas.`);
    canonical?.setAttribute('href', `https://gpysolucoes.com.br/blog/${params.id}`);
  }, [title, params?.id]);

  return (
    <>
      <BlogHeader />
      <div className="min-h-screen bg-white py-24 px-4 relative text-slate-900">
        <article className="relative z-10 container mx-auto max-w-4xl">
          {/* --- Cabeçalho do Post --- */}
          {(title || date || category) && (
            <header className="p-6 md:p-10 bg-white">
              {/* Metadados */}
              <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                {category && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full font-medium text-blue-700 bg-blue-50 border border-blue-100">
                    <Tag size={14} />
                    {category}
                  </span>
                )}
                {date && (
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <Calendar size={14} />
                    {new Date(date + 'T00:00:00').toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                )}
                {readingTime && (
                  <span className="flex items-center gap-1.5 text-slate-500 border-l border-slate-200 pl-4">
                    <Clock size={14} />
                    {readingTime}
                  </span>
                )}
              </div>

              {title && (
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
                  {title}
                </h1>
              )}
            </header>
          )}

          {/* --- Conteúdo do Post --- */}
          <div className="p-6 md:p-10">
            <ReactMarkdown
              components={{
                // Títulos
                h1: ({ ...props }: ComponentPropsWithoutRef<'h1'>) => (
                  <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6 pb-4 border-b border-slate-200" {...props} />
                ),
                h2: ({ ...props }: ComponentPropsWithoutRef<'h2'>) => (
                  <h2 className="text-2xl font-semibold text-slate-800 mt-10 mb-5 flex items-center ms-2" {...props} />
                ),
                h3: ({ ...props }: ComponentPropsWithoutRef<'h3'>) => (
                  <h3 className="text-xl font-semibold text-slate-800 mt-8 mb-3" {...props} />
                ),

                // Texto e Formatação
                p: ({ ...props }: ComponentPropsWithoutRef<'p'>) => (
                  <p className="text-slate-700 leading-relaxed mb-6 text-lg" {...props} />
                ),
                strong: ({ ...props }: ComponentPropsWithoutRef<'strong'>) => (
                  <strong className="font-bold text-slate-900" {...props} />
                ),
                em: ({ ...props }: ComponentPropsWithoutRef<'em'>) => (
                  <em className="text-slate-700 italic" {...props} />
                ),

                // Links
                a: ({ ...props }: ComponentPropsWithoutRef<'a'>) => (
                  <a className="text-blue-600 font-medium hover:text-blue-500 underline decoration-blue-200 underline-offset-4 transition-all" target="_blank" rel="noopener noreferrer" {...props} />
                ),

                // Listas
                ul: ({ ...props }: ComponentPropsWithoutRef<'ul'>) => (
                  <ul className="list-disc list-outside ml-6 mb-8 text-slate-700 space-y-2 marker:text-blue-600" {...props} />
                ),
                ol: ({ ...props }: ComponentPropsWithoutRef<'ol'>) => (
                  <ol className="list-decimal list-outside ml-6 mb-8 text-slate-700 space-y-2 marker:text-blue-600" {...props} />
                ),
                li: ({ ...props }: ComponentPropsWithoutRef<'li'>) => (
                  <li className="pl-1" {...props} />
                ),

                // Citações (Blockquotes)
                blockquote: ({ ...props }: ComponentPropsWithoutRef<'blockquote'>) => (
                  <blockquote className="relative border-l-4 border-blue-500 bg-blue-50 p-6 my-8 rounded-r-xl italic text-slate-700 shadow-sm" {...props} />
                ),

                // Código (Bloco e Inline)
                code: ({ className, children, ...props }: ComponentPropsWithoutRef<'code'> & { inline?: boolean }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match && !className; // Simplificação para detectar inline se não tiver linguagem definida explicitamente como bloco

                  return isInline ? (
                    <code className="bg-slate-100 text-blue-600 px-1.5 py-0.5 rounded-md font-mono text-sm border border-slate-200" {...props}>
                      {children}
                    </code>
                  ) : (
                    <div className="relative group my-8 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
                      {match && (
                        <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-200">
                          <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{match[1]}</span>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                            <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                          </div>
                        </div>
                      )}
                      <div className="overflow-x-auto">
                        <pre className="p-5">
                          <code className={`font-mono text-sm text-slate-800 ${className || ''}`} {...props}>
                            {children}
                          </code>
                        </pre>
                      </div>
                    </div>
                  );
                },

                // Mídia
                img: ({ ...props }: ComponentPropsWithoutRef<'img'>) => (
                  <figure className="my-10 group">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                      <img className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105" {...props} loading="lazy" />
                    </div>
                    {props.alt && <figcaption className="text-center text-sm text-slate-600 mt-3 italic">{props.alt}</figcaption>}
                  </figure>
                ),

                // Tabelas
                table: ({ ...props }: ComponentPropsWithoutRef<'table'>) => (
                  <div className="overflow-x-auto my-10 rounded-lg border border-slate-700 shadow-sm">
                    <table className="w-full text-left border-collapse" {...props} />
                  </div>
                ),
                th: ({ ...props }: ComponentPropsWithoutRef<'th'>) => (
                  <th className="bg-slate-100 p-4 font-semibold text-slate-800 border-b border-slate-200 whitespace-nowrap" {...props} />
                ),
                td: ({ ...props }: ComponentPropsWithoutRef<'td'>) => (
                  <td className="p-4 border-b border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors" {...props} />
                ),

                // Separador
                hr: ({ ...props }: ComponentPropsWithoutRef<'hr'>) => (
                  <hr className="border-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-16" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </article>
        <aside className="mx-auto mb-10 mt-4 grid max-w-4xl gap-6 rounded-3xl bg-slate-950 p-7 text-white sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
          <div><span className="text-sm font-bold uppercase tracking-wider text-blue-400">Aplique isso na sua empresa</span><h2 className="mt-2 text-2xl font-extrabold">Precisa transformar esse conhecimento em uma solução real?</h2><p className="mt-3 text-slate-300">Converse com a GPY sobre sites, sistemas, dashboards e automações desenvolvidos para o seu cenário.</p></div>
          <a href="https://wa.me/5531992218398?text=Ol%C3%A1!%20Li%20um%20artigo%20no%20blog%20da%20GPY%20e%20gostaria%20de%20conversar." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold hover:bg-blue-500"><MessageCircle size={19} /> Falar com a GPY <ArrowRight size={17} /></a>
        </aside>
      </div>
      <BlogFooter />
    </>
  );
}
