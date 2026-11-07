import VideoFacade from '@/components/ui/VideoFacade'
import { testimonials } from '@/lib/content';

export default function TestimonialsSection() {
  return (
    <section 
      aria-labelledby="testimonials-title" 
      className="py-24 px-4 md:px-8 bg-[#F2F3FF]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-xs font-bold">
            Client Results
          </span>
          <h2 
            id="testimonials-title" 
            className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight"
          >
            Founders whose business<br className="hidden md:block" /> now runs without them
          </h2>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testi, index) => (
            <article 
              key={index} 
              className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border flex flex-col"
            >
              {/* Facade del Video (Client Component) */}
              <div className="p-2 pb-0">
                <div className="rounded-xl overflow-hidden">
                  <VideoFacade label={testi.posterLabel} />
                </div>
              </div>

              {/* Contenido del Testimonio */}
              <div className="p-6 md:p-8 bg-card flex-1">
                <div className="flex justify-between items-center mb-4 gap-2">
                  <h3 className="text-2xl font-bold text-foreground truncate">
                    {testi.name}
                  </h3>
                  <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                    {testi.role}
                  </span>
                </div>
                <p className="text-muted italic text-lg leading-relaxed">
                  {testi.quote}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}