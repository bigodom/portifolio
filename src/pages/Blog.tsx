import Header from '../sessions/Header';
import Footer from '../sessions/Footer';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Primeiro Post',
      excerpt: 'Uma introdução ao desenvolvimento web...',
      date: '2025-11-15',
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'React Best Practices',
      excerpt: 'Dicas e truques para escrever React melhor...',
      date: '2025-11-10',
      category: 'React'
    },
    {
      id: 3,
      title: 'TypeScript Tips',
      excerpt: 'Aproveitando o máximo do TypeScript...',
      date: '2025-11-05',
      category: 'TypeScript'
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
            <p className="text-xl text-slate-300">Artigos sobre desenvolvimento web, React e tecnologia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <time className="text-sm text-slate-400">
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-slate-300 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Leia mais →
                </a>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
