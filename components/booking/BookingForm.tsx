'use client';

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowRightIcon } from '@/components/ui/UiIcons';
import { BOOKING_FORM_OPTIONS, BOOKING_SUBMIT_ERROR } from '@/lib/content';
import { submitLead } from '@/lib/lead-api';
import { EMPTY_LEAD, validateLead, validateLeadField, type LeadField, type LeadFormErrors } from '@/lib/lead-form';
import type { LeadDetails, SavedLead, UtmParams } from '@/lib/leads';
import { readUtm } from '@/lib/utm';
import { FIELD_ERROR_CLASS, SelectField, TextField } from './FormFields';

// The audit form: checks the fields as you type, saves the lead, then hands it to the calendar
export function BookingForm({ onLeadSaved }: { onLeadSaved: (lead: SavedLead) => void }) {
  const [details, setDetails] = useState<LeadDetails>(EMPTY_LEAD);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const utmRef = useRef<UtmParams>({});

  // Read the ad's UTM tags on arrival, so they're kept even if the visitor browses away and back
  useEffect(() => {
    utmRef.current = readUtm();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const field = e.target.id as LeadField;
    const { value } = e.target;
    setDetails((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: validateLeadField(field, value) }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formErrors = validateLead(details);
    setErrors(formErrors);
    if (Object.keys(formErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError('');
    const utm = utmRef.current;
    let id: string | null;
    try {
      id = await submitLead(details, honeypot, utm);
    } catch {
      setSubmitError(BOOKING_SUBMIT_ERROR);
      return;
    } finally {
      setIsSubmitting(false);
    }

    // Tracking hook (Meta Pixel 'Lead', GA4) goes here once consent + IDs are in
    window.dispatchEvent(new CustomEvent('sb:lead-submitted'));
    onLeadSaved({ id, name: details.fullName.trim(), email: details.email.trim(), utm });
  };

  const field = (id: LeadField) => ({ id, value: details[id], error: errors[id], onChange: handleChange });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:gap-6" noValidate>
      <div className="flex flex-col gap-5 lg:gap-4">
        <TextField {...field('fullName')} label="Full name" type="text" placeholder="Your full name" />
        <TextField {...field('email')} label="Email" type="email" placeholder="you@email.com" />
        <SelectField {...field('niche')} label="Coaching niche" placeholder="Select your niche" options={BOOKING_FORM_OPTIONS.niches} />
        <SelectField {...field('revenue')} label="Monthly revenue" placeholder="Select a range" options={BOOKING_FORM_OPTIONS.revenues} />
        <SelectField {...field('teamSize')} label="Team size" placeholder="Select your team size" options={BOOKING_FORM_OPTIONS.teamSizes} />
        <TextField {...field('handle')} label="Instagram handle or website" type="text" placeholder="@yourhandle or yoursite.com" />
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
        {!isSubmitting && <ArrowRightIcon className="h-4 w-4" />}
      </button>
      {submitError && <p role="alert" className={FIELD_ERROR_CLASS}>{submitError}</p>}
    </form>
  );
}
