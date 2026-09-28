import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, postNeighbors, posts } from "@/data/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { prev, next } = postNeighbors(slug);

  return (
    <>
      <header className="relative pt-32 md:pt-36 pb-10 px-5 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
        <div className="relative container mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="reveal inline-flex items-center gap-2 text-sm font-medium border border-ink/15 rounded-full px-4 py-2 hover:bg-ink hover:text-paper transition-colors"
            id="post-back-link"
          >
            <ArrowLeft size={16} /> All posts
          </Link>
          <div className="mt-10 reveal" style={{ transitionDelay: "80ms" }}>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[11px] font-mono uppercase px-3 py-1 rounded-full bg-ink text-paper">{post.tag}</span>
            </div>
            <h1 className="font-display font-medium text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.04em]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-ink/70">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-ink/60">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-ink/30" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </header>

      <article className="px-5 sm:px-6 pb-16 container mx-auto max-w-3xl">
        <div className="border-t border-ink/10 pt-10 flex flex-col gap-6 text-lg text-ink/80 leading-relaxed reveal">
          <p>[Opening paragraph, placeholder.]</p>
          <p>[A second paragraph, placeholder.]</p>
          <p>[A closing paragraph, placeholder.]</p>
        </div>
      </article>

      {prev && next ? (
        <nav className="px-5 sm:px-6 pb-20 container mx-auto max-w-3xl grid sm:grid-cols-2 gap-4">
          <Link
            href={`/blog/${prev.slug}`}
            className="group rounded-[24px] border border-ink/10 p-6 hover:bg-ink hover:text-paper transition-colors reveal lift"
            id="post-prev-link"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 group-hover:text-paper/60">
              Previous
            </span>
            <span className="mt-3 flex items-center gap-2 font-medium">
              <ArrowLeft size={16} /> Post {prev.num}
            </span>
          </Link>
          <Link
            href={`/blog/${next.slug}`}
            className="group rounded-[24px] border border-ink/10 p-6 hover:bg-ink hover:text-paper transition-colors reveal lift sm:text-right"
            id="post-next-link"
          >
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink/50 group-hover:text-paper/60">
              Next
            </span>
            <span className="mt-3 flex items-center gap-2 font-medium sm:justify-end">
              Post {next.num} <ArrowRight size={16} />
            </span>
          </Link>
        </nav>
      ) : null}
    </>
  );
}
