import { useEffect, useLayoutEffect, useRef, useState, type ComponentType } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Layers3,
  Menu,
  MessageCircle,
  MousePointer2,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import icon from "../assets/logologo_a4.svg";
import HeroDeviceShowcase from "../components/HeroDeviceShowcase";
import WhatsAppFloating from "../components/WhatsAppFloating";
import "./Sites.css";

gsap.registerPlugin(ScrollTrigger);

const whatsappUrl = "https://wa.me/5531992218398?text=Ol%C3%A1!%20Quero%20transformar%20minha%20presen%C3%A7a%20digital%20com%20um%20site%20profissional.";

type Feature = { icon: ComponentType<{ size?: number }>; title: string; text: string; label: string };

const features: Feature[] = [
  { icon: Target, label: "01 · Estratégia", title: "Uma jornada que conduz", text: "Conteúdo, hierarquia e chamadas pensados para transformar atenção em conversa." },
  { icon: Layers3, label: "02 · Experiência", title: "Design com intenção", text: "Uma identidade digital marcante, coerente com a sua marca e fácil de navegar." },
  { icon: Gauge, label: "03 · Performance", title: "Velocidade que retém", text: "Código enxuto e experiência fluida para o cliente não desistir antes de conhecer você." },
  { icon: Search, label: "04 · Visibilidade", title: "Base pronta para SEO", text: "Estrutura semântica e fundamentos técnicos para sua empresa ser encontrada." },
];

const process = [
  ["01", "Imersão", "Entendemos seu negócio, seu cliente e o que precisa acontecer depois de cada visita."],
  ["02", "Direção", "Organizamos mensagem, conteúdo e identidade em uma experiência visual única."],
  ["03", "Construção", "Desenvolvemos, animamos e adaptamos cada detalhe para todas as telas."],
  ["04", "Entrega", "Validamos, publicamos e entregamos uma presença digital pronta para crescer."],
];

