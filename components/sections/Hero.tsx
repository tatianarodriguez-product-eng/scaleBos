import Image from "next/image";
import { AuditButton } from "@/components/ui/AuditButton";

const stats = [
  { value: "€50k+", label: "saved per year on average", accent: false },
  { value: "60h+", label: "saved per month on average", accent: true },
  { value: "5+ tools", label: "replaced on average", accent: false },
  { value: "90%", label: "client retention rate", accent: true },
];

function Stat({ stat, divider }: { stat: (typeof stats)[number]; divider: boolean }) {
  return (
    <div className={`flex flex-col gap-1.5 lg:items-center lg:gap-1 lg:text-center ${divider ? "lg:border-l lg:border-navy/10" : ""}`}>
      <dt className={`text-stat leading-7.75 font-bold tracking-[-0.04375rem] lg:text-4xl lg:leading-11 lg:tracking-[-0.05625rem] ${stat.accent ? "text-primary" : "text-foreground"}`}>
        {stat.value}
      </dt>
      <dd className="text-caption leading-5 text-muted lg:text-ui lg:leading-5.5">{stat.label}</dd>
    </div>
  );
}

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <section id="hero" aria-labelledby="hero-title" className="mx-auto w-full max-w-page px-5 lg:px-8 pt-8 pb-6 lg:py-16">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,693fr)_minmax(0,483fr)] lg:items-center lg:gap-10">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 lg:gap-0">
            <p className="inline-flex w-fit items-center gap-2 rounded-lg bg-primary/10 px-3 py-2.5 text-xs leading-4.5 font-bold uppercase tracking-[0.0225rem] text-primary-deep lg:rounded-xl lg:px-4 lg:py-2 lg:text-sm lg:leading-5 lg:tracking-[0.034375rem] lg:shadow-subtle">
              <span className="hidden h-2 w-2 rounded-full bg-primary lg:block" aria-hidden="true" />
              For fitness, nutrition, & health coaches
            </p>

            <h1
              id="hero-title"
              className="text-[clamp(1.25rem,calc((100vw-2.5rem)*0.076),2.125rem)] leading-[1.2] font-extrabold tracking-[-0.036em] text-foreground lg:mt-6 lg:text-[clamp(2.5rem,4.0625vw,3.25rem)] lg:leading-[1.115] lg:tracking-[-0.0875rem]"
            >
              Scale past <span className="text-gradient-blue">€100k/mo</span>
              <br />
              without <em className="text-gradient-steel italic">operational chaos</em>
              <br />& <span className="text-gradient-blue">save 15+ hours</span> each week
            </h1>

            <p className="text-md leading-6.75 text-muted lg:mt-6 lg:max-w-160 lg:text-[clamp(1.25rem,1.875vw,1.5rem)] lg:leading-[1.583] lg:tracking-[-0.005625rem]">
              I install a <strong className="font-semibold text-foreground">done-for-you operating system</strong> so you can run
              <br className="hidden xl:block" /> your entire coaching business from one organized place.{" "}
              <br className="lg:hidden" />
              <span className="underline decoration-muted/60 decoration-1 underline-offset-4">
                And I don&apos;t stop until your whole team fully&nbsp;adopts&nbsp;it
              </span>
              .
            </p>

            <div className="lg:mt-10">
              <AuditButton />
            </div>
          </div>

          {/* Right: founder photo */}
          <div className="relative w-full lg:max-w-115">
            <div className="photo-glow pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 lg:h-225 lg:w-225" aria-hidden="true" />
            <div className="relative rounded-2xl bg-card p-2 shadow-photo lg:p-3 lg:shadow-photo-lg">
              <div className="relative aspect-[334/322] overflow-hidden rounded-lg bg-slate lg:aspect-[436/470]">
                <Image
                  src="/images/przemek-hero.jpg"
                  alt="Przemek, founder of ScaleBos"
                  fill
                  priority
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 1024px) 92vw, 436px"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[linear-gradient(180deg,#131B2E00_0%,#131B2E59_45%,#131B2EBF_100%)] px-5 pt-10 pb-4.5 lg:gap-0 lg:px-4 lg:pb-4">
                  <p className="text-xl leading-6 font-bold text-white lg:leading-6.25 lg:tracking-[-0.0125rem]">Przemek</p>
                  <p className="text-sm leading-4.25 font-semibold text-white/90 lg:leading-4.5 lg:tracking-[0.015rem]">Founder of ScaleBos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof band */}
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 relative py-2 lg:py-10">
        <dl className="flex flex-col gap-6 rounded-2xl bg-primary-soft p-5 lg:grid lg:grid-cols-4 lg:gap-6 lg:p-8 lg:shadow-subtle">
          <div className="grid grid-cols-2 gap-x-5 lg:contents">
            <Stat stat={stats[0]} divider={false} />
            <Stat stat={stats[1]} divider />
          </div>
          <div className="grid grid-cols-2 gap-x-5 border-t border-navy/10 pt-5 lg:contents">
            <Stat stat={stats[2]} divider />
            <Stat stat={stats[3]} divider />
          </div>
        </dl>
      </div>
    </div>
  );
}
