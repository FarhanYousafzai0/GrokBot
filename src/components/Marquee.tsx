const LINE =
  "React, Next.js, NestJS, TypeScript, MongoDB, Supabase, Google APIs, Stripe, Motion";

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex items-center" aria-hidden={hidden || undefined}>
      <span className="font-display text-2xl md:text-4xl mx-8">{LINE}</span>
      <div className="w-4 h-4 bg-paper/40 sparkle mx-4" />
      <span className="font-display text-2xl md:text-4xl mx-8">{LINE}</span>
      <div className="w-4 h-4 bg-paper/40 sparkle mx-4" />
    </div>
  );
}

export function Marquee() {
  return (
    <section className="w-full bg-ink text-paper py-4 md:py-6 overflow-hidden flex whitespace-nowrap border-y border-paper/10 relative z-30">
      <div className="flex animate-marquee">
        <Track />
      </div>
    </section>
  );
}