export default function Sites() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const canonical = document.querySelector('link[rel="canonical"]');
    const previousDescription = description?.getAttribute("content") ?? "";
    const previousCanonical = canonical?.getAttribute("href") ?? "";

    document.title = "Sites que impressionam e convertem | GPY Soluções";
    description?.setAttribute("content", "Sites profissionais com estratégia, design marcante, alta performance e experiência impecável em desktop e mobile.");
    canonical?.setAttribute("href", "https://gpysolucoes.com.br/desenvolvimento-de-sites");

    return () => {
      document.title = previousTitle;
      description?.setAttribute("content", previousDescription);
      canonical?.setAttribute("href", previousCanonical);
    };
  }, []);

  useLayoutEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const context = gsap.context(() => {
      gsap.from("[data-hero-copy] > *", { y: 42, opacity: 0, duration: 0.9, stagger: 0.11, ease: "power3.out" });
      gsap.from("[data-hero-device]", { y: 70, rotationY: -12, opacity: 0, duration: 1.25, delay: 0.25, ease: "power3.out" });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-feature]").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          rotateX: 8,
          duration: 0.8,
          delay: index * 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: card.parentElement, start: "top 78%", once: true },
        });
      });

      gsap.to("[data-orbit-one]", { yPercent: -25, xPercent: 12, ease: "none", scrollTrigger: { trigger: page, start: "top top", end: "bottom bottom", scrub: 1.2 } });
      gsap.to("[data-orbit-two]", { yPercent: 38, xPercent: -18, ease: "none", scrollTrigger: { trigger: page, start: "top top", end: "bottom bottom", scrub: 1.4 } });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <div className="sites-page" ref={pageRef}>
      <div className="sites-orb sites-orb--one" data-orbit-one aria-hidden="true" />
      <div className="sites-orb sites-orb--two" data-orbit-two aria-hidden="true" />

      <header className="sites-nav">
        <a href="/" className="sites-brand" aria-label="GPY Soluções — página inicial">
          <img src={icon} alt="" />
          <span>GPY <b>Soluções</b></span>
        </a>
        <nav className="sites-nav__links" aria-label="Navegação da página">
          <a href="#entregas">Entregas</a>
          <a href="#case">Case</a>
          <a href="#processo">Processo</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sites-button sites-button--small">Começar projeto <ArrowRight size={16} /></a>
        </nav>
        <button className="sites-menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        {menuOpen && (
          <nav className="sites-mobile-menu" aria-label="Navegação mobile">
            <a href="#entregas" onClick={() => setMenuOpen(false)}>Entregas</a>
            <a href="#case" onClick={() => setMenuOpen(false)}>Case</a>
            <a href="#processo" onClick={() => setMenuOpen(false)}>Processo</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">Começar projeto <ArrowRight size={17} /></a>
          </nav>
        )}
      </header>

      <main>
        <section className="sites-hero">
          <div className="sites-shell sites-hero__grid">
            <div className="sites-hero__copy" data-hero-copy>
              <div className="sites-kicker"><span /> Sites sob medida para marcas ambiciosas</div>
              <h1>Seu próximo cliente vai <em>sentir</em> a diferença.</h1>
              <p>Criamos experiências digitais que prendem a atenção, comunicam valor e fazem sua empresa parecer tão boa quanto ela realmente é.</p>
              <div className="sites-hero__actions">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sites-button">Quero elevar minha marca <ArrowRight size={19} /></a>
                <a href="#case" className="sites-text-link">Explorar uma entrega <ArrowDown size={18} /></a>
              </div>
              <div className="sites-proof">
                <span><Check size={15} /> Design exclusivo</span>
                <span><Check size={15} /> Mobile first</span>
                <span><Check size={15} /> SEO técnico</span>
              </div>
            </div>
            <div data-hero-device className="sites-hero__visual">
              <HeroDeviceShowcase mode="hero" />
            </div>
          </div>
          <div className="sites-scroll-hint"><span /> Role para descobrir</div>
        </section>

        <section className="sites-statement" aria-label="Nossa proposta">
          <div className="sites-marquee" aria-hidden="true">
            <span>ESTRATÉGIA • DESIGN • TECNOLOGIA • RESULTADO • </span>
            <span>ESTRATÉGIA • DESIGN • TECNOLOGIA • RESULTADO • </span>
          </div>
          <div className="sites-shell sites-statement__content" data-reveal>
            <span className="sites-index">01 / O que muda</span>
            <p>Não entregamos apenas páginas.<br />Entregamos <strong>presença, percepção e confiança.</strong></p>
          </div>
        </section>

        <section id="case" className="sites-case">
          <div className="sites-shell sites-case__intro" data-reveal>
            <div>
              <span className="sites-index">02 / Entrega em destaque</span>
              <h2>Um projeto.<br /><em>Duas experiências.</em></h2>
            </div>
            <p>O site Olhar de Rei foi desenhado para ser envolvente no desktop e absolutamente natural no celular — sem perder identidade, clareza ou velocidade.</p>
          </div>

          <div className="sites-shell sites-case__stage" data-reveal>
            <HeroDeviceShowcase mode="responsive" />
            <div className="sites-case__caption sites-case__caption--left"><span>Desktop</span><strong>Imersivo</strong></div>
            <div className="sites-case__caption sites-case__caption--right"><span>Mobile</span><strong>Intuitivo</strong></div>
          </div>

          <div className="sites-shell sites-case__metrics" data-reveal>
            <div><strong>100%</strong><span>Responsivo</span></div>
            <div><strong>SEO</strong><span>Estrutura preparada</span></div>
            <div><strong>UX</strong><span>Jornada objetiva</span></div>
            <div><strong>24/7</strong><span>Sua marca trabalhando</span></div>
          </div>
        </section>

        <section id="entregas" className="sites-deliveries">
          <div className="sites-shell">
            <div className="sites-section-heading" data-reveal>
              <span className="sites-index">03 / O que entregamos</span>
              <h2>Cada detalhe tem<br />um <em>porquê.</em></h2>
              <p>Beleza atrai. Estratégia mantém. Performance converte.</p>
            </div>
            <div className="sites-feature-grid">
              {features.map(({ icon: Icon, label, title, text }) => (
                <article className="sites-feature" data-feature key={title}>
                  <div className="sites-feature__top"><span>{label}</span><Icon size={23} /></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                  <ArrowRight className="sites-feature__arrow" size={22} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sites-performance">
          <div className="sites-shell sites-performance__grid">
            <div className="sites-performance__visual" data-reveal>
              <div className="sites-score-ring"><div><strong>95+</strong><span>Performance</span></div></div>
              <div className="sites-code-card"><Code2 size={19} /><span>Construído para ser rápido</span><i /></div>
              <div className="sites-speed-card"><Zap size={19} /><span>Experiência instantânea</span></div>
            </div>
            <div className="sites-performance__copy" data-reveal>
              <span className="sites-index">04 / Por baixo do design</span>
              <h2>Bonito por fora.<br /><em>Brilhante por dentro.</em></h2>
              <p>O impacto visual só funciona quando a tecnologia acompanha. Por isso, cada entrega nasce preparada para carregar rápido, funcionar bem e evoluir com o seu negócio.</p>
              <ul>
                <li><Gauge size={20} /> Performance e carregamento otimizado</li>
                <li><ShieldCheck size={20} /> Tecnologia moderna e confiável</li>
                <li><MousePointer2 size={20} /> Interações que orientam sem distrair</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="processo" className="sites-process">
          <div className="sites-shell">
            <div className="sites-section-heading sites-section-heading--horizontal" data-reveal>
              <div><span className="sites-index">05 / Processo</span><h2>Da primeira ideia<br />ao primeiro <em>clique.</em></h2></div>
              <p>Você acompanha cada decisão. Nós cuidamos da complexidade.</p>
            </div>
            <div className="sites-process__list">
              {process.map(([number, title, text]) => (
                <article key={number} data-reveal>
                  <span>{number}</span><h3>{title}</h3><p>{text}</p><div className="sites-process__line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sites-cta">
          <div className="sites-shell sites-cta__inner" data-reveal>
            <Sparkles className="sites-cta__spark" size={34} />
            <span className="sites-index">Seu próximo passo</span>
            <h2>Vamos criar algo que<br /><em>ninguém esquece?</em></h2>
            <p>Conte sua ideia. A GPY transforma em uma experiência digital à altura da sua marca.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="sites-button sites-button--light"><MessageCircle size={20} /> Conversar sobre meu projeto</a>
          </div>
        </section>
      </main>

      <footer className="sites-footer">
        <div className="sites-shell sites-footer__inner">
          <a href="/" className="sites-brand"><img src={icon} alt="" /><span>GPY <b>Soluções</b></span></a>
          <p>Estratégia, design e tecnologia para marcas que querem ser lembradas.</p>
          <div><a href="mailto:gpysolucoes@gmail.com">gpysolucoes@gmail.com</a><span>© {new Date().getFullYear()} GPY Soluções</span></div>
        </div>
      </footer>

      <WhatsAppFloating />
    </div>
  );
}
