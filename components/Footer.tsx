import React from 'react';
import { Crosshair, Lock, ShieldCheck } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-brand-red/20 pt-20 pb-10 relative overflow-hidden">
      {/* Glitch decoration */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-red/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Crosshair className="text-brand-red w-8 h-8 animate-spin-slow" />
              <span className="font-display font-black text-3xl text-white italic">HS MAX 3.0</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 font-gaming text-lg">
              A ferramenta #1 pra quem quer amassar na ranqueada. Sem ban, sem lag, só capa. O segredo que os verificados não te contam.
            </p>
            <div className="flex items-center gap-3 bg-white/5 w-fit px-4 py-2 rounded border border-white/5">
              <ShieldCheck className="w-5 h-5 text-green-500" />
              <span className="text-gray-300 text-sm font-bold uppercase">Site Blindado & Seguro</span>
            </div>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase text-sm tracking-[0.2em] text-brand-red">Navegação</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Início</a></li>
              <li><a href="#planos" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Planos VIP</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Quem usa</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Ajuda</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white mb-8 uppercase text-sm tracking-[0.2em] text-brand-red">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-2 inline-block duration-200">Reembolso</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4 font-gaming uppercase tracking-widest">
          <p>© 2026 HS MAX. Todos os direitos reservados.</p>
          <div className="flex gap-4 opacity-50">
             <span>Este site não tem vínculo com a Garena.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;