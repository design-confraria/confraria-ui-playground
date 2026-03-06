"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = typeof window !== "undefined" && window.localStorage.getItem("theme");
    const preferred = stored || "dark";
    setTheme(preferred as "light" | "dark");
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", preferred === "dark");
      document.documentElement.setAttribute("data-theme", preferred);
    }
  }, []);

  function toggle() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.setAttribute("data-theme", next);
      window.localStorage.setItem("theme", next);
    }
  }

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-card text-card-foreground hover:bg-accent transition-colors ${className}`}
      aria-pressed={theme === "dark"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Theme: ${theme === "dark" ? "Dark" : "Light"}`}>
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
      <span className="text-sm font-medium">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}

export default ThemeToggle;
