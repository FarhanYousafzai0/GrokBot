import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Layers,
  Smartphone,
} from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectNeighbors } from "@/data/projects";
import { ProductBrowser, ProductPhone, StageBrowser } from "./mocks";

const screens = [
  { caption: "Screen 01: Screen name (placeholder)", kind: "browser", span: true, delay: "0ms" },
  { caption: "Screen 02: Screen name (placeholder)", kind: "phone", offset: true, delay: "80ms" },
  { caption: "Screen 03: Screen name (placeholder)", kind: "browser", span: true, delay: "160ms" },
  { caption: "Screen 04: Screen name (placeholder)", kind: "phone", offset: true, delay: "240ms" },
  { caption: "Screen 05: Screen name (placeholder)", kind: "phone", delay: "320ms" },
] as const;

function Node({
  title,
  meta,
  ink = false,
}: {
  title: string;
  meta: string;
  ink?: boolean;
}) {
  return (
    <div
      className={`rounded-full border shadow-soft px-6 py-3 text-center ${ink ? "bg-ink text-paper border-ink" : "bg-paper border-ink/15"}`}
    >
      <div className="font-medium">{title}</div>
      <div className={`font-mono text-[10px] uppercase tracking-wider ${ink ? "text-paper/60" : "text-ink/50"}`}>
        {meta}
      </div>
    </div>
  );
}

