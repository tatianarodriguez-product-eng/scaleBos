'use client';

import { ArrowRightIcon, CloseIcon, SelectChevronIcon } from '@/components/ui/UiIcons';
import { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { BOOKING_FORM_OPTIONS, BOOKING_ERROR_MESSAGES } from '@/lib/content';
import { CALENDLY_URL, UTM_KEYS } from '@/lib/leads';

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

const CALENDLY_SCRIPT = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS = 'https://assets.calendly.com/assets/external/widget.css';
const UTM_STORAGE_KEY = 'sb_utm';

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
    script.addEventListener('error', () => reject());
  });
}

// UTM tags from the ad link, kept for the visit so they survive scrolling and reloads
function readUtm(): Record<string, string> {
  const fromUrl: Record<string, string> = {};
  const params = new URLSearchParams(window.location.search);
  UTM_KEYS.forEach((k) => { const v = params.get(k); if (v) fromUrl[k] = v; });
  try {
    if (Object.keys(fromUrl).length) sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    return Object.keys(fromUrl).length ? fromUrl : JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || '{}');
  } catch {
    return fromUrl;
  }
}

interface FormData {
  fullName: string;
  email: string;
  niche: string;
  revenue: string;
  teamSize: string;
  handle: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function BookingSection() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    niche: '',
    revenue: '',
    teamSize: '',
    handle: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const leadIdRef = useRef<string | null>(null);
  const utmRef = useRef<Record<string, string>>({});

