import { roadmapOutcome, steps } from "@/lib/content";
import { AuditButton } from "../ui/AuditButton";

// Figma desktop: 560px cards alternating left/right, each 118px lower than the last (79px overlap),
// a centre line with dots and connectors, built from one segment per card (mobile: on the left, cards stacked).
// The 4 steps + where the roadmap arrives (blue dot + blue outline, same card otherwise)
const items = [...steps.map((s) => ({ label: s.week, title: s.title, description: s.description })), roadmapOutcome];

export default function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="bg-slate">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
        <div className="lg:mx-auto lg:max-w-192 lg:text-center">
          <p className="text-tag font-bold uppercase text-primary-soft">The roadmap</p>
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
          {items.map((step, index) => {
            const right = index % 2 === 1;
            const isOutcome = index === items.length - 1;
            return (
              <li
                key={step.title}
                className={`relative lg:w-1/2 ${right ? "lg:ml-auto lg:pl-12" : "lg:pr-12"} ${index > 0 ? "lg:-mt-19.75" : ""}`}
              >
                {/* line segment from this dot down to the next one, so it always ends on the last dot whatever the card heights.
                    Desktop: each item is half the width with 3rem padding on the centre side, so its inner edge is the centre line; the next card starts 79px above this one's bottom, its dot 85px below its top */}
                {!isOutcome && (
                  <span
                    className={`absolute -left-7.25 top-15 -bottom-19 w-0.5 bg-white/40 lg:top-21.25 lg:-bottom-1.5 ${right ? "lg:-left-0.25" : "lg:left-auto lg:-right-0.25"}`}
                    aria-hidden="true"
                  />
                )}
                {/* connector + dot */}
                <span
                  className={`absolute top-14.75 -left-7 h-0.5 w-7 bg-white/40 lg:top-21 lg:w-12 ${right ? "lg:left-0" : "lg:left-auto lg:right-0"}`}
                  aria-hidden="true"
                />
                <span
                  className={`absolute top-13.25 -left-8.75 h-3.5 w-3.5 rounded-full lg:top-19.5 ${isOutcome ? "bg-primary ring-2 ring-white" : "bg-white"} ${right ? "lg:-left-1.75" : "lg:left-auto lg:-right-1.75"}`}
                  aria-hidden="true"
                />
                <article className={`flex flex-col gap-3 rounded-2xl bg-white p-5 lg:gap-4 lg:p-8 ${isOutcome ? "ring-2 ring-primary lg:shadow-outcome" : "lg:shadow-card"}`}>
                  <span className="text-tag font-bold uppercase text-primary">{step.label}</span>
                  <h3 className="text-title lg:text-title-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-body lg:text-body-lg text-muted lg:text-balance">{step.description}</p>
                </article>
              </li>
            );
          })}
        </ol>

        <div className="mt-8 flex justify-center lg:mt-14">
          <AuditButton />
        </div>
      </div>
    </section>
  );
}
