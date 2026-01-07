import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 'R$ 0',
    description: 'Para projetos pessoais.',
    features: ['10k tokens/mês', 'Modelo Flash', 'Comunidade', '1 Projeto'],
  },
  {
    name: 'Pro',
    price: 'R$ 149',
    description: 'Para times em crescimento.',
    features: ['2M tokens/mês', 'Modelo Pro', 'Suporte Prioritário', '5 Projetos', 'Analytics'],
    recommended: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Escala e segurança total.',
    features: ['Tokens ilimitados', 'Fine-tuning', 'SLA Garantido', 'Gerente Dedicado', 'SSO'],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Investimento transparente
          </h2>
          <p className="text-slate-500">Escolha o plano ideal para sua escala.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                plan.recommended 
                  ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white border border-slate-100 text-slate-900 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 text-xs font-bold uppercase tracking-wide rounded-full shadow-lg">
                  Mais Popular
                </div>
              )}
              
              <div className="mb-6">
                  <h3 className={`text-lg font-bold ${plan.recommended ? 'text-slate-200' : 'text-slate-900'}`}>{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className={`ml-1 text-sm font-medium ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>/mês</span>}
                  </div>
                  <p className={`mt-2 text-sm ${plan.recommended ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className={`p-0.5 rounded-full mr-3 ${plan.recommended ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={plan.recommended ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full rounded-xl px-6 py-4 text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                plan.recommended 
                  ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/50' 
                  : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
              }`}>
                {plan.name === 'Enterprise' ? 'Falar com Vendas' : 'Começar Agora'}
                {plan.recommended && <ArrowRight size={16} />}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;