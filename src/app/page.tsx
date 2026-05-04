import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
            Full-stack developer and UI designer.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-secondary md:text-lg">
            I focused on building high performance digital products. I bridge the gap between complex backend automation and clean, accessible interfaces. Crafting experiences that are as functional and refined.
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
                I believe the best digital experiences happen where design intent meets technical reality.
                My background is in Software Development (SAIT), but my perspective is shaped by HCI and a constant focus on user outcomes. I don't just ship code; I build tools that help businesses run smoother and customers engage more clearly.
                </p>
                <p>
                This site serves as a record of my evolution from UI research and architectural prototyping to full-stack implementation. 
                You’ll find my latest projects below, spanning SaaS products, high-conversion landing pages, and interactive design tools. Feel free to explore the live versions or dig into the code on GitHub."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-border-subtle bg-paper">
          <div className="container-main py-16 md:py-24">
            <h2 className="section-title mb-4 border-l border-line pl-5">Projects</h2>
            <p className="mb-14 max-w-2xl text-secondary">
            I approach digital work as a balance between architectural rigor and user-centric design. 
            My portfolio is a collection of systems rather than just finished products, each project is a sandbox where I test new frameworks, refine design patterns, and solve specific business constraints.
            </p>

            <h2 className="section-title mb-4 border-l border-line pl-5">My Project Style:</h2>
            <div className="mb-14 max-w-2xl space-y-4 text-secondary">
              <p>
                Whether I am designing a case study or shipping a full-stack application, my process remains consistent:
              </p>
              <ul className="m-0 list-disc space-y-4 pl-5 marker:text-charcoal">
                <li>
                  <strong className="font-semibold text-charcoal">Purposeful Design:</strong> I believe interfaces should be
                  legible, accessible, and intentionally built. I prioritize clarity and restraint in every layout.
                </li>
                <li>
                  <strong className="font-semibold text-charcoal">Systems Based Coding:</strong> My development style focuses
                  on performance, scalability, and clean component architecture. I treat code as a long-term asset, not a
                  temporary fix.
                </li>
                <li>
                  <strong className="font-semibold text-charcoal">User First Logic:</strong> I build with the intent to solve
                  real-world friction. Whether it is optimizing a conversion funnel or simplifying a user journey, the objective
                  is always to make the digital experience more effective.
                </li>
              </ul>
            </div>

            <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
              <div>
                <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">UX / UI</h3>
                <div className="grid gap-8">
                  {uxProjects.map((p) => (
                    <ProjectCard
                      key={p.slug}
                      title={p.title}
                      subtitle={p.subtitle}
                      excerpt={p.excerpt}
                      coverImage={p.coverImage}
                      coverAlt={p.coverAlt}
                      href={`/work/${p.slug}`}
                      linkLabel="View case study →"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-muted">Code</h3>
                <div className="grid gap-8">
                  {codeProjects.map((p) => (
                    <ProjectCard
                      key={p.slug}
                      title={p.title}
                      subtitle={p.subtitle}
                      excerpt={p.excerpt}
                      coverImage={p.coverImage}
                      coverAlt={p.coverAlt}
                      href={`/projects/${p.slug}`}
                      linkLabel="View project →"
                    />
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
