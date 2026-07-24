import { t, useI18n, L } from "../i18n";
import { menu, contact } from "../data";
import { Reveal } from "./Reveal";

function Tag({ kind }: { kind: "signature" | "seasonal" }) {
  const label = kind === "signature" ? t.menu.signature : t.menu.seasonal;
  const { lang } = useI18n();
  return (
    <span className="whitespace-nowrap border border-gold/40 px-2 py-0.5 align-middle font-sans text-[0.55rem] uppercase tracking-[0.18em] text-gold-soft">
      {L(label, lang)}
    </span>
  );
}

export function Menu() {
  const { lang } = useI18n();
  const sets = menu.find((s) => s.id === "sets")!;
  const rest = menu.filter((s) => s.id !== "sets");

  return (
    <section id="menu" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      {/* faint gold corner ornament */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">
              {L(t.menu.eyebrow, lang)}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-5xl font-light tracking-tight text-cream sm:text-7xl">
              {L(t.menu.title, lang)}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-4">
              <span className="h-px w-12 bg-gold/40" />
              <span className="text-gold/60">✦</span>
              <span className="h-px w-12 bg-gold/40" />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty font-sans text-base font-light leading-relaxed text-cream/70">
              {L(t.menu.intro, lang)}
            </p>
          </Reveal>
        </div>

        {/* Set menus highlight */}
        <Reveal className="mt-16">
          <div className="border border-gold/25 bg-gradient-to-br from-oxblood-deep/60 to-ink p-8 sm:p-12">
            <h3 className="font-display text-3xl font-light text-gold-soft sm:text-4xl">
              {L(sets.title, lang)}
            </h3>
            {sets.subtitle && (
              <p className="mt-2 max-w-xl font-sans text-sm font-light leading-relaxed text-cream/60">
                {L(sets.subtitle, lang)}
              </p>
            )}
            <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-12">
              {sets.items.map((item) => (
                <div key={L(item.name, "en")} className="border-t border-gold/15 pt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="font-display text-2xl text-cream">
                      {L(item.name, lang)}
                    </h4>
                    {item.price && (
                      <span className="shrink-0 font-display text-2xl text-gold">
                        {item.price}
                      </span>
                    )}
                  </div>
                  {item.desc && (
                    <p className="mt-2 font-sans text-sm font-light leading-relaxed text-cream/60">
                      {L(item.desc, lang)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* À la carte — balanced columns */}
        <div className="mt-16 [column-count:1] gap-x-16 md:[column-count:2] [column-gap:4rem]">
          {rest.map((section, idx) => (
            <div
              key={section.id}
              className="mb-14 break-inside-avoid"
              style={{ marginTop: idx === 0 ? 0 : undefined }}
            >
              <Reveal>
                <h3 className="font-display text-3xl font-light text-gold-soft sm:text-4xl">
                  {L(section.title, lang)}
                </h3>
                <div className="mt-3 mb-7 h-px w-16 bg-gold/40" />
              </Reveal>

              <div className="space-y-6">
                {section.items.map((item, i) => (
                  <Reveal key={L(item.name, "en")} delay={i * 50}>
                    <div className="group">
                      <div className="flex items-baseline gap-3">
                        <h4 className="font-display text-xl leading-snug text-cream transition-colors group-hover:text-gold-soft">
                          {L(item.name, lang)}
                        </h4>
                        {item.tags?.map((tag) => (
                          <Tag key={tag} kind={tag} />
                        ))}
                        {item.price && (
                          <>
                            <span className="h-px flex-1 -translate-y-1 border-b border-dotted border-gold/25" />
                            <span className="shrink-0 font-sans text-sm tracking-wide text-gold/90">
                              {item.price}
                            </span>
                          </>
                        )}
                      </div>
                      {item.desc && (
                        <p className="mt-1.5 max-w-md font-sans text-[0.82rem] font-light leading-relaxed text-cream/50">
                          {L(item.desc, lang)}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote + CTA */}
        <Reveal className="mt-16 border-t border-gold/15 pt-10 text-center">
          <p className="mx-auto max-w-2xl font-sans text-[0.78rem] font-light leading-relaxed text-cream/45">
            {lang === "en"
              ? "Menu indicative. A 10% service charge applies. Daily specials, the oyster selection and seasonal tasting menus change regularly — please ask your server or call ahead."
              : "餐牌僅供參考。設10%服務費。每日特選、生蠔精選及時令嚐味菜單不時更新——歡迎向侍應查詢或致電預訂。"}
          </p>
          <a
            href="#visit"
            className="group mt-8 inline-flex items-center gap-3 bg-gold px-8 py-4 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-ink transition-all duration-500 hover:bg-gold-soft"
          >
            {L(t.menu.cta, lang)}
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href={contact.phoneHref}
            className="mt-6 block font-display text-2xl text-cream/70 transition-colors hover:text-gold"
          >
            {contact.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
