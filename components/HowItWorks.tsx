import React from 'react';
import { Database, Settings, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Conexão',
    description: 'Conecte suas fontes de dados via API segura.',
    icon: Database,
  },
  {
    id: 2,
    title: 'Configuração',
    description: 'Personalize os parâmetros do modelo para seu caso.',
    icon: Settings,
  },
  {
    id: 3,
    title: 'Decolagem',
    description: 'Implante em produção com escalabilidade automática.',
    icon: Rocket,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
             <div>
                <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Workflow</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                    Integração sem atrito.
                </h3>
             </div>
             <p className="text-slate-500 max-w-sm text-lg font-light pb-1">
                 De zero a produção em minutos, não meses.
             </p>
        </div>

        <div className="relative mt-12">
          {/* Subtle line background */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="group relative bg-white p-6 rounded-3xl border border-transparent hover:border-slate-100 hover:shadow-soft transition-all duration-500">
                <div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm relative z-10">
                  <step.icon size={32} strokeWidth={1.5} />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-slate-100 text-slate-900 flex items-center justify-center font-bold text-xs shadow-sm group-hover:border-blue-500 group-hover:text-blue-600">
                    {step.id}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light">
                  {step.description}
                </p>
                
                {index < 2 && (
                    <div className="hidden md:block absolute top-12 -right-6 text-slate-200 z-0">
                        <ArrowRight size={24} />
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;