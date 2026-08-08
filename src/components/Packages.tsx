import { Check } from "lucide-react";
import { packages, packagesSection } from "@/config/site";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{packagesSection.eyebrow}</span>
          <h2 className="mt-5 text-display-lg text-balance text-forest">
            {packagesSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/70">
            {packagesSection.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.08} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl p-8 shadow-card ${
                  pkg.featured
                    ? "border-2 border-honey bg-forest text-ivory"
                    : "border border-forest/10 bg-ivory text-forest"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.16em] ${
                      pkg.featured ? "text-honey-soft" : "text-pine"
                    }`}
                  >
                    {pkg.tagline}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl font-semibold">
                  {pkg.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold">
                    {pkg.price}
                  </span>
                  <span
                    className={`text-sm ${
                      pkg.featured ? "text-ivory/70" : "text-forest/60"
                    }`}
                  >
                    {pkg.cadence}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[15px]">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${
                          pkg.featured ? "text-honey" : "text-pine"
                        }`}
                      />
                      <span
                        className={
                          pkg.featured ? "text-ivory/85" : "text-forest/75"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pkg.cta.href}
                  className={`mt-8 ${pkg.featured ? "btn-honey" : "btn-secondary"}`}
                >
                  {pkg.cta.label}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
