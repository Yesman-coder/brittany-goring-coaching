import { hero } from "@/config/site";
import ImageWithFallback from "./ImageWithFallback";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Ambient background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 55% at 85% 0%, rgba(199,148,71,0.16), transparent 60%), radial-gradient(50% 50% at 0% 30%, rgba(138,167,149,0.20), transparent 55%)",
        }}
      />

      <div className="container-page grid items-center gap-12 pb-20 md:grid-cols-[1.05fr_0.95fr] md:pb-28">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="eyebrow">{hero.eyebrow}</span>

          <h1 className="mt-5 text-display-xl text-balance text-forest">
            {hero.headlineLead}{" "}
            <span className="relative inline-block text-pine">
              {hero.headlineEmphasis}
              {/* hand-drawn underline throughline */}
              <svg
                aria-hidden
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C60 3 120 3 180 6C220 8 260 9 298 4"
                  stroke="#C79447"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-forest/75">
            {hero.subhead}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.trustChips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 text-sm font-medium text-forest/70"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-honey" />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            {/* soft offset panel */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] bg-sage-soft" />
            <ImageWithFallback
              src="/images/brittany-portrait.jpg"
              alt="Brittany Goring, Mental Health Coach"
              placeholderLabel="Add brittany-portrait.jpg"
              className="relative h-full w-full rounded-[2rem] shadow-soft"
            />
            {/* floating credential card */}
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-forest px-5 py-4 text-ivory shadow-soft">
              <p className="font-display text-lg leading-tight">Whole-person care</p>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-honey-soft">
                Body &amp; mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
