export default function Header() {
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