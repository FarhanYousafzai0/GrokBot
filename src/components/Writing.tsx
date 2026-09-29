import { posts } from "@/data/posts";
import { BlogPostCard } from "./BlogPostCard";

export function Writing() {
  const noteCount = posts.length;

  return (
    <section id="writing" className="relative scroll-mt-28 px-5 py-24 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-svg-grid opacity-70" />
      <div className="relative container mx-auto max-w-6xl">
        <div className="reveal mb-12 text-center md:mb-14">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/50">
            Blog · {noteCount} notes
          </p>
          <h2 className="font-display text-[clamp(2.35rem,4.8vw,3.6rem)] font-medium leading-[1.02] tracking-tight">
            Before you hand the work over.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink/70">
            Jev, Grok Bot, and Muse are the names in every build conversation this month. These notes explain what
            each one is, who it is for, and where software you own still has to exist.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-4 overflow-visible sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:px-1 lg:py-4">
          {posts.map((post, index) => (
            <BlogPostCard
              key={post.slug}
              post={post}
              revealDelay={(index % 3) * 70}
              priority={index < 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
