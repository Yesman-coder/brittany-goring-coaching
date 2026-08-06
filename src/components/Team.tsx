import { teamPhotos, teamSection } from "@/config/site";
import ImageWithFallback from "./ImageWithFallback";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-ivory-deep py-20 md:py-28">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">{teamSection.eyebrow}</span>
          <h2 className="mt-5 text-display-lg text-balance text-forest">
            {teamSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/70">
            {teamSection.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamPhotos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 4) * 0.06}>
              <figure className="group relative overflow-hidden rounded-2xl shadow-card">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  placeholderLabel={`Add ${photo.src.split("/").pop()}`}
                  className="aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 to-transparent p-4 text-sm font-medium text-ivory">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
