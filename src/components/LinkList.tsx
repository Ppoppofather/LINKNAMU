"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/types/link";
import LinkCard from "@/components/LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => res.json())
      .then((data: Record<string, number>) => setClicks(data))
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch(`/api/clicks/${id}`, { method: "POST" }).catch(() => {});
  }

  return (
    <div className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          {...link}
          clickCount={clicks[link.id] ?? 0}
          onLinkClick={() => handleLinkClick(link.id)}
        />
      ))}
    </div>
  );
}
