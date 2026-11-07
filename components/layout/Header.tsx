import Link from "next/link";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  return (
    <header className="w-full bg-[#FAF8FF] shadow-[0px_1px_8px_rgba(15,30,54,0.06)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[72rem] items-center px-5 sm:px-8 lg:px-0">
        <Link href="/" aria-label="ScaleBos home">
          <Logo />
        </Link>
      </div>
    </header>
  );
}
