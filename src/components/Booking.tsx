"use client";

import { useEffect } from "react";
import { CalendarCheck } from "lucide-react";
import { bookingSection, site } from "@/config/site";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function Booking() {
  useEffect(() => {
    if (!CALENDLY_URL) return;
    // Load Calendly widget script once.
    const id = "calendly-widget-script";
    if (document.getElementById(id)) return;
    const script = document.createElement("script");
    script.id = id;
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="book" className="scroll-mt-24 bg-forest py-20 text-ivory md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center !text-honey-soft before:!bg-honey">
            {bookingSection.eyebrow}
          </span>
          <h2 className="mt-5 text-display-lg text-balance text-ivory">
            {bookingSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/75">
            {bookingSection.intro}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {CALENDLY_URL ? (
            <div
              className="calendly-inline-widget overflow-hidden rounded-2xl bg-ivory shadow-soft"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "680px" }}
            />
          ) : (
            <div className="rounded-2xl border border-ivory/15 bg-ivory/5 p-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-honey text-forest">
                <CalendarCheck size={26} />
              </span>
              <h3 className="mt-5 font-display text-2xl">Calendar coming online</h3>
              <p className="mx-auto mt-3 max-w-md text-ivory/70">
                The live booking calendar appears here once the Calendly link is
                added (see the README). In the meantime, reach Brittany directly:
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <a href={`tel:${site.contact.phone}`} className="btn-honey">
                  Call {site.contact.phone}
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="btn border border-ivory/30 text-ivory hover:bg-ivory/10"
                >
                  Email Brittany
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
