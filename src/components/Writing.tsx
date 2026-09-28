import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { posts } from "@/data/posts";
import { Magnetic } from "./Magnetic";

export function Writing() {
  const latest = posts.slice(0, 3);

  return (
    <section id="writing" className="py-24 px-5 sm:px-6 container mx-auto max-w-6xl border-t border-ink/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
        <div>
          <h2 className="font-display text-[clamp(2.25rem,4.4vw,3rem)] font-medium tracking-tight">Latest posts.</h2>
          <p className="mt-4 text-ink/70 max-w-xl">Short notes. Every post here is a placeholder.</p>
        </div>
        <Magnetic
          href="/blog"
          id="writing-all-btn"
          className="inline-flex items-center gap-2 bg-ink text-paper outline outline-1 outline-offset-[3px] outline-ink/30 rounded-full px-6 py-3 text-sm font-medium shadow-soft transition-transform duration-300 shrink-0"
        >
          View all posts <ArrowRight size={16} />
        </Magnetic>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latest.map((post, index) => (
          <article
            key={post.slug}
            className="group bg-paper border border-ink/10 rounded-[24px] p-7 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 reveal lift flex flex-col"
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Post {post.num}</span>
              <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full border border-ink/15 text-ink/70">
                {post.tag}
              </span>
            </div>
            <h3 className="font-display text-2xl font-medium tracking-tight leading-tight mb-3">{post.title}</h3>
            <p className="text-ink/70 text-sm mb-6">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between gap-3 text-xs text-ink/60 font-mono">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
              id={`writing-card-link-${post.num}`}
            >
              Read post <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 lift" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
