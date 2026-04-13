import Image from "next/image";
import Link from "next/link";
import type { ProjectCard as ProjectCardType } from "@/lib/projects";

interface Props {
  project: ProjectCardType;
}

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group border border-border-subtle bg-paper no-underline transition duration-300 hover:-translate-y-1 hover:border-charcoal/25 hover:shadow-float"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-off-white">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="border-t border-border-subtle p-5 md:p-6">
        <p className="eyebrow mb-2 text-[0.6rem]">{project.subtitle}</p>
        <h3 className="font-serif text-xl font-semibold tracking-tight text-charcoal transition-colors duration-200 group-hover:text-ink">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-secondary">{project.excerpt}</p>
        <span className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.14em] text-charcoal transition-transform duration-200 group-hover:translate-x-0.5">
          View case study →
        </span>
      </div>
    </Link>
  );
}
