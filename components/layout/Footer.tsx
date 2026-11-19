import { ArrowUpIcon, InstagramIcon } from '@/components/ui/UiIcons';
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CookieSettingsLink } from "@/components/ui/CookieBanner";

// Figma: mobile = stacked with "Back to top" · desktop = one row, 100px tall
export function Footer() {
  return (
    <footer className="bg-navy-muted shadow-footer">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between lg:py-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-2">
          <Logo className="lg:h-4 lg:w-23.25" />
          <span className="text-small text-muted">© 2026 ScaleBos. All rights reserved.</span>
          <Link
            href="https://www.instagram.com/scalebos/"
            target="_blank"
            rel="noopener"
            aria-label="ScaleBos on Instagram"
            className="-ml-3.5 flex h-12 w-12 items-center justify-center text-muted hover:text-foreground lg:ml-2 lg:h-6 lg:w-6"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-6 whitespace-nowrap text-small text-muted" aria-label="Legal">
          <Link href="/privacy" className="flex h-12 items-center hover:text-foreground lg:h-auto">
            Privacy Policy
          </Link>
          <Link href="/terms" className="flex h-12 items-center hover:text-foreground lg:h-auto">
            Terms of Service
          </Link>
          <CookieSettingsLink className="flex h-12 items-center hover:text-foreground lg:h-auto" />
        </nav>
        <Link
          href="#top"
          className="flex h-12 items-center justify-center rounded-lg border border-border-soft text-small font-semibold text-primary lg:hidden"
        >
          Back to top
          <ArrowUpIcon className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </footer>
  );
}
