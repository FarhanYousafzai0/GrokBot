import { AboutTeaser, HomeCTA, Process } from "@/components/Bands";
import { ArcCarousel } from "@/components/ArcCarousel";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ArcCarousel
        projects={projects}
        sectionId="work"
        eyebrow="01 / Selected work"
        title="Things I've built."
        subtitle="Web apps, mobile apps, and the APIs behind them. Every project shown here is a placeholder."
        cta={{ href: "/work", label: "All work", id: "work-all-btn" }}
        caseLinkId="work-case-link"
        showFeatures
      />
      <Process />
      <AboutTeaser />
      <HomeCTA />
    </>
  );
}
