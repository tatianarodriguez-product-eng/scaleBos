import { CheckCircleFilledIcon } from '@/components/ui/UiIcons';
import { fixOutcomes } from '@/lib/content';

export function HowToFix() {
  return (
    <section aria-labelledby="fix-title" className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
      <p className="text-tag font-bold uppercase text-primary">How to fix it</p>
      <div className="mt-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        <div>
          <h2 id="fix-title" className="text-h2 lg:text-h2-lg font-bold text-foreground">
            An organized business<br className="hidden lg:block" /> doesn&apos;t come from working more
          </h2>
          <div className="text-body lg:text-body-lg text-muted [&_strong]:font-semibold [&_strong]:text-foreground lg:[&_p]:text-balance mt-6 space-y-4">
            <p>
              Right now, <strong>processes live only in your head</strong>.
            </p>
            <p>
              All the <strong>files your team needs are spread across</strong> Google Docs, WhatsApp, and your laptop.
            </p>
            <p>
              This means <strong>they can&apos;t finish anything without asking you</strong>.
            </p>
            <p>
              That&apos;s because only you know how things are done<br className="hidden lg:block" /> and where they&apos;re saved.
            </p>
            <p>
              The fix is to have <strong>one place for all your clients,<br className="hidden lg:block" /> sales, and content</strong>, where
              everything is connected.
            </p>
            <p>
              Only then can you <strong>stop babysitting your team<br className="hidden lg:block" /> and start scaling the business</strong>,
              because:
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-card p-4 shadow-panel lg:mt-0 lg:p-10">
          <ul className="flex flex-col gap-3 lg:gap-4">
            {fixOutcomes.map(([first, second]) => (
              <li key={first} className="flex gap-3 rounded-lg bg-navy-muted p-3.5 lg:gap-4 lg:p-3">
                <CheckCircleFilledIcon className="mt-0.5 h-5.5 w-5.5 shrink-0 text-primary" />
                <span className="text-body lg:text-body-lg leading-6.25 lg:leading-6.5 text-foreground lg:text-balance">{first}<br className="hidden lg:block" /> {second}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
