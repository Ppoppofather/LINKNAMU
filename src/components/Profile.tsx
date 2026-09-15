import type { ProfileInfo } from "@/types/link";

export default function Profile({ name, bio, avatarUrl }: ProfileInfo) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-black/[.06] shadow-[0_10px_28px_-8px_rgba(190,120,70,0.45)] ring-4 ring-white/70 dark:bg-white/[.08] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.5)] dark:ring-white/10">
        {avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        )}
        <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-6px_10px_rgba(0,0,0,0.12)]" />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-lg font-bold tracking-tight">{name}</h1>
        <p className="text-sm text-[color:var(--foreground-muted)]">{bio}</p>
      </div>
    </div>
  );
}
