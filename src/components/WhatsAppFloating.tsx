import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/5531992218398?text=Ol%C3%A1!%20Conheci%20a%20GPY%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20para%20minha%20empresa.";

export default function WhatsAppFloating() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com a GPY pelo WhatsApp"
      title="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_8px_30px_rgba(34,197,94,0.4)] transition hover:-translate-y-1 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 sm:h-auto sm:w-auto sm:gap-2 sm:px-5 sm:py-4"
    >
      <MessageCircle size={26} aria-hidden="true" />
      <span className="hidden font-bold sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
