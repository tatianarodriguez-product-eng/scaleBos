import Image from "next/image";
import { hubs } from "@/lib/content";
import { figmaHubIcons } from "@/components/ui/FigmaIcons";
import { AuditButton } from "@/components/ui/AuditButton";
import screenshots from '@/public/images/system-screenshots.png';
import MobileScreenshotsCarousel from "./MobileScreenshotsCarousel";

function HubIcon({ index }: { index: number }) {
  const Icon = figmaHubIcons[index];
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
      <Icon className="h-6 w-6" />
    </span>
  );
}

export function WhatYouGet() {
  return (
    <section id="hubs" aria-labelledby="hubs-title" className="bg-navy-muted">
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 py-14 lg:py-24">
        <div className="lg:mx-auto lg:max-w-192 lg:text-center">
          <p className="text-tag lg:text-tag-lg font-bold uppercase text-primary">What you get</p>
          <h2 id="hubs-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 lg:mt-4">
            An operating system for<br className="hidden lg:block" /> high-ticket coaching businesses
          </h2>
          <div className="text-body lg:text-body-lg text-muted [&_strong]:font-semibold [&_strong]:text-foreground lg:[&_p]:text-balance mt-6 space-y-4 lg:mx-auto lg:max-w-147">
            <p>
              I install a <strong>custom-built operating system</strong> so you can scale past €100k/mo while actually working less.
            </p>
            <p>
              It&apos;s built around <strong>8 hubs where everything is connected</strong>:
            </p>
          </div>
        </div>

        {/* 8 hubs: stacked on mobile, 2 rows of 4 on desktop */}
        <div className="mt-6 grid gap-3 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {hubs.map((hub, index) => (
            <article key={hub.name} className="flex flex-col gap-4 rounded-2xl bg-card p-5 lg:p-6 lg:shadow-card">
              <div className="flex items-center gap-3">
                <HubIcon index={index} />
                <h3 className="text-card-title lg:text-card-title-lg font-bold text-foreground">{hub.name}</h3>
              </div>
              <p className="text-card-body lg:text-card-body-lg text-muted lg:text-pretty">{hub.body}</p>
            </article>
          ))}
        </div>

        {/* System screenshots: fan on desktop, as big as the screen height allows; the button follows right below; swipe carousel on mobile */}
        <div className="mt-6 lg:mt-14">
          <div className="hidden lg:mx-auto lg:block lg:w-[min(100%,calc((100vh-3rem)*1.384))]">
            <Image src={screenshots} alt="ScaleBos system screenshots" className="h-auto w-full" sizes="1216px" />
          </div>
          <div className="lg:hidden">
            <MobileScreenshotsCarousel />
          </div>
        </div>

        <div className="mt-6 flex justify-center lg:mt-10">
          <AuditButton />
        </div>
      </div>
    </section>
  );
}
