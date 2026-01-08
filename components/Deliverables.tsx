import React from 'react';

const Deliverables: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Implementação */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F9FAFB] border border-slate-100 p-8 md:p-12 h-[320px] md:h-[400px] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight relative z-10 max-w-xs">
              Implementação completa da landing page em <span className="text-slate-900 font-bold">72h</span>
            </h3>
            <div className="absolute -bottom-12 -right-12 w-[280px] md:w-[350px] transition-transform duration-500 group-hover:scale-105">
              {/* Placeholder image - Replace src with your clock/timer image */}
              <img 
                src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?auto=format&fit=crop&q=80&w=600" 
                alt="Tempo de implementação" 
                className="rounded-3xl shadow-2xl rotate-[-5deg] border-4 border-white"
              />
            </div>
          </div>

          {/* Card 2: Controle Total */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F9FAFB] border border-slate-100 p-8 md:p-12 h-[320px] md:h-[400px] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight relative z-10 max-w-xs">
              <span className="text-slate-900 font-bold">Controle total</span> da <br /> sua landing page
            </h3>
            <div className="absolute -bottom-16 -right-4 w-[110%] md:w-[100%] transition-transform duration-500 group-hover:-translate-y-2">
              {/* Placeholder image - Replace src with your dashboard/editor image */}
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Controle do dashboard" 
                className="rounded-t-2xl shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.1)] border-t border-l border-r border-slate-200"
              />
            </div>
          </div>

          {/* Card 3: Design Sob Medida */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F9FAFB] border border-slate-100 p-8 md:p-12 h-[320px] md:h-[400px] hover:shadow-lg transition-all duration-300 group">
             <div className="flex items-center h-full">
                <h3 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight relative z-10 max-w-[50%]">
                  Design <span className="text-slate-900 font-bold">100% <br /> sob medida</span>
                </h3>
             </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-20 w-[250px] md:w-[320px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-4">
              {/* Placeholder image - Replace src with your design tools/layers image */}
              <img 
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=600" 
                alt="Design tools" 
                className="rounded-2xl shadow-2xl rotate-[5deg] border-4 border-white"
              />
            </div>
          </div>

          {/* Card 4: Integrações */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F9FAFB] border border-slate-100 p-8 md:p-12 h-[320px] md:h-[400px] hover:shadow-lg transition-all duration-300 group">
            <h3 className="text-2xl md:text-3xl text-slate-700 font-medium leading-tight relative z-10 max-w-sm">
              Integração completa de <span className="text-slate-900 font-bold">automações e CRM</span>
            </h3>
            <div className="absolute -bottom-8 -right-8 w-[90%] md:w-[80%] transition-transform duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
              {/* Placeholder image - Replace src with your CRM/Automations dashboard image */}
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Dashboard de automação" 
                className="rounded-tl-2xl shadow-2xl border-t border-l border-white rotate-[-2deg]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Deliverables;