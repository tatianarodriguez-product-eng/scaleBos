'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { FigmaPlay } from './FigmaIcons';

interface VideoFacadeProps {
  name: string;
  cover: string;
  videoSrc: string;
  shape: 'landscape' | 'portrait';
}

// Card shows a static cover; the Vimeo player only loads when the visitor
// presses play, inside a pop-up sized to the video's own shape.
export default function VideoFacade({ name, cover, videoSrc, shape }: VideoFacadeProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
    dialogRef.current?.showModal();
  };

  const close = () => {
    dialogRef.current?.close();
  };

  // dnt=1: Vimeo sets no tracking cookies (no consent needed)
  const playerUrl = `${videoSrc}&autoplay=1&dnt=1&title=0&byline=0&portrait=0`;

  const frameSize =
    shape === 'portrait'
      ? 'aspect-[9/16] h-[min(85vh,calc(92vw*16/9))]'
      : 'aspect-video w-[min(92vw,calc(85vh*16/9),68.75rem)]';

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="relative block w-full aspect-video overflow-hidden group cursor-pointer bg-navy"
        aria-label={`Play ${name}'s testimonial video`}
      >
        <Image
          src={cover}
          alt={`${name}, ScaleBos client`}
          fill
          sizes="(max-width: 1024px) 92vw, 389px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-13 h-13 lg:w-12 lg:h-12 bg-primary text-primary-foreground rounded-lg lg:rounded-xl flex items-center justify-center shadow-icon group-hover:scale-105 group-hover:bg-primary-hover transition-all duration-300">
            <FigmaPlay className="ml-0.5 h-3.75 w-3" />
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setIsOpen(false)}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
        className="video-dialog m-auto bg-transparent p-0 overflow-visible max-w-none max-h-none"
        aria-label={`${name}'s testimonial video`}
      >
        <div className="relative">
          <button
            type="button"
            onClick={close}
            className="absolute -top-11 right-0 text-white/90 hover:text-white text-sm font-semibold flex items-center gap-1.5"
            aria-label="Close video"
          >
            Close
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className={`${frameSize} rounded-xl overflow-hidden bg-black shadow-2xl`}>
            {isOpen && (
              <iframe
                src={playerUrl}
                title={`${name}'s testimonial`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
