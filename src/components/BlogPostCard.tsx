"use client";

import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { useRef, type PointerEvent } from "react";
import type { Post } from "@/data/posts";
import { PostCover } from "./PostCover";

type Props = {
  post: Post;
  revealDelay?: number;
  priority?: boolean;
};

export function BlogPostCard({ post, revealDelay = 0, priority }: Props) {
  const rootRef = useRef<HTMLElement>(null);

  const setHover = (active: boolean) => {
    const root = rootRef.current;
    if (!root) return;
    if (active) root.classList.add("hov");
    else {
      root.classList.remove("hov");
      root.style.setProperty("--tilt-y", "0deg");
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const root = rootRef.current;
    if (!root || event.pointerType !== "mouse") return;
    const rect = root.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    root.style.setProperty("--tilt-y", `${(x * -14).toFixed(2)}deg`);
    root.classList.add("hov");
  };

  return (
    <article
      ref={rootRef}
      className="blog-arc-card reveal h-full"
      style={{ transitionDelay: `${revealDelay}ms` }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      onPointerMove={onPointerMove}
    >
      <Link
        href={`/blog/${post.slug}`}
        id={`writing-card-link-${post.num}`}
        className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
      >
        <div className="arc-inner">
          <div className="relative aspect-[1672/941] shrink-0 overflow-hidden rounded-[16px] bg-[#e4e2db]">
            <PostCover
              post={post}
              priority={priority}
              sizes="(min-width: 1024px) 360px, (min-width: 640px) 46vw, 100vw"
              fit="cover"
            />
            <span className="absolute left-2.5 top-2.5 z-10 rounded-full bg-[#fff] px-2.5 py-1 text-[11px] font-medium text-ink shadow-soft">
              {post.tag}
            </span>
          </div>

          <div className="flex min-h-0 flex-1 flex-col px-2 pb-1.5 pt-3.5">
            <h3 className="line-clamp-2 min-h-[2.65rem] font-display text-[1.05rem] font-medium leading-snug tracking-tight">
              {post.title}
            </h3>
            <p className="mt-1.5 line-clamp-3 min-h-[3.75rem] text-[13px] leading-relaxed text-ink/60">{post.excerpt}</p>
            <div className="mt-auto pt-4">
              <div className="flex items-center gap-3 font-mono text-[11px] text-ink/50">
                <time dateTime={post.date}>{post.dateLabel}</time>
                <span className="h-1 w-1 rounded-full bg-ink/25" aria-hidden="true" />
                <span className="inline-flex items-center gap-1">
                  <Clock size={12} strokeWidth={2} />
                  {post.readTime.replace(" read", "")}
                </span>
              </div>
              <span className="mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-full bg-ink text-[13px] font-medium text-[#fff] transition-all duration-300 group-hover:gap-3 group-hover:bg-[#1a1a1a]">
                Read post
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
