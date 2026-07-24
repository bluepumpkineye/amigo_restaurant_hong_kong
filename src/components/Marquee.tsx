import { t, useI18n } from "../i18n";

/** A slow editorial ticker — old-world details, set in brass on oxblood. */
export function Marquee() {
  useI18n(); // re-render on language change
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-oxblood-deep py-4">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-7 font-display text-lg italic tracking-wide text-gold-soft/90">
              {item}
            </span>
            <span className="text-gold/40" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-oxblood-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-oxblood-deep to-transparent" />
    </div>
  );
}
