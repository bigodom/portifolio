import { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import icon from "../assets/logologo_a4.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitora a rolagem para aplicar o efeito de vidro
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#trabalhos" },
    { name: "Sobre", href: "#sobre" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Marca */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center">
            <img src={icon} alt="" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${scrolled ? "text-gray-900" : "text-white"}`}>
            GPY<span className="text-blue-500">Soluções</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                scrolled ? "text-gray-600" : "text-gray-100"
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#contato"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-blue-500/20 flex items-center gap-2 group"
          >
            Consultoria Gratuita
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className={scrolled ? "text-gray-900" : "text-white"} size={28} />
          ) : (
            <Menu className={scrolled ? "text-gray-900" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
              >
                Solicitar Diagnóstico
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
