import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, User, Bot, Sparkles, MessageSquare } from 'lucide-react';
import { generateAIResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const DemoSection: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá. Sou a inteligência Nova. Analiso dados, crio conteúdo e resolvo problemas complexos. Como posso auxiliar hoje?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: prompt,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    const responseText = await generateAIResponse(prompt);

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <section id="demo" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Gradient Backdrops */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-500 tracking-wide uppercase">Live API Demo</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Fluidez <br/>
              <span className="text-blue-600">Cognitiva</span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed font-light">
              Experimente a precisão da Nova em tempo real. Uma interface desenhada para clareza, alimentada por modelos que compreendem nuances.
            </p>
            
            <div className="grid gap-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                   <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Contexto Infinito</h4>
                  <p className="text-sm text-slate-500 mt-1">O modelo lembra de toda a conversa, permitindo interações profundas.</p>
                </div>
              </div>
               <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-2 bg-white rounded-lg shadow-sm text-blue-600">
                   <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Linguagem Natural</h4>
                  <p className="text-sm text-slate-500 mt-1">Fale como se estivesse conversando com um especialista humano.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Chat Interface - Light Theme */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex flex-col h-[600px] relative">
              {/* Decorative Header */}
              <div className="bg-white/80 backdrop-blur-sm p-5 border-b border-slate-50 flex items-center justify-between absolute top-0 w-full z-10">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"></div>
                  <span className="text-sm font-semibold text-slate-700">Nova Assistant</span>
                </div>
                <div className="text-xs text-slate-400 font-mono">v3.0.1-stable</div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-6 pt-20 space-y-6 bg-slate-50/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in-up`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-slate-900 text-white' : 'bg-white text-blue-600 border border-slate-100'}`}>
                      {msg.role === 'user' ? <User size={18} /> : <Sparkles size={18} />}
                    </div>
                    <div className={`max-w-[85%] rounded-2xl px-6 py-4 text-sm leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-slate-900 text-white rounded-tr-sm' 
                        : 'bg-white text-slate-700 border border-slate-100 rounded-tl-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4 animate-pulse">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Bot size={18} />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-sm px-6 py-4 border border-slate-100 shadow-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-slate-50 relative z-10">
                <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-slate-50 text-slate-900 placeholder-slate-400 rounded-xl px-5 py-4 border-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                  />
                  <button 
                    type="submit" 
                    disabled={isLoading || !prompt.trim()}
                    className="p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 transition-all shadow-lg hover:shadow-blue-200"
                  >
                    {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DemoSection;