import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { profile, links } from "@/data/mock";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center bg-background px-4 py-12">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        <Profile {...profile} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
