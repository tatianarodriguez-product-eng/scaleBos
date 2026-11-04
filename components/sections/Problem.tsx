const chaos = [
  "Client sessions get missed, and nobody notices until the client messages you",
  "Documents are scattered everywhere, and no one can find anything",
  "Nobody knows which leads have been followed up on and which haven't",
  "You spend your evenings getting new team members up to speed",
  "You're never sure who's already paid this month and who hasn't",
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[72rem] items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">The real problem</p>
          <h2 id="problem-title" className="max-w-[16ch] text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
            Your business grew, and so did the chaos behind it
          </h2>
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-muted">
            <p>
              At the beginning, it was <strong className="font-semibold text-foreground">just you</strong>.
            </p>
            <p>You coached every client, scheduled every sales call, and edited every reel yourself.</p>
            <p>
              After months of grinding, <strong className="font-semibold text-foreground">the business took off</strong>, and your
              calendar filled up.
            </p>
            <p>
              So you <strong className="font-semibold text-foreground">hired your first coach, setter, and editor</strong>, hoping
              you&apos;d finally get your time back.
            </p>
            <p>
              But the more clients you signed and the bigger your team got,{" "}
              <strong className="font-semibold text-foreground">the messier everything became</strong>.
            </p>
            <p>And now, running your business looks like this:</p>
          </div>
        </div>

        <div className="rounded-[1.5rem] bg-card p-4 shadow-[0_10px_40px_rgba(15,23,42,0.06)] sm:p-5">
          <ul className="space-y-3">
            {chaos.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-danger-soft px-4 py-3.5 text-sm leading-snug text-foreground sm:text-[0.95rem]">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-danger text-[0.7rem] font-bold text-white">
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
