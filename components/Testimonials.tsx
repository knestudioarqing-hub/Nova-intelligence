import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "A Nova Intelligence transformou completamente como analisamos o feedback dos clientes. Simplesmente funciona.",
    author: "Ricardo Silva",
    role: "CTO",
    company: "TechFlow",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ricardo"
  },
  {
    quote: "A precisão dos modelos de linguagem em português é impressionante. Automatizamos 70% do suporte.",
    author: "Ana Beatriz",
    role: "COO",
    company: "Banco Futuro",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Ana"
  },
  {
    quote: "A facilidade de integração via API foi o diferencial. Interface limpa, documentação clara e performance.",
    author: "Carlos Mendes",
    role: "Lead Dev",
    company: "StartSoft",
    avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Carlos"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Aprovado por líderes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed font-light text-lg">"{item.quote}"</p>
              <div className="flex items-center border-t border-slate-50 pt-6">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white shadow-sm" />
                <div className="ml-4">
                  <div className="text-sm font-bold text-slate-900">{item.author}</div>
                  <div className="text-xs text-slate-500 font-medium">{item.role}, {item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;