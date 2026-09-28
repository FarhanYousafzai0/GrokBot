"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { hashIdFromHref, isSectionHashHref, scrollToHashId } from "@/lib/scroll-to-hash";

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: string };

export function HashLink({ href, onClick, ...rest }: Props) {
  const pathname = usePathname();

  if (!isSectionHashHref(href)) {
    return <Link href={href} onClick={onClick} {...rest} />;
  }

  const id = hashIdFromHref(href);
  const homePath = href.startsWith("/#") ? "/" : pathname;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !id) return;

    if (pathname === homePath) {
      event.preventDefault();
      scrollToHashId(id);
      const nextUrl = `${homePath}#${id}`;
      window.history.pushState(null, "", nextUrl);
    }
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
