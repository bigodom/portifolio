import { Code2, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white text-primary-foreground" style={{ backgroundColor: "#061b47" }}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-bold" data-testid="text-footer-logo">Maltech</span>
            </div>
            <p className="text-primary-foreground/80" data-testid="text-footer-description">
              Transformando ideias em soluções digitais inovadoras e eficientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-links-title">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("inicio")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-footer-inicio"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("servicos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-footer-servicos"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("trabalhos")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-footer-trabalhos"
                >
                  Trabalhos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("sobre")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="link-footer-sobre"
                >
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-services-title">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li data-testid="text-footer-service-1">Desenvolvimento Web</li>
              <li data-testid="text-footer-service-2">Automação</li>
              <li data-testid="text-footer-service-3">Análise de Dados</li>
              <li data-testid="text-footer-service-4">Dashboards</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-contact-title">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80" data-testid="text-footer-email">
                  contato@maltech.com.br
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80" data-testid="text-footer-phone">
                  (11) 99999-9999
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80" data-testid="text-footer-location">
                  São Paulo, SP
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Maltech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}