export function CaseStudy({ project }: { project: Project }) {
  const { prev, next } = projectNeighbors(project.slug);

  return (
    <>
      <header className="relative pt-32 md:pt-36 pb-10 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl">
          <Link
            href="/work"
            className="reveal inline-flex items-center gap-2 text-sm font-medium border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            id="case-back-link"
          >
            <ArrowLeft size={16} /> All work
          </Link>
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 reveal" style={{ transitionDelay: "80ms" }}>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">Case study</span>
              <h1 className="font-display font-medium text-[clamp(2.6rem,7.5vw,5.75rem)] leading-[0.95] tracking-[-0.04em]">
                {project.title}
                <br />
                <span className="text-ink/40">(placeholder)</span>
              </h1>
            </div>
            <p className="md:col-span-4 text-lg text-ink/70 reveal" style={{ transitionDelay: "160ms" }}>
              [One sentence about what this product does, placeholder]
            </p>
          </div>
        </div>
      </header>

      <section className="px-5 sm:px-6 container mx-auto max-w-6xl reveal">
        <div className="group relative bg-ink rounded-[32px] h-[clamp(280px,56vw,560px)] overflow-hidden flex items-center justify-center p-10">
          <div className="absolute inset-0 grid-paper pointer-events-none" />
          <div className="relative w-full max-w-4xl flex items-end justify-center">
            {project.mock !== "phone" ? <StageBrowser /> : null}
            {project.mock !== "browser" ? (
              <div
                className={`${project.mock === "phone" ? "w-[28%]" : "absolute right-[2%] -bottom-6 w-[22%]"} transition-transform duration-700 group-hover:-translate-y-3 lift`}
              >
                <ProductPhone frame="border-paper" shadow="shadow-soft-paper" />
              </div>
            ) : null}
          </div>
          <span className="absolute left-6 bottom-6 font-mono text-[11px] uppercase tracking-wider text-paper/60">
            Web and iOS / Android (placeholder screens)
          </span>
        </div>
      </section>

      <section className="px-5 sm:px-6 pt-10 container mx-auto max-w-6xl reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-[24px] shadow-soft overflow-hidden">
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Role</span>
            <p className="font-medium">[Your role, placeholder]</p>
          </div>
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Stack</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[11px] font-mono uppercase px-3 py-1 bg-paper border border-ink/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Timeline</span>
            <p className="font-medium">[Timeline, placeholder]</p>
          </div>
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Links</span>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="text-sm border border-ink/15 rounded-full px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors" id="case-live-link">
                Live site (placeholder)
              </a>
              <a href="#" className="text-sm border border-ink/15 rounded-full px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors" id="case-github-link">
                GitHub (placeholder)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl grid md:grid-cols-12 gap-10 border-b border-ink/10">
        <div className="md:col-span-4 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">01 / Problem</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight leading-[1.02]">
            What needed solving.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 text-lg text-ink/70 space-y-5 reveal" style={{ transitionDelay: "80ms" }}>
          <p>[Describe the problem this project set out to solve and who it was for, placeholder.]</p>
          <p>[Add any constraints: platforms, timeline, existing systems, placeholder.]</p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">02 / Approach</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">How I approached it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {["[Step one, placeholder]", "[Step two, placeholder]", "[Step three, placeholder]"].map((step, index) => (
            <div
              key={step}
              className="bg-paper border border-ink/10 rounded-[24px] p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="font-display text-5xl font-medium text-ink/20">0{index + 1}</span>
              <h3 className="font-display text-2xl font-medium mt-6 mb-3">{step}</h3>
              <p className="text-ink/70">[Describe this step, placeholder.]</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 bg-ink/[0.03] border-y border-ink/10">
        <div className="container mx-auto max-w-6xl">
          <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">03 / Key screens</span>
              <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight">Key screens.</h2>
            </div>
            <p className="text-ink/60 max-w-sm">
              Placeholder frames. Swap in real screenshots from the web and mobile apps.
            </p>
          </div>
          <div className="flex md:grid md:grid-cols-4 gap-4 md:gap-6 items-start overflow-x-auto md:overflow-visible snap-x snap-mandatory -mx-5 px-5 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 pb-4 md:pb-0">
            {screens.map((screen) => (
              <figure
                key={screen.caption}
                className={`group shrink-0 w-[72%] sm:w-[46%] md:w-auto snap-start reveal ${"span" in screen && screen.span ? "md:col-span-2" : ""} ${"offset" in screen && screen.offset ? "md:mt-12" : ""}`}
                style={{ transitionDelay: screen.delay }}
              >
                <div className="bg-ink/[0.03] border border-ink/10 rounded-[24px] p-6 md:p-8 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-soft-lg lift">
                  {screen.kind === "browser" ? (
                    <ProductBrowser />
                  ) : (
                    <div className="w-[62%] mx-auto">
                      <ProductPhone />
                    </div>
                  )}
                </div>
                <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-wider text-ink/60">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">04 / Architecture</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">How it fits together.</h2>
        </div>
        <div className="reveal bg-paper border border-ink/10 rounded-[32px] p-6 sm:p-8 md:p-14 shadow-soft">
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-6 md:gap-24 max-w-2xl mx-auto">
              <Node title="React web app" meta="Web client" />
              <Node title="React Native app" meta="iOS and Android" />
            </div>
            <div className="relative h-16 max-w-2xl mx-auto">
              <div className="absolute left-1/4 top-0 h-8 border-l border-ink/30" />
              <div className="absolute right-1/4 top-0 h-8 border-l border-ink/30" />
              <div className="absolute left-1/4 right-1/4 top-8 border-t border-ink/30" />
              <div className="absolute left-1/2 top-8 h-8 border-l border-ink/30" />
            </div>
            <div className="max-w-xs mx-auto">
              <Node title="Express + Node API" meta="REST API (placeholder)" ink />
            </div>
            <div className="h-12 max-w-2xl mx-auto relative">
              <div className="absolute left-1/2 top-0 h-full border-l border-ink/30" />
            </div>
            <div className="max-w-xs mx-auto">
              <Node title="MongoDB" meta="Database" />
            </div>
          </div>
          <div className="md:hidden flex flex-col items-stretch max-w-xs mx-auto" aria-label="Architecture diagram">
            <Node title="React web app" meta="Web client" />
            <div className="h-3" />
            <Node title="React Native app" meta="iOS and Android" />
            <div className="relative h-10">
              <div className="absolute left-1/2 top-0 h-full border-l border-ink/30" />
              <ChevronDown size={16} className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] text-ink/50" />
            </div>
            <Node title="Express + Node API" meta="REST API (placeholder)" ink />
            <div className="relative h-10">
              <div className="absolute left-1/2 top-0 h-full border-l border-ink/30" />
              <ChevronDown size={16} className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] text-ink/50" />
            </div>
            <Node title="MongoDB" meta="Database" />
          </div>
          <p className="mt-10 text-center text-sm text-ink/60">[Notes on auth, hosting and integrations, placeholder]</p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl border-t border-ink/10">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">05 / Results</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">What came out of it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-[24px] p-8 border hover:-translate-y-1.5 transition-all duration-300 reveal lift bg-ink text-paper border-ink">
            <CheckCircle size={24} className="text-paper/70" />
            <h3 className="font-display text-2xl font-medium mt-8 mb-3">[Result, placeholder]</h3>
            <p className="text-paper/70">[Describe the outcome, placeholder. No numbers until verified.]</p>
          </div>
          <div className="rounded-[24px] p-8 border hover:-translate-y-1.5 transition-all duration-300 reveal lift bg-paper border-ink/10 shadow-soft hover:shadow-soft-lg" style={{ transitionDelay: "80ms" }}>
            <Layers size={24} className="text-ink/60" />
            <h3 className="font-display text-2xl font-medium mt-8 mb-3">[Result, placeholder]</h3>
            <p className="text-ink/70">[Describe the outcome, placeholder. No numbers until verified.]</p>
          </div>
          <div className="rounded-[24px] p-8 border hover:-translate-y-1.5 transition-all duration-300 reveal lift bg-paper border-ink/10 shadow-soft hover:shadow-soft-lg" style={{ transitionDelay: "160ms" }}>
            <Smartphone size={24} className="text-ink/60" />
            <h3 className="font-display text-2xl font-medium mt-8 mb-3">[Result, placeholder]</h3>
            <p className="text-ink/70">[Describe the outcome, placeholder. No numbers until verified.]</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 pb-12 container mx-auto max-w-6xl grid md:grid-cols-2 gap-6">
        <Link
          href={`/work/${prev.slug}`}
          className="group bg-paper border border-ink/10 rounded-[24px] p-8 md:p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift"
          id="case-prev-link"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 inline-flex items-center gap-2">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1 lift" /> Previous
          </span>
          <div className="font-display text-3xl font-medium mt-6">{prev.name}</div>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          className="group bg-ink text-paper rounded-[24px] p-8 md:p-10 hover:-translate-y-1.5 transition-all duration-300 text-right reveal lift"
          style={{ transitionDelay: "80ms" }}
          id="case-next-link"
        >
          <span className="font-mono text-[11px] uppercase tracking-wider text-paper/60 inline-flex items-center gap-2">
            Next <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 lift" />
          </span>
          <div className="font-display text-3xl font-medium mt-6">{next.name}</div>
        </Link>
      </section>
    </>
  );
}
