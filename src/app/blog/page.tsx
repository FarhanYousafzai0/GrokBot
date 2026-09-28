import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { NextStep } from "@/components/Bands";
import { posts } from "@/data/posts";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <>
      <header className="relative pt-32 md:pt-40 pb-12 md:pb-16 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-6xl">
          <div className="reveal">
            <h1 className="font-display font-medium text-[clamp(2.75rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em]">
              Writing.
            </h1>
            <p className="mt-6 text-[clamp(1.05rem,1.5vw,1.25rem)] text-ink/70 max-w-xl">
              Notes on building for web and mobile. Every post on this page is a placeholder.
            </p>
          </div>
        </div>
      </header>
      <section className="px-5 sm:px-6 pb-12 container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group bg-paper border border-ink/10 rounded-[24px] p-7 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 reveal lift flex flex-col"
              style={{ transitionDelay: `${(index % 2) * 80}ms` }}
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Post {post.num}</span>
                <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-ink text-paper">
                  {post.tag}
                </span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-3">
                {post.title}
              </h2>
              <p className="text-ink/70 mb-6">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between gap-3 text-xs text-ink/60 font-mono">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-4 py-2 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
                id={`blog-card-link-${post.num}`}
              >
                Read post <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 lift" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <NextStep id="cta-contact-btn-blog" />
    </>
  );
}
