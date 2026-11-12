import { IconHeart, IconTrend, IconWallet } from "@/components/ui/Icons";

const costs = [
  {
    title: "Your money",
    body: "Payments get missed, your team gets the wrong commission, and clients leave because nobody asks them to renew.",
    Icon: IconWallet,
  },
  {
    title: "Your growth",
    body: "Taking on more clients or hiring feels impossible, because each one adds more to a plate that's already full.",
    Icon: IconTrend,
  },
  {
    title: "Your health",
    body: "You can't fully disconnect, even on your days off, so you constantly feel anxious, exhausted, and close to burning out.",
    Icon: IconHeart,
  },
];

export function HiddenCost() {
  return (
    <section aria-labelledby="cost-title" className="bg-navy text-white">
      <div className="mx-auto max-w-[72rem] px-5 py-16 text-left lg:text-center sm:px-8 lg:px-10 lg:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-soft">The hidden cost</p>
        <h2 id="cost-title" className="mx-auto lg:max-w-[20ch] text-2xl font-extrabold tracking-tight  lg:text-[2.7rem] lg:leading-[1.15]">
          You didn&apos;t start a business to become its 24/7 employee
        </h2>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-navy-muted sm:text-lg">
          <p>
            You&apos;re <strong className="font-semibold text-white">working 12-hour days</strong>, mostly on repetitive manual work
            that barely moves the business forward.
          </p>
          <p>
            You&apos;ve tried joining <strong className="font-semibold text-white">coaching programs</strong>, hiring assistants, and{" "}
            <strong className="font-semibold text-white">paying for tools</strong> that were supposed to help.
          </p>
          <p>
            But <strong className="font-semibold text-white">nothing has changed, and it&apos;s quietly costing you:</strong>
          </p>
        </div>

        <div className="mt-12 grid gap-4 text-left sm:grid-cols-3">
          {costs.map(({ title, body, Icon }) => (
            <article key={title} className="rounded-[1.35rem] bg-white p-6 text-foreground">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-danger-soft text-danger">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{body}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-xl leading-snug text-navy-muted sm:text-2xl">
          None of this means you&apos;re doing too little.
          <br />
          It means your business <strong className="font-semibold text-white">still runs on one person: you.</strong>
        </p>
      </div>
    </section>
  );
}
