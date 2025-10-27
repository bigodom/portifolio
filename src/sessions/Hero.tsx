import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Transformamos suas ideias em{" "}
            <span className="text-ring">soluções digitais</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90" data-testid="text-hero-subtitle">
            Desenvolvimento de sites, automação, análise de dados e dashboards profissionais 
            para empresas que buscam inovação e eficiência.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-background/10 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              onClick={() => scrollToSection("trabalhos")}
              data-testid="button-trabalhos"
            >
              Ver Nossos Trabalhos
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button 
              className="bg-background/10 border-white/20 text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              onClick={() => scrollToSection("contato")}
              data-testid="button-contato"
            >
              Fale Conosco
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div data-testid="stat-projects">
              <div className="text-3xl font-bold text-ring">50+</div>
              <div className="text-primary-foreground/80">Projetos Entregues</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-3xl font-bold text-ring">30+</div>
              <div className="text-primary-foreground/80">Clientes Satisfeitos</div>
            </div>
            <div data-testid="stat-years">
              <div className="text-3xl font-bold text-ring">5+</div>
              <div className="text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}