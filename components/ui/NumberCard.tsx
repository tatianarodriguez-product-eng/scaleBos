'use client';

import { useState, type KeyboardEvent, type ReactNode } from 'react';
import { FlipHint } from './HubCard';

interface NumberCardProps {
  value: string;
  label: string;
  line: string;
  children: ReactNode; // the workspace screen on the back
}

// Flip card, same behaviour as HubCard: front = number + what it means, back = the screen that shows it.
// Mouse: flips on hover (and keyboard focus). Touch: flips on tap. Both faces share one grid cell.
// Desktop: these cards are ~2x as wide as the hub cards (596 vs 286px), so the flip takes 2x as long and the 3D depth is 2x
// deeper: the edges then move at the same speed as the hub cards. Phones: same width as the hub cards, same 0.8s.
export function NumberCard({ value, label, line, children }: NumberCardProps) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${value} ${label}. ${line}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseLeave={() => setFlipped(false)}
      className="group h-full cursor-pointer rounded-2xl perspective-[75rem] lg:perspective-[156rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div
        className={`grid h-full transition-transform duration-800 ease-in-out lg:duration-1600 transform-3d motion-reduce:transition-none group-hover:rotate-y-180 ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front: the number */}
        <div
          className="relative col-start-1 row-start-1 flex flex-col justify-center gap-2 rounded-2xl bg-card p-5 pr-12 shadow-subtle backface-hidden lg:gap-3 lg:p-10 lg:pr-14"
          aria-hidden="true"
        >
          <FlipHint />
          <h3 className="text-title lg:text-title-lg font-bold text-foreground">
            <span className="font-extrabold text-primary">{value}</span> {label}
          </h3>
          <p className="text-body lg:text-body-lg text-muted lg:text-balance">{line}</p>
        </div>

        {/* Back: the screen */}
        <div
          className="col-start-1 row-start-1 flex items-center justify-center rounded-2xl bg-card p-5 shadow-subtle backface-hidden rotate-y-180 lg:p-6"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
