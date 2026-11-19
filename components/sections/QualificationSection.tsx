import { CheckCircleIcon, CrossIcon } from '@/components/ui/UiIcons';
import { idealFit, notFit } from "@/lib/content";
import { AuditButton } from "../ui/AuditButton";

function FitList({ items, fit }: { items: readonly string[]; fit: boolean }) {
  return (
    <ul className="flex flex-col gap-5 lg:gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="flex w-5 shrink-0 justify-center pt-0.75 lg:pt-1">
            {fit ? (
              <CheckCircleIcon className="h-4.25 w-4.25 text-success" />
            ) : (
              <CrossIcon className="mt-0.5 h-3 w-3 text-danger" />
            )}
          </span>
          <span className="text-body lg:text-body-lg leading-6.25 lg:leading-6.5 text-foreground lg:[text-wrap:wrap]">
            {item.split("\n").map((part, j) => (
              <span key={j}>
                {j > 0 && <><span className="lg:hidden"> </span><br className="hidden lg:block" /></>}
                {part}
              </span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function QualificationSection() {
  return (
    <section aria-labelledby="qualification-title" className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
      <div className="lg:mx-auto lg:max-w-192 lg:text-center">
        <p className="text-tag font-bold uppercase text-primary">Is this for you?</p>
        <h2 id="qualification-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 lg:mt-4">
          I only work with
          <br /> one kind of coaching business
        </h2>
        <div className="text-body lg:text-body-lg text-muted [&_strong]:font-semibold [&_strong]:text-foreground lg:[&_p]:text-balance mt-6 space-y-4 lg:mx-auto lg:max-w-147 lg:leading-7">
          <p>
            I build <strong>only 2 installs per month</strong>, so I choose carefully who I work with.
          </p>
          <p>When the month&apos;s slots are taken, the next start date moves.</p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-2 lg:mt-14 lg:gap-10">
        <article className="flex flex-col gap-4 rounded-2xl bg-card p-5 shadow-panel-lg lg:gap-0 lg:p-10">
          <h3 className="text-title lg:text-title-lg font-bold text-foreground">This is you</h3>
          <p className="text-body lg:text-body-lg text-muted lg:text-balance lg:mt-2 lg:mb-6">You&apos;re the right fit if...</p>
          <FitList items={idealFit} fit />
        </article>

        <article className="flex flex-col gap-4 rounded-2xl bg-navy-muted p-5 lg:gap-0 lg:p-10">
          <h3 className="text-title lg:text-title-lg font-bold text-foreground">This isn&apos;t for you</h3>
          <p className="text-body lg:text-body-lg text-muted lg:text-balance lg:mt-2 lg:mb-6">Skip this if...</p>
          <FitList items={notFit} fit={false} />
        </article>
      </div>

      <div className="mt-6 flex justify-center lg:mt-14">
        <AuditButton />
      </div>
    </section>
  );
}
