import Footer from "../sessions/Footer";
import Header from "../sessions/Header";
import PostCard from "../components/PostCard";

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

// Carrega todos os arquivos Markdown automaticamente
const rawPosts = import.meta.glob('../posts/*.md', {
  eager: true,
  as: 'raw',
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
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white py-24 px-4 relative text-slate-900">
        {/* Subtle decorative accents to match home but light */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-12 right-12 w-72 h-72 bg-blue-50 rounded-full blur-3xl" />
          <div className="absolute bottom-12 left-12 w-72 h-72 bg-purple-50 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
            Blog & Artigos
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Compartilhando conhecimento sobre desenvolvimento, tecnologia e experiências do dia a dia.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {parsedPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              date={post.date}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}