import { steps } from "@/lib/content";

export default function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="bg-navy py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header de la Sección */}
        <div className="text-center mb-20">
          <span className="text-navy-muted uppercase tracking-widest text-xs font-bold">
            The Roadmap
          </span>
          <h2 
            id="roadmap-title" 
            className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
          >
            This isn't another program<br className="hidden md:block" /> where you do the work
          </h2>
          <p className="text-navy-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Unlike most consultants, I don't just give you a plan and expect you to execute it.
            <br /><br />
            Instead, I deliver a complete <strong className="text-white font-semibold">done-for-you implementation</strong> broken down into <strong className="text-white font-semibold">4 simple steps</strong>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Línea vertical central (Desktop) / Izquierda (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px bg-white/20 md:-translate-x-1/2 z-0"></div>

          <div className="space-y-4 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${!isEven ? 'md:justify-end' : ''}`}>
                  {/* Conector horizontal para Mobile */}
                  <div className="md:hidden absolute top-[2.625rem] left-6 w-8 h-px bg-white/20 z-0"></div>

                  {/* Lado Izquierdo Desktop */}
                  <div className={`w-full md:w-[calc(50%-3rem)] pl-14 md:pl-0 ${isEven ? 'md:pr-0 md:text-left' : 'hidden md:block'}`}>
                    {isEven && (
                      <article className="bg-card text-foreground rounded-xl p-8 shadow-lg relative z-10">
                        {/* Conector horizontal Desktop (Derecha del card) */}
                        <div className="hidden md:block absolute top-1/2 right-[-3rem] w-12 h-px bg-white/20 transform -translate-y-1/2"></div>
                        
                        <span className="text-primary text-sm font-bold tracking-wider uppercase">
                          {step.week}
                        </span>
                        <h3 className="text-2xl font-bold mt-2 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted text-base leading-relaxed">
                          {step.description}
                        </p>
                      </article>
                    )}
                  </div>

                  {/* Punto central del Timeline */}
                  <div className="absolute left-6 md:left-1/2 top-[2.25rem] md:top-1/2 w-3.5 h-3.5 bg-white rounded-full transform -translate-x-1/2 md:-translate-y-1/2 z-20"></div>

                  {/* Lado Derecho Desktop */}
                  <div className={`w-full md:w-[calc(50%-3rem)] pl-14 md:pl-0 ${!isEven ? 'md:pr-0 md:text-left' : 'hidden md:block'}`}>
                    {!isEven && (
                      <article className="bg-card text-foreground rounded-xl p-8 shadow-lg relative z-10 md:ml-auto">
                        {/* Conector horizontal Desktop (Izquierda del card) */}
                        <div className="hidden md:block absolute top-1/2 left-[-3rem] w-12 h-px bg-white/20 transform -translate-y-1/2"></div>
                        
                        <span className="text-primary text-sm font-bold tracking-wider uppercase">
                          {step.week}
                        </span>
                        <h3 className="text-2xl font-bold mt-2 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-muted text-base leading-relaxed">
                          {step.description}
                        </p>
                      </article>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Caja de Garantía y CTA */}
        <div className="bg-card text-foreground rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="bg-primary-soft text-primary p-3.5 rounded-xl shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-base md:text-lg font-semibold max-w-lg leading-snug">
              If, after 30 days, your team isn't independently running the system, I'll keep working with you at no extra cost until they are.
            </p>
          </div>
          <a 
            href="#booking" 
            className="w-full md:w-auto shrink-0 bg-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Book your free system audit
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        
      </div>
    </section>
  );
}