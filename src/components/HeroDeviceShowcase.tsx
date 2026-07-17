import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gauge, MessageCircle, Search, Smartphone } from "lucide-react";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import mobilePreview from "../assets/prints/olharderei_mobile.png";
import notebookSite from "../assets/models/notebook-site.png";

gsap.registerPlugin(ScrollTrigger);

interface HeroDeviceShowcaseProps { mode?: "hero" | "responsive"; }

export default function HeroDeviceShowcase({ mode = "hero" }: HeroDeviceShowcaseProps) {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const showcase = showcaseRef.current;
    const laptop = laptopRef.current;
    if (!showcase || !laptop) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const context = gsap.context(() => {
      if (mode === "responsive") {
        gsap.fromTo(laptop, { xPercent: 16, rotationY: -12, scale: 0.88 }, {
          xPercent: -8, rotationY: 4, scale: 1, ease: "none",
          scrollTrigger: { trigger: showcase, start: "top 92%", end: "center 48%", scrub: 1 },
        });
        if (phoneRef.current) {
          gsap.fromTo(phoneRef.current, { xPercent: -75, yPercent: 25, rotation: -12, scale: 0.72, opacity: 0 }, {
            xPercent: 0, yPercent: 0, rotation: 3, scale: 1, opacity: 1, ease: "power2.out",
            scrollTrigger: { trigger: showcase, start: "top 82%", end: "center 53%", scrub: 0.8 },
          });
        }
      }

      const rotateX = gsap.quickTo(laptop, "rotationX", { duration: 0.7, ease: "power3.out" });
      const rotateY = gsap.quickTo(laptop, "rotationY", { duration: 0.7, ease: "power3.out" });
      const move = (event: PointerEvent) => {
        const bounds = showcase.getBoundingClientRect();
        rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 7);
        rotateX(-((event.clientY - bounds.top) / bounds.height - 0.5) * 5);
      };
      const leave = () => { rotateX(0); rotateY(mode === "responsive" ? 4 : 0); };
      showcase.addEventListener("pointermove", move);
      showcase.addEventListener("pointerleave", leave);
      return () => {
        showcase.removeEventListener("pointermove", move);
        showcase.removeEventListener("pointerleave", leave);
      };
    }, showcase);

    return () => context.revert();
  }, [mode]);

  const responsive = mode === "responsive";

  return (
    <div ref={showcaseRef} className={`device-stage ${responsive ? "device-stage--responsive" : "device-stage--hero"}`} aria-label="MacBook e iPhone exibindo o site Olhar de Rei desenvolvido pela GPY Soluções">
      <div className="device-stage__halo" />
      <div className="device-stage__grid" />
      <div ref={laptopRef} className="macbook-image" data-device-laptop>
        <img src={notebookSite} alt="Notebook exibindo a versão desktop do site Olhar de Rei" loading="eager" />
      </div>

      {responsive && (
        <div ref={phoneRef} className="iphone">
          <div className="iphone__button iphone__button--one" /><div className="iphone__button iphone__button--two" />
          <div className="iphone__island" />
          <div className="iphone__screen"><img src={mobilePreview} alt="Versão mobile do site Olhar de Rei" loading="lazy" /></div>
          <div className="iphone__home" />
        </div>
      )}

      {!responsive && (
        <>
          <FloatingBadge className="device-badge--one" icon={<Search size={16} />} label="SEO preparado" />
          <FloatingBadge className="device-badge--two" icon={<MessageCircle size={16} />} label="Foco em conversão" />
          <FloatingBadge className="device-badge--three" icon={<Gauge size={16} />} label="Alta performance" />
          <FloatingBadge className="device-badge--four" icon={<Smartphone size={16} />} label="Mobile first" />
        </>
      )}
    </div>
  );
}

function FloatingBadge({ className, icon, label }: { className: string; icon: ReactNode; label: string }) {
  return <div className={`device-badge ${className}`}><span>{icon}</span>{label}</div>;
}
