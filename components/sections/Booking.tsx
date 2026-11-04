'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { BOOKING_FORM_OPTIONS, BOOKING_ERROR_MESSAGES } from '@/lib/content';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
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
    phone: '',
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
    // Actualizado: Permite el '+' inicial, dígitos, espacios y guiones (7 a 20 caracteres)
    phone: /^\+?[0-9\s-]{7,20}$/,
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
    if (id === 'phone' && !regexPatterns.phone.test(value)) {
      return BOOKING_ERROR_MESSAGES.phone.invalid;
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

  return (
    <section className="bg-primary py-24 px-4 md:px-8" id='booking'>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* Columna Izquierda: Beneficios */}
        <div className="text-white">
          <span className="uppercase tracking-widest text-xs font-bold text-white/80">
            What to do next
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
            Ready to scale past €100k/mo while actually working less?
          </h2>
          
          <div className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl font-bold mb-6">
              Book a free 45-minute system audit.
            </h3>
            <ul className="space-y-4">
              {[
                "You walk me through how you run your business today",
                "I show you what it looks like running without you",
                "You leave with a clear map of what to fix first"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-white shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna Derecha: Formulario */}
        <div className="bg-card rounded-2xl p-6 md:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            
            {/* Input: Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-1.5">Full name</label>
              <input 
                type="text" 
                id="fullName" 
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 transition-colors ${errors.fullName ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
              />
              {errors.fullName && <p id="fullName-error" className="text-danger text-xs font-semibold mt-1.5">{errors.fullName}</p>}
            </div>

            {/* Input: Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 transition-colors ${errors.email ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
              />
              {errors.email && <p id="email-error" className="text-danger text-xs font-semibold mt-1.5">{errors.email}</p>}
            </div>

            {/* Input: Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1.5">Phone number</label>
              <input 
                type="tel" 
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 555 000 0000"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 transition-colors ${errors.phone ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
              />
              {errors.phone && <p id="phone-error" className="text-danger text-xs font-semibold mt-1.5">{errors.phone}</p>}
            </div>

            {/* Select: Coaching niche */}
            <div>
              <label htmlFor="niche" className="block text-sm font-semibold text-foreground mb-1.5">Coaching niche</label>
              <div className="relative">
                <select 
                  id="niche"
                  value={formData.niche}
                  onChange={handleChange}
                  aria-invalid={!!errors.niche}
                  aria-describedby={errors.niche ? "niche-error" : undefined}
                  className={`w-full bg-background border rounded-lg pl-4 pr-10 py-3 text-foreground focus:outline-none focus:ring-2 appearance-none transition-colors ${errors.niche ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
                >
                  <option value="" disabled hidden>Select your niche</option>
                  {BOOKING_FORM_OPTIONS.niches.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {/* Flecha indicadora */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.niche && <p id="niche-error" className="text-danger text-xs font-semibold mt-1.5">{errors.niche}</p>}
            </div>

            {/* Select: Monthly revenue */}
            <div>
              <label htmlFor="revenue" className="block text-sm font-semibold text-foreground mb-1.5">Monthly revenue</label>
              <div className="relative">
                <select 
                  id="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  aria-invalid={!!errors.revenue}
                  aria-describedby={errors.revenue ? "revenue-error" : undefined}
                  className={`w-full bg-background border rounded-lg pl-4 pr-10 py-3 text-foreground focus:outline-none focus:ring-2 appearance-none transition-colors ${errors.revenue ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
                >
                  <option value="" disabled hidden>Select a range</option>
                  {BOOKING_FORM_OPTIONS.revenues.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {/* Flecha indicadora */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.revenue && <p id="revenue-error" className="text-danger text-xs font-semibold mt-1.5">{errors.revenue}</p>}
            </div>

            {/* Select: Team size */}
            <div>
              <label htmlFor="teamSize" className="block text-sm font-semibold text-foreground mb-1.5">Team size</label>
              <div className="relative">
                <select 
                  id="teamSize"
                  value={formData.teamSize}
                  onChange={handleChange}
                  aria-invalid={!!errors.teamSize}
                  aria-describedby={errors.teamSize ? "teamSize-error" : undefined}
                  className={`w-full bg-background border rounded-lg pl-4 pr-10 py-3 text-foreground focus:outline-none focus:ring-2 appearance-none transition-colors ${errors.teamSize ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
                >
                  <option value="" disabled hidden>Select your team size</option>
                  {BOOKING_FORM_OPTIONS.teamSizes.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
                {/* Flecha indicadora */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              {errors.teamSize && <p id="teamSize-error" className="text-danger text-xs font-semibold mt-1.5">{errors.teamSize}</p>}
            </div>

            {/* Input: Handle or website */}
            <div>
              <label htmlFor="handle" className="block text-sm font-semibold text-foreground mb-1.5">Instagram handle or website</label>
              <input 
                type="text" 
                id="handle"
                value={formData.handle}
                onChange={handleChange}
                placeholder="@yourhandle or yoursite.com"
                aria-invalid={!!errors.handle}
                aria-describedby={errors.handle ? "handle-error" : undefined}
                className={`w-full bg-background border rounded-lg px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:ring-2 transition-colors ${errors.handle ? 'border-danger focus:ring-danger/50' : 'border-border focus:ring-primary/50'}`}
              />
              {errors.handle && <p id="handle-error" className="text-danger text-xs font-semibold mt-1.5">{errors.handle}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending details...' : 'Book your free system audit'}
              {!isSubmitting && (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
        <div className="bg-card w-full h-[600px] flex flex-col items-center justify-center p-8 relative">
          
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