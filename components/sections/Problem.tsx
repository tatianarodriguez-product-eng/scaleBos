import { CrossCircleIcon } from '@/components/ui/UiIcons';
import { chaosItems } from '@/lib/content';

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="mx-auto w-full max-w-page px-5 md:px-8 pt-14 pb-14 lg:pt-18 lg:pb-24">
      <p className="text-tag font-bold uppercase text-primary">The real problem</p>
      <div className="mt-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        <div>
          <h2 id="problem-title" className="text-h2 lg:text-h2-lg font-bold text-foreground">
            Your business grew,<br className="hidden lg:block" /> and so did the chaos behind it
          </h2>
          <div className="text-body lg:text-body-lg text-muted [&_strong]:font-semibold [&_strong]:text-foreground lg:[&_p]:text-balance mt-6 space-y-4">
            <p>
              At the beginning, it was <strong>just you</strong>.
            </p>
            <p>
              You coached every client, scheduled every sales call,<br className="hidden lg:block" /> and edited every reel yourself.
            </p>
            <p>
              After months of grinding, <strong>the business took off</strong>,<br className="hidden lg:block" /> and your calendar filled up.
            </p>
            <p>
              So you <strong>hired your first coach, setter, and editor</strong>, hoping<br className="hidden lg:block" /> you&apos;d
              finally get your time back.
            </p>
            <p>
              But the more clients you signed and the bigger your team got,<br className="hidden lg:block" />{" "}
              <strong>the messier everything became</strong>.
            </p>
            <p>And now, running your business looks like this:</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-card p-4 shadow-panel lg:mt-0 lg:p-10">
          <ul className="flex flex-col gap-3 lg:gap-4">
            {chaosItems.map(([first, second]) => (
              <li key={first} className="flex gap-3 rounded-lg bg-danger-soft/20 p-3.5 lg:gap-4 lg:p-3">
                <CrossCircleIcon className="mt-0.5 h-5.5 w-5.5 shrink-0 text-danger" />
                <span className="text-body lg:text-body-lg leading-6.25 lg:leading-6.5 text-foreground lg:text-balance">{first}<br className="hidden lg:block" /> {second}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
