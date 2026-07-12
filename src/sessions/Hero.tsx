import { ArrowRight, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import backgroundVideo from "../assets/background2.mp4";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5531992218398?text=Ol%C3%A1!%20Gostaria%20de%20entender%20como%20a%20GPY%20pode%20ajudar%20minha%20empresa.";

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Reduza custos e aumente a produtividade com soluções digitais sob medida
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 " data-testid="text-hero-subtitle">
            Elimine processos manuais lentos e tome decisões baseadas em dados com dashboards em tempo real
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-blue-500 hover:-translate-y-0.5"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight size={19} />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <MessageCircle size={19} />
              Conversar no WhatsApp
            </a>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/85">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" />Atendimento consultivo</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" />Solução sob medida</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={16} className="text-blue-400" />Atendimento em todo o Brasil</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/10">
            <div data-testid="stat-roi">
              <div className="text-2xl sm:text-3xl font-bold flex justify-center items-center gap-1">
                <Clock size={20} />
                6 meses
              </div>
              <div className="text-sm uppercase tracking-wider mt-1">Payback Médio</div>
            </div>
            
            <div data-testid="stat-savings">
              <div className="text-2xl sm:text-3xl font-bold">40%</div>
              <div className="text-sm uppercase tracking-wider mt-1">Economia Anual</div>
            </div>

            <div data-testid="stat-projects">
              <div className="text-2xl sm:text-3xl font-bold text-white">10+</div>
              <div className="text-sm uppercase tracking-wider mt-1">Sistemas Ativos</div>
            </div>

            <div data-testid="stat-uptime">
              <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm uppercase tracking-wider mt-1">Disponibilidade</div>
            </div>
          </div>
          <p className="text-xs text-white/60 -mt-4">
            Indicadores observados em projetos selecionados; os resultados variam conforme o cenário de cada empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
