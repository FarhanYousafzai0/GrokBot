export type Post = {
  slug: string;
  num: string;
  title: string;
  excerpt: string;
  tag: string;
  readTime: string;
  date: string;
};

export const posts: Post[] = [
  {
    slug: "post-one",
    num: "01",
    title: "[Post title (placeholder)]",
    excerpt: "[Excerpt, placeholder.]",
    tag: "[Tag, placeholder]",
    readTime: "[Read time, placeholder]",
    date: "[Date, placeholder]",
  },
  {
    slug: "post-two",
    num: "02",
    title: "[Post title (placeholder)]",
    excerpt: "[Excerpt, placeholder.]",
    tag: "[Tag, placeholder]",
    readTime: "[Read time, placeholder]",
    date: "[Date, placeholder]",
  },
  {
    slug: "post-three",
    num: "03",
    title: "[Post title (placeholder)]",
    excerpt: "[Excerpt, placeholder.]",
    tag: "[Tag, placeholder]",
    readTime: "[Read time, placeholder]",
    date: "[Date, placeholder]",
  },
  {
    slug: "post-four",
    num: "04",
    title: "[Post title (placeholder)]",
    excerpt: "[Excerpt, placeholder.]",
    tag: "[Tag, placeholder]",
    readTime: "[Read time, placeholder]",
    date: "[Date, placeholder]",
  },
  {
    slug: "post-five",
    num: "05",
    title: "[Post title (placeholder)]",
    excerpt: "[Excerpt, placeholder.]",
    tag: "[Tag, placeholder]",
    readTime: "[Read time, placeholder]",
    date: "[Date, placeholder]",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function postNeighbors(slug: string) {
  const index = posts.findIndex((post) => post.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };
  const prev = posts[(index - 1 + posts.length) % posts.length];
  const next = posts[(index + 1) % posts.length];
  return { prev, next };
}
