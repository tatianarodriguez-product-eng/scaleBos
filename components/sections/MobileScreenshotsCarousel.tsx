'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

// MOCK: Rutas de los pantallazos individuales (reemplazar por los reales)
const individualScreenshots = [
  { id: 1, src: '/images/ceo-dashboard.png', alt: 'CEO Dashboard' },
  { id: 2, src: '/images/clients-dashboard.png', alt: 'Clients Pipeline' },
  { id: 3, src: '/images/finance-dashboard.png', alt: 'Finance Tracking' },
  { id: 4, src: '/images/marketing-dashboard.png', alt: 'Operations Hub' },
];

export default function MobileScreenshotsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sincroniza los dots con la posición del scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const scrollPosition = scrollRef.current.scrollLeft;
      const slide = scrollRef.current.firstElementChild as HTMLElement | null;
      const width = slide ? slide.offsetWidth + 12 : scrollRef.current.clientWidth;
      const index = Math.min(individualScreenshots.length - 1, Math.round(scrollPosition / width));
      setActiveIndex(index);
    };

    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const slide = scrollRef.current.firstElementChild as HTMLElement | null;
    const width = slide ? slide.offsetWidth + 12 : scrollRef.current.clientWidth;
    scrollRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* 
        Contenedor del Carrusel: 
        - snap-x snap-mandatory: Scroll nativo CSS para rendimiento
        - hub-scroll: Oculta la barra de scroll nativa (de globals.css)
      */}
      <div
        ref={scrollRef}
        className="flex w-full overflow-x-auto snap-x snap-mandatory hub-scroll gap-3"
      >
        {individualScreenshots.map((shot) => (
          <div
            key={shot.id}
            // w-[85%] permite que se asome un poco la siguiente imagen (mejor UX)
            className="relative w-77.5 max-w-[88%] shrink-0 snap-start rounded-xl overflow-hidden border-2 border-primary bg-navy"
          >
            {/* Ajusta el aspect ratio según las proporciones de tus pantallazos */}
            <div className="relative w-full aspect-[310/400]">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                className="object-cover"
                sizes="19.375rem"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Paginación (Dots) */}
      <div className="-my-4.5 flex justify-center items-center">
        {individualScreenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to screenshot ${index + 1}`}
            className="flex h-11 w-4 items-center justify-center"
          >
            <span
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-primary' : 'bg-indigo-soft'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}