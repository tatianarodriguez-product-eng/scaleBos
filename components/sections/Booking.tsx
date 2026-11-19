'use client';

import { useState } from 'react';
import { BookingForm } from '@/components/booking/BookingForm';
import { CalendarDialog } from '@/components/booking/CalendarDialog';
import { AUDIT_STEPS } from '@/lib/content';
import type { SavedLead } from '@/lib/leads';

// "What to do next": the call explained on the left, the form on the right, the calendar pop-up after submit
export default function BookingSection() {
  const [lead, setLead] = useState<SavedLead | null>(null);

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
              {AUDIT_STEPS.map((item, i) => (
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
          <BookingForm onLeadSaved={setLead} />
        </div>
      </div>

      <CalendarDialog lead={lead} />
    </section>
  );
}