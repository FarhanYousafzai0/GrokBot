/** Scroll to a section id; accounts for fixed header offset via scroll-margin on targets. */
export function scrollToHashId(id: string, behavior: ScrollBehavior = "smooth") {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

export function scrollToCurrentHash(behavior: ScrollBehavior = "smooth") {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;
  scrollToHashId(decodeURIComponent(hash.slice(1)), behavior);
}

/** True for in-app section links like `/#work` or `#work`. */
export function isSectionHashHref(href: string) {
  return /^(\/)?#[\w-]+$/.test(href);
}

export function hashIdFromHref(href: string) {
  const match = href.match(/#([\w-]+)$/);
  return match?.[1] ?? null;
}
