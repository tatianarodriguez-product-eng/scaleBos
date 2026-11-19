// Small interface icons used across the page. Every icon takes a className
// for size, colour and position, and is hidden from screen readers.
type IconProps = { className?: string };

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const;

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" strokeWidth="1.8" {...stroke}>
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" strokeWidth="1.8" {...stroke}>
      <path d="M8 13V3M4 7l4-4 4 4" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 7" strokeWidth="1.8" {...stroke}>
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}

export function SelectChevronIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="2" {...stroke}>
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="2" {...stroke}>
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 12 12" strokeWidth="2" {...stroke}>
      <path d="M1.5 1.5l9 9M10.5 1.5l-9 9" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 17 17" strokeWidth="1.6" {...stroke}>
      <circle cx="8.5" cy="8.5" r="7.6" />
      <path d="M5.3 8.7l2.2 2.2 4.2-4.5" />
    </svg>
  );
}

export function CheckCircleFilledIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" aria-hidden="true">
      <circle cx="11" cy="11" r="11" fill="currentColor" />
      <path d="M6.8 11.3l2.8 2.8 5.6-6" fill="none" stroke="var(--card)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CrossCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 22 22" strokeWidth="1.8" {...stroke}>
      <circle cx="11" cy="11" r="9.5" />
      <path d="M8.2 8.2l5.6 5.6M13.8 8.2l-5.6 5.6" />
    </svg>
  );
}

export function FlipIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" strokeWidth="1.8" {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
