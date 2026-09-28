"use client";

import { useEffect, useState } from "react";

export function FooterStamp() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const write = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Karachi",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };
    write();
    const id = window.setInterval(write, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-center gap-2 text-[11px] text-ink/45">
      Pakistan
      {time ? (
        <>
          <span className="w-1 h-1 rounded-full bg-ink/20" />
          {time}
        </>
      ) : null}
    </span>
  );
}
