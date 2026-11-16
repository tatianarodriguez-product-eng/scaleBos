import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

// Figma: mobile 72px with a bottom line · desktop 80px. Scrolls away with the page (Przemek 16 Nov: a fixed header covered content)
export function Header() {
  return (
    <header className="w-full border-b border-border-soft bg-background lg:border-b-0 lg:shadow-header">
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 flex h-18 items-center lg:h-20">
        <Link href="/" aria-label="ScaleBos home">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
