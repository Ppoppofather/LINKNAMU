import type { LinkItem } from "@/types/link";

interface LinkCardProps extends LinkItem {
  clickCount?: number;
  onLinkClick?: () => void;
}

export default function LinkCard({
  label,
  url,
  clickCount = 0,
  onLinkClick,
}: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onLinkClick}
      className="relative flex w-full items-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 font-medium text-foreground shadow-[0_6px_20px_-6px_rgba(190,120,70,0.25)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_10px_28px_-6px_rgba(190,120,70,0.32)] active:translate-y-0 active:shadow-[0_4px_14px_-6px_rgba(190,120,70,0.25)] dark:border-white/10 dark:bg-white/[.06] dark:shadow-[0_6px_20px_-6px_rgba(0,0,0,0.4)] dark:hover:bg-white/[.1]"
    >
      <span className="flex-1 text-center">{label}</span>
      <span className="absolute right-5 text-xs font-normal text-[color:var(--foreground-muted)]">
        {clickCount}회
      </span>
    </a>
  );
}
