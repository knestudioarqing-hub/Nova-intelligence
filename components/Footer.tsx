import React from 'react';
import { BrainCircuit, Twitter, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BrainCircuit className="text-slate-900" size={24} />
              <span className="text-xl font-bold text-slate-900">Nova Intelligence</span>
            </div>
            <p className="text-slate-500 max-w-xs mb-6">
              Construindo a próxima camada de inteligência para a humanidade. Ética, potente e universal.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Produto</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Recursos</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrações</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Preços</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Novidades</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Empresa</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nova Intelligence Inc. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacidade</a>
            <a href="#" className="hover:text-slate-900">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;