import { t, useI18n, L } from "../i18n";
import { contact } from "../data";
import { Logo } from "./Logo";

const explore = [
  { id: "story", key: "story" as const },
  { id: "signatures", key: "signatures" as const },
  { id: "menu", key: "menu" as const },
  { id: "gallery", key: "gallery" as const },
  { id: "reviews", key: "reviews" as const },
];

export function Footer() {
  const { lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink px-5 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-gold/15 pb-16 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-xs text-pretty font-sans text-sm font-light leading-relaxed text-cream/60">
              {L(t.footer.tagline, lang)}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={contact.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-cream/55 transition-colors hover:text-gold"
              >
                Google Maps
              </a>
              <a
                href="https://www.openrice.com/en/hongkong/r-amigo-restaurant-happy-valley-french-r63"
                target="_blank"
                rel="noreferrer"
                className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-cream/55 transition-colors hover:text-gold"
              >
                OpenRice
              </a>
              <a
                href={contact.phoneHref}
                className="font-sans text-[0.68rem] uppercase tracking-[0.2em] text-cream/55 transition-colors hover:text-gold"
              >
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-gold/70">{L(t.footer.explore, lang)}</p>
            <ul className="space-y-3">
              {explore.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="group inline-flex items-center gap-2 font-display text-xl text-cream/80 transition-colors hover:text-gold"
                  >
                    <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-5" />
                    {L(t.nav[l.key], lang)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5 text-gold/70">{L(t.footer.contact, lang)}</p>
            <address className="not-italic font-sans text-sm font-light leading-relaxed text-cream/60">
              {L(t.visit.address, lang)}
            </address>
            <a
              href={contact.phoneHref}
              className="mt-3 block font-display text-2xl text-cream transition-colors hover:text-gold"
            >
              {contact.phoneDisplay}
            </a>
            <div className="mt-5 border-t border-gold/15 pt-4">
              <p className="font-sans text-[0.66rem] uppercase tracking-[0.24em] text-gold/70">
                {L(t.footer.hours, lang)}
              </p>
              <p className="mt-1 font-sans text-sm font-light text-cream/60">
                {L(t.visit.hoursLunch, lang)}
              </p>
              <p className="font-sans text-sm font-light text-cream/60">
                {L(t.visit.hoursDinner, lang)}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-7 sm:flex-row">
          <p className="font-sans text-[0.66rem] uppercase tracking-[0.2em] text-cream/40">
            © {year} Amigo Restaurant · 雅谷餐廳 · {L(t.footer.rights, lang)}
          </p>
          <p className="font-sans text-[0.66rem] uppercase tracking-[0.2em] text-cream/40">
            {L(t.footer.credit, lang)}
          </p>
        </div>
      </div>

      {/* Oversized watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-2 text-center"
      >
        <span className="block font-display text-[19vw] font-light leading-[0.8] tracking-tight text-cream/[0.04]">
          AMIGO
        </span>
      </div>
    </footer>
  );
}
