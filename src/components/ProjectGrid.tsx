"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Category, Project } from "@/data/projects";
import { ProductBrowser, ProductPhone } from "./mocks";

type Filter = "all" | Category;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
];

function Tile({ project }: { project: Project }) {
  if (project.featured) {
    const ink = project.tile === "ink";
    return (
      <div className={`${ink ? "bg-ink" : "bg-ink/[0.03] border-b border-ink/10"} h-[360px] md:h-[420px] p-8 md:p-10 flex items-center justify-center overflow-hidden`}>
        <div className="relative w-full max-w-md flex items-end justify-center">
          <div className="w-[78%]">
            <ProductBrowser shadow={ink ? "shadow-soft-paper" : "shadow-soft"} />
          </div>
          <div className="absolute right-0 -bottom-4 w-[26%] transition-transform duration-500 group-hover:-translate-y-2 group-hover:translate-x-1 lift">
            <ProductPhone frame={ink ? "border-paper" : "border-ink/10"} shadow={ink ? "shadow-soft-paper" : "shadow-soft-lg"} />
          </div>
        </div>
      </div>
    );
  }

  if (project.mock === "phone") {
    return (
      <div className="bg-ink/[0.03] border-b border-ink/10 h-[280px] p-8 md:p-10 flex items-center justify-center overflow-hidden">
        <div className="flex items-end gap-4 w-full max-w-[260px] justify-center">
          <div className="w-[46%] transition-transform duration-500 group-hover:-translate-y-2 lift">
            <ProductPhone />
          </div>
          <div className="w-[40%] mb-6 opacity-90">
            <ProductPhone />
          </div>
        </div>
      </div>
    );
  }

  const ink = project.tile === "ink";
  return (
    <div className={`${ink ? "bg-ink" : "bg-ink/[0.03] border-b border-ink/10"} h-[280px] p-8 md:p-10 flex items-center justify-center overflow-hidden`}>
      <div className="w-[82%] max-w-sm transition-transform duration-500 group-hover:-translate-y-2 lift">
        <ProductBrowser shadow={ink ? "shadow-soft-paper" : "shadow-soft"} />
      </div>
    </div>
  );
}

function CardBody({ project }: { project: Project }) {
  return (
    <div className="p-7 md:p-8 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Project {project.num}</span>
        <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-ink text-paper">{project.type}</span>
      </div>
      <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight">{project.name}</h3>
      <p className="text-ink/70">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-mono uppercase px-3 py-1 bg-paper border border-ink/10 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/work/${project.slug}`}
        className="mt-2 inline-flex items-center gap-2 font-medium"
        id={`work-card-link-${project.num}`}
      >
        View case study <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 lift" />
      </Link>
    </div>
  );
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const counts = useMemo(
    () => ({
      all: projects.length,
      web: projects.filter((project) => project.categories.includes("web")).length,
      mobile: projects.filter((project) => project.categories.includes("mobile")).length,
    }),
    [projects],
  );

  let plainIndex = 0;

  return (
    <section id="all-projects" className="px-5 sm:px-6 pt-20 md:pt-28 pb-12 container mx-auto max-w-6xl scroll-mt-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 reveal">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">All projects</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight">Everything, filtered.</h2>
        </div>
        <div className="flex items-center gap-2 bg-paper border border-ink/10 rounded-full p-1.5 shadow-soft self-start md:self-end max-w-full" role="tablist">
          {filters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                className={`filter-pill rounded-full px-4 sm:px-5 py-2.5 text-sm font-medium transition-colors ${selected ? "bg-ink text-paper" : "text-ink hover:bg-ink/5"}`}
                aria-selected={selected}
                onClick={() => setFilter(item.id)}
              >
                {item.label} <span className="font-mono text-[11px] opacity-60 ml-1">{counts[item.id]}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div id="project-grid" className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => {
          const show = filter === "all" || project.categories.includes(filter);
          const span = Boolean(project.featured && filter === "all");
          const delay = project.featured ? "0ms" : plainIndex % 2 === 0 ? "80ms" : "0ms";
          if (!project.featured) plainIndex += 1;
          return (
            <article
              key={project.slug}
              data-featured={project.featured ? "1" : undefined}
              className={`project-card group bg-paper rounded-[24px] border border-ink/10 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 overflow-hidden reveal lift ${span ? "md:col-span-2" : ""} ${show ? "" : "hidden"}`}
              style={{ transitionDelay: delay }}
              data-category={project.categories.join(" ")}
            >
              {project.featured ? (
                <div className="grid md:grid-cols-5">
                  <div className={`md:col-span-3 ${project.imageEnd ? "md:order-2" : ""}`}>
                    <Tile project={project} />
                  </div>
                  <div className={`md:col-span-2 flex items-center ${project.imageEnd ? "md:order-1" : ""}`}>
                    <CardBody project={project} />
                  </div>
                </div>
              ) : (
                <>
                  <Tile project={project} />
                  <CardBody project={project} />
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
