
export default function Footer() {
  const leftLinks = ["About", "Advertising", "Business", "How Search works"];
  const rightLinks = ["Privacy", "Terms", "Settings"];

  return (

    <footer className="w-full bg-[#171717]">

      {/* ── Upper Tier: Region Label ── */}
      <div className="px-5 py-2 text-sm text-muted">
        Nigeria
      </div>

      {/* ── Lower Tier: Links Row ── */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-3 gap-3 text-sm border-t border-border text-muted"
      >
        {/* Left cluster — corporate links */}
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {leftLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>


        <a
          href="https://ai.google"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block text-center text-accent hover:underline"
        >
          Build, create and do more with AI tools from Google
        </a>

        {/* Right cluster — legal links */}
        <nav className="flex gap-5">
          {rightLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-muted hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}