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

export const codeProjects: ProjectCard[] = [];
