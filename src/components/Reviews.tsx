import { t, useI18n, L } from "../i18n";
import { reviews } from "../data";
import { Reveal } from "./Reveal";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  const pct = (rating / 5) * 100;
  return (
    <span
      className={`relative inline-block leading-none ${className}`}
      aria-label={`${rating} out of 5 stars`}
    >
      <span className="text-gold/25" aria-hidden="true">
        ★★★★★
      </span>
      <span
        className="absolute inset-0 overflow-hidden whitespace-nowrap text-gold"
        style={{ width: `${pct}%` }}
        aria-hidden="true"
      >
        ★★★★★
      </span>
    </span>
  );
}

export function Reviews() {
  const { lang } = useI18n();

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-oxblood-deep px-5 py-24 sm:px-8 sm:py-32"
    >
      {/* warm glow */}
      <div className="pointer-events-none absolute -top-1/4 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-oxblood/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5 text-gold-soft">
                <span className="mr-3 inline-block h-px w-8 align-middle bg-gold-soft/50" />
                {L(t.reviews.eyebrow, lang)}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-6xl">
                {L(t.reviews.title, lang)}
              </h2>
            </Reveal>
          </div>

          {/* Aggregate */}
          <Reveal delay={160} className="shrink-0">
            <div className="flex items-center gap-5 border border-gold/25 bg-ink/30 px-7 py-6 backdrop-blur-sm">
              <span className="font-display text-6xl font-light text-gold-soft">
                {t.reviews.aggregateRating}
              </span>
              <div>
                <Stars rating={4.5} className="text-lg" />
                <p className="mt-2 max-w-[12rem] font-sans text-[0.66rem] uppercase leading-relaxed tracking-[0.2em] text-cream/65">
                  {L(t.reviews.aggregateText, lang)}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal
              key={i}
              delay={(i % 3) * 90}
              className="flex flex-col border border-gold/15 bg-ink/25 p-7 backdrop-blur-sm transition-colors duration-500 hover:border-gold/40 sm:p-8"
            >
              <Stars rating={review.rating} className="text-base" />
              <blockquote className="mt-5 flex-1 font-display text-xl font-light italic leading-relaxed text-cream/90">
                “{L(review.quote, lang)}”
              </blockquote>
              <figcaption className="mt-6 border-t border-gold/15 pt-4 font-sans text-[0.66rem] uppercase tracking-[0.22em] text-gold-soft/90">
                {review.source}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
