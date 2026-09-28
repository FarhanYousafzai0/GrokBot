"use client";

import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { contact } from "@/data/contact";
import { HashLink } from "./HashLink";
import { Magnetic } from "./Magnetic";

const links = [
  { href: "/#work", label: "Work", id: "nav-work", menuId: "menu-work", index: "01" },
  { href: "/#about", label: "About", id: "nav-about", menuId: "menu-about", index: "02" },
  { href: "/#writing", label: "Blog", id: "nav-blog", menuId: "menu-blog", index: "03" },
  { href: "/#contact", label: "Contact", id: "nav-contact", menuId: "menu-contact", index: "04" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth >= 768) close();
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [close]);

  useEffect(() => {
    close();
  }, [pathname, close]);

  return (
    <>
      <nav className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 bg-paper border border-ink/10 rounded-full shadow-soft px-2 py-2 grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center w-[calc(100%-24px)] md:w-[min(92%,72rem)] max-w-6xl">
        <Link
          href="/"
          className="justify-self-start pl-3 md:pl-4 font-display font-medium text-base md:text-lg tracking-tight whitespace-nowrap"
          id="nav-home"
        >
          {contact.name}
        </Link>
        <div className="hidden md:flex md:col-start-2 items-center justify-center gap-5 lg:gap-8 text-sm font-medium text-ink/80">
          {links.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                id={link.id}
                className="hover:text-ink transition-colors"
              >
                {link.label}
              </HashLink>
            ))}
        </div>
        <div className="justify-self-end md:col-start-3 flex items-center gap-2">
          <Magnetic
            href="/#contact"
            id="nav-cta"
            className="hidden sm:inline-flex items-center justify-center bg-ink text-paper outline outline-1 outline-offset-[3px] outline-ink/30 rounded-full px-5 py-2.5 text-sm font-medium transition-transform duration-300"
          >
            Let&apos;s talk
          </Magnetic>
          <button
            type="button"
            id="menu-open"
            className="md:hidden w-10 h-10 rounded-full bg-ink text-paper flex items-center justify-center"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[60] bg-ink text-paper flex flex-col px-5 pt-4 pb-8 opacity-0 pointer-events-none md:hidden ${open ? "open" : ""}`}
        aria-hidden={open ? "false" : "true"}
      >
        <div className="absolute inset-0 grid-paper pointer-events-none" />
        <div className="relative flex items-center justify-between border border-paper/15 rounded-full pl-4 pr-2 py-2">
          <span className="font-display font-medium text-base tracking-tight">{contact.name}</span>
          <button
            type="button"
            id="menu-close"
            className="w-10 h-10 rounded-full bg-paper text-ink flex items-center justify-center"
            aria-label="Close menu"
            onClick={close}
          >
            <X size={18} />
          </button>
        </div>
        <div className="relative flex-1 flex flex-col justify-center">
          {links.map((link) => (
            <HashLink
              key={link.menuId}
              href={link.href}
              id={link.menuId}
              className="mm-link flex items-baseline justify-between border-b border-paper/10 py-5"
              onClick={close}
            >
              <span className="font-display font-medium text-[clamp(2.5rem,13vw,4rem)] leading-none tracking-[-0.03em]">
                {link.label}
              </span>
              <span className="font-mono text-xs text-paper/50">{link.index}</span>
            </HashLink>
          ))}
        </div>
        <div className="relative flex flex-wrap items-center justify-between gap-4">
          <HashLink
            href="/#contact"
            className="inline-flex items-center gap-2 bg-paper text-ink border border-ink/15 rounded-full px-6 py-3.5 font-medium"
            id="menu-cta"
            onClick={close}
          >
            Let&apos;s talk <ArrowRight size={16} />
          </HashLink>
          <span className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
            Based in Pakistan
          </span>
        </div>
      </div>
    </>
  );
}
