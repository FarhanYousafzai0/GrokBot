import { AboutTeaser, ContactSection, Process } from "@/components/Bands";
import { ArcCarousel } from "@/components/ArcCarousel";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Writing } from "@/components/Writing";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ArcCarousel
        projects={projects}
        sectionId="work"
        title="Things I've built."
        subtitle="Booking systems, LMS platforms, operations dashboards, and a desktop coding agent — shipped end to end."
        caseLinkId="work-case-link"
      />
      <Writing />
      <Process />
      <AboutTeaser />
      <ContactSection />
    </>
  );
}
