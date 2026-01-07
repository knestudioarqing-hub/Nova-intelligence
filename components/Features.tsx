import React from 'react';
import { Zap, Shield, BarChart3, Bot, Globe, Database } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: 'Tempo Real',
    description: 'Latência sub-milissegundo para experiências instantâneas.',
    icon: Zap,
  },
  {
    title: 'Blindado',
    description: 'Criptografia ponta a ponta e compliance enterprise.',
    icon: Shield,
  },
  {
    title: 'Preditivo',
    description: 'Modelos que antecipam o comportamento do usuário.',
    icon: BarChart3,
  },
  {
    title: 'Autônomo',
    description: 'Agentes inteligentes que operam 24/7 sem supervisão.',
    icon: Bot,
  },
  {
    title: 'Global',
    description: 'CDN distribuída em 190+ países para acesso local.',
    icon: Globe,
  },
  {
    title: 'Integrado',
    description: 'Conectores nativos para seu stack de dados moderno.',
    icon: Database,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Capacidades</h2>
          <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Poder bruto. <span className="text-slate-400">Design refinado.</span>
          </p>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 font-light">
            Uma suíte completa de ferramentas cognitivas projetadas para escalar com elegância.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;