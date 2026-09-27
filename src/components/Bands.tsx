import { ArrowRight, Map, Server, Smartphone, Wrench } from "lucide-react";
import Image from "next/image";
import { Magnetic } from "./Magnetic";

const steps = [
  {
    icon: Map,
    title: "Plan the product",
    body: "Define architecture and data models before writing code.",
  },
  {
    icon: Server,
    title: "Build the API and web app",
    body: "Construct robust backends and responsive web interfaces.",
    delay: "100ms",
  },
  {
    icon: Smartphone,
    title: "Ship the mobile app",
    body: "Develop cross-platform mobile experiences using React Native.",
    delay: "200ms",
  },
  {
    icon: Wrench,
    title: "Look after it",
    body: "Maintain, debug and iterate on the deployed applications.",
    delay: "300ms",
  },
];

export function Process() {
  return (
    <section className="py-24 px-5 sm:px-6 container mx-auto max-w-6xl border-t border-ink/10">
      <div className="mb-16 reveal">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">03 / How I work</span>
        <h2 className="font-display text-[clamp(2.25rem,4.4vw,3rem)] font-medium tracking-tight">My process</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.title}
              className="bg-paper border border-ink/10 rounded-[20px] p-8 shadow-soft reveal"
              style={"delay" in step ? { transitionDelay: step.delay } : undefined}
            >
              <div className="w-12 h-12 rounded-full border border-ink/10 flex items-center justify-center mb-6 bg-ink/5">
                <Icon size={20} />
              </div>
              <h3 className="font-medium text-lg mb-3">{step.title}</h3>
              <p className="text-ink/70 text-sm">{step.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function AboutTeaser() {
  return (
    <section className="py-24 md:py-32 px-5 sm:px-6 container mx-auto max-w-6xl border-t border-ink/10">
      <div className="mb-16 reveal">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">04 / About</span>
      </div>
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center reveal">
        <div className="w-full md:w-5/12">
          <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-ink/[0.04] border border-ink/10 shadow-soft rounded-[24px] overflow-hidden flex items-end justify-center transition-transform duration-500 hover:-translate-y-1.5 lift">
            <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
            <Image
              src="/images/farhan-cutout-bw.png"
              alt="Farhan Yousafzai"
              width={741}
              height={933}
              sizes="(min-width: 768px) 400px, 92vw"
              className="absolute left-0 right-0 bottom-0 w-full h-[94%] object-cover object-top select-none"
              style={{ width: "100%", height: "94%", objectFit: "cover", objectPosition: "top" }}
            />
            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.08em] bg-paper border border-ink/10 rounded-full px-3 py-1 text-ink/70">
              Farhan Yousafzai
            </span>
          </div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col items-start">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.25rem)] font-medium tracking-tight mb-6 leading-tight">
            I&apos;m Farhan Yousafzai, a MERN stack and React Native developer based in Pakistan.
          </h2>
          <p className="text-lg text-ink/70 mb-8 max-w-xl leading-relaxed">
            [Your story here: how you got into MERN and React Native, placeholder.]
          </p>
          <Magnetic
            href="/about"
            id="about-more-btn"
            className="inline-flex items-center justify-center bg-paper border border-ink/20 text-ink rounded-full px-6 py-3 text-sm font-medium hover:bg-ink/5 transition-colors"
          >
            More about me
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export function HomeCTA() {
  return (
    <section className="py-24 px-5 sm:px-6 container mx-auto max-w-5xl reveal">
      <div className="bg-ink text-paper rounded-[32px] px-6 py-12 sm:p-10 md:p-16 lg:p-20 text-center flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none" />
        <h2 className="font-display text-[clamp(2.1rem,5.5vw,3.75rem)] leading-[1.02] font-medium tracking-tight mb-8 max-w-3xl relative z-10">
          Have an idea for web or mobile? Let&apos;s build it.
        </h2>
        <p className="text-[clamp(1rem,2.2vw,1.5rem)] text-paper/70 font-mono mb-12 relative z-10 break-words">
          hello@farhan.dev (placeholder)
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Magnetic
            href="/contact"
            id="cta-contact-btn"
            className="inline-flex items-center justify-center bg-paper text-ink rounded-full px-8 py-4 text-base font-medium hover:scale-105 transition-transform duration-300 lift"
          >
            Get in touch
          </Magnetic>
          <a
            href="#"
            className="inline-flex items-center justify-center bg-transparent border border-paper/20 text-paper rounded-full px-8 py-4 text-base font-medium hover:bg-paper/10 transition-colors"
            id="cta-github-btn"
          >
            GitHub (placeholder)
          </a>
        </div>
      </div>
    </section>
  );
}

export function NextStep({ id }: { id: string }) {
  return (
    <section className="py-24 px-5 sm:px-6 container mx-auto max-w-5xl reveal">
      <div className="bg-ink text-paper rounded-[32px] px-6 py-10 sm:p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-paper/60 mb-4 block">Next step</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight leading-[1.02]">
            Have a project in mind?
            <br />
            Let&apos;s talk.
          </h2>
        </div>
        <Magnetic
          href="/contact"
          id={id}
          className="inline-flex items-center gap-2 bg-paper text-ink rounded-full px-7 py-4 font-medium transition-transform duration-300 shrink-0"
        >
          Get in touch <ArrowRight size={16} />
        </Magnetic>
      </div>
    </section>
  );
}
