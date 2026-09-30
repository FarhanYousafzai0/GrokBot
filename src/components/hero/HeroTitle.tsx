"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const PEN_LINE = "Into Automated Systems.";

export function HeroTitle() {
  const root = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const scopeEl = root.current;
      if (!scopeEl) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const lineOne = scopeEl.querySelector<HTMLElement>(".hero-line-one-inner");
      const words = scopeEl.querySelectorAll<HTMLElement>(".hero-word");
      const highlight = scopeEl.querySelector<HTMLElement>(".hero-pen-highlight");

      if (reduced) {
        const targets = [lineOne, ...Array.from(words), highlight].filter(
          (el): el is HTMLElement => el != null,
        );
        gsap.set(targets, { clearProps: "all" });
        if (highlight) gsap.set(highlight, { scaleX: 1, opacity: 1 });
        return;
      }

      if (lineOne) gsap.set(lineOne, { yPercent: 105, opacity: 0 });
      if (words.length) gsap.set(words, { yPercent: 120, opacity: 0, rotate: 2.5 });
      if (highlight) gsap.set(highlight, { scaleX: 0, opacity: 0.6 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (lineOne) {
        tl.to(lineOne, {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
        });
      }

      if (words.length) {
        tl.to(
          words,
          {
            yPercent: 0,
            opacity: 1,
            rotate: 0,
            duration: 0.7,
            stagger: 0.07,
          },
          lineOne ? "-=0.4" : 0,
        );
      }

      if (highlight) {
        tl.to(
          highlight,
          { scaleX: 1, opacity: 1, duration: 0.75, ease: "power2.inOut" },
          "-=0.25",
        );
      }
    },
    { scope: root },
  );

  const words = PEN_LINE.split(" ");

  return (
    <h1
      ref={root}
      id="hero-title"
      className="font-display font-medium text-[clamp(2.4rem,5.3vw,4.75rem)] leading-[0.98] tracking-[-0.04em] text-center w-full max-w-5xl"
    >
      <span className="hero-line-one block overflow-hidden pb-[0.06em]">
        <span className="hero-line-one-inner inline-block">Turn Your Business Bottlenecks</span>
      </span>
      <span className="pen-line pen-line-hero mt-2 block text-[#8a6a12]">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="mr-[0.26em] inline-block overflow-hidden align-bottom last:mr-0">
            <span className="hero-word inline-block will-change-transform">{word}</span>
          </span>
        ))}
        <span
          className="hero-pen-highlight mx-auto mt-1 block h-[0.14em] w-[min(100%,18rem)] origin-left rounded-full bg-[rgba(255,226,92,0.72)]"
          aria-hidden
        />
      </span>
    </h1>
  );
}
