import Image from "next/image";
import { hubs } from "@/lib/content";
import { hubIcons } from "@/components/ui/Icons";
import { AuditButton } from "@/components/ui/AuditButton";
import screenshots from '@/public/images/system-screenshots.png';
import MobileScreenshotsCarousel from "./MobileScreenshotsCarousel";

export function WhatYouGet() {
  const cards = hubs.slice(0, 6);
  const team = hubs[6];
  const TeamIcon = hubIcons[6];

  return (
    <section id="hubs" aria-labelledby="hubs-title" className="bg-[#F2F3FF] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[72rem]">
        
        {/* Textos de la sección */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">What you get</p>
          <h2 id="hubs-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            An operating system for high-ticket coaching businesses
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            I install a <strong className="font-semibold text-foreground">custom-built operating system</strong> so you can scale
            past €100k/mo while actually working less.
          </p>
          <p className="mt-3 text-base text-muted">
            It&apos;s built around <strong className="font-semibold text-foreground">7 hubs where everything is connected:</strong>
          </p>
        </div>

        {/* Grid de los 6 Hubs principales */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((hub, index) => {
            const Icon = hubIcons[index];
            return (
              <article key={hub.name} className="rounded-[1.35rem] bg-card p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#DBE1FF] text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold">{hub.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted">{hub.body}</p>
              </article>
            );
          })}
        </div>

        {/* Hub del Team */}
        <article className="mt-4 flex flex-col gap-3 rounded-[1.35rem] bg-card p-6 shadow-[0_8px_30px_rgba(15,23,42,0.04)] sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <TeamIcon className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold">{team.name}</h3>
          </div>
          <p className="text-sm leading-relaxed text-muted sm:pl-2">{team.body}</p>
        </article>

        {/* SECCIÓN DE PANTALLAZOS */}
        <div className="mt-12 md:mt-16 w-full">
          {/* Desktop: Se muestra el abanico completo estático */}
          <div className="hidden md:block">
            <Image 
              src={screenshots} 
              alt='scaleBos system screenshots' 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Mobile: Se oculta la imagen original y se muestra el carrusel */}
          <div className="block md:hidden">
            <MobileScreenshotsCarousel />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <AuditButton />
        </div>

      </div>
    </section>
  );
}