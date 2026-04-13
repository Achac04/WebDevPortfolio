"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.getElementById(href.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-paper/85 backdrop-blur-md">
      <div className="container-main flex h-14 items-center justify-between md:h-[3.75rem]">
        <Link
          href="/"
          className="font-serif text-lg font-semibold tracking-tight text-charcoal no-underline transition-opacity duration-200 hover:opacity-70"
        >
          Andres Chacon
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              className="px-3 py-2 text-xs font-medium uppercase tracking-[0.16em] text-secondary no-underline transition-colors duration-200 hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="border border-border-subtle px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-charcoal md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border-subtle bg-paper px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => scrollTo(e, item.href)}
                  className="block py-2 text-sm font-medium uppercase tracking-wider text-secondary no-underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
