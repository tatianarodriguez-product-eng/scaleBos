import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <Logo />
          <span>© 2026 ScaleBos. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6 text-sm text-muted" aria-label="Legal">
          <Link href="/privacy" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
