import type { Project } from "@/data/projects";
import { ProductPhone, StageBrowser } from "./mocks";
import { ProjectImage } from "./ProjectImage";

export function CaseStudyHeroImage({ project }: { project: Project }) {
  if (!project.image) {
    return (
      <div className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden rounded-[22px] border border-ink/10 bg-ink p-8 shadow-soft sm:rounded-[26px] md:rounded-[30px]">
        <div className="relative w-full max-w-md">
          <StageBrowser />
          {project.mock !== "browser" ? (
            <div className="absolute -bottom-4 right-0 w-[28%]">
              <ProductPhone frame="border-paper" shadow="shadow-soft-paper" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <figure className="relative w-full md:justify-self-end">
      <div className="relative w-full overflow-hidden rounded-[22px] shadow-soft ring-1 ring-ink/10 sm:rounded-[26px] md:rounded-[30px]">
        <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/92 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/70 shadow-sm backdrop-blur-[2px] sm:left-5 sm:top-5">
          {project.type}
        </span>
        <ProjectImage
          src={project.image}
          alt={project.name}
          width={1672}
          height={941}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="block h-auto w-full"
          priority
        />
      </div>
      {project.heroCaption ? (
        <figcaption className="mt-3 px-1 font-mono text-[10px] uppercase tracking-wider text-ink/45">
          {project.heroCaption}
        </figcaption>
      ) : null}
    </figure>
  );
}
