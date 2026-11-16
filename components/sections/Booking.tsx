'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { BOOKING_FORM_OPTIONS, BOOKING_ERROR_MESSAGES } from '@/lib/content';

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
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Expresiones regulares actualizadas
  const regexPatterns = {
    fullName: /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+\s+[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    handle: /^\S{3,}$/
  };

  // Función de validación individual (aislada para el tiempo real)
  const validateField = (id: keyof FormData, value: string): string | undefined => {
    if (!value.trim()) {
      return (BOOKING_ERROR_MESSAGES as any)[id]?.required || 'This field is required.';
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
    // Mock API de 1.5s
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    // Modal emergente nativo[cite: 11]
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const inputBase =
    'h-12 w-full rounded-lg border bg-background px-3.5 text-base placeholder:text-subtle focus:outline-none focus:ring-2 transition-colors';
  const stateCls = (key: keyof FormData) =>
    errors[key] ? 'border-danger focus:ring-danger/40' : 'border-border-soft focus:ring-primary/40';
  // Selects: grey while empty, dark once something is chosen
  const selectCls = (key: keyof FormData) =>
    `${inputBase} appearance-none pr-10 ${formData[key] ? 'text-foreground' : 'text-subtle'} ${stateCls(key)}`;
  const label = 'mb-1.5 block text-sm leading-5 font-semibold tracking-[0.015rem] text-muted';
  const errorText = 'mt-1.5 text-xs font-semibold text-danger';
  const chevron = (
    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted">
      <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
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
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 py-14 lg:py-24 grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">

        {/* Left: what the call is. lg:pt-10 = the form card padding, so "What to do next" lines up with "Full name" */}
        <div className="text-white lg:pt-10">
          <p className="text-tag lg:text-tag-lg font-bold uppercase text-primary-soft">What to do next</p>
          <h2 className="text-h2 lg:text-h2-lg font-bold mt-3 text-white lg:mt-4">
            Ready to scale past €100k/mo<br className="hidden xl:block" /> while actually working less?
          </h2>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-navy/45 p-5 shadow-call-box lg:p-6">
            <h3 className="text-title leading-7.25 font-bold lg:text-2xl lg:leading-8 lg:tracking-[-0.0225rem]">
              Book a free 45-minute system audit.
            </h3>
            <ul className="flex flex-col gap-4 lg:gap-3.5">
              {[
                "You walk me through how you run your business today",
                "I show you what it looks like running without you",
                "You leave with a clear map of what to fix first"
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <svg className="mt-0.5 h-5.5 w-5.5 shrink-0 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base leading-6.25 text-white lg:text-lg lg:leading-7 lg:text-white/90">{item}</span>
                </li>
              ))}
            </ul>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex h-14 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-ui leading-5.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-70 lg:h-16 lg:text-md lg:leading-6 lg:shadow-cta"
            >
              {isSubmitting ? 'Sending details...' : 'Book your free system audit'}
              {!isSubmitting && (
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Modal Dialog */}
      <dialog 
        ref={dialogRef} 
        className="booking-dialog bg-card rounded-2xl shadow-2xl relative overflow-hidden"
      >
        <div className="bg-card w-full h-150 flex flex-col items-center justify-center p-8 relative">
          
          <button 
            onClick={closeDialog}
            className="absolute top-4 right-4 p-2 text-muted hover:text-foreground bg-background rounded-full transition-colors"
            aria-label="Close calendar"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
            Pick a time for your audit
          </h3>
          <p className="text-muted text-center mb-8">
            Your details have been saved. Please select a time slot below.
          </p>

          <div className="w-full flex-1 bg-background border border-dashed border-border rounded-xl flex items-center justify-center text-muted">
            [Calendar API Widget Placeholder]
          </div>
          
        </div>
      </dialog>
    </section>
  );
}