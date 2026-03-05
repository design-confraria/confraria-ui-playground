"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" && window.localStorage.getItem("theme");
    const preferred = stored === "dark" ? "dark" : "light";
    setTheme(preferred);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", preferred);
    }
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("theme", next);
    }
  }

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md border bg-card text-card-foreground hover:opacity-95 ${className}`}
      aria-pressed={theme === "dark"}
      title={`Theme: ${theme === "dark" ? "Dark" : "Light"}`}>
      <span>Theme:</span>
      <strong>{theme === "dark" ? "Dark" : "Light"}</strong>
    </button>
  );
}

export default ThemeToggle;
