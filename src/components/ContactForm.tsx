"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Magnetic } from "./Magnetic";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <form
        className="contact-glass reveal rounded-[28px] p-5 sm:p-8 md:rounded-[32px] md:p-10"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        {sent ? (
          <p role="status" className="contact-status mb-6 rounded-full px-5 py-3 text-sm">
            Thanks — I&apos;ll get back to you soon.
          </p>
        ) : null}
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="contact-label mb-2 ml-2 block font-mono text-[11px] uppercase tracking-wider">Name</span>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="contact-field w-full rounded-full px-6 py-4 outline-none transition"
            />
          </label>
          <label className="block">
            <span className="contact-label mb-2 ml-2 block font-mono text-[11px] uppercase tracking-wider">Email</span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="contact-field w-full rounded-full px-6 py-4 outline-none transition"
            />
          </label>
        </div>
        <label className="mt-8 block">
          <span className="contact-label mb-2 ml-2 block font-mono text-[11px] uppercase tracking-wider">Message</span>
          <textarea
            name="message"
            rows={6}
            placeholder="What are you building?"
            className="contact-field w-full resize-none rounded-[20px] px-6 py-4 outline-none transition"
          />
        </label>
        <div className="mt-8 flex justify-end">
          <Magnetic
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-8 py-4 text-base font-medium text-ink shadow-soft outline outline-1 outline-offset-[3px] outline-paper/40 transition-transform duration-300"
          >
            Send message <ArrowRight size={16} />
          </Magnetic>
        </div>
      </form>
    </div>
  );
}
