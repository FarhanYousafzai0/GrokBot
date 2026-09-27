"use client";

import { ArrowLeft, ArrowRight, Layers, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";
import { memo, useEffect, useRef, useState, type MutableRefObject } from "react";
import type { Project } from "@/data/projects";
import { Magnetic } from "./Magnetic";
import { ArcMock } from "./mocks";

type ArcApi = {
  go: (direction: number) => void;
  onActive: (index: number) => void;
};

type CarouselProps = {
  projects: Project[];
  sectionId: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { href: string; label: string; id: string };
  caseLinkId: string;
  showFeatures?: boolean;
};

const features = [
  {
    icon: Monitor,
    title: "Web apps",
    body: "React frontends backed by Node and Express APIs, with MongoDB for data.",
    delay: "0ms",
  },
  {
    icon: Smartphone,
    title: "Mobile apps",
    body: "React Native apps for iOS and Android, built from one codebase.",
    delay: "80ms",
  },
  {
    icon: Layers,
    title: "End to end",
    body: "From the database and API through to the web and mobile clients.",
    delay: "160ms",
  },
];

const ArcEngine = memo(function ArcEngine({
  projects,
  api,
}: {
  projects: Project[];
  api: MutableRefObject<ArcApi>;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const cards = Array.from(wrap.querySelectorAll<HTMLElement>(".arc-card"));
    const cursor = wrap.querySelector<HTMLElement>(".arc-cursor");
    const count = cards.length;
    if (count === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let offset = 0;
    let target = 0;
    let step = 16;
    let per = 240;
    let active = -1;
    let dragging = false;
    let startX = 0;
    let startT = 0;
    let lastX = 0;
    let lastT = 0;
    let vel = 0;
    let moved = 0;
    let downCard: HTMLElement | null = null;
    let lastInteract = performance.now();
    let hovering = false;
    let inView = true;
    let wheelTimer: number | undefined;
    let raf = 0;

    const rel = (index: number) => {
      let distance = (((index - offset) % count) + count) % count;
      if (distance > count / 2) distance -= count;
      return distance;
    };

    const render = (force: boolean) => {
      let best = 0;
      let bestDistance = 99;
      cards.forEach((card, index) => {
        const distance = rel(index);
        const angle = -distance * step;
        const abs = Math.abs(angle);
        card.style.setProperty("--a", `${angle.toFixed(3)}deg`);
        const opacity = abs < 62 ? 1 : Math.max(0, 1 - (abs - 62) / 16);
        card.style.opacity = opacity.toFixed(3);
        card.style.pointerEvents = opacity < 0.3 ? "none" : "auto";
        card.style.zIndex = String(100 - Math.round(Math.abs(distance) * 10));
        if (Math.abs(distance) < bestDistance) {
          bestDistance = Math.abs(distance);
          best = index;
        }
      });
      cards.forEach((card, index) => card.classList.toggle("is-active", index === best));
      if (best !== active || force) {
        if (best !== active) {
          active = best;
          api.current.onActive(best);
        }
      }
    };

    const layout = () => {
      const width = wrap.clientWidth;
      let cardWidth = Math.round(Math.max(132, Math.min(240, width * 0.165)));
      if (width < 1024) cardWidth = Math.round(Math.max(150, Math.min(210, width * 0.22)));
      if (width < 640) cardWidth = Math.round(Math.max(132, Math.min(190, width * 0.44)));
      const cardHeight = Math.round(cardWidth * 1.42);
      const radius = Math.round(Math.max(width * 0.62, cardWidth * 2.6));
      const gap = width < 640 ? 14 : 22;
      step = ((2 * Math.asin(Math.min(0.95, (cardWidth + gap) / (2 * radius))) * 180) / Math.PI);
      const depth = width < 640 ? radius * 0.2 : radius * 0.34;
      per = cardWidth + gap;
      wrap.style.setProperty("--cw", `${cardWidth}px`);
      wrap.style.setProperty("--ch", `${cardHeight}px`);
      wrap.style.setProperty("--r", `${radius}px`);
      wrap.style.setProperty("--shift", `${radius - depth}px`);
      wrap.style.setProperty("--persp", `${Math.round(Math.max(700, width * 0.85))}px`);
      wrap.style.height = `${Math.round(cardHeight * (width < 640 ? 1.18 : 1.3) + 24)}px`;
      render(true);
    };

    const touch = () => {
      lastInteract = performance.now();
    };

    const go = (direction: number) => {
      target = Math.round(target) + direction;
      touch();
      cards.forEach((card) => card.classList.remove("tapped"));
    };
    api.current.go = go;

    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        go(1);
        event.preventDefault();
      }
      if (event.key === "ArrowLeft") {
        go(-1);
        event.preventDefault();
      }
    };

    const onPointerDown = (event: globalThis.PointerEvent) => {
      dragging = true;
      moved = 0;
      startX = lastX = event.clientX;
      startT = target = offset;
      lastT = performance.now();
      vel = 0;
      downCard = (event.target as HTMLElement).closest(".arc-card");
      touch();
      wrap.setPointerCapture?.(event.pointerId);
      if (cursor) cursor.textContent = "Dragging";
    };

    const onPointerMove = (event: globalThis.PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      if (event.pointerType === "mouse") {
        const hovered = dragging ? null : (event.target as HTMLElement).closest(".arc-card");
        cards.forEach((card) => card.classList.toggle("hov", card === hovered));
      }
      if (cursor && event.pointerType === "mouse") {
        cursor.style.left = `${event.clientX - rect.left}px`;
        cursor.style.top = `${event.clientY - rect.top}px`;
        cursor.classList.add("show");
        if (!dragging) {
          cursor.textContent = (event.target as HTMLElement).closest(".arc-card") ? "View" : "Drag";
        }
      }
      if (!dragging) return;
      const dx = event.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      target = startT - dx / per;
      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      vel = 0.8 * vel + 0.2 * ((event.clientX - lastX) / dt);
      lastX = event.clientX;
      lastT = now;
      touch();
    };

    const end = () => {
      if (!dragging) return;
      dragging = false;
      if (moved < 6 && downCard) {
        const index = cards.indexOf(downCard);
        const distance = rel(index);
        if (Math.abs(distance) < 0.5) downCard.classList.toggle("tapped");
        target = Math.round(offset + distance);
      } else if (!reduce) {
        target = Math.round(target - (vel * 220) / per);
      } else {
        target = Math.round(target);
      }
      downCard = null;
      touch();
      if (cursor) cursor.textContent = "Drag";
    };

    const onEnter = () => {
      hovering = true;
    };
    const onLeave = () => {
      hovering = false;
      cards.forEach((card) => card.classList.remove("hov"));
      cursor?.classList.remove("show");
    };

    const onWheel = (event: globalThis.WheelEvent) => {
      if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        event.preventDefault();
        target += event.deltaX / per;
        touch();
        window.clearTimeout(wheelTimer);
        wheelTimer = window.setTimeout(() => {
          target = Math.round(target);
        }, 160);
      }
    };

    const keyListener: EventListener = (event) => onKey(event as globalThis.KeyboardEvent);
    const downListener: EventListener = (event) => onPointerDown(event as globalThis.PointerEvent);
    const moveListener: EventListener = (event) => onPointerMove(event as globalThis.PointerEvent);
    const wheelListener: EventListener = (event) => onWheel(event as globalThis.WheelEvent);
    wrap.addEventListener("keydown", keyListener);
    wrap.addEventListener("pointerdown", downListener);
    wrap.addEventListener("pointermove", moveListener);
    wrap.addEventListener("pointerup", end);
    wrap.addEventListener("pointercancel", end);
    wrap.addEventListener("pointerenter", onEnter);
    wrap.addEventListener("pointerleave", onLeave);
    wrap.addEventListener("wheel", wheelListener, { passive: false });

    const viewObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              inView = entry.isIntersecting;
            });
          })
        : null;
    viewObserver?.observe(wrap);

    const resizeObserver = new ResizeObserver(layout);
    resizeObserver.observe(wrap);

    let prev = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(64, now - prev);
      prev = now;
      if (!reduce && !dragging && !hovering && inView && now - lastInteract > 3500) {
        target += 0.00018 * dt;
      }
      const k = reduce ? 1 : 1 - Math.pow(0.86, dt / 16);
      const before = offset;
      offset += (target - offset) * k;
      if (Math.abs(target - offset) < 0.0005) offset = target;
      if (Math.abs(offset) > count * 40) {
        const turns = count * Math.round(offset / count);
        offset -= turns;
        target -= turns;
      }
      if (offset !== before) render(false);
      raf = requestAnimationFrame(tick);
    };

    layout();
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(wheelTimer);
      resizeObserver.disconnect();
      viewObserver?.disconnect();
      wrap.removeEventListener("keydown", keyListener);
      wrap.removeEventListener("pointerdown", downListener);
      wrap.removeEventListener("pointermove", moveListener);
      wrap.removeEventListener("pointerup", end);
      wrap.removeEventListener("pointercancel", end);
      wrap.removeEventListener("pointerenter", onEnter);
      wrap.removeEventListener("pointerleave", onLeave);
      wrap.removeEventListener("wheel", wheelListener);
    };
  }, [api, projects]);

  return (
    <div
      ref={wrapRef}
      className="arc-wrap relative mt-8 md:mt-10"
      data-arc
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Projects carousel. Drag, swipe or use arrow keys."
    >
      <div className="arc-stage">
        {projects.map((project) => (
          <div
            key={project.slug}
            className={`arc-card${project.dark ? " dark" : ""}`}
            role="button"
            tabIndex={-1}
            aria-label={project.name}
          >
            <div className={`arc-inner ${project.dark ? "bg-ink" : "bg-paper"}`}>
              <div
                className={`absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider ${project.dark ? "text-paper/60" : "text-ink/60"}`}
              >
                <span>{project.num}</span>
                <span>{project.type}</span>
              </div>
              <ArcMock mock={project.mock} dark={project.dark} />
              <div className="ht" />
            </div>
          </div>
        ))}
      </div>
      <div className="arc-cursor" aria-hidden="true">
        Drag
      </div>
    </div>
  );
});

