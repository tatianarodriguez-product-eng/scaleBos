'use client';

import React, { useState } from 'react';

interface VideoFacadeProps {
  label: string;
}

export default function VideoFacade({ label }: VideoFacadeProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className="relative w-full aspect-[4/3] bg-[#E2E7FF] border border-dashed border-[#2563EB]/50 flex items-center justify-center overflow-hidden group cursor-pointer"
      onClick={() => setIsLoaded(true)}
      role="button"
      tabIndex={0}
      aria-label="Reproducir video testimonial"
    >
      {!isLoaded ? (
        <>
          {/* Botón de Play Simulado */}
          <div className="w-16 h-12 bg-[#2563EB] text-primary-foreground rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 group-hover:bg-primary-hover transition-all duration-300">
            <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>

          {/* Etiqueta Mock Inferior */}
          <div className="absolute bottom-4 left-4 right-4 flex">
            <span className="bg-[#2563EB] text-primary-foreground text-[10px] md:text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm">
              {label}
            </span>
          </div>
        </>
      ) : (
        /* Estado Activo MOCK - Aquí irá el <iframe> de Notion/YouTube en el futuro */
        <div className="absolute inset-0 bg-navy flex items-center justify-center p-4 text-center">
          <p className="text-white text-sm font-semibold">
            [Iframe del video cargado dinámicamente]
          </p>
        </div>
      )}
    </div>
  );
}