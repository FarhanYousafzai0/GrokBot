import { Plus } from "lucide-react";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

const faqs = [
  "[Question 1, placeholder]",
  "[Question 2, placeholder]",
  "[Question 3, placeholder]",
];

export default function ContactPage() {
  return (
    <>
      <header className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="absolute top-[30%] left-[10%] w-4 h-4 bg-ink/20 sparkle" />
        <div className="absolute top-[45%] right-[12%] w-5 h-5 bg-ink/20 sparkle" />
        <div className="relative container mx-auto max-w-6xl text-center">
          <div className="reveal">
            <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">Contact</span>
          </div>
          <h1
            className="reveal font-display font-medium text-[clamp(2.6rem,8.4vw,6.5rem)] leading-[0.95] tracking-[-0.04em]"
            style={{ transitionDelay: "80ms" }}
          >
            Let&apos;s build
            <br />
            something together.
          </h1>
          <p className="reveal mt-6 text-lg md:text-xl text-ink/70" style={{ transitionDelay: "160ms" }}>
            Tell me about your web or mobile idea. I&apos;ll get back to you soon.
          </p>
        </div>
      </header>
      <ContactForm />
      <section className="px-5 sm:px-6 pb-20 container mx-auto max-w-4xl">
        <div className="reveal">
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-ink/60 mb-4 block">FAQ</span>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-medium tracking-tight mb-6">Questions.</h2>
        </div>
        {faqs.map((question, index) => (
          <details
            key={question}
            className="group border-b border-ink/10 py-6 reveal"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display text-[clamp(1.2rem,2.4vw,1.5rem)] font-medium">
              {question}
              <span className="w-10 h-10 shrink-0 rounded-full border border-ink/15 flex items-center justify-center transition-transform group-open:rotate-45">
                <Plus size={16} />
              </span>
            </summary>
            <p className="mt-4 text-ink/70 max-w-2xl">[Answer, placeholder]</p>
          </details>
        ))}
      </section>
    </>
  );
}
