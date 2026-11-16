import Link from "next/link";

type Props = {
  className?: string;
  variant?: "primary" | "onBlue";
};

// Figma: mobile = full width, 56px tall, 15/22 · desktop = 342x64, 17/24
export function AuditButton({ className = "", variant = "primary" }: Props) {
  const styles =
    variant === "onBlue"
      ? "bg-white text-primary hover:bg-white/95"
      : "bg-primary text-primary-foreground hover:bg-primary-hover lg:shadow-cta";

  return (
    <Link
      href="#booking"
      className={`inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-lg px-3.5 text-ui leading-5.5 font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:h-16 lg:w-85.5 lg:gap-3 lg:px-10 lg:text-md lg:leading-6 lg:tracking-[0.00875rem] ${styles} ${className}`}
    >
      Book your free system audit
      <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
    </Link>
  );
}
