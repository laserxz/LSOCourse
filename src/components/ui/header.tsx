import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-red/20 flex items-center justify-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="text-accent-red"
            >
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="12" y1="2" x2="12" y2="22" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-medium text-foreground">
              LSO Course
            </span>
            <span className="hidden sm:inline text-xs text-text-tertiary ml-2">
              AU/NZ Entertainment Laser Safety
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}
