import type { LinkItem, ProfileInfo } from "@/types/link";

export const profile: ProfileInfo = {
  name: "홍길동그리",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요.",
  avatarUrl: "/메인.png",
};

export const links: LinkItem[] = [
  { id: "1", label: "👽 깃허브", url: "https://github.com/Ppoppofather" },
  { id: "2", label: "👟 블로그", url: "https://nike.com" },
  { id: "3", label: "📮 이메일", url: "mailto:dydcks2002@naver.com" },
];
