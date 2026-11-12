import { steps } from "@/lib/content";
import { AuditButton } from "../ui/AuditButton";

export default function RoadmapSection() {
  return (
    <section aria-labelledby="roadmap-title" className="bg-[#283044] py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
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
          <p className="text-navy-muted text-lg max-w-xl mx-auto leading-relaxed">
            Unlike most consultants, I don't just give you a plan and expect you to execute it.
            <br /><br />
            Instead, I deliver a complete <strong className="text-white font-semibold">done-for-you implementation</strong> broken down into <strong className="text-white font-semibold">4 simple steps</strong>.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-12 py-4">
          
          {/* Línea vertical central (Desktop) / Izquierda (Mobile) */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-px bg-white/20 md:-translate-x-1/2 z-0" />

          <div className="space-y-6 md:space-y-0 flex flex-col">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  // El margen negativo (-mt-10) entrelaza las tarjetas verticalmente en desktop
                  className={`relative flex flex-col md:flex-row items-center w-full ${index > 0 ? 'md:-mt-10 lg:-mt-16' : ''}`}
                >
                  
                  {/* Vista Mobile: Conector y Tarjeta */}
                  <div className="md:hidden w-full relative pl-14">
                    {/* Conector Mobile */}
                    <div className="absolute top-[3.5rem] left-6 w-8 h-px bg-white/20 z-0" />
                    
                    {/* Punto Mobile */}
                    <div className="absolute left-6 top-[3.5rem] w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20" />
                    
                    <article className="bg-white rounded-[1.25rem] p-6 w-full shadow-lg relative z-10">
                      <span className="text-[#2563EB] text-xs font-bold tracking-wider uppercase">
                        {step.week}
                      </span>
                      <h3 className="text-[1.35rem] text-[#0F172A] font-bold mt-2 mb-2.5 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </article>
                  </div>

                  {/* Vista Desktop */}
                  <div className="hidden md:flex items-center w-full relative">
                    
                    {/* Punto Central Desktop */}
                    <div className="absolute left-1/2 top-1/2 w-3.5 h-3.5 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20" />

                    {/* Lado Izquierdo Desktop (Pares) */}
                    <div className="w-[calc(50%-2.5rem)] pr-0 flex justify-end relative z-10">
                      {isEven && (
                        <>
                          {/* Conector derecho (acortado a 2.5rem) */}
                          <div className="absolute top-1/2 right-[-2.5rem] w-[2.5rem] h-px bg-white/20 transform -translate-y-1/2 z-0" />
                          
                          <article className="bg-white rounded-[1.25rem] p-8 w-full shadow-xl relative z-10">
                            <span className="text-[#2563EB] text-xs font-bold tracking-[0.1em] uppercase">
                              {step.week}
                            </span>
                            <h3 className="text-2xl text-[#0F172A] font-bold mt-2.5 mb-3 leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </article>
                        </>
                      )}
                    </div>

                    {/* Espaciador Central Reducido */}
                    <div className="w-[5rem]" />

                    {/* Lado Derecho Desktop (Impares) */}
                    <div className="w-[calc(50%-2.5rem)] pl-0 relative z-10">
                      {!isEven && (
                        <>
                          {/* Conector izquierdo (acortado a 2.5rem) */}
                          <div className="absolute top-1/2 left-[-2.5rem] w-[2.5rem] h-px bg-white/20 transform -translate-y-1/2 z-0" />
                          
                          <article className="bg-white rounded-[1.25rem] p-8 w-full shadow-xl relative z-10">
                            <span className="text-[#2563EB] text-xs font-bold tracking-[0.1em] uppercase">
                              {step.week}
                            </span>
                            <h3 className="text-2xl text-[#0F172A] font-bold mt-2.5 mb-3 leading-snug">
                              {step.title}
                            </h3>
                            <p className="text-[#475569] text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </article>
                        </>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Caja de Garantía y CTA */}
        <div className="bg-card text-foreground rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-[70%]">
            <div className="bg-primary-soft text-primary p-3.5 rounded-xl shrink-0">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p className="text-base md:text-lg font-semibold leading-snug">
              If, after 30 days, your team isn't independently running the system, I'll keep working with you at no extra cost until they are.
            </p>
          </div>
          <div className="w-[30%]">
            <AuditButton />
          </div>
        </div>
        
      </div>
    </section>
  );
}