import { useEffect } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Gauge,
  LayoutTemplate,
  Menu,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { useState } from "react";
import icon from "../assets/logologo_a4.svg";
import Footer from "../sessions/Footer";
import WhatsAppFloating from "../components/WhatsAppFloating";

const whatsappUrl = "https://wa.me/5531992218398?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20site%20profissional.";

const portfolioItems = [
  { title: "Projeto de Site 01", category: "Site institucional", accent: "from-blue-600 to-cyan-400" },
  { title: "Projeto de Site 02", category: "Landing page", accent: "from-violet-600 to-fuchsia-400" },
  { title: "Projeto de Site 03", category: "Site profissional", accent: "from-emerald-600 to-teal-400" },
  { title: "Projeto de Site 04", category: "Experiência digital", accent: "from-orange-500 to-rose-500" },
];

export default function Sites() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content") ?? "";
    const previousCanonical = canonical?.getAttribute("href") ?? "";

    document.title = "Desenvolvimento de Sites Profissionais | GPY Soluções";
    description?.setAttribute("content", "Sites profissionais, rápidos, responsivos e pensados para transformar visitantes em oportunidades para sua empresa.");
    canonical?.setAttribute("href", "https://gpysolucoes.com.br/desenvolvimento-de-sites");

    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3" aria-label="Voltar para a página inicial da GPY Soluções">
            <img src={icon} alt="" className="h-10 w-10" />
            <span className="text-xl font-bold">GPY<span className="text-blue-500">Soluções</span></span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação da página de sites">
            <a href="#diferenciais" className="text-sm text-slate-300 transition hover:text-white">Diferenciais</a>
            <a href="#portfolio-sites" className="text-sm text-slate-300 transition hover:text-white">Portfólio</a>
            <a href="#processo" className="text-sm text-slate-300 transition hover:text-white">Como funciona</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-blue-600 px-5 py-3 text-sm font-bold transition hover:bg-blue-500">Solicitar orçamento</a>
          </nav>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <a href="#diferenciais" onClick={() => setMenuOpen(false)}>Diferenciais</a>
            <a href="#portfolio-sites" onClick={() => setMenuOpen(false)}>Portfólio</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Como funciona</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold">Solicitar orçamento</a>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
          <div className="absolute left-1/2 top-16 -z-0 h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <Sparkles size={16} /> Sites que trabalham pelo crescimento da sua empresa
              </div>
              <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Seu site precisa <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">atrair clientes</span>, não apenas existir.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                A GPY cria sites profissionais que comunicam valor, carregam rápido e conduzem o visitante até o contato — em qualquer tamanho de tela.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Quero um site que gere oportunidades <ArrowRight size={19} />
                </a>
                <a href="#portfolio-sites" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold transition hover:bg-white/10">
                  Ver sites desenvolvidos
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-400" />Design responsivo</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-400" />Alta performance</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={17} className="text-emerald-400" />Estrutura preparada para SEO</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                <div className="overflow-hidden rounded-[1.4rem] bg-white text-slate-900">
                  <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4"><span className="h-3 w-3 rounded-full bg-rose-400" /><span className="h-3 w-3 rounded-full bg-amber-400" /><span className="h-3 w-3 rounded-full bg-emerald-400" /><div className="ml-3 h-7 flex-1 rounded-full bg-slate-100" /></div>
                  <div className="grid min-h-[390px] content-center bg-gradient-to-br from-slate-50 to-blue-50 p-8 sm:p-12">
                    <span className="mb-5 h-3 w-28 rounded-full bg-blue-600" />
                    <div className="mb-4 h-8 w-full rounded-lg bg-slate-900" />
                    <div className="mb-7 h-8 w-4/5 rounded-lg bg-slate-900" />
                    <div className="mb-3 h-3 w-full rounded bg-slate-300" />
                    <div className="mb-8 h-3 w-3/4 rounded bg-slate-300" />
                    <div className="h-12 w-44 rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-7 -left-4 rounded-2xl border border-white/10 bg-slate-900/95 p-4 shadow-xl sm:-left-10">
                <div className="flex items-center gap-3"><div className="rounded-xl bg-emerald-500/15 p-3 text-emerald-400"><Gauge /></div><div><strong className="block text-lg">Experiência rápida</strong><span className="text-xs text-slate-400">Pensada para não perder visitas</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="bg-white px-6 py-24 text-slate-900">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="font-bold uppercase tracking-[.2em] text-blue-600">O diferencial GPY</span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">Cada detalhe é pensado para transformar atenção em ação.</h2>
              <p className="mt-5 text-lg text-slate-600">Um site eficiente combina estratégia, clareza, tecnologia e uma ótima experiência para o visitante.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                [Target, "Foco em conversão", "Organizamos conteúdo, argumentos e chamadas para facilitar o próximo passo do cliente."],
                [Gauge, "Alto desempenho", "Páginas leves e otimizadas para carregar com rapidez e reduzir abandonos."],
                [Smartphone, "Mobile de verdade", "A experiência é planejada para celulares, tablets e computadores, sem adaptações improvisadas."],
                [Search, "Preparado para o Google", "Estrutura semântica, conteúdo organizado e fundamentos técnicos para uma estratégia de SEO."],
                [ShieldCheck, "Tecnologia confiável", "Construção moderna, segura e preparada para crescer junto com o negócio."],
                [MousePointerClick, "Jornada clara", "Navegação objetiva para o visitante entender a oferta e encontrar o contato rapidamente."],
              ].map(([Icon, title, text]) => {
                const IconComponent = Icon as typeof Target;
                return <div key={title as string} className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"><div className="mb-5 inline-flex rounded-2xl bg-blue-600 p-3 text-white"><IconComponent /></div><h3 className="mb-3 text-xl font-bold">{title as string}</h3><p className="leading-relaxed text-slate-600">{text as string}</p></div>;
              })}
            </div>
          </div>
        </section>

        <section id="portfolio-sites" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl"><span className="font-bold uppercase tracking-[.2em] text-blue-400">Sites desenvolvidos</span><h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">Projetos criados para marcas que querem crescer.</h2></div>
              <p className="max-w-md text-slate-400">Esta vitrine está preparada para receber as imagens, informações e links dos quatro sites já desenvolvidos pela GPY.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {portfolioItems.map((project, index) => (
                <article key={project.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-400/40">
                  <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent} p-5 sm:p-8`}>
                    <div className="h-full overflow-hidden rounded-2xl bg-white shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /><span className="ml-2 h-5 flex-1 rounded-full bg-slate-100" /></div>
                      <div className="grid h-full place-items-center bg-slate-50 text-center text-slate-400"><div><LayoutTemplate className="mx-auto mb-3" size={38} /><span className="text-sm font-semibold">Imagem do projeto {String(index + 1).padStart(2, "0")}</span></div></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6 sm:p-8"><div><span className="text-sm font-semibold text-blue-400">{project.category}</span><h3 className="mt-1 text-2xl font-bold">{project.title}</h3></div><span className="rounded-full border border-white/15 p-3 text-slate-300"><ArrowRight /></span></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="bg-slate-900 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center"><span className="font-bold uppercase tracking-[.2em] text-blue-400">Do planejamento à publicação</span><h2 className="mt-4 text-3xl font-extrabold sm:text-5xl">Um processo claro, sem complicação.</h2></div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Diagnóstico", "Entendemos seu negócio, público, objetivos e diferenciais."],
                ["02", "Estratégia", "Definimos a estrutura, a mensagem e os caminhos de conversão."],
                ["03", "Design e desenvolvimento", "Criamos a experiência visual e transformamos tudo em um site rápido e responsivo."],
                ["04", "Publicação", "Revisamos os detalhes, colocamos o site no ar e orientamos os próximos passos."],
              ].map(([number, title, text]) => <div key={number} className="rounded-3xl border border-white/10 bg-white/5 p-7"><span className="text-4xl font-black text-blue-500">{number}</span><h3 className="mb-3 mt-6 text-xl font-bold">{title}</h3><p className="leading-relaxed text-slate-400">{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-24 text-slate-900">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-blue-500 px-7 py-14 text-center text-white shadow-2xl sm:px-16 sm:py-20">
            <BarChart3 className="mx-auto mb-6" size={44} />
            <h2 className="text-3xl font-extrabold sm:text-5xl">Transforme seu site em uma ferramenta de vendas.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">Conte para a GPY o que sua empresa precisa. Vamos planejar uma presença digital profissional, rápida e preparada para gerar oportunidades.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"><MessageCircle size={20} /> Solicitar orçamento pelo WhatsApp</a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloating />
    </div>
  );
}
