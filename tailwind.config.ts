import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grounded, warm identity — evergreen + honey + ivory.
        forest: "#22332A", // near-black green: primary text, dark sections
        pine: "#385B48", // primary green: buttons, headings on light
        sage: "#8AA795", // muted secondary green
        "sage-soft": "#DCE6DF", // pale green fills
        ivory: "#FAF7F0", // page background
        "ivory-deep": "#F1EBDD", // alternating section background
        honey: "#C79447", // accent — warm gold
        "honey-soft": "#EBD4A7", // pale gold fill
        apricot: "#E7C9A9", // soft warm secondary fill
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-body)", "Instrument Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        45: "0.45",
        55: "0.55",
        85: "0.85",
      },
      maxWidth: {
        content: "1200px",
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(34, 51, 42, 0.35)",
        card: "0 10px 30px -18px rgba(34, 51, 42, 0.30)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
