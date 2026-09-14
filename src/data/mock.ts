import type { LinkItem, ProfileInfo } from "@/types/link";

export const profile: ProfileInfo = {
  name: "홍길동그리",
  bio: "차세대 코딩 마스터",
  avatarUrl: "/avatar-placeholder.svg",
};

export const links: LinkItem[] = [
  { id: "1", label: "블로그", url: "https://example.com/blog" },
  { id: "2", label: "GitHub", url: "https://github.com" },
  { id: "3", label: "Instagram", url: "https://instagram.com" },
];
