import {
  Briefcase,
  HeartHandshake,
  Compass,
  Users,
  Sprout,
  Leaf,
  type LucideIcon,
} from "lucide-react";

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT
 *  This is the one file you edit to change almost everything on
 *  the site: names, copy, services, packages, contact details.
 *  No design or code changes needed — just edit the text below.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Brittany Goring",
  monogram: "BG",
  role: "Mental Health Coach",

  // ── Credential line ─────────────────────────────────────────
  // IMPORTANT (please read the README "Credential accuracy" note):
  // "Coach" is not a state-licensed title, and universities grant
  // degrees/certificates, not licenses. Use wording Brittany can
  // fully stand behind. Confirm her exact credential and edit here.
  credential: "Mental Health Coach · Trained at Capella University",

  // Short SEO / social description
  description:
    "Mental health coaching in Philadelphia and online with Brittany Goring — career counseling, life coaching, peer support, and coaching for teens and adults.",

  // Where the site will live (used for SEO metadata / Open Graph)
  url: "https://brittanygoring.com",

  contact: {
    email: "hello@brittanygoring.com",
    phone: "(215) 291-4383",
    location: "Philadelphia, PA · In-person & Online",
  },

  social: {
    // Leave blank to hide a link in the footer.
    instagram: "",
    linkedin: "",
    facebook: "",
  },
};

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  eyebrow: "A new chapter in care",
  // The pivot narrative is the signature message.
  headlineLead: "For years, she has helped people heal physically.",
  headlineEmphasis: "Now, she is here to support the mind.",
  subhead:
    "As CEO of two Philadelphia-area home-care agencies, Brittany Goring has built her career around compassionate, whole-person care. Today, she brings that same steady and practical approach to mental health coaching — helping you gain clarity, strengthen resilience, and find a meaningful path forward.",
  primaryCta: { label: "Book a free consultation", href: "#book" },
  secondaryCta: { label: "Explore coaching", href: "#services" },
  trustChips: [
    "CEO — WeAllCare & ICare Home Care",
    "Trained at Capella University",
    "Serving Philadelphia & online",
  ],
};

// ── About ─────────────────────────────────────────────────────
export const about = {
  eyebrow: "About Brittany",
  heading: "A Life and Career Rooted in Care",
  paragraphs: [
    "For years, she has helped people heal physically. Now, she is here to support the mind.",
    "As CEO of two Philadelphia-area home-care agencies, Brittany Goring has built her career around compassionate, whole-person care. Today, she brings that same steady and practical approach to mental health coaching — helping you gain clarity, strengthen resilience, and find a meaningful path forward.",
    "Her practice draws on evidence-based frameworks including Cognitive Behavioral Therapy (CBT) and Reality Therapy, woven together with a holistic lens that treats overall wellness — mind, purpose, and daily life — as the shared goal.",
  ],
  clinicalApproaches: [
    "Cognitive Behavioral Therapy (CBT)",
    "Reality Therapy",
    "Holistic Wellness",
  ],
  stats: [
    { value: "500+", label: "Families cared for" },
    { value: "2", label: "Care agencies led" },
    { value: "1-on-1", label: "Personal coaching" },
  ],
};

// ── Services ──────────────────────────────────────────────────
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const servicesSection = {
  eyebrow: "How Brittany helps",
  heading: "Coaching, matched to where you are",
  intro:
    "Every path is different. These are the areas Brittany coaches in — start with whichever fits your moment, and we'll shape the rest together.",
};

