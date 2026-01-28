import React from 'react';
import { Target, Skull, Smartphone, ShieldAlert, Zap, Ghost } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Aim Lock Apelão",
    description: "A mira puxa pra cabeça igual imã. Você nem precisa se esforçar, é só clicar e subir o capa.",
    icon: Target
  },
  {
    title: "Anti-Ban Indetectável",
    description: "Sistema fantasma que a Garena não pega. Pode usar na principal sem medo de tomar Black.",
    icon: ShieldAlert
  },
  {
    title: "Zero Lag (FPS Boost)",
    description: "Removemos texturas inúteis pra rodar liso até em J1 Mini. Esquece os travamentos.",
    icon: Zap
  },
  {
    title: "Android & iOS",
    description: "O único painel que funciona liso no iOS e Android sem precisar de Root ou Jailbreak.",
    icon: Smartphone
  },
  {
    title: "Regedit VIP",
    description: "Alterações profundas no sistema pra deixar a sensi mais leve que pluma. Gruda tudo.",
    icon: Ghost
  },
  {
    title: "Modo Ghost",
    description: "Grave suas clipadas ou faça live sem ninguém perceber que você tá xitado.",
    icon: Skull
  }
];

const Features: React.FC = () => {
  return (
    <section id="funcionalidades" className="relative py-36 bg-black overflow-hidden">
        {/* Multiple Layered Backgrounds */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-brand-red/15 via-brand-red/5 to-transparent blur-[200px] pointer-events-none animate-pulse" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-red-600/10 to-transparent blur-[180px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[15%] left-[5%] w-1 h-1 bg-brand-red/50 rounded-full blur-sm animate-float"></div>
          <div className="absolute top-[45%] right-[8%] w-2 h-2 bg-brand-red/40 rounded-full blur-sm animate-float" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-[70%] left-[12%] w-1 h-1 bg-red-500/50 rounded-full blur-sm animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-[25%] right-[20%] w-2 h-2 bg-brand-red/30 rounded-full blur-sm animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-28">
          {/* Premium badge */}
          <div className="inline-block mb-8 animate-fade-in-down">
            <div className="relative group cursor-default">
              <div className="absolute inset-0 bg-brand-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative border-2 border-brand-red/30 bg-gradient-to-r from-white/[0.05] to-white/[0.02] backdrop-blur-xl px-6 py-2 rounded-lg">
                <span className="text-brand-red font-gaming text-xs tracking-[0.3em] uppercase font-black flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse shadow-[0_0_10px_rgba(255,0,60,0.8)]"></span>
                  funcionalidades
                </span>
              </div>
            </div>
          </div>
          
          {/* Main title */}
          <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-4 uppercase italic text-white drop-shadow-[0_8px_40px_rgba(255,0,60,0.4)] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            arsenal{' '}
            <span className="relative inline-block">
              <span className="absolute inset-0 text-brand-red blur-[20px] opacity-60">completo</span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-brand-red bg-200 animate-gradient-x">
                completo
              </span>
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-300 max-w-3xl mx-auto text-xs xs:text-sm sm:text-base md:text-lg font-gaming tracking-wide leading-relaxed animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Tecnologia de ponta para você{' '}
            <span className="relative inline-block text-white font-bold group/word cursor-default">
              <span className="absolute inset-0 blur-sm bg-brand-red/30 opacity-0 group-hover/word:opacity-100 transition-opacity"></span>
              <span className="relative group-hover/word:text-brand-red transition-colors">dominar cada partida</span>
            </span>{' '}
            do começo ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative cursor-default"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Glow effect background */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-red/20 via-red-600/20 to-brand-red/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              
              {/* Main card */}
              <div className="relative h-full p-12 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-2xl border-2 border-white/[0.08] hover:border-brand-red/40 transition-all duration-700 rounded-2xl overflow-hidden group-hover:shadow-[0_20px_60px_rgba(255,0,60,0.3)] group-hover:-translate-y-3 group-hover:scale-[1.02]">
                
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-red/10 via-brand-red/5 to-transparent rounded-bl-full -mr-20 -mt-20 transition-all duration-700 group-hover:from-brand-red/20 group-hover:scale-125"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-red/5 blur-3xl rounded-full transition-all duration-700 group-hover:bg-brand-red/15"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Icon container */}
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-brand-red/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="relative w-20 h-20 bg-gradient-to-br from-brand-red/25 via-brand-red/15 to-transparent border-2 border-brand-red/20 flex items-center justify-center rounded-xl group-hover:border-brand-red/50 group-hover:from-brand-red/35 group-hover:via-brand-red/20 transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(255,0,60,0.5)] group-hover:rotate-6 group-hover:scale-110">
                    <feature.icon className="w-10 h-10 text-brand-red drop-shadow-[0_0_20px_rgba(255,0,60,1)] group-hover:scale-110 transition-all duration-700" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="font-display text-base xs:text-lg sm:text-xl font-black mb-2 uppercase italic tracking-tight transition-all duration-500">
                    <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-brand-red group-hover:to-white transition-all">
                      {feature.title}
                    </span>
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-gaming text-xs xs:text-sm sm:text-base group-hover:text-gray-200 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-transparent group-hover:w-full transition-all duration-700 shadow-[0_0_20px_rgba(255,0,60,0.8)]"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-red/0 group-hover:border-brand-red/60 transition-all duration-500 rounded-tl"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-red/0 group-hover:border-brand-red/60 transition-all duration-500 rounded-br"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;