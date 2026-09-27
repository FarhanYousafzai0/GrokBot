import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Magnetic } from "./Magnetic";

const ACTIVITY =
  "10,60,10,100,100,10,100,10,10,100,10,60,100,100,10,10,100,60,100,10,10,100,10,100,60,10,100,10,10,10,100,60,100,10,60,10,10,60,10,100,10,10,10,60,100,10,10,60,10,100,10,100,10,100,10,60,10,10,10,10,10,10,10,10,10,60,60,60,100,10,10,10,10,10,10,10,10,100,100,10,10,60,10,60".split(
    ",",
  );

function cellClass(code: string) {
  if (code === "100") return "bg-ink";
  if (code === "60") return "bg-ink/60";
  return "bg-ink/10";
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
          Hi, I&apos;m Farhan.
          <br />
          <span className="block mt-2">I build web and mobile apps.</span>
        </h1>
        <p
          id="hero-sub"
          className="mt-5 text-[clamp(1rem,1.4vw,1.25rem)] text-ink/70 text-center max-w-2xl reveal"
          style={{ transitionDelay: "100ms" }}
        >
          MERN stack on the web, React Native on phones. Based in Pakistan.
        </p>
        <div
          id="hero-actions"
          className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 reveal"
          style={{ transitionDelay: "200ms" }}
        >
          <Magnetic
            href="/work"
            id="hero-work-btn"
            className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-7 py-4 text-base font-medium shadow-soft transition-transform duration-300"
          >
            See my work <ArrowRight size={16} />
          </Magnetic>
          <div className="flex items-center gap-3 sm:gap-4 bg-paper border border-ink/10 rounded-full px-2 py-2 pr-3 sm:pr-6 shadow-soft max-w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-ink/20 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-ink/5 transition-colors"
              id="hero-hello-btn"
            >
              Say hello
            </Link>
            <div className="flex items-center -space-x-2" aria-label="MongoDB, Express, React, Node">
              <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-mono border-2 border-paper">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-paper text-ink flex items-center justify-center text-xs font-mono border-2 border-ink/20">
                E
              </div>
              <div className="w-8 h-8 rounded-full bg-ink text-paper flex items-center justify-center text-xs font-mono border-2 border-paper">
                R
              </div>
              <div className="w-8 h-8 rounded-full bg-paper text-ink flex items-center justify-center text-xs font-mono border-2 border-ink/20">
                N
              </div>
            </div>
            <span className="text-xs text-ink/60 font-medium ml-1 hidden sm:block">
              MongoDB, Express, React, Node
            </span>
          </div>
        </div>
      </div>

      <div id="hero-stage" className="relative z-20 w-full mt-10 lg:mt-0 lg:absolute lg:bottom-0 lg:left-0">
        <div className="relative h-full w-full flex flex-col items-center lg:justify-end">
          <Image
            id="hero-portrait"
            src="/images/farhan-cutout-bw.png"
            alt="Farhan Yousafzai"
            width={1200}
            height={1510}
            priority
            draggable={false}
            className="relative z-20 h-[clamp(300px,64vw,460px)] lg:h-full w-auto max-w-none object-contain object-bottom select-none reveal"
            style={{ width: "auto", transitionDelay: "300ms" }}
          />

          <div className="hero-cards relative z-30 w-full grid grid-cols-2 md:grid-cols-4 gap-3 px-4 sm:px-6 pt-4 pb-8 border-t border-ink/10 bg-paper lg:contents">
            <div className="hc hc-1 lg:animate-drift-1 reveal" style={{ transitionDelay: "400ms" }}>
              <div className="h-full bg-paper border border-ink/10 shadow-soft rounded-[20px] p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-ink/60 tracking-wider uppercase">Stack</span>
                <span className="font-display font-medium text-lg leading-tight">Web + Mobile</span>
                <span className="text-xs text-ink/70">MERN and React Native</span>
              </div>
            </div>
            <div className="hc hc-2 lg:animate-drift-2 reveal" style={{ transitionDelay: "500ms" }}>
              <div className="h-full bg-paper border border-ink/10 shadow-soft rounded-[20px] p-4 flex flex-row lg:flex-col items-center gap-3">
                <div className="w-12 lg:w-full h-20 lg:h-32 shrink-0 bg-ink/5 rounded-xl border border-ink/10 relative overflow-hidden">
                  <div className="absolute top-2 inset-x-2 h-3 lg:h-4 bg-ink/10 rounded" />
                  <div className="absolute top-7 lg:top-8 inset-x-2 bottom-2 bg-ink/10 rounded" />
                </div>
                <span className="text-[11px] lg:text-[10px] text-ink/60 lg:text-center leading-tight">
                  React Native app (placeholder)
                </span>
              </div>
            </div>
            <div className="hc hc-3 lg:animate-drift-3 reveal" style={{ transitionDelay: "600ms" }}>
              <div className="h-full bg-paper border border-ink/10 shadow-soft rounded-[20px] p-4 flex flex-col gap-3">
                <span className="font-mono text-[10px] text-ink/60 tracking-wider uppercase">
                  Activity (placeholder)
                </span>
                <div className="grid grid-cols-12 gap-[3px] opacity-70">
                  {ACTIVITY.map((code, index) => (
                    <div
                      key={index}
                      className={`aspect-square rounded-[1px] ${cellClass(code)}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-ink">Currently building [placeholder]</span>
              </div>
            </div>
            <div className="hc hc-4 lg:animate-drift-4 reveal" style={{ transitionDelay: "700ms" }}>
              <div className="h-full bg-paper border border-ink/10 shadow-soft rounded-[20px] p-4 flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-40" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-ink" />
                  </span>
                  <span className="text-sm font-medium">Available for projects</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-block text-xs font-medium border border-ink/20 rounded-full px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
                  id="hero-book-btn"
                >
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
