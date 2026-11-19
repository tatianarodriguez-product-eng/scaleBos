import { CALENDLY_URL, UTM_KEYS, type UtmParams } from '@/lib/leads';

// Minimal typing for Calendly's embed script (assets.calendly.com)
interface CalendlyApi {
  initInlineWidget: (opts: {
    url: string;
    parentElement: HTMLElement;
    prefill?: { name?: string; email?: string };
    utm?: Record<string, string>;
  }) => void;
}
declare global {
  interface Window { Calendly?: CalendlyApi }
}

const CALENDLY_ORIGIN = 'https://calendly.com';
const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const CALENDLY_EMBED_URL = `${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1`;

// Calendly's widget takes camelCase UTM keys: utm_source -> utmSource
const toCamelCase = (key: string) => key.replace(/_([a-z])/g, (_, letter: string) => letter.toUpperCase());

function loadCalendly(): Promise<CalendlyApi> {
  return new Promise((resolve, reject) => {
    if (!document.querySelector(`link[href="${CALENDLY_CSS}"]`)) {
      const css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = CALENDLY_CSS;
      document.head.appendChild(css);
    }
    if (window.Calendly) return resolve(window.Calendly);
    let script = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT}"]`);
    if (!script) {
      script = document.createElement('script');
      script.src = CALENDLY_SCRIPT;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener('load', () => (window.Calendly ? resolve(window.Calendly) : reject()));
    script.addEventListener('error', () => {
      script.remove(); // so the next attempt loads it again instead of waiting on a dead script
      reject();
    });
  });
}

// Only tags that have a value: empty ones make Calendly hang on its loading screen
function toCalendlyUtm(utm: UtmParams): Record<string, string> {
  return Object.fromEntries(
    UTM_KEYS.map((key) => [toCamelCase(key), utm[key]]).filter(([, value]) => value),
  );
}

// Loads Calendly and draws the booking calendar inside `container`. Rejects if Calendly is blocked or offline.
export async function showCalendlyCalendar(
  container: HTMLElement,
  prefill: { name: string; email: string },
  utm: UtmParams,
): Promise<void> {
  const calendly = await loadCalendly();
  container.replaceChildren();
  calendly.initInlineWidget({ url: CALENDLY_EMBED_URL, parentElement: container, prefill, utm: toCalendlyUtm(utm) });
}

// True when a window message is Calendly saying a time was booked
export function isCalendlyBooking(event: MessageEvent): boolean {
  return event.origin === CALENDLY_ORIGIN && event.data?.event === 'calendly.event_scheduled';
}
