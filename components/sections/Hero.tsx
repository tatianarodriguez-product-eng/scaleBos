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
    <section aria-labelledby="hero-title" className="bg-background px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[72rem]">
        {/* Grid principal: Texto izq, Imagen der */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          
          {/* Columna Izquierda: Copy */}
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              For fitness, nutrition, & health coaches
            </p>
            
            <h1
              id="hero-title"
              className="text-[1.9rem] font-extrabold leading-[1.1] tracking-tight text-foreground lg:text-[3rem]"
            >
              Scale past <span className="text-primary">€100k/mo</span> without{" "}
              <em className="italic text-muted font-bold">
                operational chaos
              </em>{" "}
              <span className="text-primary">& save 15+ hours</span> each week
            </h1>
            
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg max-w-[540px]">
              I install a <strong className="font-semibold text-foreground">done-for-you operating system</strong> so you can run
              your entire coaching business from one organized place. <span className="mt-1 underline decoration-foreground/30 underline-offset-4">
                And I don&apos;t stop until your whole team fully adopts it.
              </span>
            </p>
            
            <div className="mt-8 md:mt-10">
              <AuditButton />
            </div>
          </div>

          {/* Columna Derecha: Imagen */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[1.5rem] bg-card p-2 md:p-2.5 shadow-[0px_4px_12px_rgba(15,30,54,0.08),0px_16px_48px_rgba(37,99,235,0.18)]">
              {/* aspect-[4/5] le da la forma de retrato (vertical) para que no se vea chata */}
              <div className="relative aspect-square sm:aspect-[4/4.2] overflow-hidden rounded-[1.1rem]">
                <Image
                  src="/images/przemek-hero.jpg"
                  alt="Przemek, founder of ScaleBos"
                  fill
                  priority
                  className="object-cover object-[center_40%]"
                  sizes="(max-width: 1024px) 90vw, 500px"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent p-5 pt-20">
                  <p className="font-bold text-white text-lg">Przemek</p>
                  <p className="text-sm font-medium text-white/80">Founder of ScaleBos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barra de Estadísticas Inferior */}
        <div className="mt-16 md:mt-20 rounded-[1.5rem] bg-primary-soft shadow-sm px-6 py-8 md:p-10">
          <dl className="grid grid-cols-2 gap-y-8 divide-primary/10 sm:grid-cols-4 sm:divide-x sm:gap-y-0">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center px-4 text-center">
                <dt className={`text-3xl lg:text-4xl font-extrabold tracking-tight ${stat.accent ? "text-primary" : "text-foreground"}`}>
                  {stat.value}
                </dt>
                <dd className="mt-2 max-w-[12rem] text-xs font-medium leading-snug text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        
      </div>
    </section>
  );
}