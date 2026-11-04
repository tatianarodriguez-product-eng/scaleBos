import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-[4.5rem] max-w-[72rem] items-center px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="ScaleBos home">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
