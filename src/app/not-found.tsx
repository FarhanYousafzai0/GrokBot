import { Magnetic } from "@/components/Magnetic";

export default function NotFound() {
  return (
    <header className="relative pt-32 md:pt-40 pb-24 px-5 sm:px-6 overflow-hidden min-h-[70vh]">
      <div className="absolute inset-0 bg-svg-grid pointer-events-none" />
      <div className="relative container mx-auto max-w-3xl text-center">
        <h1 className="font-display font-medium text-[clamp(2.75rem,8vw,5rem)] leading-[0.95] tracking-[-0.04em]">
          This page is not on the site.
        </h1>
        <div className="mt-8">
          <Magnetic
            href="/"
            className="inline-flex items-center justify-center bg-ink text-paper outline outline-1 outline-offset-[3px] outline-ink/30 rounded-full px-7 py-4 font-medium"
          >
            Back home
          </Magnetic>
        </div>
      </div>
    </header>
  );
}
