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

export interface CodeProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface CodeProject {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  /** Longer narrative on the project detail page */
  detailParagraphs: string[];
  gallery: CodeProjectGalleryItem[];
  features: string[];
  technologies: { name: string; version: string }[];
  liveUrl: string;
  githubUrl: string;
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
    subtitle: "Boutique lighting · Next.js product prototype",
    excerpt:
      "High-fidelity storefront prototype: catalog, cart sheet, checkout, restoration flow, and an in-app case study for recruiters.",
    coverImage: "/images/Code-Projects/lumino-images/landing-page-image.png",
    coverAlt: "Lumino boutique lighting landing page in the browser",
    detailParagraphs: [
      "Lumino is a self-contained product narrative: a fictional boutique lighting brand rendered as a production-shaped Next.js app. The goal was to show how editorial brand voice, commerce patterns, and accessibility-minded engineering can live in one deployable artifact.",
      "The experience moves from a calm landing into a filterable catalog, a Radix-powered cart sheet, a stepped checkout with visible progress, and a restoration inquiry path that reads as a credible post-purchase service. A dedicated case-study route documents information architecture, visual system choices, and tradeoffs so hiring managers can evaluate thinking—not only pixels.",
      "Resilience and quality signals include safe image fallbacks for remote product art, a skip link to main content, reduced-motion respect for decorative animation, and expanded metadata including an Open Graph image for sharing.",
    ],
    gallery: [
      {
        src: "/images/Code-Projects/lumino-images/catalog-image.png",
        alt: "Lumino filterable product catalog",
        caption: "Catalog & product grid",
      },
      {
        src: "/images/Code-Projects/lumino-images/checkout-image.png",
        alt: "Lumino multi-step checkout flow",
        caption: "Checkout experience",
      },
    ],
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
  },
  {
    slug: "autoflow",
    title: "AutoFlow",
    subtitle: "Dealership landing · performance & SEO",
    excerpt:
      "Marketing-grade Next.js landing focused on Core Web Vitals, inventory discovery, and a mock CMS-shaped content model.",
    coverImage: "/images/Code-Projects/autoflow-images/landing-page-image.png",
    coverAlt: "AutoFlow dealership marketing landing page",
    detailParagraphs: [
      "AutoFlow explores how a conversion-oriented marketing surface should feel when performance and clarity are first-class requirements—not afterthoughts. The page is structured so scanners get hierarchy immediately, while readers who scroll find proof, inventory, and calls to action without friction.",
      "A dynamic inventory grid anchors the story: vehicles are easy to scan, filter, and compare using patterns familiar from real dealership sites, but implemented with lean markup and Tailwind utility discipline suited to strong Core Web Vitals scores.",
      "The project also demonstrates a mock CMS boundary: content is shaped as if it were delivered from a headless source, which keeps components honest about props, loading states, and future editorial handoff—even though the demo ships with static demo data.",
    ],
    gallery: [
      {
        src: "/images/Code-Projects/autoflow-images/overview-image.png",
        alt: "AutoFlow page overview and content hierarchy",
        caption: "Overview & layout",
      },
      {
        src: "/images/Code-Projects/autoflow-images/brands-image.png",
        alt: "AutoFlow brands and trust section",
        caption: "Brands & trust signals",
      },
    ],
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
  },
  {
    slug: "roomifi",
    title: "Roomifi",
    subtitle: "AI interiors · floor plan to render",
    excerpt:
      "Browser studio that turns a 2D plan into styled renders using Puter.js for auth, storage, and AI—no API keys in the repo.",
    coverImage: "/images/Code-Projects/roomifi-images/professional-tools.png",
    coverAlt: "Roomifi professional tools and studio controls",
    detailParagraphs: [
      "Roomifi is an end-to-end creative tool: users upload a floor plan, describe intent, and receive visualizations informed by a vision pass and a generation pass. The hardest product challenge—securely wiring AI and file IO in the browser—is handled through Puter.js so credentials never ship in client-side environment files.",
      "Beyond the core studio loop, the app includes a library for saved work, a detail view suited to before/after comparison, and a community feed to mimic how real products socialize user output. HashRouter keeps deployment simple on static hosts like Netlify while preserving deep links.",
      "The implementation emphasizes graceful degradation: when the Puter SDK is unavailable locally, a mock mode keeps development productive while clearly signaling state in the UI.",
    ],
    gallery: [
      {
        src: "/images/Code-Projects/roomifi-images/project-screen.png",
        alt: "Roomifi studio interface showing floor plan workflow",
        caption: "Studio & project view",
      },
      {
        src: "/images/Code-Projects/roomifi-images/test1.png",
        alt: "Roomifi additional UI state",
        caption: "Product UI",
      },
    ],
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
  },
];

export function getCodeProjectBySlug(slug: string): CodeProject | undefined {
  return codeProjects.find((p) => p.slug === slug);
}
