import { useState } from "react";
import { t, useI18n, L } from "../i18n";
import { contact } from "../data";
import { useScrollLock, useScrolled } from "../hooks";
import { Logo } from "./Logo";
import { cn } from "../utils/cn";

const links = [
  { id: "story", key: "story" as const },
  { id: "signatures", key: "signatures" as const },
  { id: "menu", key: "menu" as const },
  { id: "gallery", key: "gallery" as const },
  { id: "reviews", key: "reviews" as const },
  { id: "visit", key: "visit" as const },
];

export function Nav() {
  const { lang, toggle } = useI18n();
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-ink/90 backdrop-blur-md border-b border-gold/15 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="group relative font-sans text-[0.82rem] uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-cream"
            >
              {L(t.nav[l.key], lang)}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 font-sans text-[0.72rem] uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-gold"
            aria-label={L(t.nav.langLabel, lang)}
          >
            <span className={lang === "en" ? "text-cream" : ""}>EN</span>
            <span className="text-gold/50">/</span>
            <span className={cn("font-cn", lang === "zh" ? "text-cream" : "")}>繁</span>
          </button>

          <a
            href="#visit"
            className="hidden items-center border border-gold/60 px-5 py-2.5 font-sans text-[0.72rem] uppercase tracking-[0.24em] text-gold transition-all duration-500 hover:bg-gold hover:text-ink sm:inline-flex"
          >
            {L(t.nav.reserve, lang)}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-9 w-9 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={open ? L(t.nav.close, lang) : L(t.nav.menuToggle, lang)}
            aria-expanded={open}
          >
            <span
              className={cn(
                "h-px w-6 bg-cream transition-all duration-300",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-cream transition-all duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-cream transition-all duration-300",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-ink/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex flex-1 flex-col justify-center gap-1 px-8">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={cn(
                "border-b border-gold/10 py-5 font-display text-4xl text-cream transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
              )}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="mr-4 align-middle font-sans text-xs tracking-[0.3em] text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {L(t.nav[l.key], lang)}
            </a>
          ))}
        </div>
        <div className="px-8 pb-12">
          <a
            href="#visit"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center bg-gold px-6 py-4 font-sans text-sm uppercase tracking-[0.24em] text-ink"
          >
            {L(t.hero.reserve, lang)}
          </a>
          <a
            href={contact.phoneHref}
            className="mt-4 block text-center font-display text-2xl text-cream/80"
          >
            {contact.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
