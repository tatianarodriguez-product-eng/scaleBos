import { steps } from "@/lib/content";
import { AuditButton } from "../ui/AuditButton";
import { FigmaGuarantee } from "../ui/FigmaIcons";

// Figma desktop: 560px cards alternating left/right, each 118px lower than the last (79px overlap),
// a centre line with dots and connectors. Mobile: line on the left built from one segment per step, cards stacked.
export default function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="bg-slate">
      <div className="mx-auto w-full max-w-page px-5 lg:px-8 py-14 lg:py-24">
        <div className="lg:mx-auto lg:max-w-192 lg:text-center">
          <p className="text-tag lg:text-tag-lg font-bold uppercase text-primary-soft">The roadmap</p>
          <h2 id="roadmap-title" className="text-h2 lg:text-h2-lg font-bold mt-3 text-white lg:mt-4">
            This isn&apos;t another program<br className="hidden lg:block" /> where you do the work
          </h2>
          <div className="text-body lg:text-body-lg lg:[&_p]:text-balance mt-6 space-y-4 text-white/65 lg:mx-auto lg:max-w-147 [&_strong]:font-bold [&_strong]:text-white">
            <p>Unlike most consultants, I don&apos;t just give you a plan and expect you to execute it.</p>
            <p>
              Instead, I deliver a complete <strong>done-for-you implementation</strong> broken down into{" "}
              <strong>4 simple steps</strong>.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative mt-6 flex flex-col gap-4 pl-11 lg:mt-14 lg:gap-0 lg:pl-0">
          <span className="absolute hidden w-0.5 bg-white/40 lg:block lg:left-1/2 lg:top-21.25 lg:bottom-28 lg:-translate-x-1/2" aria-hidden="true" />
          {steps.map((step, index) => {
            const right = index % 2 === 1;
            return (
              <li
                key={step.title}
                className={`relative lg:w-[calc(50%-3rem)] ${right ? "lg:ml-auto" : ""} ${index > 0 ? "lg:-mt-19.75" : ""}`}
              >
                {/* mobile: line segment from this dot down to the next one, so it always connects whatever the card heights */}
                {index < steps.length - 1 && (
                  <span className="absolute -left-7.25 top-15 -bottom-19 w-0.5 bg-white/40 lg:hidden" aria-hidden="true" />
                )}
                {/* connector + dot */}
                <span
                  className={`absolute top-14.75 -left-7 h-0.5 w-7 bg-white/40 lg:top-21 lg:w-12 ${right ? "lg:-left-12" : "lg:left-auto lg:-right-12"}`}
                  aria-hidden="true"
                />
                <span
                  className={`absolute top-13.25 -left-8.75 h-3.5 w-3.5 rounded-full bg-white lg:top-19.5 ${right ? "lg:-left-13.75" : "lg:left-auto lg:-right-13.75"}`}
                  aria-hidden="true"
                />
                <article className="flex flex-col gap-3 rounded-2xl bg-white p-5 lg:gap-4 lg:p-8 lg:shadow-card">
                  <span className="text-xs leading-3.75 font-bold uppercase tracking-[0.045rem] text-primary lg:text-sm lg:leading-4.25 lg:tracking-[0.0525rem]">{step.week}</span>
                  <h3 className="text-card-title lg:text-card-title-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-card-body lg:text-card-body-lg text-muted lg:text-balance">{step.description}</p>
                </article>
              </li>
            );
          })}
        </ol>

        {/* Guarantee */}
        <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-card p-5 lg:mt-14 lg:flex-row lg:items-center lg:gap-6 lg:p-8 lg:shadow-card">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary lg:h-16 lg:w-16 lg:rounded-2xl lg:shadow-icon">
            <FigmaGuarantee className="h-7 w-7 lg:h-8 lg:w-8.25" />
          </span>
          <p className="text-base leading-[1.55] text-muted lg:max-w-174.5 lg:flex-1 lg:text-balance lg:text-xl lg:leading-7 lg:tracking-[-0.0125rem]">
            If, after 30 days, your team isn&apos;t independently running the system,<br /> I&apos;ll keep working with you{" "}
            <strong className="font-bold text-foreground">at no extra cost until they are.</strong>
          </p>
          <AuditButton className="lg:ml-auto lg:shrink-0" />
        </div>
      </div>
    </section>
  );
}
