const chaos = [
  "Client sessions get missed, and nobody notices until the client messages you",
  "Documents are scattered everywhere, and no one can find anything",
  "Nobody knows which leads have been followed up on and which haven't",
  "You spend your evenings getting new team members up to speed",
  "You're never sure who's already paid this month and who hasn't",
];

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="bg-background px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[72rem] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">The real problem</p>
          <h2 id="problem-title" className="text-4xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
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

       <div className="rounded-[1.5rem] bg-card lg:p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] p-5">
        <ul className="space-y-4">
          {chaos.map((item) => (
            <li
              key={item}
              // items-center garantiza que el ícono quede perfectamente centrado respecto al texto
              className="flex items-center gap-4 rounded-2xl bg-danger-soft/20 px-5 py-4 text-[0.95rem] leading-snug text-foreground/90 sm:text-base"
            >
              {/* Uso de SVG para garantizar un renderizado de bordes y centrado perfectos en cualquier pantalla */}
              <svg 
                className="h-6 w-6 shrink-0 text-danger"
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l5 5M14.5 9.5l-5 5" />
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
