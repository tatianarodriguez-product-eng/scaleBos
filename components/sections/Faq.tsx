'use client';

import { ChevronDownIcon } from '@/components/ui/UiIcons';
import { faqData } from '@/lib/content';
import React, { useState } from 'react';
import { AuditButton } from '../ui/AuditButton';

export default function FaqSection() {
  // Estado para manejar el acordeón abierto (null significa todos cerrados)
  const [openIndex, setOpenIndex] = useState<number | null>(0); // El primero abierto por defecto según el diseño

  const toggleAccordion = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Generación dinámica del Schema JSON-LD para SEO/GEO
  const generateFaqSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": typeof faq.answer === 'string' ? faq.answer : "Please see website for details."
        }
      }))
    };
  };

  return (
    <section aria-labelledby="faq-title" className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
      {/* Inyección de JSON-LD para GEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema()) }}
      />

      <div className="lg:mx-auto lg:max-w-192">
        <div className="lg:text-center">
          <p className="text-tag font-bold uppercase text-primary">FAQ</p>
          <h2 id="faq-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 lg:mt-4">
            Questions I hear before<br className="hidden lg:block" /> every coach starts their&nbsp;install
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-3 lg:mt-14 lg:gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={index} className="rounded-2xl bg-card p-5 shadow-subtle lg:p-6">
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="relative flex w-full items-center justify-between gap-4 text-left before:absolute before:-inset-5 before:content-[''] lg:before:-inset-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <span className="text-body leading-6.25 font-semibold text-foreground lg:text-title lg:leading-7 lg:tracking-[-0.0125rem]">
                      {faq.question}
                    </span>
                    <ChevronDownIcon className={`h-1.75 w-3 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-body lg:text-body-lg text-muted lg:text-balance pt-4 lg:max-w-160 lg:pt-3.75">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex justify-center lg:mt-14">
          <AuditButton />
        </div>
      </div>
    </section>
  );
}
