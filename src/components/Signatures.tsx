import { t, useI18n, L, type Localized } from "../i18n";
import { signatures } from "../data";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const sigTag: Record<string, Localized> = {
  bisque: { en: "Soupe", zh: "湯品" },
  beef: { en: "Plat principal", zh: "主菜" },
  foie: { en: "Entrée", zh: "頭盤" },
  crepe: { en: "Dessert", zh: "甜品" },
};

export function Signatures() {
  const { lang } = useI18n();

  return (
    <section
      id="signatures"
      className="relative bg-parchment px-5 py-24 text-ink sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-5 text-oxblood">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-oxblood/50" />
              {L(t.signatures.eyebrow, lang)}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ink sm:text-6xl">
              {L(t.signatures.title, lang)}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-ink/70 sm:text-lg">
              {L(t.signatures.intro, lang)}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col gap-20 sm:gap-28">
          {signatures.map((dish, i) => {
            const flip = i % 2 === 1;
            return (
              <div
                key={dish.id}
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
              >
                {/* Image */}
                <Reveal
                  img
                  className={cn(
                    "lg:col-span-7",
                    flip && "lg:order-2"
                  )}
                >
                  <div className="group relative overflow-hidden border border-ink/10 shadow-[0_30px_60px_-30px_rgba(21,16,12,0.5)]">
                    <img
                      src={dish.image}
                      alt={L(dish.name, lang)}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  </div>
                </Reveal>

                {/* Text */}
                <div
                  className={cn(
                    "lg:col-span-5",
                    flip && "lg:order-1 lg:pr-4",
                    !flip && "lg:pl-4"
                  )}
                >
                  <Reveal delay={120}>
                    <span className="font-display text-6xl italic text-oxblood/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="-mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                      {L(dish.name, lang)}
                    </h3>
                    <p className="mt-2 font-sans text-[0.66rem] uppercase tracking-[0.28em] text-oxblood">
                      {L(sigTag[dish.id], lang)}
                    </p>
                    <div className="rule mt-6 w-24 opacity-60" />
                    <p className="mt-6 text-pretty font-sans text-base font-light leading-relaxed text-ink/70 sm:text-lg">
                      {L(dish.desc, lang)}
                    </p>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-20 text-center">
          <a
            href="#menu"
            className="group inline-flex items-center gap-3 border-b border-oxblood/40 pb-2 font-sans text-[0.78rem] uppercase tracking-[0.24em] text-oxblood transition-colors hover:border-oxblood"
          >
            {L(t.menu.title, lang)}
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
