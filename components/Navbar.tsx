import React, { useState, useEffect } from 'react';
import { Crosshair, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-black/95 border-brand-red/30 py-3 backdrop-blur-md' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Crosshair className="w-8 h-8 text-brand-red group-hover:rotate-90 transition-transform duration-500 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
          <span className="font-display font-black text-2xl tracking-tighter italic text-white">
            HS MAX <span className="text-brand-red glow-text-red">3.0</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Funções', 'Depoimentos', 'Preços', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'Preços' ? 'planos' : item === 'Funções' ? 'funcionalidades' : item.toLowerCase())}
              className="text-gray-400 hover:text-brand-red transition-colors text-sm font-bold uppercase tracking-widest font-gaming hover:drop-shadow-[0_0_5px_rgba(255,0,60,0.5)]"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('planos')}
            className="group relative bg-brand-red/10 border border-brand-red hover:bg-brand-red text-brand-red hover:text-white px-8 py-2 font-black italic tracking-wider uppercase transition-all duration-300 skew-x-[-10deg] shadow-[0_0_15px_rgba(255,0,60,0.2)] hover:shadow-[0_0_25px_rgba(255,0,60,0.6)]"
          >
            <span className="skew-x-[10deg] inline-block">Acessar Agora</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="text-brand-red" /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b border-brand-red/20 py-6 px-4 flex flex-col gap-4">
          {['Funções', 'Depoimentos', 'Preços', 'FAQ'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item === 'Preços' ? 'planos' : item === 'Funções' ? 'funcionalidades' : item.toLowerCase())}
              className="text-left text-gray-300 hover:text-brand-red py-3 font-gaming font-bold text-lg border-l-2 border-transparent hover:border-brand-red pl-4 transition-all"
            >
              {item.toUpperCase()}
            </button>
          ))}
          <button 
             onClick={() => scrollToSection('planos')}
             className="bg-brand-red text-white w-full py-4 font-black italic uppercase tracking-wider mt-2 shadow-[0_0_15px_rgba(255,0,60,0.4)]"
          >
            COMPRAR AGORA
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;