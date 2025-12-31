import { Mail, Phone, MapPin } from "lucide-react";
import icon from "../assets/logo_impressao_leve.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white text-primary-foreground bg-gradient-to-br from-[#061b47] to-[#0a2a5c] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2">
              <img src={icon} alt="GPY" className="h-8 w-8 mr-3 object-contain" />
              <span className="text-xl font-bold" data-testid="text-footer-logo">GPY Soluções</span>
            </div>
            <p className="text-primary-foreground/80 text-sm sm:text-base" data-testid="text-footer-description">
              Transformando ideias em soluções digitais inovadoras e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg" data-testid="text-footer-links-title">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm sm:text-base"
                  data-testid="link-footer-inicio"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm sm:text-base"
                  data-testid="link-footer-servicos"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("trabalhos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm sm:text-base"
                  data-testid="link-footer-trabalhos"
                >
                  Trabalhos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer text-sm sm:text-base"
                  data-testid="link-footer-sobre"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg" data-testid="text-footer-services-title">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80 text-sm sm:text-base">
              <li data-testid="text-footer-service-1">Desenvolvimento Web</li>
              <li data-testid="text-footer-service-2">Automação</li>
              <li data-testid="text-footer-service-3">Análise de Dados</li>
              <li data-testid="text-footer-service-4">Dashboards</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-base sm:text-lg" data-testid="text-footer-contact-title">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:gpysolucoes@gmail.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                  data-testid="text-footer-email"
                >
                  gpysolucoes@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="tel:+5531992218398" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                  data-testid="text-footer-phone"
                >
                  (31) 99221-8398
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/?q=João Monlevade, MG" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
                  data-testid="text-footer-location"
                >
                  João Monlevade, MG
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-400/50 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} GPY. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}