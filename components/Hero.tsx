import React from 'react';
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Premium Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-[-10%] right-[20%] w-[400px] h-[400px] bg-purple-50/60 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[0%] left-[30%] w-[600px] h-[600px] bg-indigo-50/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Nova Geração AI 3.0</span>
          </div>
          
          {/* Heading */}
          <h1 className="max-w-4xl text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 animate-fade-in-up leading-[1.1]" style={{ animationDelay: '0.1s' }}>
            Inteligência que <br className="hidden md:block" />
            <span className="gradient-text">Define o Futuro</span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-2 text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 animate-fade-in-up font-light leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Potencialize sua empresa com modelos de linguagem avançados. 
            Clareza, eficiência e escala para o mundo real.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="#demo" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-slate-900 hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1">
              Testar Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#how-it-works" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm hover:shadow-md">
              Como Funciona
            </a>
          </div>

        </div>

        {/* Floating Abstract Elements (Decorations) */}
        <div className="absolute top-1/3 left-0 lg:left-10 animate-float hidden lg:block">
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3 w-48">
            <div className="bg-green-100 p-2 rounded-lg text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Crescimento</div>
              <div className="text-sm font-bold text-slate-900">+124% este mês</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-0 lg:right-10 animate-float-delayed hidden lg:block">
          <div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-card border border-slate-100 flex items-center gap-3 w-52">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Segurança</div>
              <div className="text-sm font-bold text-slate-900">SOC2 Verificado</div>
            </div>
          </div>
        </div>

         <div className="absolute top-40 right-10 lg:right-32 animate-float hidden lg:block">
          <div className="bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-glow border border-blue-100 flex items-center justify-center text-blue-500">
              <Zap size={24} fill="currentColor" className="text-blue-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;