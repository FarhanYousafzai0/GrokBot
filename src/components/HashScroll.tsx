"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToCurrentHash } from "@/lib/scroll-to-hash";

/** Scroll to the URL hash after client navigations (e.g. case study → home section). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const run = () => scrollToCurrentHash();
    requestAnimationFrame(() => requestAnimationFrame(run));
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToCurrentHash();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return null;
}
