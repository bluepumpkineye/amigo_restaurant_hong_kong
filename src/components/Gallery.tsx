import { t, useI18n, L } from "../i18n";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

type Tile = {
  src: string;
  alt: { en: string; zh: string };
  span: string; // grid spans
  caption: { en: string; zh: string };
};

const tiles: Tile[] = [
  {
    src: "/images/hero-interior.jpg",
    alt: {
      en: "The main dining room beneath the chandelier",
      zh: "水晶吊燈下的主餐廳",
    },
    span: "col-span-2 row-span-2 lg:col-span-2 lg:row-span-2",
    caption: { en: "La salle", zh: "主廳" },
  },
  {
    src: "/images/cellar.jpg",
    alt: { en: "The private wine cellar", zh: "私人酒窖" },
    span: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
    caption: { en: "La cave", zh: "酒窖" },
  },
  {
    src: "/images/detail-stilllife.jpg",
    alt: {
      en: "Rose-shaped butter and engraved silver",
      zh: "玫瑰牛油與刻名銀器",
    },
    span: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
    caption: { en: "L'argenterie", zh: "銀器" },
  },
  {
    src: "/images/facade.jpg",
    alt: { en: "The entrance at dusk", zh: "黃昏時分的入口" },
    span: "col-span-1 row-span-1 lg:col-span-1 lg:row-span-1",
    caption: { en: "L'entrée", zh: "門前" },
  },
  {
    src: "/images/dish-bisque.jpg",
    alt: { en: "Lobster bisque, flambéed", zh: "燃焰龍蝦湯" },
    span: "col-span-1 row-span-1 lg:col-span-2 lg:row-span-1",
    caption: { en: "La bisque", zh: "龍蝦湯" },
  },
  {
    src: "/images/dish-crepe.jpg",
    alt: { en: "Crêpes Suzette", zh: "橙酒班戟" },
    span: "col-span-2 row-span-1 lg:col-span-2 lg:row-span-1",
    caption: { en: "Le dessert", zh: "甜品" },
  },
];

export function Gallery() {
  const { lang } = useI18n();

  return (
    <section id="gallery" className="relative bg-ink-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-5 text-gold">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-gold/60" />
              {L(t.gallery.eyebrow, lang)}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-4xl font-light leading-tight tracking-tight text-cream sm:text-6xl">
              {L(t.gallery.title, lang)}
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty font-sans text-base font-light leading-relaxed text-cream/70 sm:text-lg">
              {L(t.gallery.intro, lang)}
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-4">
          {tiles.map((tile, i) => (
            <Reveal
              key={i}
              img
              delay={(i % 3) * 90}
              className={cn("group relative overflow-hidden border border-gold/10", tile.span)}
            >
              <img
                src={tile.src}
                alt={L(tile.alt, lang)}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-5">
                <span className="block font-display text-lg italic text-gold-soft sm:text-xl">
                  {L(tile.caption, lang)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
