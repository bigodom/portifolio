import { Clock } from "lucide-react";
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
            <div data-testid="stat-roi">
              <div className="text-3xl font-bold flex justify-center items-center gap-1">
                <Clock size={20} />
                6 meses
              </div>
              <div className="text-sm uppercase tracking-wider mt-1">Payback Médio</div>
            </div>
            
            <div data-testid="stat-savings">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm uppercase tracking-wider mt-1">Economia Anual</div>
            </div>

            <div data-testid="stat-projects">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm uppercase tracking-wider mt-1">Sistemas Ativos</div>
            </div>

            <div data-testid="stat-uptime">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm uppercase tracking-wider mt-1">Disponibilidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}