import { useEffect, useState } from "react";
import { t, useI18n, L } from "../i18n";
import { contact } from "../data";
import { cn } from "../utils/cn";
import { Reveal } from "./Reveal";

/**
 * Split a string into individually-animating characters.
 * Self-contained (not reliant on the global observer) so it re-animates
 * cleanly when the language — and therefore the character count — changes.
 */
function SplitChars({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [text]);

  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((ch, i) => (
        <span
          key={i}
          className={cn("char", shown && "is-visible")}
          style={{ transitionDelay: `${delay + i * 28}ms` }}
          aria-hidden="true"
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const { lang } = useI18n();
  const headline1 = lang === "en" ? "Classical French dining," : "燭光之下，";
  const headline2 =
    lang === "en" ? "kept by candlelight." : "古典法國菜的半世紀。";

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden"
    >
      {/* Background image with slow drift */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-interior.jpg"
          alt="The candle-lit dining room at Amigo — carved wood, velvet banquettes and a glowing chandelier"
          className="animate-drift h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Legibility gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(21,16,12,0.65)_100%)]" />
      </div>

      {/* Vertical side label (desktop) */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 items-center gap-4 text-gold/70 lg:flex">
        <span className="h-px w-12 bg-gold/40" />
        <span className="eyebrow whitespace-nowrap">
          {lang === "en" ? "Est. 1976 · Happy Valley" : "創於一九七六 · 跑馬地"}
        </span>
      </div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-24">
        <div className="max-w-4xl">
          <p className="reveal eyebrow mb-6 text-gold">
            <span className="mr-3 inline-block h-px w-10 align-middle bg-gold/60" />
            {L(t.hero.eyebrow, lang)}
          </p>

          <h1 className="font-display text-[2.7rem] font-light leading-[1.02] tracking-tight text-cream sm:text-7xl lg:text-[5.6rem]">
            <span className="block">
              <SplitChars text={headline1} className="inline-block" />
            </span>
            <span className="mt-1 block italic text-gold-soft">
              <SplitChars text={headline2} delay={lang === "en" ? 520 : 220} />
            </span>
          </h1>

          <p className="reveal mt-8 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-cream/80 sm:text-lg">
            {L(t.hero.sub, lang)}
          </p>

          <Reveal
            delay={200}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#visit"
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-ink transition-all duration-500 hover:bg-gold-soft"
            >
              {L(t.hero.reserve, lang)}
              <span className="transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 px-8 py-4 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-cream transition-all duration-500 hover:border-gold hover:text-gold"
            >
              {L(t.hero.menu, lang)}
            </a>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#story"
        className="group absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        aria-label={L(t.hero.scroll, lang)}
      >
        <span className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-cream/60 transition-colors group-hover:text-gold">
          {L(t.hero.scroll, lang)}
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/20">
          <span className="animate-[scrollline_2.4s_ease-in-out_infinite] absolute inset-x-0 top-0 h-1/2 bg-gold" />
        </span>
      </a>

      <style>{`@keyframes scrollline{0%{transform:translateY(-100%)}100%{transform:translateY(200%)}}`}</style>

      {/* Reservation phone (hidden visually, available to bots/quickdial) */}
      <span className="sr-only">{contact.phoneDisplay}</span>
    </section>
  );
}
