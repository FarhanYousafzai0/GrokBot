import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { contact } from "@/data/contact";
import { postNeighbors, type Post } from "@/data/posts";
import { slugify } from "@/lib/slugify";
import { BlogReadingProgress } from "./BlogReadingProgress";
import { HashLink } from "./HashLink";

export function BlogArticle({ post }: { post: Post }) {
  const { prev, next } = postNeighbors(post.slug);
  const sectionLinks = post.sections.map((section) => ({
    id: slugify(section.heading),
    label: section.heading,
  }));

  return (
    <article>
      <BlogReadingProgress />

      <header className="relative overflow-hidden px-5 pb-10 pt-32 sm:px-6 md:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-svg-grid" />
        <div className="relative container mx-auto max-w-6xl">
          <HashLink
            href="/#writing"
            className="reveal inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            id="blog-back-link"
          >
            <ArrowLeft size={16} /> Back to the blog
          </HashLink>
          <div className="mt-10 grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="reveal flex flex-wrap items-center gap-x-4 gap-y-2" style={{ transitionDelay: "60ms" }}>
                <span className="rounded-full bg-ink px-3 py-1 font-mono text-[11px] uppercase text-paper">{post.tag}</span>
                <span className="font-display text-4xl font-medium leading-none tracking-tight text-ink/15 md:text-5xl">
                  {post.num}
                </span>
                <time dateTime={post.date} className="font-mono text-xs uppercase tracking-wider text-ink/55">
                  {post.dateLabel}
                </time>
                <span className="font-mono text-xs uppercase tracking-wider text-ink/55">{post.readTime}</span>
              </div>
              <h1
                className="reveal mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.04em]"
                style={{ transitionDelay: "120ms" }}
              >
                {post.title}
              </h1>
            </div>
            <p
              className="reveal text-lg leading-relaxed text-ink/75 md:col-span-4 md:text-xl"
              style={{ transitionDelay: "180ms" }}
            >
              {post.lead}
            </p>
          </div>

          {sectionLinks.length > 1 ? (
            <nav
              className="reveal mt-10 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap [&::-webkit-scrollbar]:hidden"
              style={{ transitionDelay: "220ms" }}
              aria-label="On this page"
            >
              {sectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="shrink-0 rounded-full border border-ink/12 bg-[#fff] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.08em] text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ) : null}
        </div>
      </header>

      {post.image ? (
        <figure className="reveal px-5 sm:px-6" style={{ transitionDelay: "260ms" }}>
          <div className="relative mx-auto aspect-[16/9] max-w-4xl overflow-hidden rounded-[24px] border border-ink/10 shadow-soft">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              priority
              sizes="(min-width: 896px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
      ) : null}

      <div className="container mx-auto max-w-3xl px-5 py-14 sm:px-6 md:py-16">
        <div className="flex flex-col gap-14 md:gap-16">
          {post.sections.map((section, index) => {
            const id = slugify(section.heading);
            return (
              <section key={section.heading} id={id} className="scroll-mt-32">
                <div className="flex items-start gap-4 border-t border-ink/10 pt-8">
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

        <aside className="mt-16 rounded-[24px] border border-ink/10 bg-[#fff] p-7 shadow-soft md:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">If you are building the record</p>
          <p className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight">
            An agent can run the errands. The system still has to be yours.
          </p>
          <HashLink
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-[#1a1a1a]"
          >
            Talk to {contact.name.split(" ")[0]}
            <ArrowRight size={14} />
          </HashLink>
        </aside>

        <nav className="mt-12 grid gap-4 border-t border-ink/10 pt-8 sm:grid-cols-2" aria-label="More notes">
          <Link
            href={`/blog/${prev.slug}`}
            className="group rounded-[20px] border border-ink/10 bg-[#fff] p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-paper hover:shadow-soft-lg"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider opacity-60">Previous</span>
            <span className="mt-2 block font-display text-xl font-medium leading-tight">{prev.title}</span>
          </Link>
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-[20px] border border-ink/10 bg-ink p-5 text-left text-paper shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:text-right"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-paper/60">Next</span>
            <span className="mt-2 block font-display text-xl font-medium leading-tight">{next.title}</span>
          </Link>
        </nav>
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
