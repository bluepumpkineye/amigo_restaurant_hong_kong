import { useEffect, useState } from "react";
import { I18nProvider, useI18n, L } from "./i18n";
import { useScrollReveal, useParallax } from "./hooks";
import { cn } from "./utils/cn";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Heritage } from "./components/Heritage";
import { Signatures } from "./components/Signatures";
import { Menu } from "./components/Menu";
import { Gallery } from "./components/Gallery";
import { Reviews } from "./components/Reviews";
import { Reserve } from "./components/Reserve";
import { Footer } from "./components/Footer";

function FloatingReserve() {
  const { lang } = useI18n();
  const [hidden, setHidden] = useState(false);

  // Hide the floating CTA once the reservation section is on screen.
  useEffect(() => {
    const el = document.getElementById("visit");
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting), {
      threshold: 0.12,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href="#visit"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={cn(
        "fixed bottom-5 left-1/2 z-40 -translate-x-1/2 bg-gold px-7 py-3 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-ink shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-[1.03] sm:hidden",
        hidden ? "pointer-events-none translate-y-24 opacity-0" : "opacity-100"
      )}
    >
      {L({ en: "Reserve a Table", zh: "預約訂座" }, lang)}
    </a>
  );
}

function Site() {
  useScrollReveal();
  useParallax();

  return (
    <>
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Heritage />
        <Signatures />
        <Menu />
        <Gallery />
        <Reviews />
        <Reserve />
      </main>

      <Footer />
      <FloatingReserve />
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <Site />
    </I18nProvider>
  );
}
