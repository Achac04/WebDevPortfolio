import ImageLightbox from "@/components/ImageLightbox";
import { codeProjects, getCodeProjectBySlug } from "@/lib/projects";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return codeProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getCodeProjectBySlug(slug);
  if (!p) return { title: "Project" };
  return {
    title: p.title,
    description: p.excerpt,
  };
}

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

export default async function CodeProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getCodeProjectBySlug(slug);
  if (!p) notFound();

  const heroSvg = p.coverImage.endsWith(".svg");

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-border-subtle bg-paper/90 backdrop-blur-md">
        <div className="container-main flex h-14 items-center justify-between md:h-16">
          <Link
            href="/#projects"
            className="text-sm font-medium text-secondary no-underline transition duration-200 hover:text-charcoal hover:-translate-x-0.5"
          >
            ← Index
          </Link>
          <span className="eyebrow text-[0.6rem] text-muted">Code project</span>
        </div>
      </nav>

      <main className="min-h-screen bg-off-white">
        <header className="border-b border-border-subtle bg-paper py-14 md:py-20">
          <div className="container-main">
            <p className="eyebrow mb-4">{p.subtitle}</p>
            <h1 className="section-title max-w-4xl border-l border-line pl-5">{p.title}</h1>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-charcoal bg-charcoal px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-paper no-underline transition duration-200 hover:bg-paper hover:text-charcoal"
              >
                <IconGlobe />
                Live site
                <IconArrow />
              </a>
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border-subtle bg-paper px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-charcoal no-underline transition duration-200 hover:border-charcoal/25 hover:bg-off-white"
              >
                <IconGitHub />
                Repository
                <IconArrow />
              </a>
            </div>
          </div>
        </header>

        <div className="container-main py-12 md:py-16">
          <section className="mb-14 border border-border-subtle bg-paper p-1 md:mb-16">
            <ImageLightbox
              src={p.coverImage}
              alt={p.coverAlt}
              priority
              unoptimized={heroSvg}
              sizes="(max-width: 1200px) 100vw, 1200px"
              frameClassName="relative aspect-[21/9] max-h-[min(52vh,520px)] w-full overflow-hidden bg-off-white md:aspect-[2.4/1]"
              imageClassName="object-cover object-top"
            />
          </section>

          {p.gallery.length > 0 ? (
            <section className="mb-14 md:mb-16">
              <h2 className="eyebrow mb-6 text-charcoal">Gallery</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {p.gallery.map((item) => {
                  const svg = item.src.endsWith(".svg");
                  return (
                    <figure
                      key={item.src}
                      className="border border-border-subtle bg-paper transition-shadow duration-300 hover:shadow-float"
                    >
                      <ImageLightbox
                        src={item.src}
                        alt={item.alt}
                        unoptimized={svg}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        frameClassName="relative aspect-[16/10] overflow-hidden bg-off-white"
                        imageClassName="object-cover"
                      />
                      {item.caption ? (
                        <figcaption className="border-t border-border-subtle px-4 py-3 text-xs text-secondary">
                          {item.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  );
                })}
              </div>
            </section>
          ) : null}

          <section className="mb-14 border border-border-subtle bg-paper p-6 md:mb-16 md:p-10">
            <div className="mb-8 flex gap-4 border-b border-border-subtle pb-6">
              <div className="min-h-[2rem] w-px shrink-0 bg-line" aria-hidden />
              <h2 className="m-0 flex-1 font-serif text-xl font-semibold tracking-tight text-charcoal md:text-2xl">Overview</h2>
            </div>
            <div className="detail-prose max-w-3xl">
              {p.detailParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section className="mb-14 border border-border-subtle bg-paper p-6 md:mb-16 md:p-10">
            <div className="mb-8 flex gap-4 border-b border-border-subtle pb-6">
              <div className="min-h-[2rem] w-px shrink-0 bg-line" aria-hidden />
              <h2 className="m-0 flex-1 font-serif text-xl font-semibold tracking-tight text-charcoal md:text-2xl">Features</h2>
            </div>
            <ul className="m-0 max-w-3xl list-none space-y-3 p-0 text-secondary">
              {p.features.map((f) => (
                <li key={f} className="relative pl-5 text-[1.05rem] leading-relaxed before:absolute before:left-0 before:top-[0.55em] before:h-px before:w-2.5 before:bg-charcoal/35">
                  {f}
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-border-subtle bg-paper p-6 md:p-10">
            <div className="mb-8 flex gap-4 border-b border-border-subtle pb-6">
              <div className="min-h-[2rem] w-px shrink-0 bg-line" aria-hidden />
              <h2 className="m-0 flex-1 font-serif text-xl font-semibold tracking-tight text-charcoal md:text-2xl">Technologies</h2>
            </div>
            <p className="mb-4 max-w-3xl text-sm text-secondary">
              Versions reflect the dependency ranges declared in the project&apos;s <code className="text-charcoal">package.json</code>{" "}
              at the time this portfolio entry was written.
            </p>
            <ul className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <li
                  key={t.name}
                  className="border border-border-subtle bg-off-white px-3 py-1.5 font-mono text-[11px] text-charcoal"
                >
                  <span className="font-semibold">{t.name}</span>
                  <span className="text-muted"> · {t.version}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="border-t border-border-subtle bg-paper py-10">
        <div className="container-main">
          <p className="text-sm text-muted">© 2026 Andres Chacon</p>
        </div>
      </footer>
    </>
  );
}
