export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[1.375rem] font-extrabold tracking-tight text-foreground ${className}`}>
      Scale<span className="text-primary">Bos</span>
    </span>
  );
}
