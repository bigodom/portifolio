import backgroundVideo from "../assets/background2.mp4";

export default function Hero() {

  return (
    <section
      id="inicio"
      className="relative min-h-[100vh] pt-16 flex items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>

      {/* Camada escura opcional para contraste */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Reduza custos e aumente a produtividade com soluções digitais sob medida
          </h1>

          <p className="text-2xl md:text-2xl mb-8 " data-testid="text-hero-subtitle">
            Elimine processos manuais lentos e tome decisões baseadas em dados com dashboards em tempo real
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-projects">
              <div className="text-3xl font-bold text-blue-100">10+</div>
              <div className="text-xl">Projetos Entregues</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-3xl font-bold text-ring">5+</div>
              <div className="text-xl">Clientes Satisfeitos</div>
            </div>
            <div data-testid="stat-years">
              <div className="text-3xl font-bold text-ring">3+</div>
              <div className="text-xl">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}