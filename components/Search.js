"use client";

import { useState } from "react";
import Image from "next/image";


function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8 a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export default function SearchCore() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {

      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
    }
  };

  return (

    <div className="flex flex-col items-center w-full max-w-xl">

      {/* ── Google Logo ── */}
      <div className="mb-8">
        <Image
          src="/google-logo.svg"
          alt="Google"
          width={272}
          height={92}
          priority
          className="max-w-full h-auto"
        />
      </div>

      {/* ── Search Form ── */}
      <form onSubmit={handleSearch} className="w-full mb-6">
        <div
          className="flex items-center gap-3 px-4 rounded-full w-full h-[46px] transition-all duration-200 bg-surface border border-border focus-within:bg-elevated focus-within:border-transparent focus-within:shadow-[0_1px_6px_rgba(0,0,0,0.28)]"
        >
          {/* Search magnifying glass icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" className="text-muted shrink-0">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>

          {/* The actual text input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-primary caret-primary"
            aria-label="Search"
            autoComplete="off"
          />

          {/* Right-side icon buttons */}
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Search by voice"
              className="p-1.5 rounded-full hover:bg-border transition-colors text-muted">
              <MicIcon />
            </button>
            <button type="button" aria-label="Search by image"
              className="p-1.5 rounded-full hover:bg-border transition-colors text-muted">
              <CameraIcon />
            </button>
          </div>
        </div>
      </form>

      {/* ── Action Buttons ── */}
      <div className="flex gap-3 flex-wrap justify-center">
        <button
          type="button"
          onClick={handleSearch}
          className="px-4 py-2 rounded text-sm font-medium transition-colors bg-elevated text-primary border border-border hover:bg-border"
        >
          Google Search
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded text-sm font-medium transition-colors bg-elevated text-primary border border-border hover:bg-border"
          onClick={() => window.open("https://www.google.com/doodles", "_blank")}
        >
          I&apos;m Feeling Lucky
        </button>
      </div>

      {/* Language Links  */}
      <div className="mt-6 text-sm text-center text-muted">
        Google offered in:{" "}
        {["Hausa", "Igbo", "Èdè Yorùbà", "Nigerian Pidgin"].map((lang, i, arr) => (
          <span key={lang}>
            <a href="#" className="text-accent hover:underline">{lang}</a>
            {i < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </div>
    </div>
  );
}