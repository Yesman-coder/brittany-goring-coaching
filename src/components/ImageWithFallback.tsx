/* eslint-disable @next/next/no-img-element */
// A plain <img> is intentional here: photos are dropped into /public/images
// by a non-technical owner, and we need an onError fallback to a branded
// placeholder — behavior that next/image does not provide cleanly.
"use client";

import { useState } from "react";
import { ImageIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  /** Text shown on the placeholder before a real photo is added. */
  placeholderLabel?: string;
};

/**
 * Renders the real image once it exists in /public/images.
 * Until then, shows a tasteful branded placeholder so the layout
 * always looks intentional — no broken image icons.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = "",
  placeholderLabel,
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sage-soft via-apricot/40 to-honey-soft text-pine/70 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon size={28} strokeWidth={1.5} />
        {placeholderLabel && (
          <span className="px-4 text-center text-xs font-medium uppercase tracking-[0.14em]">
            {placeholderLabel}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
