// Booking form rules: which fields are required and what format they need
import { BOOKING_ERROR_MESSAGES } from '@/lib/content';
import type { LeadDetails } from '@/lib/leads';
import { EMAIL_PATTERN, FULL_NAME_PATTERN, HANDLE_PATTERN } from '@/lib/validation';

export type LeadField = keyof LeadDetails;
export type LeadFormErrors = Partial<Record<LeadField, string>>;

export const EMPTY_LEAD: LeadDetails = { fullName: '', email: '', niche: '', revenue: '', teamSize: '', handle: '' };

// Every field is required; these also need a format
const FORMAT_RULES: Partial<Record<LeadField, { pattern: RegExp; message: string }>> = {
  fullName: { pattern: FULL_NAME_PATTERN, message: BOOKING_ERROR_MESSAGES.fullName.invalid },
  email: { pattern: EMAIL_PATTERN, message: BOOKING_ERROR_MESSAGES.email.invalid },
  handle: { pattern: HANDLE_PATTERN, message: BOOKING_ERROR_MESSAGES.handle.invalid },
};

// Returns the error message for one field, or undefined when it's fine
export function validateLeadField(field: LeadField, value: string): string | undefined {
  const trimmed = value.trim();
  if (!trimmed) return BOOKING_ERROR_MESSAGES[field].required;
  const rule = FORMAT_RULES[field];
  return rule && !rule.pattern.test(trimmed) ? rule.message : undefined;
}

// Errors for every field that fails; an empty object means the form can be sent
export function validateLead(lead: LeadDetails): LeadFormErrors {
  const errors: LeadFormErrors = {};
  (Object.keys(lead) as LeadField[]).forEach((field) => {
    const error = validateLeadField(field, lead[field]);
    if (error) errors[field] = error;
  });
  return errors;
}
