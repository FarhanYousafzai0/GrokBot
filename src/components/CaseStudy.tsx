import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Layers,
  Shield,
} from "lucide-react";
import Link from "next/link";
import type { ArchNode, OutcomeIcon, Project } from "@/data/projects";
import { HashLink } from "./HashLink";
import { projectNeighbors } from "@/data/projects";
import { ProductPhone, StageBrowser } from "./mocks";
import { ProjectImage } from "./ProjectImage";

const outcomeIcons: Record<OutcomeIcon, typeof CheckCircle> = {
  check: CheckCircle,
  layers: Layers,
  shield: Shield,
};

function Node({ title, meta, ink = false }: ArchNode) {
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
  const nodes = project.architecture;
  const mid = nodes.find((node) => node.ink) ?? nodes[Math.min(1, nodes.length - 1)];
  const rest = nodes.filter((node) => node !== mid);

  return (
    <>
      <header className="relative pt-32 md:pt-36 pb-10 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl">
          <HashLink
            href="/#work"
            className="reveal inline-flex items-center gap-2 text-sm font-medium border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            id="case-back-link"
          >
            <ArrowLeft size={16} /> Back to work
          </HashLink>
          <div className="mt-10 grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8 reveal" style={{ transitionDelay: "80ms" }}>
              <h1 className="font-display font-medium text-[clamp(2.6rem,7.5vw,5.75rem)] leading-[0.95] tracking-[-0.04em]">
                {project.title}
              </h1>
            </div>
            <p className="md:col-span-4 text-lg text-ink/70 reveal" style={{ transitionDelay: "160ms" }}>
              {project.headline}
            </p>
          </div>
        </div>
      </header>

      <section className="px-5 sm:px-6 container mx-auto max-w-6xl reveal">
        <div className="relative rounded-[32px] overflow-hidden bg-ink border border-ink/10">
          <ProjectImage
            src={project.image}
            alt={project.name}
            width={1600}
            height={1000}
            sizes="(min-width: 1024px) 1152px, 92vw"
            className="w-full h-auto object-contain"
            priority
            fallback={
              <div className="relative min-h-[280px] flex items-center justify-center p-10">
                <div className="absolute inset-0 grid-paper pointer-events-none" />
                <div className="relative w-full max-w-4xl flex items-end justify-center">
                  <StageBrowser />
                  {project.mock !== "browser" ? (
                    <div className="absolute right-[2%] -bottom-6 w-[22%]">
                      <ProductPhone frame="border-paper" shadow="shadow-soft-paper" />
                    </div>
                  ) : null}
                </div>
              </div>
            }
          />
        </div>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-ink/50">{project.heroCaption}</p>
      </section>

      <section className="px-5 sm:px-6 pt-10 container mx-auto max-w-6xl reveal">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-[24px] shadow-soft overflow-hidden">
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Role</span>
            <p className="font-medium">{project.role}</p>
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
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Scope</span>
            <p className="font-medium">{project.timeline}</p>
          </div>
          <div className="p-6 md:p-7 bg-paper">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 block mb-3">Type</span>
            <p className="font-medium">{project.type}</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl grid md:grid-cols-12 gap-10 border-b border-ink/10">
        <div className="md:col-span-4 reveal">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight leading-[1.02]">
            What needed solving.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 text-lg text-ink/70 space-y-5 reveal" style={{ transitionDelay: "80ms" }}>
          {project.problem.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">How I approached it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {project.approach.map((step, index) => (
            <div
              key={step.title}
              className="bg-paper border border-ink/10 rounded-[24px] p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="font-display text-5xl font-medium text-ink/20">0{index + 1}</span>
              <h3 className="font-display text-2xl font-medium mt-6 mb-3">{step.title}</h3>
              <p className="text-ink/70">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">How it fits together.</h2>
        </div>
        <div className="reveal bg-paper border border-ink/10 rounded-[32px] p-6 sm:p-8 md:p-14 shadow-soft">
          <div className="hidden md:flex flex-col items-center gap-0">
            {rest.length > 0 ? (
              <div className={`grid gap-6 max-w-3xl w-full ${rest.length === 1 ? "grid-cols-1 max-w-xs" : "grid-cols-2"}`}>
                {rest.map((node) => (
                  <Node key={node.title} {...node} />
                ))}
              </div>
            ) : null}
            {rest.length > 0 && mid ? (
              <div className="relative h-16 w-full max-w-2xl">
                <div className="absolute left-1/4 top-0 h-8 border-l border-ink/30" />
                <div className="absolute right-1/4 top-0 h-8 border-l border-ink/30" />
                <div className="absolute left-1/4 right-1/4 top-8 border-t border-ink/30" />
                <div className="absolute left-1/2 top-8 h-8 border-l border-ink/30" />
              </div>
            ) : null}
            {mid ? (
              <div className="max-w-xs w-full">
                <Node {...mid} />
              </div>
            ) : null}
          </div>
          <div className="md:hidden flex flex-col items-stretch max-w-xs mx-auto gap-3" aria-label="Architecture diagram">
            {nodes.map((node, index) => (
              <div key={node.title}>
                <Node {...node} />
                {index < nodes.length - 1 ? (
                  <div className="relative h-8">
                    <div className="absolute left-1/2 top-0 h-full border-l border-ink/30" />
                    <ChevronDown size={16} className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] text-ink/50" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-ink/60">{project.architectureNote}</p>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl border-t border-ink/10">
        <div className="reveal">
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">What came out of it.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {project.outcomes.map((outcome, index) => {
            const Icon = outcomeIcons[outcome.icon];
            const featured = index === 0;
            return (
              <div
                key={outcome.title}
                className={`rounded-[24px] p-8 border hover:-translate-y-1.5 transition-all duration-300 reveal lift ${featured ? "bg-ink text-paper border-ink" : "bg-paper border-ink/10 shadow-soft hover:shadow-soft-lg"}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon size={24} className={featured ? "text-paper/70" : "text-ink/60"} />
                <h3 className="font-display text-2xl font-medium mt-8 mb-3">{outcome.title}</h3>
                <p className={featured ? "text-paper/70" : "text-ink/70"}>{outcome.body}</p>
              </div>
            );
          })}
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
