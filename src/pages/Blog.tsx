import ReactMarkdown from "react-markdown";

import Footer from "../sessions/Footer";
import Header from "../sessions/Header";
import PostCard from "../components/PostCard";

import { Code2, Database, LineChart, Sparkles } from "lucide-react";

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
  query: '?raw',
  import: 'default',
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

const services = [
  { icon: Code2, title: "Desenvolvimento de Sistemas", description: "Soluções web customizadas e escaláveis" },
  { icon: Database, title: "Análise de Dados", description: "Insights acionáveis dos seus dados" },
  { icon: Sparkles, title: "Automação com IA", description: "Processos inteligentes e automatizados" },
  { icon: LineChart, title: "Dashboards", description: "Visualizações que geram decisões" },
];

export default function Blog() {
  return (
    <>
      <Header />

      <section className="bg-gradient-hero py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tecnologia que
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Transforma</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Compartilhando soluções, insights e projetos reais em desenvolvimento de sistemas,
              análise de dados, automação com IA e dashboards inteligentes.
            </p>
            <button className="bg-gradient-primary hover:opacity-90 text-lg px-8">
              Explorar Artigos
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:shadow-hover transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Últimos Artigos</h2>
            <p className="text-muted-foreground">
              Soluções práticas e insights do mundo real
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Precisa de uma Solução Tecnológica?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A GPY desenvolve sistemas customizados, dashboards inteligentes,
            soluções de IA e análise de dados para impulsionar o seu negócio.
          </p>
          <button className="bg-gradient-primary hover:opacity-90 text-lg px-8">
            Fale Conosco
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}
