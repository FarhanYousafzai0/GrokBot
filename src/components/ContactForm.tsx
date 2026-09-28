"use client";

import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { contact } from "@/data/contact";
import { Magnetic } from "./Magnetic";

const types = ["Web", "Mobile", "Both"];
const budgets = ["[Range A]", "[Range B]", "[Range C]", "[Not sure yet]"];

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: string[];
  value: string | null;
  onChange: (value: string) => void;
  name: string;
}) {
  return (
    <div className="mt-8">
      <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block mb-3 ml-2">{label}</span>
      <div className="flex flex-wrap gap-2 pill-group" data-group={name}>
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              className={`choice-pill rounded-full px-5 py-2.5 text-sm font-medium border transition-colors ${selected ? "bg-ink text-paper border-ink" : "border-ink/15 hover:border-ink/40"}`}
              aria-pressed={selected}
              onClick={() => onChange(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ContactForm() {
  const [projectType, setProjectType] = useState("Web");
  const [budget, setBudget] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <section className="px-5 sm:px-6 pb-24 container mx-auto max-w-6xl grid lg:grid-cols-12 gap-6">
      <form
        className="lg:col-span-8 bg-paper border border-ink/10 rounded-[32px] p-5 sm:p-8 md:p-12 shadow-soft reveal"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        {sent ? (
          <p role="status" className="mb-6 rounded-full border border-ink/15 px-5 py-3 text-sm">
            Thanks. This form is a design placeholder, so nothing was sent.
          </p>
        ) : null}
        <div className="grid md:grid-cols-2 gap-5">
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block mb-2 ml-2">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full bg-paper border border-ink/15 rounded-full px-6 py-4 outline-none focus:border-ink focus:ring-4 focus:ring-ink/10 transition placeholder:text-ink/40"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block mb-2 ml-2">Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full bg-paper border border-ink/15 rounded-full px-6 py-4 outline-none focus:border-ink focus:ring-4 focus:ring-ink/10 transition placeholder:text-ink/40"
            />
          </label>
        </div>
        <ChoiceGroup label="Project type" name="type" options={types} value={projectType} onChange={setProjectType} />
        <ChoiceGroup
          label="Budget (placeholder)"
          name="budget"
          options={budgets}
          value={budget}
          onChange={setBudget}
        />
        <label className="block mt-8">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 block mb-2 ml-2">Message</span>
          <textarea
            name="message"
            rows={6}
            placeholder="What are you building?"
            className="w-full bg-paper border border-ink/15 rounded-[20px] px-6 py-4 outline-none focus:border-ink focus:ring-4 focus:ring-ink/10 transition placeholder:text-ink/40 resize-none"
          />
        </label>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-ink/50">This form is a design placeholder.</p>
          <Magnetic
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-ink text-paper outline outline-1 outline-offset-[3px] outline-ink/30 rounded-full px-8 py-4 text-base font-medium shadow-soft transition-transform duration-300"
          >
            Send message <ArrowRight size={16} />
          </Magnetic>
        </div>
      </form>

      <aside className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-paper border border-ink/10 rounded-[24px] p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift" style={{ transitionDelay: "80ms" }}>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Email</span>
          <div className="mt-3 flex items-center justify-between gap-3">
            <a href={`mailto:${contact.email}`} className="font-medium text-lg break-words hover:underline">
              {contact.email}
            </a>
            <button
              type="button"
              id="copy-email"
              className="shrink-0 text-sm border border-ink/15 rounded-full px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors"
              onClick={() => {
                navigator.clipboard.writeText(contact.email).then(() => {
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1500);
                });
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
        <div className="bg-paper border border-ink/10 rounded-[24px] p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift" style={{ transitionDelay: "160ms" }}>
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50">Socials</span>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors" id="contact-github">
              <Github size={16} /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors" id="contact-linkedin">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="bg-paper border border-ink/10 rounded-[24px] p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 reveal lift" style={{ transitionDelay: "240ms" }}>
          <div className="flex items-center gap-2 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ink opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ink" />
            </span>
            Available for projects
          </div>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li className="flex justify-between border-t border-ink/10 pt-2">
              <span>Based in</span>
              <span className="text-ink">Pakistan</span>
            </li>
            <li className="flex justify-between gap-4 border-t border-ink/10 pt-2">
              <span>Phone</span>
              <a href={contact.phoneHref} className="text-ink hover:underline">{contact.phone}</a>
            </li>
          </ul>
        </div>
        <a href={contact.phoneHref} className="group bg-ink text-paper rounded-[24px] p-7 hover:-translate-y-1.5 transition-all duration-300 reveal lift flex items-center justify-between" style={{ transitionDelay: "320ms" }} id="contact-book-call">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-paper/60">Prefer a call?</span>
            <div className="font-display text-2xl font-medium mt-2">{contact.phone}</div>
          </div>
          <span className="w-11 h-11 rounded-full border border-paper/20 flex items-center justify-center transition-transform group-hover:translate-x-1 lift">
            <ArrowUpRight size={18} />
          </span>
        </a>
      </aside>
    </section>
  );
}
