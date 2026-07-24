import { t, useI18n, L } from "../i18n";
import { Reveal } from "./Reveal";

export function Heritage() {
  const { lang } = useI18n();

  return (
    <section id="story" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow mb-5 text-gold">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-gold/60" />
                {L(t.heritage.eyebrow, lang)}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl font-light leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
                {L(t.heritage.title, lang)}
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-cream/75 sm:text-lg">
                {L(t.heritage.p1, lang)}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-cream/75 sm:text-lg">
                {L(t.heritage.p2, lang)}
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal img className="relative">
              <div className="relative overflow-hidden border border-gold/20">
                <img
                  src="/images/detail-stilllife.jpg"
                  alt="A still-life of the Amigo table: rose-shaped butter, engraved silver, a glass of Bordeaux and a lit candle"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
              {/* floating caption card */}
              <div className="absolute -bottom-5 -left-3 hidden border border-gold/30 bg-ink/90 px-6 py-4 backdrop-blur-sm sm:block">
                <p className="font-display text-lg italic text-gold-soft">La table d'Amigo</p>
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-cream/60">
                  {lang === "en" ? "Engraved silver, sculpted butter" : "刻名銀器 · 玫瑰牛油"}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border border-gold/15 bg-gold/15 lg:grid-cols-4">
          {t.heritage.stats.map((stat, i) => (
            <Reveal
              key={i}
              delay={i * 90}
              className="bg-ink px-6 py-10 text-center"
            >
              <p className="font-display text-4xl font-light text-gold sm:text-5xl">
                {stat.value}
                {"star" in stat && stat.star ? (
                  <span className="ml-1 text-2xl text-gold-soft">★</span>
                ) : null}
              </p>
              <p className="mx-auto mt-3 max-w-[12rem] font-sans text-[0.7rem] uppercase leading-relaxed tracking-[0.2em] text-cream/60">
                {L(stat.label, lang)}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Pull quote band */}
      <Reveal className="mx-auto mt-24 max-w-4xl px-4 text-center">
        <span className="font-display text-7xl leading-none text-gold/30" aria-hidden="true">
          “
        </span>
        <blockquote className="-mt-6 font-display text-2xl font-light italic leading-snug text-cream sm:text-4xl">
          {L(t.heritage.quote.text, lang)}
        </blockquote>
        <p className="mt-6 font-sans text-[0.7rem] uppercase tracking-[0.3em] text-gold">
          — {t.heritage.quote.source}
        </p>
      </Reveal>
    </section>
  );
}
