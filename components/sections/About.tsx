import Image from 'next/image';

// Mobile order (Figma): heading → photo → story. Desktop: photo left, heading + story right.
export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="overflow-hidden bg-navy-muted">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24 grid gap-6 lg:grid-cols-2 lg:gap-x-10">
        <div className="lg:col-start-2 lg:row-start-1 lg:self-end">
          <p className="text-tag font-bold uppercase text-primary">About me</p>
          <h2 id="about-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 lg:mt-4">
            Built by someone<br className="hidden lg:block" /> who&apos;s lived in the chaos too
          </h2>
        </div>

        <div className="relative lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
          <div className="bg-(image:--gradient-photo-glow) pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 lg:h-225 lg:w-225" aria-hidden="true" />
          <div className="relative rounded-2xl bg-card p-2 shadow-photo md:mx-auto md:w-full md:max-w-md lg:max-w-115 lg:p-3 lg:shadow-photo-lg">
            <div className="relative aspect-[334/306] overflow-hidden rounded-lg lg:aspect-[436/470]">
              <Image
                src="/images/przemek-about.jpg"
                alt="Przemek, founder of ScaleBos, working on his laptop"
                fill
                className="object-cover"
                sizes="(max-width: 48rem) 92vw, 28rem"
              />
            </div>
          </div>
        </div>

        <div className="text-body lg:text-body-lg text-muted [&_strong]:font-semibold [&_strong]:text-foreground lg:[&_p]:text-balance space-y-4 lg:col-start-2 lg:row-start-2 lg:self-start lg:pb-18">
          <p>
            Hey, I&apos;m Przemek, and for years,<br className="hidden lg:block" /> <strong>I thought I was just a messy person.</strong>
          </p>
          <p>I always missed deadlines, replied to messages too late, and ended most days with half my list undone.</p>
          <p>
            After reading dozens of books and testing countless productivity methods,{" "}
            <strong>I created a system that made me feel in control</strong> for the first time.
          </p>
          <p>
            That&apos;s when I realized being organized isn&apos;t a trait we&apos;re born with, but{" "}
            <strong>a skill anyone can learn.</strong>
          </p>
          <p>
            Now I help coaching founders <strong>get their business in order so it can run without them.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
