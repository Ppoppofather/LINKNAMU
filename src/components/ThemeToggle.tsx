"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "라이트 모드로 전환" : "다크 모드로 전환"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white/40 text-sm shadow-sm backdrop-blur-md transition-colors hover:bg-white/60 dark:border-white/10 dark:bg-white/[.06] dark:hover:bg-white/[.1]"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
