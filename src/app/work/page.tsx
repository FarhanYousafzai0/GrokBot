import type { Metadata } from "next";
import { NextStep } from "@/components/Bands";
import { ArcCarousel } from "@/components/ArcCarousel";
import { ProjectGrid } from "@/components/ProjectGrid";
import { gridProjects, projects } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <header className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">Work</span>
          </div>
          <div className="reveal" style={{ transitionDelay: "80ms" }}>
            <h1 className="font-display font-medium text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em]">
              Things I&apos;ve built.
            </h1>
            <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.25rem)] text-ink/70 max-w-xl">
              Web apps, mobile apps, and the APIs behind them. The projects on this page are placeholders.
            </p>
          </div>
        </div>
      </header>
      <ArcCarousel
        projects={projects}
        sectionId="featured"
        eyebrow="Featured"
        title="Featured work."
        subtitle="Drag, swipe or use the arrows to browse. Every project here is a placeholder for now."
        cta={{ href: "#all-projects", label: "Browse all projects", id: "featured-all-btn" }}
        caseLinkId="featured-case-link"
      />
      <ProjectGrid projects={gridProjects()} />
      <NextStep id="cta-contact-btn-work" />
    </>
  );
}
