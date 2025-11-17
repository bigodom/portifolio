import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b text-blue-950 bg-white/80 border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={icon} alt="GPY" className="h-8 w-8 mr-3 object-contain" />
            <span className="text-2xl font-bold text-primary" data-testid="text-logo">
              GPY SOLUÇÕES
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-blue-600 transition-colors cursor-pointer relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-inicio"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-blue-600 transition-colors cursor-pointer relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-servicos"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("trabalhos")}
              className="text-foreground hover:text-blue-600 transition-colors cursor-pointer relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-trabalhos"
            >
              Trabalhos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-blue-600 transition-colors cursor-pointer relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-sobre"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-blue-600 transition-colors cursor-pointer relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-contato"
            >
              Contato
            </button>
            {/*
            <Link
              to="/blog"
              className="text-foreground disabled hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-blog"
              
            >
              Blog
            </Link>
            */}
          </nav>

          {/* CTA Button and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection("contato")}
              data-testid="button-cta"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden fixed inset-x-0 top-16 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`} 
          data-testid="menu-mobile"
        >
            <nav className="py-4 space-y-4 px-4 border-t bg-white/90 backdrop-blur-2xl border-gray-200">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-inicio-mobile"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-servicos-mobile"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("trabalhos")}
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-trabalhos-mobile"
              >
                Trabalhos
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-sobre-mobile"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-contato-mobile"
              >
                Contato
              </button>
              <Link
                to="/blog"
                className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
                data-testid="link-blog-mobile"
              >
                Blog
              </Link>
              <button 
                className="w-full mt-4"
                onClick={() => scrollToSection("contato")}
                data-testid="button-cta-mobile"
              >
                Solicitar Orçamento
              </button>
            </nav>
        </div>
      </div>
    </header>
  );
}