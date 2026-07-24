import { useState, type FormEvent } from "react";
import { t, useI18n, L } from "../i18n";
import { contact } from "../data";
import { Reveal } from "./Reveal";
import { cn } from "../utils/cn";

const times = [
  "12:00", "12:30", "13:00", "13:30", "14:00",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00",
];
const party = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10+"];

type FormState = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

const empty: FormState = {
  name: "", phone: "", date: "", time: "", guests: "2", occasion: "Dinner", notes: "",
};

export function Reserve() {
  const { lang } = useI18n();
  const [form, setForm] = useState<FormState>(empty);
  const [error, setError] = useState(false);
  const [built, setBuilt] = useState<{ wa: string; mail: string } | null>(null);

  const today = new Date().toISOString().split("T")[0];

  const set = (k: keyof FormState, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const buildMessage = () => {
    const occ = t.reserve.occasionOpts.find((o) => o.en === form.occasion);
    const occLabel = occ ? L(occ, lang) : form.occasion;
    const lines = [
      `${lang === "en" ? "Amigo — Reservation Request" : "雅谷 — 預約訂座"}`,
      "—————————————",
      `${L(t.reserve.name, lang)}: ${form.name}`,
      `${L(t.reserve.phone, lang)}: ${form.phone}`,
      `${L(t.reserve.date, lang)}: ${form.date}`,
      `${L(t.reserve.time, lang)}: ${form.time}`,
      `${L(t.reserve.party, lang)}: ${form.guests}`,
      `${L(t.reserve.occasion, lang)}: ${occLabel}`,
      form.notes ? `${L(t.reserve.notes, lang)}: ${form.notes}` : "",
    ].filter(Boolean);
    return lines.join("\n");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date || !form.time) {
      setError(true);
      return;
    }
    setError(false);
    const msg = buildMessage();
    setBuilt({
      wa: `${contact.whatsappHref}?text=${encodeURIComponent(msg)}`,
      mail: `${contact.emailHref}?subject=${encodeURIComponent(
        lang === "en" ? "Reservation Request — Amigo" : "預約訂座 — 雅谷"
      )}&body=${encodeURIComponent(msg)}`,
    });
  };

  const inputBase =
    "peer w-full border-b border-gold/30 bg-transparent py-3 font-sans text-base text-cream placeholder-transparent transition-colors focus:border-gold focus:outline-none [color-scheme:dark]";

  return (
    <section id="visit" className="relative bg-parchment px-5 py-24 text-ink sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left — info */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5 text-oxblood">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-oxblood/50" />
              {L(t.visit.eyebrow, lang)}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-5xl font-light leading-[1.02] tracking-tight text-ink sm:text-6xl">
              {L(t.visit.title, lang)}
            </h2>
          </Reveal>

          <Reveal delay={140} className="mt-6 overflow-hidden border border-ink/10">
            <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="group block">
              <img
                src="/images/facade.jpg"
                alt={lang === "en" ? "The Amigo entrance on Wong Nai Chung Road" : "黃泥涌道上的雅谷入口"}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
            </a>
          </Reveal>

          <div className="mt-10 space-y-7">
            <Reveal delay={120} className="border-t border-ink/10 pt-5">
              <p className="font-sans text-[0.66rem] uppercase tracking-[0.28em] text-oxblood">
                {L(t.visit.addressLabel, lang)}
              </p>
              <a href={contact.mapsHref} target="_blank" rel="noreferrer" className="mt-2 block font-display text-2xl leading-snug text-ink transition-colors hover:text-oxblood">
                {L(t.visit.address, lang)}
              </a>
              <span className="mt-2 inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-ink/55">
                <span className="text-oxblood">→</span> {L(t.visit.directions, lang)}
              </span>
            </Reveal>

            <Reveal delay={160} className="border-t border-ink/10 pt-5">
              <p className="font-sans text-[0.66rem] uppercase tracking-[0.28em] text-oxblood">
                {L(t.visit.hoursLabel, lang)}
              </p>
              <p className="mt-2 font-display text-xl text-ink">{L(t.visit.hoursLunch, lang)}</p>
              <p className="font-display text-xl text-ink">{L(t.visit.hoursDinner, lang)}</p>
            </Reveal>

            <Reveal delay={200} className="border-t border-ink/10 pt-5">
              <p className="font-sans text-[0.66rem] uppercase tracking-[0.28em] text-oxblood">
                {L(t.visit.phoneLabel, lang)}
              </p>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                <a href={contact.phoneHref} className="font-display text-2xl text-ink transition-colors hover:text-oxblood">
                  {contact.phoneDisplay}
                </a>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer" className="self-center font-sans text-sm uppercase tracking-[0.18em] text-ink/60 transition-colors hover:text-oxblood">
                  {L(t.visit.whatsapp, lang)}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Right — form card */}
        <Reveal delay={120}>
          <div className="border border-gold/30 bg-ink p-7 text-cream shadow-[0_40px_80px_-40px_rgba(21,16,12,0.6)] sm:p-10">
            <p className="eyebrow mb-3 text-gold">{L(t.reserve.eyebrow, lang)}</p>
            <h3 className="font-display text-3xl font-light text-cream sm:text-4xl">
              {L(t.reserve.title, lang)}
            </h3>
            <p className="mt-3 max-w-md font-sans text-sm font-light leading-relaxed text-cream/65">
              {L(t.reserve.intro, lang)}
            </p>

            {built ? (
              <div className="mt-8 border-t border-gold/20 pt-7">
                <p className="font-display text-2xl italic text-gold-soft">
                  {L(t.reserve.successTitle, lang)}
                </p>
                <p className="mt-3 font-sans text-sm font-light leading-relaxed text-cream/70">
                  {L(t.reserve.successBody, lang)}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={built.wa}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-gold px-6 py-4 font-sans text-[0.76rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft"
                  >
                    {L(t.reserve.whatsappSend, lang)} →
                  </a>
                  <a
                    href={built.mail}
                    className="inline-flex items-center justify-center gap-3 border border-cream/25 px-6 py-4 font-sans text-[0.76rem] uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold"
                  >
                    {L(t.reserve.submitEmail, lang)}
                  </a>
                  <button
                    onClick={() => setBuilt(null)}
                    className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-cream/50 transition-colors hover:text-gold"
                  >
                    ← {L(t.reserve.successAgain, lang)}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={L(t.reserve.name, lang)}>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className={inputBase}
                      autoComplete="name"
                    />
                  </Field>
                  <Field label={L(t.reserve.phone, lang)}>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className={inputBase}
                      autoComplete="tel"
                      placeholder="+852"
                    />
                  </Field>
                </div>

                <div className="grid gap-6 sm:grid-cols-3">
                  <Field label={L(t.reserve.date, lang)}>
                    <input
                      type="date"
                      required
                      min={today}
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className={inputBase}
                    />
                  </Field>
                  <Field label={L(t.reserve.time, lang)}>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => set("time", e.target.value)}
                      className={cn(inputBase, "appearance-none select-chevron")}
                    >
                      <option value="" disabled>
                        —
                      </option>
                      {times.map((tm) => (
                        <option key={tm} value={tm} className="bg-ink">
                          {tm}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label={L(t.reserve.party, lang)}>
                    <select
                      required
                      value={form.guests}
                      onChange={(e) => set("guests", e.target.value)}
                      className={cn(inputBase, "appearance-none")}
                    >
                      {party.map((p) => (
                        <option key={p} value={p} className="bg-ink">
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label={L(t.reserve.occasion, lang)}>
                  <select
                    value={form.occasion}
                    onChange={(e) => set("occasion", e.target.value)}
                    className={cn(inputBase, "appearance-none select-chevron")}
                  >
                    {t.reserve.occasionOpts.map((o) => (
                      <option key={o.en} value={o.en} className="bg-ink">
                        {L(o, lang)}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label={L(t.reserve.notes, lang)}>
                  <textarea
                    rows={2}
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    className={cn(inputBase, "resize-none")}
                  />
                </Field>

                {error && (
                  <p className="font-sans text-[0.72rem] uppercase tracking-[0.18em] text-[#e09aa6]">
                    {L(t.reserve.required, lang)}
                  </p>
                )}

                <div>
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 font-sans text-[0.76rem] uppercase tracking-[0.24em] text-ink transition-all duration-500 hover:bg-gold-soft"
                  >
                    {L(t.reserve.submit, lang)}
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                  <p className="mt-3 text-center font-sans text-[0.66rem] uppercase tracking-[0.18em] text-cream/40">
                    {L(t.reserve.consent, lang)}
                  </p>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-gold/80">
        {label}
      </span>
      {children}
    </label>
  );
}
