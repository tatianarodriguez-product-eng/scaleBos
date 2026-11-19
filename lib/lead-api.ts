// Browser-side calls to /api/lead (the server saves the lead in the Notion Leads CRM)
import type { LeadDetails, UtmParams } from '@/lib/leads';

const LEAD_ENDPOINT = '/api/lead';

// Saves the lead and returns its Notion page ID (null when the server treats it as a bot)
export async function submitLead(details: LeadDetails, honeypot: string, utm: UtmParams): Promise<string | null> {
  const res = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...details, website: honeypot, utm }),
  });
  if (!res.ok) throw new Error(`Lead not saved (${res.status})`);
  const { id } = await res.json();
  return id;
}

// Marks the lead as Booked once Calendly confirms. Fire and forget: the booking itself already happened.
export function markLeadBooked(id: string): void {
  fetch(LEAD_ENDPOINT, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  }).catch(() => {});
}
