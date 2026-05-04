"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface CaseStudyLayoutProps {
  title: string;
  client: string;
  sector: string;
  role: string;
  time: string;
  sections: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

export default function CaseStudyLayout({
  title,
  client,
  sector,
  role,
  time,
  sections,
}: CaseStudyLayoutProps) {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const observed = sectionsRef.current;
    observed.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observed.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 88;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
  };

  const meta = [
    { label: "Client", value: client },
    { label: "Sector", value: sector },
    { label: "Role", value: role },
    { label: "Time", value: time },
  ];

  const navClass =
    "text-[11px] font-medium uppercase tracking-[0.14em] text-secondary no-underline px-2.5 py-1.5 transition-colors duration-200 hover:text-charcoal";

  return (
    <>
      <nav className="sticky top-0 z-[100] border-b border-border-subtle bg-paper/90 backdrop-blur-md">
        <div className="container-main">
          <div className="flex h-14 items-center justify-between gap-4 md:h-16">
            <Link
              href="/#projects"
              className="text-sm font-medium text-secondary no-underline transition duration-200 hover:text-charcoal hover:-translate-x-0.5"
            >
              ← Index
            </Link>
            <ul className="scrollbar-hide flex max-w-[72%] list-none flex-nowrap items-center justify-end gap-0.5 overflow-x-auto md:max-w-none md:flex-wrap md:gap-1">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={navClass}
                    onClick={(e) => handleSmoothScroll(e, `#${section.id}`)}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-off-white text-left">
        <section className="border-b border-border-subtle bg-paper py-14 md:py-20">
          <div className="container-main">
            <p className="eyebrow mb-4">Case study</p>
            <h1 className="section-title max-w-4xl border-l border-line pl-5 leading-[1.15]">
              {title}
            </h1>
            <dl className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((item) => (
                <div
                  key={item.label}
                  className="border border-border-subtle bg-off-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-charcoal/20 hover:shadow-sm"
                >
                  <dt className="eyebrow mb-2 text-[0.6rem] text-muted">{item.label}</dt>
                  <dd className="m-0 text-sm font-medium text-charcoal">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="container-main py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionsRef.current[index] = el;
                }}
                className="fade-in-section mb-10 scroll-mt-24 last:mb-6 md:mb-12"
              >
                <div className="border border-border-subtle bg-paper p-6 transition-shadow duration-300 hover:shadow-float md:p-10">
                  <div className="mb-8 flex gap-4 border-b border-border-subtle pb-6">
                    <div className="min-h-[2rem] w-px shrink-0 bg-line" aria-hidden />
                    <h2 className="m-0 flex-1 font-serif text-xl font-semibold tracking-tight text-charcoal md:text-2xl">
                      {section.title}
                    </h2>
                  </div>
                  <div className="detail-prose">{section.content}</div>
                </div>
              </section>
            ))}
          </div>
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
