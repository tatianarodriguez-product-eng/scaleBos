'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { CloseIcon } from '@/components/ui/UiIcons';
import { isCalendlyBooking, showCalendlyCalendar } from '@/lib/calendly';
import { markLeadBooked } from '@/lib/lead-api';
import { CALENDLY_URL, type SavedLead } from '@/lib/leads';

// Pop-up with the Calendly calendar; opens every time a new lead is saved
export function CalendarDialog({ lead }: { lead: SavedLead | null }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Open the pop-up and draw the calendar, prefilled with the lead's name and email
  useEffect(() => {
    if (!lead || !calendarRef.current) return;
    dialogRef.current?.showModal();
    // Calendly blocked or offline: the "Open it in a new tab" link below still works
    showCalendlyCalendar(calendarRef.current, { name: lead.name, email: lead.email }, lead.utm).catch(() => {});
  }, [lead]);

  // Calendly tells the page when a time is booked: mark the lead as Booked in Notion
  useEffect(() => {
    const leadId = lead?.id;
    if (!leadId) return;
    const onMessage = (event: MessageEvent) => {
      if (!isCalendlyBooking(event)) return;
      markLeadBooked(leadId);
      // Tracking hook (Meta Pixel 'Schedule', GA4) goes here once consent + IDs are in
      window.dispatchEvent(new CustomEvent('sb:booking-scheduled'));
    };
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [lead]);

  return (
    <dialog ref={dialogRef} className="booking-dialog bg-card rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-card w-full h-[min(90dvh,50rem)] flex flex-col items-center p-5 pt-10 relative lg:p-8">
        <button
          onClick={() => dialogRef.current?.close()}
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
        <Link href={CALENDLY_URL} target="_blank" rel="noopener" className="mt-3 text-small text-muted underline hover:text-foreground">
          Calendar not loading? Open it in a new tab
        </Link>
      </div>
    </dialog>
  );
}
