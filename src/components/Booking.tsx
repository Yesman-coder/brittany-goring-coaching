"use client";

import { useEffect } from "react";
import { CalendarCheck } from "lucide-react";
import { bookingSection, site } from "@/config/site";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL;
// Cal.com (open-source Calendly alternative). Set NEXT_PUBLIC_CAL_LINK to
// your cal.com path, e.g. "brittany-goring/free-consultation"
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;

export default function Booking() {
  useEffect(() => {
    // Load Calendly widget if configured
    if (CALENDLY_URL) {
      const id = "calendly-widget-script";
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.id = id;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Load Cal.com embed using the official queue-based pattern.
    // Cal() calls are queued immediately and processed once embed.js loads.
    if (CAL_LINK) {
      const id = "cal-embed-script";
      if (document.getElementById(id)) return;

      // Set up the Cal queue shim before the script loads
      type CalFn = ((...args: unknown[]) => void) & { q: unknown[][]; loaded?: boolean; ns: Record<string, CalFn> };
      const w = window as unknown as { Cal?: CalFn };
      if (!w.Cal) {
        const cal: CalFn = (...args: unknown[]) => { cal.q.push(args); };
        cal.q = [];
        cal.ns = {};
        cal.loaded = false;
        w.Cal = cal;
      }

      w.Cal("init", { origin: "https://app.cal.com" });
      w.Cal("inline", {
        elementOrSelector: "#cal-inline-widget",
        calLink: CAL_LINK,
        config: { layout: "column_view" },
      });
      w.Cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#385B48" } },
        hideEventTypeDetails: false,
        layout: "column_view",
      });

      const script = document.createElement("script");
      script.id = id;
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      document.head.appendChild(script);
    }
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

        <div className="mx-auto mt-12 max-w-4xl">
          {CAL_LINK ? (
            <div
              id="cal-inline-widget"
              className="overflow-hidden rounded-2xl bg-ivory shadow-soft"
              style={{ width: "100%", height: "660px" }}
            />
          ) : CALENDLY_URL ? (
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
                Booking opens soon. In the meantime, reach Brittany directly:
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
