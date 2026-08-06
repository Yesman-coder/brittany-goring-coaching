"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { contactSection, site } from "@/config/site";

const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!ENDPOINT) {
      // No endpoint configured yet — hand off to email client.
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(
        "Coaching inquiry from the website"
      )}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-page grid gap-14 md:grid-cols-2 md:items-start">
        {/* Left: intro + details */}
        <div>
          <span className="eyebrow">{contactSection.eyebrow}</span>
          <h2 className="mt-5 text-display-lg text-balance text-forest">
            {contactSection.heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-forest/70">
            {contactSection.intro}
          </p>

          <ul className="mt-9 space-y-4">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-pine">
                <Mail size={20} />
              </span>
              <a
                href={`mailto:${site.contact.email}`}
                className="text-forest/80 hover:text-pine"
              >
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-pine">
                <Phone size={20} />
              </span>
              <a
                href={`tel:${site.contact.phone}`}
                className="text-forest/80 hover:text-pine"
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-soft text-pine">
                <MapPin size={20} />
              </span>
              <span className="text-forest/80">{site.contact.location}</span>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-forest/10 bg-ivory p-7 shadow-card md:p-8"
        >
          <div className="grid gap-5">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-forest">
                Your name
              </span>
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                className="w-full rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-forest placeholder:text-forest/40 focus:border-pine focus:outline-none"
                placeholder="Jane Doe"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-forest">
                Email
              </span>
              <input
                required
                name="email"
                type="email"
                autoComplete="email"
                className="w-full rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-forest placeholder:text-forest/40 focus:border-pine focus:outline-none"
                placeholder="you@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-forest">
                What&apos;s on your mind?
              </span>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full resize-none rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-forest placeholder:text-forest/40 focus:border-pine focus:outline-none"
                placeholder="A little about what you're looking for…"
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-primary w-full disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm font-medium text-pine">
                Thank you — your message is on its way. Brittany will reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-honey">
                Something went wrong sending that. Please email{" "}
                {site.contact.email} directly.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
