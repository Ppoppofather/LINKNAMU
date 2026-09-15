import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/data/mock";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center px-6 py-16 sm:py-20">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-[420px] flex-col items-center gap-10">
        <Profile {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