export const services: Service[] = [
  {
    title: "Career counseling",
    description:
      "Clarity for the crossroads — choosing a direction, navigating a change, or rebuilding confidence after a setback. Practical steps toward work that fits your life.",
    icon: Briefcase,
  },
  {
    title: "Peer support",
    description:
      "A steady, non-judgmental space to be heard by someone who has walked alongside people through hard seasons. Support built on empathy, not diagnosis.",
    icon: HeartHandshake,
  },
  {
    title: "Life coaching",
    description:
      "Turn 'stuck' into a plan. Set goals that matter to you, work through what's in the way, and build habits and resilience that hold up in real life.",
    icon: Compass,
  },
  {
    title: "Juvenile & adult coaching",
    description:
      "Age-appropriate coaching for teens and adults alike — helping young people find footing and grown-ups navigate transitions, with families supported throughout.",
    icon: Users,
  },
  {
    title: "Healthy mental-health environments",
    description:
      "For families, caregivers, and teams: guidance on building spaces — at home and at work — where mental well-being is understood, protected, and prioritized.",
    icon: Sprout,
  },
  {
    title: "Holistic healing",
    description:
      "Support that goes beyond the session. Using overall wellness as the goal, Brittany helps you align mind, purpose, and daily habits — so growth holds up in real life.",
    icon: Leaf,
  },
];

// ── Packages ──────────────────────────────────────────────────
export type Package = {
  name: string;
  tagline: string;
  price: string;
  cadence: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const packagesSection = {
  eyebrow: "Ways to work together",
  heading: "Simple packages, real momentum",
  // PLACEHOLDER PRICING — set Brittany's real prices here.
  intro:
    "Every journey starts with a free consultation. From there, choose the level of support that fits. Pricing shown is a starting template — update it with Brittany's rates.",
};

export const packages: Package[] = [
  {
    name: "Free consultation",
    tagline: "Start here",
    price: "$0",
    cadence: "30-minute call",
    features: [
      "Get to know each other, no pressure",
      "Talk through what you're facing",
      "See if coaching is the right fit",
      "Leave with one clear next step",
    ],
    cta: { label: "Book your call", href: "#book" },
  },
  {
    name: "Focused sessions",
    tagline: "Most popular",
    price: "$—",
    cadence: "per session",
    features: [
      "60-minute one-on-one coaching",
      "Choose your focus area",
      "Personalized action plan",
      "Follow-up notes & resources",
      "In-person or online",
    ],
    cta: { label: "Book a session", href: "#book" },
    featured: true,
  },
  {
    name: "Growth package",
    tagline: "Ongoing support",
    price: "$—",
    cadence: "4-session bundle",
    features: [
      "Four 60-minute sessions",
      "Between-session check-ins",
      "Goal tracking & accountability",
      "Priority scheduling",
      "Best value per session",
    ],
    cta: { label: "Start the package", href: "#book" },
  },
];

// ── Team / gallery ────────────────────────────────────────────
export const teamSection = {
  eyebrow: "Behind the care",
  heading: "Brittany & the team",
  intro:
    "Coaching is personal, but it's backed by a team that has spent years caring for the Philadelphia community. Add your photos in /public/images — see the README for the exact file names.",
};

// Drop real photos into /public/images using these file names.
export const teamPhotos = [
  { src: "/images/team-1.jpg", alt: "Brittany Goring with her care team", caption: "The team" },
  { src: "/images/team-2.jpg", alt: "Brittany Goring at work", caption: "In the community" },
  { src: "/images/team-3.jpg", alt: "Care team members together", caption: "Caregivers" },
  { src: "/images/team-4.jpg", alt: "Brittany Goring portrait", caption: "Brittany" },
];

// ── Booking ───────────────────────────────────────────────────
export const bookingSection = {
  eyebrow: "No cost, no pressure",
  heading: "Book your free consultation",
  intro:
    "Pick a time that works for you. It's a relaxed 30-minute conversation — a chance to be heard and to see whether coaching with Brittany feels right.",
};

// ── Contact ───────────────────────────────────────────────────
export const contactSection = {
  eyebrow: "Reach out",
  heading: "Have a question first?",
  intro:
    "Send a note and Brittany will get back to you personally. For anything urgent, a call is always welcome.",
};

// ── Footer disclaimer (recommended for coaching sites) ─────────
export const disclaimer =
  "Coaching with Brittany Goring is not psychotherapy, counseling, or medical care, and is not a substitute for treatment from a licensed clinician. If you are in crisis or need urgent help, call or text 988 (the Suicide & Crisis Lifeline) or dial 911.";
