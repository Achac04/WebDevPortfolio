import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  coverAlt: string;
  href: string;
  /** Shown at bottom of card (e.g. case study vs project) */
  linkLabel?: string;
  /**
   * How the image fills the preview area. `contain` keeps the full frame (best for UI screenshots).
   * `cover` fills the cell and may crop (stronger for photography-style crops).
   */
  imageFit?: "contain" | "cover";
}

export default function ProjectCard({
  title,
  subtitle,
  excerpt,
  coverImage,
  coverAlt,
  href,
  linkLabel = "View case study →",
  imageFit = "contain",
}: ProjectCardProps) {
  const isSvg = coverImage.endsWith(".svg");
  const fitClass = imageFit === "cover" ? "object-cover object-center" : "object-contain object-top";

  return (
    <Link
      href={href}
      className="group border border-border-subtle bg-paper no-underline transition duration-300 hover:-translate-y-1 hover:border-charcoal/25 hover:shadow-float"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-off-white">
        <div className="absolute inset-0 p-2 sm:p-3 md:p-3.5">
          <Image
            src={coverImage}
            alt={coverAlt}
            fill
            unoptimized={isSvg}
            className={`${fitClass} transition duration-500 ease-out group-hover:scale-[1.02]`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
          />
        </div>
      </div>
      <div className="border-t border-border-subtle p-5 md:p-6">
        <p className="eyebrow mb-2 text-[0.6rem]">{subtitle}</p>
        <h3 className="font-serif text-xl font-semibold tracking-tight text-charcoal transition-colors duration-200 group-hover:text-ink">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary">{excerpt}</p>
        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-transform duration-200 group-hover:translate-x-0.5">
          {linkLabel}
        </span>
      </div>
    </Link>
  );
}
