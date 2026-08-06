import { Instagram, Linkedin, Facebook } from "lucide-react";
import { disclaimer, site } from "@/config/site";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Coaching", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Team", href: "#team" },
  { label: "Book", href: "#book" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: site.social.instagram, Icon: Instagram, label: "Instagram" },
    { href: site.social.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: site.social.facebook, Icon: Facebook, label: "Facebook" },
  ].filter((s) => s.href);

  return (
    <footer className="bg-forest text-ivory">
      <div className="container-page py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-honey font-display text-sm font-semibold text-forest">
                {site.monogram}
              </span>
              <span className="font-display text-lg font-semibold">
                {site.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ivory/70">
              {site.credential}
            </p>
            {socials.length > 0 && (
              <div className="mt-5 flex gap-3">
                {socials.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 text-ivory transition-colors hover:bg-honey hover:text-forest"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-ivory/75 transition-colors hover:text-honey"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <p className="mt-12 border-t border-ivory/12 pt-8 text-xs leading-relaxed text-ivory/55">
          {disclaimer}
        </p>

        <p className="mt-4 text-xs text-ivory/45">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
