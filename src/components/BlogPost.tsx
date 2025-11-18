import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "../sessions/Header";
import Footer from "../sessions/Footer";

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

function parseFrontMatter(source: string): {
  frontMatter: FrontMatter;
  content: string;
} {
  const frontMatterMatch = source.match(/^---\s*([\s\S]*?)---\s*/m);

  if (!frontMatterMatch) {
    throw new Error("Arquivo Markdown sem front matter válido.");
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

// Carrega todos os posts
const rawPosts = import.meta.glob('../posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

const parsedPosts: Post[] = Object.entries(rawPosts)
  .map(([path, fileContent]) => {
    const { content, frontMatter } = parseFrontMatter(fileContent);
    const slug = path.split("/").pop() ?? crypto.randomUUID();

    return {
      id: slug.replace(".md", ""),
      ...frontMatter,
      content,
    };
  });

const BlogPost = () => {
  const { id } = useParams();
  const post = parsedPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-slate-900">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold mb-4 text-white">Post não encontrado</h1>
            <Link to="/blog">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
                Voltar para Blog
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <Link to="/blog">
            <button className="mb-6 flex items-center gap-2 text-blue-400 hover:text-blue-300">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Blog
            </button>
          </Link>

          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-sm bg-blue-600/80 text-white px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              {post.title}
            </h1>
            
            <p className="text-xl text-slate-300">
              {post.excerpt}
            </p>
          </div>

          <div className="prose prose-invert max-w-none text-slate-200 prose-headings:text-white prose-headings:font-bold prose-p:leading-relaxed">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-12 p-6 bg-slate-800/70 rounded-xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-3 text-white">Precisa de uma solução customizada?</h3>
            <p className="text-slate-300 mb-4">
              A GPY desenvolve sistemas, dashboards e soluções de IA sob medida para o seu negócio.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
              Entre em Contato
            </button>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
