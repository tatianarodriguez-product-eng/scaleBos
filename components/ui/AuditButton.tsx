import Link from "next/link";

type Props = {
  className?: string;
  variant?: "primary" | "onBlue";
};

export function AuditButton({ className = "", variant = "primary" }: Props) {
  const styles =
    variant === "onBlue"
      ? "bg-white text-primary hover:bg-white/95"
      : "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[0_10px_24px_rgba(47,107,255,0.28)]";

  return (
    <Link
      href="#booking"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-xl px-6 text-[0.95rem] font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${styles} ${className}`}
    >
      Book your free system audit
      <span aria-hidden="true">→</span>
    </Link>
  );
}
