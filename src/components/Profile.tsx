import type { ProfileInfo } from "@/types/link";

export default function Profile({ name, bio, avatarUrl }: ProfileInfo) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full bg-black/[.06] dark:bg-white/[.08]">
        {avatarUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt={`${name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-sm text-foreground/70">{bio}</p>
      </div>
    </div>
  );
}
