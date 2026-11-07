import Image from "next/image";
import { AuditButton } from "@/components/ui/AuditButton";

const stats = [
  { value: "€50k+", label: "saved per year on average", accent: false },
  { value: "60h+", label: "saved per month on average", accent: true },
  { value: "5+ tools", label: "replaced on average", accent: false },
  { value: "90%", label: "client retention rate", accent: true },
];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="bg-[#FAF8FF] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[72rem]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              For fitness, nutrition, & health coaches
            </p>
            <h1
              id="hero-title"
              className="max-w-[18ch] text-[2.35rem] font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]"
            >
              Scale past <span className="text-primary">€100k/mo</span> without{" "}
              <em className="font-extrabold not-italic text-muted sm:italic sm:text-muted">
                operational chaos
              </em>{" "}
              & <span className="text-primary">save 15+ hours</span> each week
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I install a <strong className="font-semibold text-foreground">done-for-you operating system</strong> so you can run
              your entire coaching business from one organized place.
              <br />
              <span className="underline decoration-foreground/30 underline-offset-4">
                And I don&apos;t stop until your whole team fully adopts it.
              </span>
            </p>
            <div className="mt-8">
              <AuditButton />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[1.35rem] bg-card p-1.5 shadow-[0px_4px_12px_rgba(15,30,54,0.08),0px_16px_48px_rgba(37,99,235,0.18)]">
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-[1.1rem]">
                <Image
                  src="/images/przemek-hero.png"
                  alt="Przemek, founder of ScaleBos"
                  width={768}
                  height={704}
                  preload
                  className="h-full w-full object-cover object-[center_18%]"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 pt-16">
                  <p className="font-semibold text-white">Przemek</p>
                  <p className="text-sm text-white/80">Founder of ScaleBos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[1.5rem] bg-[#DBE1FF] shadow-sm px-4 py-6 sm:px-6 lg:px-2">
          <dl className="grid grid-cols-2 divide-y divide-primary/10 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center px-3 py-4 text-center">
                <dt className={`text-3xl font-extrabold tracking-tight ${stat.accent ? "text-primary" : "text-foreground"}`}>
                  {stat.value}
                </dt>
                <dd className="mt-1 max-w-[12rem] text-xs leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
