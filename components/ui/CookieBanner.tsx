'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { getConsent, setConsent, CONSENT_EVENT, OPEN_SETTINGS_EVENT, type ConsentState } from '@/lib/consent';

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
};

// First visit: ask once. Reject and Accept carry equal weight (EU rules).
// Reopened from "Cookie settings" in the footer.
export function CookieBanner() {
  // No choice saved yet (server render: hidden, so nothing flashes before the page knows)
  const needsChoice = useSyncExternalStore(subscribe, () => getConsent() === null, () => false);
  const [reopened, setReopened] = useState(false);
  const open = needsChoice || reopened;

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!open) return null;

  const choose = (state: ConsentState) => {
    setConsent(state);
    setReopened(false);
  };

  const button =
    'flex h-11 flex-1 items-center justify-center rounded-lg px-5 text-ui font-semibold transition-colors lg:flex-none';

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="fixed inset-x-4 bottom-4 z-50 rounded-2xl border border-border-soft bg-card p-5 shadow-panel-lg lg:left-8 lg:right-auto lg:bottom-8 lg:max-w-[28rem] lg:p-6"
    >
      <h2 id="cookie-title" className="text-base font-bold text-foreground">Cookies</h2>
      <p id="cookie-text" className="mt-2 text-sm leading-5.5 text-muted">
        I&apos;d like to use cookies to see which pages and ads actually help people.
        Nothing tracks you unless you accept.{' '}
        <Link href="/privacy" className="font-semibold text-primary underline">Privacy Policy</Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => choose('denied')}
          className={`${button} border border-border-soft bg-card text-foreground hover:bg-navy-muted`}
        >
          Reject
        </button>
        <button
          type="button"
          onClick={() => choose('granted')}
          className={`${button} bg-primary text-primary-foreground hover:bg-primary-hover`}
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className={className}
    >
      Cookie settings
    </button>
  );
}
