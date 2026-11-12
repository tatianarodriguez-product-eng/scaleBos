const outcomes = [
  "All client sessions, check-ins, and progress are tracked and stored",
  "Every document has its own place, so anyone can find it in 2 clicks",
  "Setters and sales reps work on every lead from one clear pipeline",
  "New staff onboard themselves with simple step-by-step tutorials",
  "Finance dashboards show who's paid and who hasn't at a glance",
];

export function HowToFix() {
  return (
    <section aria-labelledby="fix-title" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24 bg-background">
      <div className="mx-auto grid max-w-[72rem] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">How to fix it</p>
          <h2 id="fix-title" className="lg:max-w-[22ch] max-w-[19ch] text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-[2rem] lg:leading-[1.15]">
            An organized business doesn&apos;t come from working more
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              Right now, <strong className="font-semibold text-foreground">processes live only in your head</strong>.
            </p>
            <p>
              All the <strong className="font-semibold text-foreground">files your team needs are spread across</strong> Google Docs,
              WhatsApp, and your laptop.
            </p>
            <p>
              This means <strong className="font-semibold text-foreground">they can&apos;t finish anything without asking you</strong>.
            </p>
            <p>That&apos;s because only you know how things are done and where they&apos;re saved.</p>
            <p>
              The fix is to have <strong className="font-semibold text-foreground">one place for all your clients, sales, and content</strong>,
              where everything is connected.
            </p>
            <p>
              Only then can you <strong className="font-semibold text-foreground">stop babysitting your team and start scaling the business</strong>,
              because:
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-card lg:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-5">
          <ul className="space-y-4">
            {outcomes.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 rounded-[1.15rem] bg-navy-muted px-5 py-4 text-sm leading-snug text-foreground/90 sm:text-[0.95rem]"
              >
                <svg 
                  className="h-6 w-6 shrink-0 text-primary" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l3 3 5-6" />
                </svg>
                <span className="flex-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
