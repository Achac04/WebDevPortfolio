import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CodeProjectCard from "@/components/CodeProjectCard";
import ProjectCard from "@/components/ProjectCard";
import { codeProjects, uxProjects } from "@/lib/projects";

const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "your.email@example.com";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-1 flex-col pt-14 md:pt-[3.75rem]">
        <section className="border-b border-border-subtle bg-paper">
          <div className="container-main py-20 md:py-28">
            <p className="eyebrow mb-6">Portfolio</p>
            <h1 className="max-w-3xl font-serif text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-[1.12] tracking-tight text-charcoal">
              Web designer & developer building clear, purposeful digital experiences.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
              UX research, interface design, and front-end implementation—with the restraint and clarity of an architectural folio.
            </p>
          </div>
        </section>

        <section id="about" className="border-b border-border-subtle bg-off-white">
          <div className="container-main py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
              <div>
                <h2 className="section-title border-l border-line pl-5">About</h2>
              </div>
              <div className="space-y-5 text-secondary md:text-lg md:leading-relaxed">
                <p>
                  I work at the intersection of UX/UI and implementation: framing problems with research, shaping flows and
                  visuals, and shipping interfaces that stay legible under real constraints.
                </p>
                <p>
                  This site collects selected work: UX case studies alongside shipped front-end projects you can open in the
                  browser or inspect on GitHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border-subtle bg-paper">
          <div className="container-main py-16 md:py-24">
            <h2 className="section-title mb-4 border-l border-line pl-5">Projects</h2>
            <p className="mb-14 max-w-2xl text-secondary">
              Work grouped by discipline. UX/UI case studies open into full narrative pages on this site. Code projects link out
              to live Netlify demos and repositories, with stack versions taken from each repo&apos;s{" "}
              <code className="rounded bg-off-white px-1 py-0.5 text-[0.8em] text-charcoal">package.json</code>.
            </p>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">UX / UI</h3>
                <div className="grid gap-8">
                  {uxProjects.map((p) => (
                    <ProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">Code</h3>
                <div className="grid gap-10">
                  {codeProjects.map((p) => (
                    <CodeProjectCard key={p.slug} project={p} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-border-subtle bg-off-white">
          <div className="container-main py-16 md:py-24">
            <h2 className="section-title mb-10 border-l border-line pl-5">Skills</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  label: "Research & strategy",
                  items: ["User interviews", "Surveys", "Competitive analysis", "Journey mapping", "Heuristic evaluation"],
                },
                {
                  label: "Design",
                  items: ["Wireframes", "Low & high-fidelity UI", "Prototyping (Figma)", "Design systems", "Usability testing"],
                },
                {
                  label: "Development",
                  items: [
                    "React & Next.js",
                    "TypeScript",
                    "Vite",
                    "Tailwind CSS",
                    "Netlify",
                    "Component-driven UI",
                  ],
                },
              ].map((col) => (
                <div
                  key={col.label}
                  className="border border-border-subtle bg-paper p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <h3 className="eyebrow mb-4 text-charcoal">{col.label}</h3>
                  <ul className="m-0 list-none space-y-2 p-0 text-sm text-secondary">
                    {col.items.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-paper">
          <div className="container-main py-16 md:py-24">
            <h2 className="section-title mb-8 border-l border-line pl-5">Contact</h2>
            <p className="mb-8 max-w-xl text-secondary">
              For collaborations, freelance, or full-time opportunities, reach out by email. I typically respond within a few
              business days.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="inline-block border border-charcoal bg-charcoal px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-paper no-underline transition duration-200 hover:bg-paper hover:text-charcoal"
            >
              {contactEmail}
            </a>
          </div>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}
