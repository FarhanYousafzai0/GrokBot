"use client";

import Link from "next/link";
import { useEffect, useRef, type ReactNode, type Ref } from "react";

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
  id?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export function Magnetic({
  href,
  className = "",
  children,
  id,
  type = "button",
  onClick,
  target,
  rel,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const move = (event: globalThis.PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const rect = btn.getBoundingClientRect();
      const x = Math.max(-8, Math.min(8, (event.clientX - rect.left - rect.width / 2) * 0.3));
      const y = Math.max(-8, Math.min(8, (event.clientY - rect.top - rect.height / 2) * 0.3));
      btn.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
    };
    const leave = () => {
      btn.style.transform = "";
    };

    const onMove: EventListener = (event) => move(event as globalThis.PointerEvent);
    btn.addEventListener("pointermove", onMove);
    btn.addEventListener("pointerleave", leave);
    return () => {
      btn.removeEventListener("pointermove", onMove);
      btn.removeEventListener("pointerleave", leave);
    };
  }, []);

  const classes = `btn-magnetic ${className}`;

  if (href) {
    if (href.startsWith("#") || href.startsWith("http") || href.includes("#")) {
      return (
        <a ref={ref as Ref<HTMLAnchorElement>} href={href} id={id} className={classes} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} href={href} id={id} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      id={id}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
