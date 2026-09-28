import Image from "next/image";
import { contact } from "@/data/contact";
import { Magnetic } from "./Magnetic";

function RolePill() {
  return (
    <p className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-ink px-5 py-2.5 font-display text-sm font-medium uppercase tracking-[0.04em] text-[#fff]">
      <span>Web Developer</span>
      <span className="h-2 w-2 shrink-0 rounded-full bg-[#fff]" aria-hidden="true" />
      <span>App Developer</span>
    </p>
  );
}

function GlobeMark() {
  return (
    <Image
      src="/icons/globe.png"
      alt=""
      width={64}
      height={64}
      aria-hidden
      className="h-16 w-16 shrink-0 animate-globe-spin"
    />
  );
}

function GlobalMark() {
  return (
    <div className="flex items-center gap-4 text-ink">
      <p className="text-right font-display text-lg font-medium uppercase leading-[1.05] tracking-tight">
        Pakistan,
        <br />
        working globally.
      </p>
      <GlobeMark />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-sec relative pt-28 md:pt-32 lg:pt-28 overflow-hidden flex flex-col items-center"
    >
      <div className="absolute inset-0 bg-svg-grid z-0 pointer-events-none" />
      <div className="hidden md:block absolute top-[15%] left-[12%] w-4 h-4 bg-ink/20 sparkle z-0" />
      <div className="hidden md:block absolute top-[20%] right-[18%] w-3 h-3 bg-ink/20 sparkle z-0" />
      <div className="hidden lg:block absolute top-[40%] left-[22%] w-5 h-5 bg-ink/20 sparkle z-0" />
      <div className="hidden lg:block absolute top-[35%] right-[10%] w-4 h-4 bg-ink/20 sparkle z-0" />

      <div id="hero-copy" className="container mx-auto px-5 sm:px-6 relative z-30 flex flex-col items-center mt-2">
        <h1
          id="hero-title"
          className="font-display font-medium text-[clamp(2.4rem,5.3vw,4.75rem)] leading-[0.98] tracking-[-0.04em] text-center w-full max-w-5xl reveal"
        >
          Turn Your Business Bottlenecks
          <br />
          <span className="block mt-2">Into Automated Systems.</span>
        </h1>
        <p
          id="hero-sub"
          className="mt-5 text-[clamp(1rem,1.4vw,1.25rem)] text-ink/70 text-center max-w-3xl reveal"
          style={{ transitionDelay: "100ms" }}
        >
          I help businesses replace repetitive tasks, disconnected tools, and inefficient workflows with custom
          software, AI agents, and automation systems built around how their business actually works.
        </p>
        <div
          id="hero-actions"
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 reveal"
          style={{ transitionDelay: "200ms" }}
        >
          <Magnetic
            href={contact.whatsappHref}
            id="hero-call-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#2436C5] text-[#fff] rounded-full px-9 py-4 text-sm font-medium uppercase tracking-[0.08em] shadow-soft transition-transform duration-300 hover:bg-[#1c2ba0]"
          >
            Get a quote here
          </Magnetic>
        </div>
      </div>

      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <filter id="portrait-edge" x="-8%" y="-8%" width="116%" height="116%" colorInterpolationFilters="sRGB">
          <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expanded" />
          <feFlood floodColor="#ffffff" result="light" />
          <feComposite in="light" in2="expanded" operator="in" result="edge" />
          <feMerge>
            <feMergeNode in="edge" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>
      <div id="hero-stage" className="relative z-20 w-full mt-4">
        <div className="relative w-full flex flex-col items-center">
          <Image
            id="hero-portrait"
            src="/images/farhan-seated.png"
            alt="Farhan Yousafzai"
            width={691}
            height={954}
            priority
            quality={90}
            sizes="(min-width: 1024px) 740px, 92vw"
            draggable={false}
            className="relative z-10 block mx-auto max-w-[740px] object-contain object-bottom select-none reveal"
            style={{ width: "var(--pw)", height: "auto", maxWidth: "740px", transitionDelay: "300ms" }}
          />
          <div className="mt-6 flex w-full items-end justify-between gap-4 px-5 sm:px-8 lg:hidden">
            <RolePill />
            <GlobalMark />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-6 z-30 hidden lg:block">
        <RolePill />
      </div>
      <div className="absolute bottom-5 right-6 z-30 hidden lg:block">
        <GlobalMark />
      </div>
    </section>
  );
}
