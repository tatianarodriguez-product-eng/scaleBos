import { idealFit, notFit } from "@/lib/content";
import { AuditButton } from "../ui/AuditButton";

export default function QualificationSection() {
  return (
    <section 
      aria-labelledby="qualification-title" 
      className="py-24 px-4 md:px-8 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-widest text-xs font-bold">
            Is this for you?
          </span>
          <h2 
            id="qualification-title" 
            className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-8 leading-tight"
          >
            I only work with<br className="hidden md:block" /> one kind of coaching business
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            I build <strong className="text-foreground font-semibold">only 2 installs per month</strong>, <br className="hidden md:block" /> so I choose carefully who I work with.
            <br /><br />
            When the month's slots are taken, the next start date moves.
          </p>
        </div>

        {/* Contenedor de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          
          {/* Tarjeta: This is you */}
          <article className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              This is you
            </h3>
            <p className="text-muted mb-8">
              You're the right fit if...
            </p>
            <ul className="space-y-6">
              {idealFit.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg 
                    className="w-6 h-6 text-success shrink-0 mt-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-foreground/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Tarjeta: This isn't for you */}
          <article className="bg-navy-muted rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              This isn't for you
            </h3>
            <p className="text-muted mb-8">
              Skip this if...
            </p>
            <ul className="space-y-6">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <svg 
                    className="w-5 h-5 text-danger shrink-0 mt-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-foreground/80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </article>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <AuditButton />
        </div>

      </div>
    </section>
  );
}