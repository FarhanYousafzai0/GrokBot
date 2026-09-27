# Farhan Yousafzai

Portfolio for Farhan Yousafzai, a MERN stack and React Native developer based in Pakistan. Built with Next.js (App Router), TypeScript, and Tailwind CSS.

Placeholder copy stays marked `(placeholder)` or `[in brackets]` until real project details are added in `src/data/projects.ts` and real posts are added in `src/data/posts.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run lint
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub.
2. In Vercel, import the repository. Framework preset: Next.js. Root directory: the repo root.
3. Leave the build command as `npm run build` and the output as the Next.js default. No environment variables are required.
4. Deploy. Vercel serves `/`, `/work`, `/work/[slug]`, `/about`, `/contact`, `/blog`, and `/blog/[slug]`.

## Portrait

The black and white cutout lives at `public/images/farhan-cutout-bw.png` (741x933, transparent PNG). The hero, the landing about section, and the about page load it with `next/image`. A colour copy of the same photo is at `public/images/farhan-cutout-color.png` and is not used by any page. Replace the black and white file to update the portrait. Do not substitute a different person.
