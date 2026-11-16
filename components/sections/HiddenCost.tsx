import { FigmaGrowth, FigmaHealth, FigmaMoney } from "@/components/ui/FigmaIcons";

const costs = [
  {
    title: "Your money",
    body: ["Payments get missed, your team gets", "the wrong commission, and clients leave", "because nobody asks them to renew."],
    Icon: FigmaMoney,
    size: "h-4.75 w-6.5",
  },
  {
    title: "Your growth",
    body: ["Taking on more clients or hiring feels", "impossible, because each one adds", "more to a plate that's already full."],
    Icon: FigmaGrowth,
    size: "h-7 w-7",
  },
  {
    title: "Your health",
    body: ["You can't fully disconnect, even on your", "days off, so you constantly feel anxious,", "exhausted, and close to burning out."],
    Icon: FigmaHealth,
    size: "h-7 w-7",
  },
];

// Figma: desktop centred · mobile left-aligned
export function HiddenCost() {
  return (
    <section aria-labelledby="cost-title" className="bg-navy text-white">
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 py-14 lg:py-24 lg:text-center">
        <p className="text-tag lg:text-tag-lg font-bold uppercase text-primary-soft">The hidden cost</p>
        <h2 id="cost-title" className="text-h2 lg:text-h2-lg font-bold mt-3 text-white lg:mx-auto lg:mt-4 lg:max-w-192">
          You didn&apos;t start a business<br className="hidden lg:block" /> to become its 24/7 employee
        </h2>
        <div className="text-body lg:text-body-lg lg:[&_p]:text-balance mt-6 space-y-4 text-white/65 lg:mx-auto lg:max-w-147 [&_strong]:font-bold [&_strong]:text-white">
          <p>
            You&apos;re <strong>working 12-hour days</strong>, mostly on repetitive manual work that barely moves the business forward.
          </p>
          <p>
            You&apos;ve tried joining <strong>coaching programs, hiring assistants, and paying for tools</strong> that were supposed to
            help.
          </p>
          <p>
            But nothing has changed, <strong>and it&apos;s quietly costing you:</strong>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-6 text-left lg:mt-12 lg:grid lg:grid-cols-3">
          {costs.map(({ title, body, Icon, size }) => (
            <article key={title} className="flex flex-col gap-4 rounded-2xl bg-white p-5 lg:p-8 lg:shadow-cost-card">
              <div className="flex items-center gap-3 lg:gap-4">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-danger-faint text-danger lg:h-12 lg:w-12 lg:bg-danger-soft/40">
                  <Icon className={size} />
                </span>
                <h3 className="text-card-title lg:text-card-title-lg font-bold text-foreground">{title}</h3>
              </div>
              {/* Wide screens: Figma's line breaks, so all three cards are exactly 3 lines */}
              <p className="text-card-body lg:text-card-body-lg text-muted lg:text-balance xl:whitespace-nowrap">
                {body.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < body.length - 1 && <><span className="xl:hidden"> </span><br className="hidden xl:block" /></>}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xl-plus leading-7.75 text-white/65 lg:mt-14 lg:text-statement lg:leading-9.5 lg:tracking-[-0.005625rem]">
          None of this means you&apos;re doing too little.<br className="hidden lg:block" /> It means your business{" "}
          <strong className="font-bold text-white">still runs on one person: you</strong>.
        </p>
      </div>
    </section>
  );
}
