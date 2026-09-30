"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  slug: string;
  baseRating?: number;
  reviewCount?: number;
};

function storageKey(slug: string) {
  return `case-study-rating-${slug}`;
}

function starsFilled(value: number) {
  const clamped = Math.min(5, Math.max(0, value));
  return Math.floor(clamped + 0.15);
}

export function CaseStudyRating({ slug, baseRating = 4.2, reviewCount = 32 }: Props) {
  const [userRating, setUserRating] = useState<number | null>(null);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey(slug));
      if (saved) {
        const value = Number(saved);
        if (value >= 1 && value <= 5) setUserRating(value);
      }
    } catch {
      /* ignore */
    }
  }, [slug]);

  const active = hover || userRating || baseRating;
  const filled = starsFilled(active);
  const displayRating = hover > 0 ? hover : (userRating ?? baseRating);
  const label = displayRating.toFixed(1);

  function rate(value: number) {
    setUserRating(value);
    try {
      localStorage.setItem(storageKey(slug), String(value));
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="flex shrink-0 flex-col gap-2 sm:items-end">
      <div
        className="flex items-center gap-1"
        role="group"
        aria-label="Rate this project out of five stars"
        onMouseLeave={() => setHover(0)}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            aria-label={`${star} star${star === 1 ? "" : "s"}`}
            aria-pressed={userRating === star}
            className="case-study-star rounded p-0.5 transition-transform duration-200 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper/50"
            onClick={() => rate(star)}
            onMouseEnter={() => setHover(star)}
          >
            <Star
              size={22}
              strokeWidth={1.5}
              className={
                star <= filled ? "fill-[#ffd866] text-[#ffd866]" : "fill-transparent text-paper/35"
              }
            />
          </button>
        ))}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-paper/50">
        <span className="text-paper/80">{label}</span> · {reviewCount} reviews
        {userRating ? <span className="text-paper/65"> · Your rating saved</span> : null}
      </p>
    </div>
  );
}
