import type { CodeProject } from "@/lib/projects";

const themeStyles = {
  warm: "from-[#2c2419]/[0.14] via-[#f5f5f3] to-[#ebe8e2] border-t-[#5c4d3c]/35",
  slate: "from-[#1e2939]/[0.12] via-[#f5f5f3] to-[#e8eaee] border-t-[#475569]/40",
  ink: "from-[#1a1a1a]/[0.18] via-[#f5f5f3] to-[#e5e5e2] border-t-charcoal/30",
} as const;

function IconGlobe() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M7 17L17 7M17 7h-6M17 7v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Props {
  project: CodeProject;
}

export default function CodeProjectCard({ project }: Props) {
  const band = themeStyles[project.theme];

  return (
    <article className="group border border-border-subtle bg-paper transition duration-300 hover:-translate-y-1 hover:border-charcoal/20 hover:shadow-float">
      <div
        className={`relative border-b border-border-subtle bg-gradient-to-br px-6 py-10 md:px-8 md:py-12 ${band} border-t-[3px]`}
      >
        <p className="eyebrow mb-3 text-[0.6rem] text-muted">Code project</p>
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-charcoal md:text-[1.65rem]">{project.title}</h3>
        <p className="mt-2 max-w-xl text-sm font-medium text-secondary md:text-base">{project.tagline}</p>
      </div>

      <div className="space-y-6 p-6 md:p-8">
        <p className="text-sm leading-relaxed text-secondary md:text-[0.95rem]">{project.description}</p>

        <div>
          <h4 className="eyebrow mb-3 text-[0.6rem] text-charcoal">Features</h4>
          <ul className="m-0 list-none space-y-2.5 p-0 text-sm text-secondary">
            {project.features.map((f) => (
              <li key={f} className="relative pl-5 before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2.5 before:bg-charcoal/35">
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-3 text-[0.6rem] text-charcoal">Technologies</h4>
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <li
                key={t.name}
                className="border border-border-subtle bg-off-white px-2.5 py-1 font-mono text-[11px] text-charcoal transition-colors duration-200 group-hover:border-charcoal/15"
              >
                <span className="font-semibold">{t.name}</span>
                <span className="text-muted"> · {t.version}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 border-t border-border-subtle pt-6 sm:flex-row sm:flex-wrap">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-charcoal bg-charcoal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-paper no-underline transition duration-200 hover:bg-paper hover:text-charcoal"
          >
            <IconGlobe />
            Live site
            <IconArrow />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-border-subtle bg-paper px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal no-underline transition duration-200 hover:border-charcoal/25 hover:bg-off-white"
          >
            <IconGitHub />
            Source
            <IconArrow />
          </a>
        </div>
      </div>
    </article>
  );
}
