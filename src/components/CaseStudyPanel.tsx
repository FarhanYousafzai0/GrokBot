import type { ReactNode } from "react";
import type { CaseTestCase, Project } from "@/data/projects";
import { CaseStudyRating } from "./CaseStudyRating";

function systemDesignCopy(project: Project) {
  if (project.systemDesign?.length) return project.systemDesign;
  return [
    project.architectureNote,
    ...project.architecture.map((node) => `${node.title} — ${node.meta}`),
  ];
}

function websiteCopy(project: Project) {
  if (project.website?.length) return project.website;
  return [project.heroCaption, ...project.outcomes.map((item) => item.body)];
}

function testCasesCopy(project: Project): CaseTestCase[] {
  if (project.testCases?.length) return project.testCases;
  return project.approach.map((step) => ({
    title: step.title,
    steps: [step.body],
    expected: "Behaviour matches the approach described above in production.",
  }));
}

function CaseBlock({
  id,
  num,
  title,
  children,
  first,
}: {
  id: string;
  num: string;
  title: string;
  children: ReactNode;
  first?: boolean;
}) {
  return (
    <div
      id={id}
      className={`scroll-mt-32 ${first ? "" : "border-t border-paper/10 pt-12 md:pt-14"}`.trim()}
    >
      <div className="flex flex-col gap-8 md:flex-row md:gap-10 lg:gap-14">
        <div className="case-study-accent hidden w-8 shrink-0 md:block" aria-hidden>
          <div className="case-study-accent-mark mx-auto h-2 w-2 rotate-45 border border-[#E10600] bg-[#E10600]" />
          <div className="case-study-accent-line mx-auto mt-2 w-px bg-gradient-to-b from-[#E10600] via-[#E10600]/70 to-transparent" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-flex rounded-full border border-paper/25 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-paper/70">
            {num}
          </span>
          <h3 className="mt-5 font-display text-[clamp(1.65rem,3vw,2.35rem)] font-medium leading-tight tracking-tight">
            {title}
          </h3>
          {children}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyPanel({ project }: { project: Project }) {
  const systemDesign = systemDesignCopy(project);
  const website = websiteCopy(project);
  const testCases = testCasesCopy(project);
  const keyPrefix = project.slug;

  return (
    <section id="case-study" className="scroll-mt-28 px-5 pb-16 sm:px-6 md:pb-24">
      <div className="container mx-auto max-w-6xl">
        <div className="case-study-panel reveal relative overflow-hidden rounded-[28px] bg-ink text-paper shadow-soft md:rounded-[36px]">
          <div className="pointer-events-none absolute inset-0 grid-paper opacity-[0.22]" aria-hidden />

          <div className="relative border-b border-paper/10 px-6 pb-8 pt-10 sm:px-8 md:px-10 md:pb-10 md:pt-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper/45">Case study</p>
                <p className="mt-4 max-w-2xl font-display text-2xl font-medium tracking-tight text-paper/95 md:text-3xl">
                  {project.title}
                </p>
              </div>
              <CaseStudyRating
                slug={project.slug}
                baseRating={project.rating ?? 4.2}
                reviewCount={project.reviewCount ?? 32}
              />
            </div>
          </div>

          <div className="relative space-y-0 px-6 py-10 sm:px-8 md:px-10 md:py-12 lg:px-12">
            <CaseBlock id="case-challenge" num="01" title="The challenge" first>
              <div className="mt-6 space-y-5 text-base leading-[1.7] text-paper/78 sm:text-lg">
                {project.problem.map((paragraph, index) => (
                  <p key={`${keyPrefix}-problem-${index}`}>{paragraph}</p>
                ))}
              </div>
            </CaseBlock>

            <CaseBlock id="case-solution" num="02" title="The solution">
              <div className="mt-6 space-y-10">
                {project.approach.map((step, index) => (
                  <div key={`${keyPrefix}-approach-${index}`}>
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-paper/45">
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-2 font-display text-xl font-medium text-paper">{step.title}</h4>
                    <p className="mt-3 text-base leading-[1.65] text-paper/75">{step.body}</p>
                  </div>
                ))}
              </div>
            </CaseBlock>

            <CaseBlock id="case-system-design" num="03" title="System design">
              <div className="mt-6 space-y-5 text-base leading-[1.7] text-paper/78">
                {systemDesign.map((paragraph, index) => (
                  <p key={`${keyPrefix}-system-${index}`}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.architecture.map((node) => (
                  <li
                    key={node.title}
                    className="rounded-full border border-paper/15 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-paper/80"
                  >
                    {node.title}
                  </li>
                ))}
              </ul>
            </CaseBlock>

            <CaseBlock id="case-website" num="04" title="The website">
              <div className="mt-6 space-y-5 text-base leading-[1.7] text-paper/78 sm:text-lg">
                {website.map((paragraph, index) => (
                  <p key={`${keyPrefix}-website-${index}`}>{paragraph}</p>
                ))}
              </div>
            </CaseBlock>

            <CaseBlock id="case-test-cases" num="05" title="Test cases">
              <ul className="mt-8 space-y-10">
                {testCases.map((testCase, index) => (
                  <li key={`${testCase.title}-${index}`} className="border-b border-paper/10 pb-10 last:border-0 last:pb-0">
                    <h4 className="font-display text-xl font-medium text-paper">{testCase.title}</h4>
                    {testCase.preconditions ? (
                      <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-paper/45">
                        Preconditions:{" "}
                        <span className="normal-case tracking-normal text-paper/65">{testCase.preconditions}</span>
                      </p>
                    ) : null}
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-paper/45">Steps</p>
                    <ol className="mt-2 list-decimal space-y-2 pl-5 text-base leading-relaxed text-paper/75">
                      {testCase.steps.map((step, stepIndex) => (
                        <li key={`${keyPrefix}-tc-${index}-step-${stepIndex}`}>{step}</li>
                      ))}
                    </ol>
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-paper/45">Expected</p>
                    <p className="mt-2 text-base leading-relaxed text-paper/72">{testCase.expected}</p>
                  </li>
                ))}
              </ul>
            </CaseBlock>

            <div className="case-study-bars mt-14 hidden h-10 md:flex" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
