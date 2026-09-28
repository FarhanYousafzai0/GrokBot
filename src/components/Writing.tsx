import { Plus } from "lucide-react";
import { posts } from "@/data/posts";

export function Writing() {
  return (
    <section id="writing" className="py-24 px-5 sm:px-6 container mx-auto max-w-6xl border-t border-ink/10 scroll-mt-28">
      <div className="mb-12 reveal text-center">
        <h2 className="font-display text-[clamp(2.25rem,4.4vw,3rem)] font-medium tracking-tight">Writing.</h2>
        <p className="mt-4 text-ink/70 max-w-xl mx-auto">Notes on building for web and mobile. Every post here is a placeholder.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {posts.map((post, index) => (
          <article
            key={post.slug}
            className="group bg-paper border border-ink/10 rounded-[24px] p-7 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 reveal lift flex flex-col"
            style={{ transitionDelay: `${(index % 2) * 80}ms` }}
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60">Post {post.num}</span>
              <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-ink text-paper">{post.tag}</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-3">{post.title}</h3>
            <p className="text-ink/70 mb-6">{post.excerpt}</p>
            <div className="flex items-center justify-between gap-3 text-xs text-ink/60 font-mono">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
            <details className="group mt-6 border-t border-ink/10 pt-5">
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-sm"
                id={`writing-card-link-${post.num}`}
              >
                Read post
                <span className="w-9 h-9 shrink-0 rounded-full border border-ink/15 flex items-center justify-center transition-transform group-open:rotate-45">
                  <Plus size={14} />
                </span>
              </summary>
              <div className="mt-4 flex flex-col gap-4 text-ink/80 leading-relaxed">
                <p>[Opening paragraph, placeholder.]</p>
                <p>[A second paragraph, placeholder.]</p>
                <p>[A closing paragraph, placeholder.]</p>
              </div>
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
