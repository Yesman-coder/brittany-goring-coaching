import { about } from "@/config/site";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        {/* Image collage */}
        <Reveal className="order-2 md:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src="/images/about-1.jpg"
                alt="Brittany Goring listening in a coaching session"
                placeholderLabel="Add about-1.jpg"
                className="aspect-[3/4] w-full rounded-2xl shadow-card"
              />
              <ImageWithFallback
                src="/images/about-2.jpg"
                alt="Brittany Goring in the community"
                placeholderLabel="Add about-2.jpg"
                className="mt-8 aspect-[3/4] w-full rounded-2xl shadow-card"
              />
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal className="order-1 md:order-2" delay={0.1}>
          <span className="eyebrow">{about.eyebrow}</span>
          <h2 className="mt-5 text-display-lg text-balance text-forest">
            {about.heading}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-forest/75">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-forest/10 pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-pine">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-forest/60">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
