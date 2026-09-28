import { Map, Server, Smartphone, Wrench } from "lucide-react";
import { contact } from "@/data/contact";
import { faqs } from "@/data/faqs";
import Image from "next/image";
import { ContactForm } from "./ContactForm";
import { FaqList } from "./FaqList";

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
    <section id="about" className="py-24 md:py-32 px-5 sm:px-6 container mx-auto max-w-6xl border-t border-ink/10 scroll-mt-28">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center reveal">
        <div className="w-full md:w-5/12">
          <div className="relative aspect-square w-full max-w-[400px] mx-auto bg-ink/[0.04] border border-ink/10 shadow-soft rounded-[24px] overflow-hidden flex items-end justify-center transition-transform duration-500 hover:-translate-y-1.5 lift">
            <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
            <Image
              src="/images/farhan-seated.png"
              alt={contact.name}
              width={691}
              height={954}
              sizes="(min-width: 768px) 400px, 92vw"
              className="absolute left-0 right-0 bottom-0 w-full h-[94%] object-cover object-top select-none"
              style={{ width: "100%", height: "94%", objectFit: "cover", objectPosition: "top" }}
            />
            <span className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.08em] bg-paper border border-ink/10 rounded-full px-3 py-1 text-ink/70">
              {contact.name}
            </span>
          </div>
        </div>
        <div className="w-full md:w-7/12 flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.25rem)] font-medium tracking-tight mb-6 leading-tight">
            I&apos;m {contact.name}, a MERN stack and React Native developer based in Pakistan.
          </h2>
          <p className="text-lg text-ink/70 max-w-xl leading-relaxed mx-auto md:mx-0">
            [Your story here: how you got into MERN and React Native, placeholder.]
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-ink/10 scroll-mt-28">
      <header className="relative pt-24 md:pt-28 pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="absolute top-[30%] left-[10%] w-4 h-4 bg-ink/20 sparkle" />
        <div className="absolute top-[45%] right-[12%] w-5 h-5 bg-ink/20 sparkle" />
        <div className="relative container mx-auto max-w-6xl text-center">
          <h2
            className="reveal font-display font-medium text-[clamp(2.6rem,8.4vw,6.5rem)] leading-[0.95] tracking-[-0.04em]"
            style={{ transitionDelay: "80ms" }}
          >
            Let&apos;s build
            <br />
            something together.
          </h2>
          <p className="reveal mt-6 text-lg md:text-xl text-ink/70" style={{ transitionDelay: "160ms" }}>
            Tell me about your web or mobile idea. I&apos;ll get back to you soon.
          </p>
        </div>
      </header>
      <ContactForm />
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
      <div className="px-5 sm:px-6 pb-20 container mx-auto max-w-4xl">
        <div className="reveal text-center">
          <h3 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-3">
            Questions clients ask first.
          </h3>
          <p className="text-ink/60 mb-8 max-w-2xl mx-auto">
            Straight answers before we get on a call — so you know how I work, what I build, and what happens after launch.
          </p>
        </div>
        <FaqList />
      </div>
    </section>
  );
}
