import Image from "next/image";
import { AuditButton } from "@/components/ui/AuditButton";
import { AUDIT_STEPS } from "@/lib/content";

export function Hero() {
  return (
    <div className="relative overflow-x-clip">
      <section id="hero" aria-labelledby="hero-title" className="mx-auto w-full max-w-page px-5 md:px-8 pt-8 pb-10 lg:py-16 lg:flex lg:min-h-[min(100svh_-_5rem,64rem)] lg:flex-col lg:justify-center">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,693fr)_minmax(0,483fr)] lg:items-center lg:gap-10">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 lg:gap-0">
            <p className="inline-flex w-fit items-center gap-2 text-tag font-bold uppercase tracking-[0.0225rem] text-primary lg:gap-3 lg:tracking-[0.034375rem]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
              For fitness, nutrition, & health coaches
            </p>

            <h1
              id="hero-title"
              className="text-display leading-[1.2] font-extrabold tracking-[-0.036em] text-foreground lg:mt-6 lg:text-display-lg lg:leading-[1.115] lg:tracking-[-0.0875rem]"
            >
              Scale past <span className="text-gradient-blue">€100k/mo</span>
              <br />
              without <em className="text-gradient-steel italic">operational chaos</em>
              <br />& <span className="text-gradient-blue">save 15+ hours</span> each week
            </h1>

            <p className="text-body leading-6.75 text-muted lg:mt-6 lg:max-w-170 lg:text-balance lg:text-title-lg lg:leading-[1.583] lg:font-normal lg:tracking-normal">
              I install a <strong className="font-semibold text-foreground">done-for-you operating system</strong> in just 4&nbsp;weeks
              <br className="hidden xl:block" /> so you and your team can run your entire coaching business from one organized, beautifully designed place.
            </p>

            {/* Button + how the free audit works. Side by side from xl (1280px), stacked below that */}
            <div className="flex flex-col gap-5 lg:mt-10 xl:flex-row xl:items-center xl:gap-5.5">
              <AuditButton className="md:self-start xl:shrink-0 xl:self-center" />
              <ol className="flex flex-col gap-2.5 xl:border-l-2 xl:border-primary-soft xl:pl-4.5">
                {AUDIT_STEPS.map((step, i) => (
                  <li key={step} className="flex items-center gap-2.5 text-body leading-5.5 text-foreground lg:text-body-lg xl:whitespace-nowrap">
                    <span className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-small font-bold text-primary" aria-hidden="true">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: founder photo */}
          <div className="relative w-full md:mx-auto md:max-w-md lg:mx-0 lg:max-w-115 lg:justify-self-end">
            <div className="bg-(image:--gradient-photo-glow) pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 lg:h-225 lg:w-225" aria-hidden="true" />
            <div className="relative rounded-2xl bg-card p-2 shadow-photo lg:p-3 lg:shadow-photo-lg">
              <div className="relative aspect-[334/322] overflow-hidden rounded-lg bg-slate lg:aspect-[436/470]">
                <Image
                  src="/images/przemek-hero.jpg"
                  alt="Przemek, founder of ScaleBos"
                  fill
                  priority
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 48rem) 92vw, 28rem"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-(image:--gradient-photo-fade) px-5 pt-10 pb-4.5 lg:gap-0 lg:px-4 lg:pb-4">
                  <p className="text-body leading-6 font-bold text-white lg:text-body-lg lg:leading-6.25 lg:tracking-[-0.0125rem]">Przemek</p>
                  <p className="text-small leading-4.25 font-semibold text-white/90 lg:leading-4.5 lg:tracking-[0.015rem]">Founder of ScaleBos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
