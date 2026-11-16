import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

// Figma: mobile = stacked with "Back to top" · desktop = one row, 100px tall
export function Footer() {
  return (
    <footer className="bg-navy-muted shadow-footer">
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
          <Logo className="lg:h-4 lg:w-23.25" />
          <span className="text-caption leading-5 text-muted">© 2026 ScaleBos. All rights reserved.</span>
          <a
            href="https://www.instagram.com/scalebos/"
            target="_blank"
            rel="noopener"
            aria-label="ScaleBos on Instagram"
            className="-ml-3.5 flex h-12 w-12 items-center justify-center text-muted hover:text-foreground lg:ml-2 lg:h-6 lg:w-6"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 whitespace-nowrap text-sm text-muted lg:text-caption lg:leading-5" aria-label="Legal">
          <Link href="/privacy" className="flex h-12 items-center hover:text-foreground lg:h-auto">
            Privacy Policy
          </Link>
          <Link href="/terms" className="flex h-12 items-center hover:text-foreground lg:h-auto">
            Terms of Service
          </Link>
        </nav>
        <a
          href="#top"
          className="flex h-12 items-center justify-center rounded-lg border border-border-soft text-sm font-semibold text-primary lg:hidden"
        >
          Back to top
          <svg className="ml-2 h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 13V3M4 7l4-4 4 4" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
