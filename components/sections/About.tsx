import Image from 'next/image';

export default function AboutSection() {
  return (
    <section 
      aria-labelledby="about-title" 
      className="py-24 px-4 md:px-8 bg-background overflow-hidden flex flex-col md:flex-row items-center justify-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        
        {/* Encabezado Mobile (Oculto en Desktop) */}
        <div className="w-full text-left md:hidden mb-2">
          <span className="text-primary uppercase tracking-widest text-xs font-bold">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-foreground mt-3 leading-tight">
            Built by someone<br />
            who's lived in the chaos too
          </h2>
        </div>

        {/* Columna Izquierda: Imagen */}
        <div className="w-full md:w-1/2 relative flex flex-col justify-center shrink-0">
          {/* Efecto de resplandor (Glow) detrás de la imagen en Desktop */}
          <div className="inset-0 bg-primary/10 blur-3xl transform scale-110 -z-10 rounded-full hidden md:block"></div>
          
          {/* Contenedor de la Imagen tipo "Card" */}
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-border/50 relative z-10">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-muted/10">
              <Image 
                src="/images/przemek-about.png" // NOTA: Reemplazar por la ruta final
                alt="Przemek, Founder of ScaleBos, working on his laptop"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Contenido y Texto */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pt-4">
          
          {/* Encabezado Desktop (Oculto en Mobile) */}
          <div className="hidden md:block mb-8 text-left">
            <span className="text-primary uppercase tracking-widest text-xs font-bold">
              About Me
            </span>
            <h2 
              id="about-title" 
              className="text-4xl md:text-5xl font-bold text-foreground mt-4 leading-tight"
            >
              Built by someone<br />
              who's lived in the chaos too
            </h2>
          </div>

          {/* Párrafos de la historia */}
          <div className="space-y-6 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              Hey, I'm Przemek, and for years,<br className="hidden md:block" />
              <strong className="text-foreground font-semibold">I thought I was just a messy person.</strong>
            </p>
            
            <p>
              I always missed deadlines, replied to messages too late, and ended most days with half my list undone.
            </p>
            
            <p>
              After reading dozens of books and testing countless productivity methods, <strong className="text-foreground font-semibold">I created a system that made me feel in control</strong> for the first time.
            </p>
            
            <p>
              That's when I realized being organized isn't a trait we're born with, but <strong className="text-foreground font-semibold">a skill anyone can learn.</strong>
            </p>
            
            <p>
              Now I help coaching founders <strong className="text-foreground font-semibold">get their business in order so it can run without them.</strong>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}