  useEffect(() => {
    utmRef.current = readUtm();

    // Calendly tells the page when a time is booked: mark the lead as Booked in Notion
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== 'https://calendly.com') return;
      if (e.data?.event !== 'calendly.event_scheduled' || !leadIdRef.current) return;
      fetch('/api/lead', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: leadIdRef.current }),
      }).catch(() => {});
      // Tracking hook (Meta Pixel 'Schedule', GA4) goes here once consent + IDs are in
      window.dispatchEvent(new CustomEvent('sb:booking-scheduled'));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, []);

  // Expresiones regulares actualizadas
  const regexPatterns = {
    fullName: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+\s+[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    handle: /^\S{3,}$/
  };

  // Función de validación individual (aislada para el tiempo real)
  const validateField = (id: keyof FormData, value: string): string | undefined => {
    if (!value.trim()) {
      const messages = BOOKING_ERROR_MESSAGES as Record<string, { required?: string }>;
      return messages[id]?.required || 'This field is required.';
    }

    if (id === 'fullName' && !regexPatterns.fullName.test(value)) {
      return BOOKING_ERROR_MESSAGES.fullName.invalid;
    }
    if (id === 'email' && !regexPatterns.email.test(value)) {
      return BOOKING_ERROR_MESSAGES.email.invalid;
    }
    if (id === 'handle' && !regexPatterns.handle.test(value)) {
      return BOOKING_ERROR_MESSAGES.handle.invalid;
    }

    return undefined; // Sin errores
  };

  // Maneja los cambios y evalúa en tiempo real
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    // Actualiza el valor del campo
    setFormData(prev => ({ ...prev, [id]: value }));
    
    // Evalúa y actualiza el error en tiempo real
    const errorMsg = validateField(id as keyof FormData, value);
    setErrors(prev => ({
      ...prev,
      [id]: errorMsg
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;
    
    (Object.keys(formData) as Array<keyof FormData>).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validación de seguridad antes de enviar
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, website: honeypot, utm: utmRef.current }),
      });
      if (!res.ok) throw new Error();
      leadIdRef.current = (await res.json()).id;
    } catch {
      setIsSubmitting(false);
      setSubmitError('Something went wrong saving your details. Please try again, or email przemek@scalebos.net.');
      return;
    }
    setIsSubmitting(false);

    // Tracking hook (Meta Pixel 'Lead', GA4) goes here once consent + IDs are in
    window.dispatchEvent(new CustomEvent('sb:lead-submitted'));

    dialogRef.current?.showModal();
    try {
      const calendly = await loadCalendly();
      if (calendarRef.current) {
        calendarRef.current.innerHTML = '';
        calendly.initInlineWidget({
          url: `${CALENDLY_URL}?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1`,
          parentElement: calendarRef.current,
          prefill: { name: formData.fullName.trim(), email: formData.email.trim() },
          // Only tags that have a value: empty ones make Calendly hang on its loading screen
          utm: Object.fromEntries(
            ([['utmSource', 'utm_source'], ['utmMedium', 'utm_medium'], ['utmCampaign', 'utm_campaign'], ['utmContent', 'utm_content'], ['utmTerm', 'utm_term']] as const)
              .map(([key, param]) => [key, utmRef.current[param]])
              .filter(([, value]) => value),
          ),
        });
      }
    } catch {
      // Calendly blocked or offline: a plain link still works
      if (calendarRef.current) {
        calendarRef.current.innerHTML = `<a href="${CALENDLY_URL}" target="_blank" rel="noopener" class="text-primary font-semibold underline">Open the calendar in a new tab</a>`;
      }
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const inputBase =
    'h-12 w-full rounded-lg border bg-background px-3.5 text-body placeholder:text-subtle focus:outline-none focus:ring-2 transition-colors';
  const stateCls = (key: keyof FormData) =>
    errors[key] ? 'border-danger focus:ring-danger/40' : 'border-border-soft focus:ring-primary/40';
  // Selects: grey while empty, dark once something is chosen
  const selectCls = (key: keyof FormData) =>
    `${inputBase} appearance-none pr-10 ${formData[key] ? 'text-foreground' : 'text-subtle'} ${stateCls(key)}`;
  const label = 'mb-1.5 block text-small font-semibold tracking-[0.015rem] text-muted';
  const errorText = 'mt-1.5 text-small font-semibold text-danger';
  const chevron = (
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted">
      <SelectChevronIcon className="h-4.5 w-4.5" />
    </span>
  );

  const textField = (id: 'fullName' | 'email' | 'handle', text: string, type: string, placeholder: string) => (
    <div>
      <label htmlFor={id} className={label}>{text}</label>
      <input
        type={type}
        id={id}
        value={formData[id]}
        onChange={handleChange}
        placeholder={placeholder}
        aria-invalid={!!errors[id]}
        aria-describedby={errors[id] ? `${id}-error` : undefined}
        className={`${inputBase} text-foreground ${stateCls(id)}`}
      />
      {errors[id] && <p id={`${id}-error`} className={errorText}>{errors[id]}</p>}
    </div>
  );

  const selectField = (
    id: 'niche' | 'revenue' | 'teamSize',
    text: string,
    placeholder: string,
    options: readonly { value: string; label: string }[],
  ) => (
    <div>
      <label htmlFor={id} className={label}>{text}</label>
      <div className="relative">
        <select
          id={id}
          value={formData[id]}
          onChange={handleChange}
          aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${id}-error` : undefined}
          className={selectCls(id)}
        >
          <option value="" disabled hidden>{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {chevron}
      </div>
      {errors[id] && <p id={`${id}-error`} className={errorText}>{errors[id]}</p>}
    </div>
  );

  return (
    <section className="bg-primary" id='booking'>
      <div className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24 grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">

        {/* Left: what the call is. lg:pt-10 = the form card padding, so "What to do next" lines up with "Full name" */}
        <div className="text-white lg:pt-10">
          <p className="text-tag font-bold uppercase text-primary-soft">What to do next</p>
          <h2 className="text-h2 lg:text-h2-lg font-bold mt-3 text-white lg:mt-4">
            Ready to scale past €100k/mo<br className="hidden xl:block" /> while actually working less?
          </h2>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-navy/45 p-5 shadow-call-box lg:max-w-126 lg:p-6">
            <h3 className="text-title leading-7.25 font-bold lg:text-title-lg lg:leading-8 lg:tracking-[-0.0225rem]">
              Book a free 45-minute system audit.
            </h3>
            {/* Same 3 steps as the hero, so the page says one thing about the call */}
            <ol className="flex flex-col gap-4 lg:gap-3.5">
              {[
                "You show me how you run your business",
                "We uncover where you lose the most time",
                "You leave knowing exactly what to fix first"
              ].map((item, i) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-white/15 text-small font-bold text-white lg:mt-0.75" aria-hidden="true">
                    {i + 1}
                  </span>
                  <span className="text-body leading-6.25 text-white lg:text-body-lg lg:leading-7 lg:text-white/90">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right: the form, one field per row (Przemek 16 Nov: pairs looked odd) */}
        <div className="rounded-2xl bg-card p-5 shadow-form lg:p-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6" noValidate>
            <div className="flex flex-col gap-5 lg:gap-4">
              {textField('fullName', 'Full name', 'text', 'Your full name')}
              {textField('email', 'Email', 'email', 'you@email.com')}
              {selectField('niche', 'Coaching niche', 'Select your niche', BOOKING_FORM_OPTIONS.niches)}
              {selectField('revenue', 'Monthly revenue', 'Select a range', BOOKING_FORM_OPTIONS.revenues)}
              {selectField('teamSize', 'Team size', 'Select your team size', BOOKING_FORM_OPTIONS.teamSizes)}
              {textField('handle', 'Instagram handle or website', 'text', '@yourhandle or yoursite.com')}
            </div>

            {/* Honeypot: hidden from people, bots fill it */}
            <div aria-hidden="true" className="absolute -left-[625rem] h-px w-px overflow-hidden">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-body leading-5.5 font-semibold lg:text-body-lg text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 lg:h-16 lg:text-md lg:leading-6 lg:shadow-cta"
            >
              {isSubmitting ? 'Sending details...' : 'Book your free system audit'}
              {!isSubmitting && (
                <ArrowRightIcon className="h-4 w-4" />
              )}
            </button>
            {submitError && <p role="alert" className={errorText}>{submitError}</p>}
          </form>
        </div>
      </div>

      {/* Modal Dialog */}
      <dialog 
        ref={dialogRef} 
        className="booking-dialog bg-card rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="bg-card w-full h-[min(90dvh,50rem)] flex flex-col items-center p-5 pt-10 relative lg:p-8">
          
          <button 
            onClick={closeDialog}
            className="absolute top-4 right-4 p-2 text-muted hover:text-foreground bg-background rounded-full transition-colors"
            aria-label="Close calendar"
          >
            <CloseIcon className="w-5 h-5" />
          </button>

          <h3 className="text-title font-bold text-foreground mb-2 lg:text-title-lg text-center">
            Pick a time for your audit
          </h3>
          <p className="text-muted text-center mb-4">
            Your details have been saved. Please select a time slot below.
          </p>

          <div ref={calendarRef} className="relative w-full min-h-0 flex-1 overflow-hidden rounded-xl" />
          <a href={CALENDLY_URL} target="_blank" rel="noopener" className="mt-3 text-small text-muted underline hover:text-foreground">
            Calendar not loading? Open it in a new tab
          </a>
          
        </div>
      </dialog>
    </section>
  );
}