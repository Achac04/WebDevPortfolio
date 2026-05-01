export type ProjectKind = "ux" | "code";

export interface ProjectCard {
  slug: string;
  kind: ProjectKind;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
}

export interface CodeProject {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  /** Tool or library name and the version used in that repo (from package.json). */
  technologies: { name: string; version: string }[];
  liveUrl: string;
  githubUrl: string;
  /** Controls the top visual band on the card */
  theme: "warm" | "slate" | "ink";
}

export const uxProjects: ProjectCard[] = [
  {
    slug: "kids-web-browser",
    kind: "ux",
    title: "Kids Web Browser",
    subtitle: "Educational tech · UI design & testing",
    excerpt:
      "A child-safe browser concept balancing exploration, gamification, and robust parental controls—grounded in competitive analysis, interviews, and iterative prototyping.",
    coverImage: "/images/Kids-Web-Browser-Imges/33.png",
    coverAlt: "Kids Web Browser high-fidelity interface",
  },
  {
    slug: "second-spin",
    kind: "ux",
    title: "Second Spin",
    subtitle: "E-commerce · UX/UI design",
    excerpt:
      "An eco-friendly secondhand fashion marketplace focused on trust, faster listing flows, and discovery—shaped by research, journey mapping, and usability testing.",
    coverImage: "/images/Second-Spin-Images/24.png",
    coverAlt: "Second Spin high-fidelity screens",
  },
  {
    slug: "walmart-checkout",
    kind: "ux",
    title: "Walmart Checkout",
    subtitle: "UX research · E-commerce",
    excerpt:
      "Heuristic evaluation and survey synthesis on Walmart’s online checkout: friction, transparency, and recommendations to reduce abandonment.",
    coverImage: "/images/Walmart-Images/walmart-portfolioimg.png",
    coverAlt: "Mobile checkout mockup: hand tapping Complete Order on a smartphone",
  },
];

export const codeProjects: CodeProject[] = [
  {
    slug: "lumino",
    title: "Lumina & Lore (Lumino)",
    tagline: "Boutique lighting · Next.js product prototype",
    description:
      "A polished, deployable storefront for a fictional lighting brand. It strings together discovery, browsing, cart, checkout, and a post-purchase restoration flow—plus a written case study recruiters can skim in one sitting.",
    features: [
      "Editorial landing, filterable catalog, and slide-out cart (Radix Dialog)",
      "Multi-step checkout with progress states and sticky order summary",
      "Restoration inquiry form with structured fields and uploads",
      "Dedicated /case-study route: IA, visual system, accessibility, and performance notes",
      "Safe image fallbacks, skip link, prefers-reduced-motion, and expanded metadata / OG",
    ],
    technologies: [
      { name: "Next.js", version: "15.1" },
      { name: "React", version: "19.0" },
      { name: "TypeScript", version: "5.7" },
      { name: "Tailwind CSS", version: "3.4" },
      { name: "Radix UI", version: "Dialog 1.1 · Label 2.1 · Slot 1.1" },
      { name: "Lucide React", version: "0.468" },
    ],
    liveUrl: "https://lumino-webpage.netlify.app/",
    githubUrl: "https://github.com/Achac04/Lumino",
    theme: "warm",
  },
  {
    slug: "autoflow",
    title: "AutoFlow",
    tagline: "Dealership landing · performance & SEO",
    description:
      "A marketing-grade landing experience tuned for Core Web Vitals: fast paint, readable hierarchy, and a dynamic inventory grid backed by a mock CMS shape—showing design-to-code execution that stays accessible and mobile-first.",
    features: [
      "Performance-minded layout and asset strategy for strong CWV signals",
      "Filterable vehicle inventory grid with clear scan patterns",
      "Mock CMS-style content boundaries for realistic handoff structure",
      "Semantic HTML, keyboard-friendly controls, and SEO-oriented structure",
    ],
    technologies: [
      { name: "Next.js", version: "16.2" },
      { name: "React", version: "19.2" },
      { name: "TypeScript", version: "5.x" },
      { name: "Tailwind CSS", version: "4" },
      { name: "Lucide React", version: "1.8" },
      { name: "Simple Icons", version: "16.18" },
    ],
    liveUrl: "https://northstart-autoflow.netlify.app/",
    githubUrl: "https://github.com/Achac04/autoflow-performance-landing-page",
    theme: "slate",
  },
  {
    slug: "roomifi",
    title: "Roomifi",
    tagline: "AI interiors · floor plan to render",
    description:
      "An in-browser studio that turns a 2D floor plan into styled interior visuals. Auth, file hosting, and model calls run through Puter.js so the repo stays free of third-party API keys while still demonstrating a full AI pipeline.",
    features: [
      "Upload → vision analysis → image generation with ordered model fallbacks",
      "Library, project detail with before/after, and community feed",
      "Puter-backed auth, KV storage, and filesystem URLs for large renders",
      "HashRouter for static hosting; theme toggle; dev mock when SDK is unavailable",
    ],
    technologies: [
      { name: "React", version: "18.2" },
      { name: "TypeScript", version: "5.2" },
      { name: "Vite", version: "5.0" },
      { name: "Tailwind CSS", version: "3.3" },
      { name: "Framer Motion", version: "11.0" },
      { name: "React Router", version: "6.21" },
      { name: "Puter.js", version: "1.0" },
    ],
    liveUrl: "https://roomifi.netlify.app/",
    githubUrl: "https://github.com/Achac04/Roomifi",
    theme: "ink",
  },
];
