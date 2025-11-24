import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export default function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
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
              <Link to="/" className="hover:text-blue-600 transition-colors">
                GPY BLOG
              </Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/blog"
              className="text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-blog-posts"
            >
              Blog
            </Link>

            <a
              href="https://gpysolucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 flex items-center gap-1"
              data-testid="link-site"
            >
              Site
              <ExternalLink size={16} />
            </a>

            <button
              onClick={scrollToFooter}
              className="text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-footer"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://gpysolucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-cta-blog"
            >
              Voltar ao Site
            </a>
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
            <Link
              to="/blog"
              className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-blog-posts-mobile"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <a
              href="https://gpysolucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 flex items-center gap-1"
              data-testid="link-site-mobile"
            >
              Site
              <ExternalLink size={16} />
            </a>

            <button
              onClick={scrollToFooter}
              className="block w-full text-left text-foreground hover:text-blue-600 transition-colors relative after:content-[''] after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              data-testid="link-footer-mobile"
            >
              Contato
            </button>

            <a
              href="https://gpysolucoes.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex"
              data-testid="button-cta-mobile-blog"
            >
              Voltar ao Site
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
