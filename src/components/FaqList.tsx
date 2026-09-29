"use client";

import { Plus } from "lucide-react";
import { useId, useState } from "react";
import { faqs } from "@/data/faqs";

function FaqItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div
      className="faq-item reveal rounded-2xl border border-[#dce6f8]/80 bg-[#f4f7fd] px-5 py-5 sm:px-6"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 text-left font-display text-[clamp(1.15rem,2.2vw,1.45rem)] font-medium"
        onClick={() => setOpen((value) => !value)}
      >
        {question}
        <span
          className={`w-10 h-10 shrink-0 rounded-full border border-ink/15 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "rotate-45" : "rotate-0"}`}
        >
          <Plus size={16} />
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        className="faq-panel"
        data-open={open ? "true" : "false"}
      >
        <div className="faq-panel-inner">
          <p className="pt-4 pb-2 text-ink/70 max-w-2xl leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqList() {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((item, index) => (
        <FaqItem key={item.question} question={item.question} answer={item.answer} index={index} />
      ))}
    </div>
  );
}
