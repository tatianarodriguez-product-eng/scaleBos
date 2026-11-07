type IconProps = { className?: string };

export function IconBuilding({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Estructura principal del edificio */}
      <path
        d="M30 76V19C30 15.7 32.7 13 36 13H62C65.3 13 68 15.7 68 19V76"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Extensión lateral izquierda */}
      <path
        d="M30 38H23C18.6 38 15 41.6 15 46V68C15 72.4 18.6 76 23 76H73"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Extensión lateral derecha */}
      <path
        d="M68 32H72C76.4 32 80 35.6 80 40V68C80 72.4 76.4 76 72 76"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Líneas interiores */}
      <path
        d="M42 26H57M42 40H57M42 54H57"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconClipboard({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="5" width="12" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Cuerpo del megáfono */}
      <path
        d="M5 10L17.4 6.5C17.9 6.35 18.3 6.7 18.3 7.2V16.8C18.3 17.3 17.9 17.65 17.4 17.5L5 14V10Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Empuñadura */}
      <path
        d="M6.8 14.5L7.5 16.8C7.9 18.1 9.2 18.8 10.4 18.4C11.5 18.1 12.1 16.9 11.7 15.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconFunnel({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 5h16l-6 8v5l-4 2v-7L4 5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function IconUser({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19c1.2-3 3.5-4.5 6.5-4.5s5.3 1.5 6.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19V5M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M9 15v-3M13 15V8M17 15v-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 19c.8-2.8 2.8-4.2 5-4.2s4.2 1.4 5 4.2M14 14.8c1.6-.2 3.2.8 4 3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconWallet({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="7" width="17" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.5 10h17M16.5 13.5h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconTrend({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 16l5.5-5.5 3.5 3.5L20 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7h6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 19s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 7.5a3.8 3.8 0 0 1 7 2.3C19 14.6 12 19 12 19Z" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function IconGear({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.4 6.4l1.4 1.4M16.2 16.2l1.4 1.4M17.6 6.4l-1.4 1.4M7.8 16.2l-1.4 1.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export const hubIcons = [
  IconBuilding,
  IconClipboard,
  IconMegaphone,
  IconFunnel,
  IconUser,
  IconChart,
  IconUsers,
] as const;
