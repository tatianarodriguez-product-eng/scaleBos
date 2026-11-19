import VideoFacade from '@/components/ui/VideoFacade'
import { testimonials } from '@/lib/content';

export default function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-title" className="bg-navy-muted">
      <div className="mx-auto w-full max-w-page px-5 md:px-8 py-14 lg:py-24">
        <div className="lg:mx-auto lg:max-w-192 lg:text-center">
          <p className="text-tag font-bold uppercase text-primary">Client results</p>
          <h2 id="testimonials-title" className="text-h2 lg:text-h2-lg font-bold text-foreground mt-3 lg:mt-4">
            Founders whose business<br className="hidden lg:block" /> now runs without them
          </h2>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:grid md:grid-cols-3 md:gap-4 lg:mt-14 lg:gap-6">
          {testimonials.map((testi) => (
            <article key={testi.id} className="flex flex-col overflow-hidden rounded-2xl bg-card shadow-subtle">
              <VideoFacade name={testi.name} cover={testi.cover} videoSrc={testi.videoSrc} shape={testi.videoShape} />
              <div className="flex flex-1 flex-col gap-2 p-5 lg:gap-3 lg:p-6">
                <h3 className="text-title leading-6 font-bold text-foreground lg:text-title-lg lg:leading-7 lg:tracking-[-0.0125rem]">{testi.business}</h3>
                <p className="text-body leading-5.75 italic text-foreground lg:text-body-lg lg:leading-6.5">{testi.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
