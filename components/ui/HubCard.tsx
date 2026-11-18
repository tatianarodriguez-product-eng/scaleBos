'use client';

import { FlipIcon } from '@/components/ui/UiIcons';
import { useState, type KeyboardEvent } from 'react';
import { figmaHubIcons } from './FigmaIcons';

interface HubCardProps {
  name: string;
  body: string;
  iconIndex: number;
}

// Flip card: front = icon + hub name, back = what the hub does.
// Devices with a mouse flip on hover (and keyboard focus); touch devices flip on tap.
// Both faces share one grid cell, so the card is always as tall as its longest face.
export function HubCard({ name, body, iconIndex }: HubCardProps) {
  const Icon = figmaHubIcons[iconIndex];
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
      aria-label={`${name}: ${body}`}
      onClick={toggle}
      onKeyDown={onKeyDown}
      onMouseLeave={() => setFlipped(false)}
      className="group cursor-pointer rounded-2xl perspective-[75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div
        className={`grid transition-transform duration-800 ease-in-out transform-3d motion-reduce:transition-none group-hover:rotate-y-180 ${flipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front: icon + name centred together, flip hint in the corner */}
        <div
          className="relative col-start-1 row-start-1 flex flex-col items-center justify-center gap-4 rounded-2xl bg-card p-5 text-center backface-hidden lg:p-6 lg:shadow-card"
          aria-hidden="true"
        >
          <FlipHint />
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
            <Icon className="h-8 w-8" />
          </span>
          <h3 className="text-title lg:text-title-lg font-bold text-foreground">{name}</h3>
        </div>

        {/* Back */}
        <div
          className="col-start-1 row-start-1 flex flex-col gap-3 rounded-2xl bg-card p-5 backface-hidden rotate-y-180 lg:p-6 lg:shadow-card"
          aria-hidden="true"
        >
          <p className="text-tag font-bold uppercase text-primary">{name}</p>
          <p className="text-body lg:text-body-lg text-muted lg:text-pretty">{body}</p>
        </div>
      </div>
    </div>
  );
}

// Small "turn me over" arrows in the corner of the front face (also used by NumberCard)
export function FlipHint() {
  return (
    <FlipIcon className="absolute top-4 right-4 h-5 w-5 text-primary/50 lg:top-5 lg:right-5" />
  );
}
