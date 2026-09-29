"use client";

import type { CSSProperties } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
};

export function AboutMeTitle({ className, style }: Props) {
  return (
    <h2 className={className} style={style}>
      About <span className="text-[#E10600]">ME</span>
    </h2>
  );
}
