import { Map, Server, Smartphone, Wrench } from "lucide-react";
import Image from "next/image";
import { about } from "@/data/about";
import { contact } from "@/data/contact";
import { faqs } from "@/data/faqs";
import { ContactForm } from "./ContactForm";
import { FaqList } from "./FaqList";
import { Magnetic } from "./Magnetic";
import { AboutMeTitle } from "./AboutMeTitle";

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
      <div className="mb-16 reveal text-center">
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
    <section id="about" className="scroll-mt-28 border-t border-ink/10">
      <header className="relative overflow-hidden px-5 pb-12 pt-24 sm:px-6 md:pb-16 md:pt-28">
        <div className="pointer-events-none absolute inset-0 bg-svg-grid" />
        <div className="absolute left-[10%] top-[30%] h-4 w-4 bg-ink/20 sparkle" aria-hidden="true" />
        <div className="absolute right-[12%] top-[45%] h-5 w-5 bg-ink/20 sparkle" aria-hidden="true" />
        <div className="relative container mx-auto max-w-6xl text-center">
          <AboutMeTitle
            className="reveal font-display text-[clamp(2.6rem,8.4vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
            style={{ transitionDelay: "80ms" }}
          />
        </div>
      </header>

      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-12 px-5 pb-24 sm:px-6 md:flex-row md:pb-32 lg:gap-24">
        <div className="w-full md:w-5/12">
          <div className="relative mx-auto w-full max-w-[400px] overflow-hidden rounded-[24px] border border-ink/10 bg-ink/[0.04] shadow-soft transition-transform duration-500 hover:-translate-y-1.5 lift reveal">
            <div className="pointer-events-none absolute inset-0 z-0 bg-svg-grid" />
            <Image
              src="/images/farhan-seated.png"
              alt={contact.name}
              width={691}
              height={954}
              sizes="(min-width: 768px) 400px, 92vw"
              className="relative z-[1] block h-auto w-full select-none object-contain object-bottom"
            />
          </div>
        </div>
        <div
          className="reveal flex w-full max-w-xl flex-col gap-4 text-center text-lg leading-relaxed text-ink/70 md:w-7/12 md:max-w-none md:text-left"
          style={{ transitionDelay: "160ms" }}
        >
          <p className="pen-line pen-line-about mx-auto inline-block max-w-lg md:mx-0">{about.title}</p>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <Magnetic
            href={contact.whatsappHref}
            id="about-quote-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center self-center rounded-full bg-[#2436C5] px-9 py-4 text-sm font-medium uppercase tracking-[0.08em] text-[#fff] shadow-soft transition-transform duration-300 hover:bg-[#1c2ba0] md:mt-4 md:self-start"
          >
            Get a quote here
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <>
      <section id="contact" className="contact-section relative scroll-mt-28 overflow-hidden">
        <div className="relative z-[2] px-5 pb-12 pt-16 text-paper sm:px-6 md:pb-16 md:pt-20 lg:px-8">
            <header className="relative overflow-hidden pb-8 md:pb-10">
              <div className="absolute left-[8%] top-[20%] h-4 w-4 bg-paper/25 sparkle" />
              <div className="absolute right-[10%] top-[35%] h-5 w-5 bg-paper/20 sparkle" />
              <div className="relative mx-auto max-w-6xl text-center">
                <h2
                  className="reveal font-display text-[clamp(2.6rem,8.4vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]"
                  style={{ transitionDelay: "80ms" }}
                >
                  Let&apos;s build
                  <br />
                  something together.
                </h2>
                <p className="reveal mt-6 text-lg text-paper/75 md:text-xl" style={{ transitionDelay: "160ms" }}>
                  Tell me about your web or mobile idea. I&apos;ll get back to you soon.
                </p>
              </div>
            </header>
            <ContactForm />
          </div>
      </section>

      <div className="border-t border-ink/10 bg-paper px-5 pb-20 pt-16 sm:px-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
        <div className="container mx-auto max-w-4xl">
          <div className="reveal text-center">
            <h3 className="mb-3 font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight">
              Questions clients ask first.
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-ink/60">
              Straight answers before we get on a call — so you know how I work, what I build, and what happens after launch.
            </p>
          </div>
          <FaqList />
        </div>
      </div>
    </>
  );
}
