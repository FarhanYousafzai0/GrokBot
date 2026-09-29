import Image from "next/image";
import type { Post } from "@/data/posts";

type Props = {
  post: Post;
  sizes: string;
  priority?: boolean;
  fit?: "cover" | "contain";
};

export function PostCover({ post, sizes, priority, fit = "contain" }: Props) {
  if (post.image) {
    return (
      <Image
        src={post.image}
        alt={post.imageAlt ?? post.title}
        fill
        sizes={sizes}
        priority={priority}
        className={fit === "contain" ? "object-contain object-center" : "object-cover object-center"}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-ink p-4 text-paper">
      <p className="font-display text-4xl font-medium leading-none tracking-tight">{post.num}</p>
    </div>
  );
}
