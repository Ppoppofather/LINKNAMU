import type { LinkItem } from "@/types/link";

export default function LinkCard({ label, url }: LinkItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-black/10 bg-white px-5 py-4 text-center font-medium text-foreground transition-colors hover:bg-black/[.03] active:bg-black/[.06] dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}
