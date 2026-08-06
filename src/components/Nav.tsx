"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";

const links = [
  { label: "About", href: "#about" },
  { label: "Coaching", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_rgba(34,51,42,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3" aria-label={site.name}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pine font-display text-sm font-semibold text-ivory">
            {site.monogram}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold text-forest">
              {site.name}
            </span>
            <span className="text-[11px] uppercase tracking-[0.16em] text-sage">
              {site.role}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-forest/80 transition-colors hover:text-pine"
            >
              {l.label}
            </a>
          ))}
          <a href="#book" className="btn-primary">
            Book free consult
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-forest/8 bg-ivory md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-forest hover:bg-sage-soft"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Book free consult
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
