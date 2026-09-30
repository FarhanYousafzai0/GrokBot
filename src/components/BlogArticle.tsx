import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { contact } from "@/data/contact";
import { type Post } from "@/data/posts";
import { slugify } from "@/lib/slugify";
import { BlogReadingProgress } from "./BlogReadingProgress";
import { HashLink } from "./HashLink";

export function BlogArticle({ post }: { post: Post }) {
  const firstSectionId = post.sections[0] ? slugify(post.sections[0].heading) : "article-body";
  const officialUrl = post.officialArticleUrl;
  const readButtonClass =
    "group mt-8 inline-flex w-fit max-w-full items-center rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-paper shadow-[0_12px_32px_-16px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02]";

  return (
    <article>
      <BlogReadingProgress />

      <header className="relative overflow-hidden px-5 pb-6 pt-32 sm:px-6 md:pb-8 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-svg-grid" />
        <div className="relative container mx-auto max-w-6xl">
          <h1
            className="reveal max-w-4xl font-display text-[clamp(2.35rem,5.5vw,4.25rem)] font-medium leading-[1.02] tracking-[-0.04em]"
            style={{ transitionDelay: "80ms" }}
          >
            {post.title}
          </h1>
        </div>
      </header>

      <div className="px-5 pb-8 sm:px-6 md:pb-12">
        <div className="container mx-auto max-w-6xl">
          <div
            className="reveal grid gap-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-6 lg:gap-10"
            style={{ transitionDelay: "140ms" }}
          >
            <div className="flex flex-col justify-center py-2 md:py-6 lg:pr-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45">In this note</p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/78 sm:text-lg">{post.lead}</p>
              {officialUrl ? (
                <a
                  href={officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="blog-read-more"
                  className={readButtonClass}
                >
                  <span className="pr-4">Read article</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </a>
              ) : (
                <HashLink href={`#${firstSectionId}`} id="blog-read-more" className={readButtonClass}>
                  <span className="pr-4">Read article</span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight size={18} strokeWidth={2} />
                  </span>
                </HashLink>
              )}
            </div>

            {post.image ? (
              <div className="relative p-3 sm:p-4 md:p-5 lg:p-6">
                <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-[22px] border border-ink/[0.08] bg-paper shadow-soft sm:rounded-[26px] md:rounded-[30px]">
                  <span className="absolute left-4 top-4 z-10 rounded-full bg-paper/92 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#5a6b4a] shadow-sm backdrop-blur-[2px] sm:left-5 sm:top-5">
                    {post.tag}
                  </span>
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-start p-3 md:p-5">
                <span className="rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-paper">
                  {post.tag}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="article-body" className="container mx-auto max-w-3xl px-5 sm:px-6 md:pb-14 md:pt-2">
        <div
          className="reveal mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-ink/10 pt-8 font-mono text-xs uppercase tracking-wider text-ink/50"
          style={{ transitionDelay: "200ms" }}
        >
          <time dateTime={post.date}>{post.dateLabel}</time>
          <span className="hidden h-1 w-1 rounded-full bg-ink/25 sm:inline" aria-hidden />
          <span>{post.readTime}</span>
        </div>

        <div className="flex flex-col gap-14 md:gap-16">
          {post.sections.map((section, index) => {
            const id = slugify(section.heading);
            return (
              <section key={section.heading} id={id} className="scroll-mt-32">
                <div className={`flex items-start gap-4 pt-8 ${index === 0 ? "" : "border-t border-ink/10"}`}>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/35">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-[clamp(1.6rem,3vw,2.15rem)] font-medium leading-tight tracking-tight">
                      {section.heading}
                    </h2>
                    <div className="mt-4 flex flex-col gap-4 text-lg leading-[1.65] text-ink/80">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: contact.name },
            ...(post.image ? { image: post.image } : {}),
          }),
        }}
      />
    </article>
  );
}
