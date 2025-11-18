import ReactMarkdown from "react-markdown";

import Footer from "../sessions/Footer";
import Header from "../sessions/Header";

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
  // Regex mais robusta (suporta Windows, Linux, Mac)
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

export default function Blog() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-xl text-slate-300">
              Postagens escritas em Markdown
            </p>
          </div>

          <div className="space-y-8">
            {parsedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-800/70 rounded-xl p-8 shadow-lg border border-slate-700"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <span className="text-sm bg-blue-600/80 text-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-sm text-slate-400">
                    {new Date(post.date).toLocaleDateString("pt-BR")}
                  </time>
                </div>

                <h2 className="text-3xl font-semibold text-white mb-3">
                  {post.title}
                </h2>

                <p className="text-slate-300 mb-6">{post.excerpt}</p>

                <div className="prose prose-invert max-w-none text-slate-200">
                  <ReactMarkdown>
                    {post.content}
                  </ReactMarkdown>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
