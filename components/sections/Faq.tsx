'use client';

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
    <section 
      aria-labelledby="faq-title" 
      className="py-24 px-4 md:px-8 bg-[#FAF8FF]"
    >
      {/* Inyección de JSON-LD para GEO/SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqSchema()) }}
      />

      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-primary uppercase tracking-widest text-xs font-bold">
            FAQ
          </span>
          <h2 
            id="faq-title" 
            className="text-3xl md:text-5xl font-bold text-foreground mt-4 leading-tight"
          >
            Questions I hear before<br className="hidden md:block" /> every coach starts their install
          </h2>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm transition-colors hover:border-primary/30"
              >
                <h3>
                  <button
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <span className="text-lg md:text-xl font-bold text-foreground pr-8">
                      {faq.question}
                    </span>
                    
                    {/* Icono animado */}
                    <span 
                      className="text-primary shrink-0 transition-transform duration-300 ease-in-out"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </h3>
                
                {/* Contenido del Acordeón (Transición CSS vía Grid) */}
                <div 
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0 text-muted text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Botón CTA inferior */}
        <div className="mt-12 flex justify-center">
         <AuditButton />
        </div>

      </div>
    </section>
  );
}