// Cookie consent: one yes/no choice for everything non-essential
// (Meta Pixel, Google Analytics, Microsoft Clarity). Nothing tracks until 'granted'.
//
// For tracking code: wrap every tracker in onConsentGranted(() => { ...load it... }).
// It runs right away if the visitor already accepted, otherwise the moment they do.

export type ConsentState = 'granted' | 'denied';

const STORAGE_KEY = 'sb_consent_v1';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000; // ask again after 12 months
export const CONSENT_EVENT = 'sb:consent';
export const OPEN_SETTINGS_EVENT = 'sb:open-cookie-settings';

export function getConsent(): ConsentState | null {
  if (typeof window === 'undefined') return null;
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || (saved.state !== 'granted' && saved.state !== 'denied')) return null;
    if (Date.now() - saved.at > MAX_AGE_MS) return null;
    return saved.state;
  } catch {
    return null;
  }
}

export function setConsent(state: ConsentState) {
  const previous = getConsent();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, at: Date.now() }));
  } catch {
    // Storage blocked: the choice only lasts for this page view
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  // Trackers that already loaded can't be switched off in place: reload so they're gone
  if (previous === 'granted' && state === 'denied') window.location.reload();
}

export function onConsentGranted(callback: () => void) {
  if (typeof window === 'undefined') return;
  if (getConsent() === 'granted') {
    callback();
    return;
  }
  const listener = (e: Event) => {
    if ((e as CustomEvent<ConsentState>).detail === 'granted') {
      window.removeEventListener(CONSENT_EVENT, listener);
      callback();
    }
  };
  window.addEventListener(CONSENT_EVENT, listener);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
