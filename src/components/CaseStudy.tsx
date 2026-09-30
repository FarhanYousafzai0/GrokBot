import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { projectNeighbors } from "@/data/projects";
import { BlogReadingProgress } from "./BlogReadingProgress";
import { CaseStudyPanel } from "./CaseStudyPanel";
import { CaseStudyHeroImage } from "./CaseStudyHeroImage";
import { HashLink } from "./HashLink";

export function CaseStudy({ project }: { project: Project }) {
  const { prev, next } = projectNeighbors(project.slug);

  return (
    <article>
      <BlogReadingProgress />

      <section className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-6 md:pb-14 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-svg-grid" />
        <div className="relative container mx-auto max-w-6xl">
          <div
            className="reveal grid items-start gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-6 lg:gap-10"
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex flex-col justify-center">
              <h1 className="max-w-xl font-display text-[clamp(2.35rem,5.5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                {project.name}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink/78 sm:mt-6 sm:text-lg">{project.headline}</p>
              <HashLink
                href="#case-study"
                id="case-read-more"
                className="group mt-8 inline-flex w-fit max-w-full items-center rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-paper shadow-[0_12px_32px_-16px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="pr-4">Explore case</span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight size={18} strokeWidth={2} />
                </span>
              </HashLink>
            </div>

            <CaseStudyHeroImage project={project} />
          </div>
        </div>
      </section>

      <CaseStudyPanel project={project} />

      <footer className="container mx-auto max-w-6xl border-t border-ink/10 px-5 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={`/work/${prev.slug}`}
            id="case-prev-link"
            className="group font-mono text-[11px] uppercase tracking-wider text-ink/55 transition-colors hover:text-ink"
          >
            <span className="text-ink/40">Previous · </span>
            {prev.name}
          </Link>
          <Link
            href={`/work/${next.slug}`}
            id="case-next-link"
            className="group font-mono text-[11px] uppercase tracking-wider text-ink/55 transition-colors hover:text-ink sm:text-right"
          >
            <span className="text-ink/40">Next · </span>
            {next.name}
          </Link>
        </div>
      </footer>
    </article>
  );
}
