import { ArrowRight, Atom, Database, Hexagon, Server, Smartphone, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { NextStep } from "@/components/Bands";
import { Magnetic } from "@/components/Magnetic";

export const metadata: Metadata = { title: "About" };

const skills = [
  { icon: Database, title: "MongoDB", body: "Document database for storing app data.", delay: "0ms" },
  { icon: Server, title: "Express", body: "Minimal framework for building REST APIs.", delay: "80ms" },
  { icon: Atom, title: "React", body: "Component library for web interfaces.", delay: "160ms" },
  { icon: Hexagon, title: "Node.js", body: "JavaScript runtime for the server side.", delay: "0ms" },
  { icon: Smartphone, title: "React Native", body: "One codebase for iOS and Android apps.", delay: "80ms" },
  {
    icon: Wrench,
    title: "[Other tools, placeholder]",
    body: "[Add the tools you use, placeholder.]",
    delay: "160ms",
  },
];

const timeline = [0, 1, 2, 3];

export default function AboutPage() {
  return (
    <>
      <header className="relative pt-32 md:pt-36 pb-16 md:pb-20 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 reveal">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">About</span>
            <h1 className="font-display font-medium text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em]">
              Hi, I&apos;m
              <br />
              Farhan.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-ink/70 max-w-md">
              I&apos;m a MERN stack and React Native developer based in Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic
                href="/contact"
                id="about-contact-btn"
                className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-7 py-4 font-medium shadow-soft transition-transform duration-300"
              >
                Get in touch <ArrowRight size={16} />
              </Magnetic>
              <Link
                href="/work"
                id="about-work-btn"
                className="inline-flex items-center gap-2 border border-ink/15 rounded-full px-7 py-4 font-medium hover:bg-ink/5 transition-colors"
              >
                See my work
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 reveal" style={{ transitionDelay: "120ms" }}>
            <div className="group relative h-[clamp(380px,56vw,520px)] rounded-[32px] border border-ink/10 bg-ink/[0.04] shadow-soft overflow-hidden transition-transform duration-500 hover:-translate-y-1.5 lift">
              <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
              <Image
                src="/images/farhan-cutout-bw.png"
                alt="Farhan Yousafzai"
                width={1200}
                height={1510}
                priority
                className="absolute left-0 right-0 bottom-0 w-full h-[94%] object-cover object-top select-none"
                style={{ width: "100%", height: "94%", objectFit: "cover", objectPosition: "top" }}
              />
              <span className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-[0.08em] bg-paper border border-ink/10 rounded-full px-3 py-1.5">
                Farhan Yousafzai, Pakistan
              </span>
              <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 text-sm font-medium bg-paper border border-ink/10 rounded-full px-4 py-2 shadow-soft animate-drift-2">
                <span className="w-2 h-2 rounded-full bg-ink" />
                MERN + React Native
              </span>
            </div>
          </div>
        </div>
      </header>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl grid md:grid-cols-12 gap-10 border-t border-ink/10">
        <div className="md:col-span-4 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">01 / Story</span>
        </div>
        <div className="md:col-span-8 reveal" style={{ transitionDelay: "80ms" }}>
          <p className="font-display text-[clamp(1.6rem,3.4vw,2.25rem)] font-medium leading-[1.15] tracking-tight">
            [Your story here: how you got into MERN and React Native, placeholder]
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-ink/70 text-lg">
            <p>[A paragraph about what you enjoy building, placeholder.]</p>
            <p>[A paragraph about how you like to work with people, placeholder.]</p>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">02 / Stack</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-12">What I build with.</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="group bg-paper border border-ink/10 rounded-[20px] sm:rounded-[24px] p-4 sm:p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift"
                style={{ transitionDelay: skill.delay }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ink/10 flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg sm:text-2xl font-medium mt-5 sm:mt-8 mb-2 break-words">{skill.title}</h3>
                <p className="text-sm sm:text-base text-ink/70">{skill.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-5 sm:px-6 py-20 md:py-28 container mx-auto max-w-6xl grid md:grid-cols-12 gap-10 border-t border-ink/10">
        <div className="md:col-span-5 reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">03 / Timeline</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight">Along the way.</h2>
          <p className="mt-4 text-ink/60">All entries are placeholders.</p>
        </div>
        <ol className="md:col-span-7 relative border-l border-ink/15 ml-[7px] [&>li]:-ml-[8px]">
          {timeline.map((item, index) => (
            <li
              key={item}
              className="relative pl-10 pb-12 last:pb-0 reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span
                className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full ${index === 0 ? "bg-ink" : "bg-paper border-2 border-ink"}`}
              />
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">[Year, placeholder]</span>
              <h3 className="font-display text-2xl font-medium mt-2">[Role or milestone, placeholder]</h3>
              <p className="text-ink/70 mt-1">[One line, placeholder]</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="px-5 sm:px-6 py-12 container mx-auto max-w-6xl">
        <div className="reveal bg-ink text-paper rounded-[32px] p-10 md:p-14 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-paper/60">04 / Now</span>
            <div className="mt-3 inline-flex items-center gap-2 border border-paper/15 rounded-full px-3 py-1 text-sm">
              <span className="w-2 h-2 rounded-full bg-paper" /> Now
            </div>
          </div>
          <p className="md:col-span-7 font-display text-[clamp(1.6rem,3.4vw,2.25rem)] font-medium tracking-tight leading-[1.1]">
            [What I&apos;m building or learning right now, placeholder]
          </p>
          <p className="md:col-span-2 font-mono text-[11px] uppercase tracking-wider text-paper/60 md:text-right">
            Updated: [month year]
          </p>
        </div>
      </section>

      <NextStep id="cta-contact-btn-about" />
    </>
  );
}