function LabelBar({
  projects,
  api,
  caseLinkId,
}: {
  projects: Project[];
  api: MutableRefObject<ArcApi>;
  caseLinkId: string;
}) {
  const [index, setIndex] = useState(0);
  const [swap, setSwap] = useState(false);
  const indexRef = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  api.current.onActive = (next) => {
    if (indexRef.current === next) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.clearTimeout(timer.current);
    if (reduce) {
      indexRef.current = next;
      setIndex(next);
      setSwap(false);
      return;
    }
    setSwap(true);
    timer.current = window.setTimeout(() => {
      indexRef.current = next;
      setIndex(next);
      requestAnimationFrame(() => setSwap(false));
    }, 160);
  };

  const project = projects[index] ?? projects[0];

  return (
    <div className="relative container mx-auto px-5 sm:px-6 max-w-4xl mt-6 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4">
      <button
        type="button"
        className="arc-btn arc-prev order-2 sm:order-1 w-12 h-12 shrink-0 rounded-full border border-paper/25 flex items-center justify-center"
        aria-label="Previous project"
        onClick={() => api.current.go(-1)}
      >
        <ArrowLeft size={18} />
      </button>
      <div
        className="arc-label order-1 sm:order-2 w-full sm:w-auto sm:flex-1 min-w-0 bg-paper text-ink rounded-[24px] sm:rounded-full pl-5 pr-2 py-2 sm:py-2"
        aria-live="polite"
      >
        <div className={`arc-label-inner flex flex-wrap sm:flex-nowrap items-center gap-x-4 gap-y-2 justify-between ${swap ? "swap" : ""}`}>
          <div className="min-w-0 sm:shrink-0 py-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
              Project {project.num}, {project.type}
            </div>
            <div className="font-display text-lg font-medium leading-tight sm:whitespace-nowrap">
              {project.name}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 order-3 sm:order-none w-full sm:w-auto sm:flex-1 sm:min-w-0 sm:justify-center">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase px-2.5 py-1 border border-ink/15 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <Link
            href={`/work/${project.slug}`}
            id={caseLinkId}
            className="shrink-0 inline-flex items-center gap-1.5 bg-ink text-paper rounded-full px-4 py-2.5 text-sm font-medium"
          >
            View case study <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      <button
        type="button"
        className="arc-btn arc-next order-3 w-12 h-12 shrink-0 rounded-full border border-paper/25 flex items-center justify-center"
        aria-label="Next project"
        onClick={() => api.current.go(1)}
      >
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

export function ArcCarousel({
  projects,
  sectionId,
  eyebrow,
  title,
  subtitle,
  cta,
  caseLinkId,
  showFeatures = false,
}: CarouselProps) {
  const api = useRef<ArcApi>({
    go: () => {},
    onActive: () => {},
  });

  return (
    <section id={sectionId} className="relative bg-ink text-paper overflow-hidden py-[clamp(4.5rem,9vw,8rem)]">
      <div className="absolute inset-0 grid-paper pointer-events-none" />
      <div className="relative container mx-auto px-5 sm:px-6 max-w-3xl text-center reveal">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-paper/60 mb-4 block">{eyebrow}</span>
        <h2 className="font-display font-medium text-[clamp(2.25rem,5.2vw,4.5rem)] leading-[0.98] tracking-[-0.035em]">
          {title}
        </h2>
        <p className="mt-5 text-[clamp(1rem,1.3vw,1.125rem)] text-paper/65 max-w-xl mx-auto">{subtitle}</p>
        <Magnetic
          href={cta.href}
          id={cta.id}
          className="mt-8 inline-flex items-center gap-2 border border-paper/25 text-paper rounded-full px-6 py-3 text-sm font-medium hover:bg-paper hover:text-ink transition-colors duration-300"
        >
          {cta.label} <ArrowRight size={16} />
        </Magnetic>
      </div>
      <ArcEngine projects={projects} api={api} />
      <LabelBar projects={projects} api={api} caseLinkId={caseLinkId} />
      {showFeatures ? (
        <div className="relative container mx-auto px-5 sm:px-6 max-w-5xl mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center md:text-left reveal"
                style={{ transitionDelay: feature.delay }}
              >
                <div className="w-11 h-11 rounded-full border border-paper/20 flex items-center justify-center mx-auto md:mx-0">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-xl font-medium mt-5">{feature.title}</h3>
                <p className="mt-2 text-sm text-paper/60 max-w-xs mx-auto md:mx-0">{feature.body}</p>
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
