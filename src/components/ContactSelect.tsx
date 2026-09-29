"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type Option = { value: string; label: string };

type ContactSelectProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
  headerLabel?: string;
  required?: boolean;
};

export function ContactSelect({
  name,
  value,
  onChange,
  options,
  placeholder,
  headerLabel = "Select one",
  required,
}: ContactSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const selected = options.find((item) => item.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="contact-select-root relative">
      <input type="hidden" name={name} value={value} required={required} />
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        className="contact-field-underline contact-select-trigger flex w-full items-center justify-between gap-3 text-left"
        onClick={() => setOpen((current) => !current)}
      >
        <span className={selected ? "text-ink" : "text-ink/40"}>{selected?.label ?? placeholder}</span>
        <ChevronDown size={16} className={`shrink-0 text-ink/45 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open ? (
        <div
          id={listId}
          role="listbox"
          className="contact-select-menu absolute left-0 right-0 top-[calc(100%+6px)] z-30 overflow-hidden rounded-md bg-white shadow-[0_16px_48px_-20px_rgba(0,0,0,0.22)]"
        >
          <div className="contact-select-menu-header px-3 py-2.5 text-[13px] font-medium text-ink/80">
            {headerLabel}
          </div>
          <ul className="contact-select-list max-h-56 overflow-y-auto bg-white py-1">
            {options.map((option) => {
              const active = option.value === value;
              return (
                <li key={option.value || "__empty"} role="none">
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    className={`contact-select-option w-full px-3 py-2.5 text-left text-[14px] transition-colors ${
                      active ? "bg-[#f5f5f5] text-ink" : "bg-white text-ink hover:bg-[#fafafa]"
                    }`}
                    onClick={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                  >
                    {option.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
