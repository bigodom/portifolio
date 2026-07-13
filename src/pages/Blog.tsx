import PostCard from "../components/PostCard";
import BlogHeader from "../components/BlogHeader";
import BlogFooter from "../components/BlogFooter";
import { useEffect } from "react";
import { ArrowRight, BookOpen, TrendingUp } from "lucide-react";

type FrontMatter = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
};

type Post = FrontMatter & {
  id: string;
  content: string;
};

const readingTime = (content: string) => `${Math.max(1, Math.ceil(content.split(/\s+/).length / 200))} min`;

// Carrega todos os arquivos Markdown automaticamente
const rawPosts = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default'
}) as Record<string, string>;

// Faz o parse de front matter + conteúdo
const parsedPosts: Post[] = Object.entries(rawPosts)
  .map(([path, fileContent]) => {
    const { content, frontMatter } = parseFrontMatter(fileContent);
    const slug = path.split("/").pop() ?? crypto.randomUUID();

    return {
      id: slug.replace(".md", ""),
      ...frontMatter,
      content,
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

function parseFrontMatter(source: string): {
  frontMatter: FrontMatter;
  content: string;
} {
  const frontMatterMatch = source.match(/^---\s*([\s\S]*?)---\s*/m);

  if (!frontMatterMatch) {
    return {
        frontMatter: { title: "Sem Título", excerpt: "", date: new Date().toISOString(), category: "Geral" },
        content: source
    };
  }

  const entries = frontMatterMatch[1]
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [key, ...rest] = line.split(":");
      return [key.trim(), rest.join(":").trim().replace(/^"|"$/g, "")];
    });

  const frontMatter = Object.fromEntries(entries) as FrontMatter;
  const content = source.slice(frontMatterMatch[0].length).trim();

  return { frontMatter, content };
}

export default function Blog() {
  useEffect(() => {
    document.title = "Blog sobre Sites, Sistemas e Automação | GPY Soluções";
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    description?.setAttribute("content", "Conteúdo prático sobre desenvolvimento de sites, sistemas, automação e tecnologia para empresas crescerem com eficiência.");
    canonical?.setAttribute("href", "https://gpysolucoes.com.br/blog");
  }, []);

  const [featuredPost, ...otherPosts] = parsedPosts;
  return (
    <>
      <BlogHeader />

      <main className="min-h-screen bg-slate-50 pb-24 pt-28 px-5 relative text-slate-900">
        {/* Subtle decorative accents to match home but light */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-12 w-72 h-72 bg-purple-50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto mb-14 rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white sm:px-14 sm:py-20 overflow-hidden relative">
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-600/30 blur-[90px]" />
          <div className="relative max-w-3xl"><span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300"><BookOpen size={17} /> Conteúdo para decisões melhores</span><h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">Tecnologia explicada para quem quer fazer a empresa crescer.</h1><p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">Estratégias, análises e orientações práticas sobre sites, sistemas, automação e dados — sem complicação.</p></div>
        </div>

        <div className="mx-auto max-w-7xl">
          {featuredPost && <div className="mb-12"><PostCard {...featuredPost} readingTime={readingTime(featuredPost.content)} featured /></div>}

          <aside className="mb-12 grid gap-7 rounded-3xl border border-blue-100 bg-blue-50 p-7 md:grid-cols-[1fr_auto] md:items-center sm:p-9">
            <div className="flex gap-4"><div className="hidden h-fit rounded-2xl bg-blue-600 p-3 text-white sm:block"><TrendingUp /></div><div><span className="text-sm font-bold uppercase tracking-wider text-blue-700">Destaque GPY</span><h2 className="mt-2 text-2xl font-extrabold">Seu site está preparado para transformar visitas em clientes?</h2><p className="mt-2 text-slate-600">Conheça nossa abordagem para criar sites rápidos, responsivos e orientados à conversão.</p></div></div>
            <a href="/desenvolvimento-de-sites" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 font-bold text-white hover:bg-blue-700">Conhecer desenvolvimento de sites <ArrowRight size={18} /></a>
          </aside>

          <div className="mb-8 flex items-end justify-between"><div><span className="text-sm font-bold uppercase tracking-[.18em] text-blue-600">Biblioteca GPY</span><h2 className="mt-2 text-3xl font-extrabold">Artigos mais recentes</h2></div><span className="hidden text-sm text-slate-500 sm:block">{parsedPosts.length} artigos publicados</span></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {otherPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
              readingTime={readingTime(post.content)}
            />
          ))}
          </div>
        </div>
      </main>
      <BlogFooter />
      
    </>
  );
}
