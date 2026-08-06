import { services, servicesSection } from "@/config/site";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-ivory-deep py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{servicesSection.eyebrow}</span>
          <h2 className="mt-5 text-display-lg text-balance text-forest">
            {servicesSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/70">
            {servicesSection.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <article className="card group h-full hover:-translate-y-1 hover:border-honey/40 hover:shadow-soft">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-soft text-pine transition-colors group-hover:bg-honey group-hover:text-forest">
                    <Icon size={22} strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-forest">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-forest/70">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}

          {/* CTA tile fills the grid and drives booking */}
          <Reveal delay={0.16}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-forest p-7 text-ivory shadow-card">
              <div>
                <h3 className="font-display text-xl font-semibold">
                  Not sure where to start?
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ivory/75">
                  That&apos;s exactly what the free consultation is for. We&apos;ll
                  figure out the right starting point together.
                </p>
              </div>
              <a href="#book" className="btn-honey mt-6 self-start">
                Book a free call
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
