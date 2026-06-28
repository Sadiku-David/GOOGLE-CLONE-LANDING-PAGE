"use client";

import { useState, useEffect } from "react";

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Check local storage or system preference on load
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="flex justify-end items-center gap-4 px-5 py-3 bg-void">
      <nav className="flex items-center gap-4">
        <a
          href="https://mail.google.com"
          className="text-sm text-primary transition-colors hover:underline"
        >
          Gmail
        </a>
        <a
          href="https://images.google.com"
          className="text-sm text-primary transition-colors hover:underline"
        >
          Images
        </a>
      </nav>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 text-muted rounded-full hover:bg-elevated transition-colors"
        aria-label="Toggle theme"
        title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <button
        className="p-2 text-muted rounded-full hover:bg-elevated transition-colors"
        aria-label="Google apps"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <rect x="3" y="3" width="4" height="4" rx="0.5" />
          <rect x="10" y="3" width="4" height="4" rx="0.5" />
          <rect x="17" y="3" width="4" height="4" rx="0.5" />
          <rect x="3" y="10" width="4" height="4" rx="0.5" />
          <rect x="10" y="10" width="4" height="4" rx="0.5" />
          <rect x="17" y="10" width="4" height="4" rx="0.5" />
          <rect x="3" y="17" width="4" height="4" rx="0.5" />
          <rect x="10" y="17" width="4" height="4" rx="0.5" />
          <rect x="17" y="17" width="4" height="4" rx="0.5" />
        </svg>
      </button>

      <div
        className="w-8 h-8 rounded-full bg-google-blue text-white flex items-center justify-center text-sm font-semibold cursor-pointer"
        title="Sign in"
      >
        U
      </div>
    </header>
  );
}