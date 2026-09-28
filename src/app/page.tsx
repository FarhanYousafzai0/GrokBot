import { AboutTeaser, ContactSection, Process } from "@/components/Bands";
import { ArcCarousel } from "@/components/ArcCarousel";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Writing } from "@/components/Writing";
import { gridProjects, projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ArcCarousel
        projects={projects}
        sectionId="work"
        title="Things I've built."
        subtitle="Web apps, mobile apps, and the APIs behind them. Every project shown here is a placeholder."
        cta={{ href: "/#all-projects", label: "All work", id: "work-all-btn" }}
        caseLinkId="work-case-link"
      />
      <ProjectGrid projects={gridProjects()} />
      <Writing />
      <Process />
      <AboutTeaser />
      <ContactSection />
    </>
  );
}
