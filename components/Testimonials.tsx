import React from 'react';
import { Star, BadgeCheck } from 'lucide-react';

const reviews = [
  {
    name: 'KAIO_FPS',
    initial: 'K',
    text: "Slk, esse painel tá ignorante demais! Subi pra mestre em uma tarde. O bagulho gruda mesmo, não tem como, os cara chora no microfone kkkk.",
    time: '2 horas atrás'
  },
  {
    name: 'JP_TREM',
    initial: 'J',
    text: "Já usei vários xit mas esse HS MAX 3.0 é outro nível. O anti-ban segura muito, tô usando na conta gemada tem 3 meses e nada de ban. Recomendo!",
    time: '5 horas atrás'
  },
  {
    name: 'MATHEUS99',
    initial: 'M',
    text: "Só trilhares família. O suporte dos caras é monstro também, me ajudaram a configurar rapidinho. Vale cada centavo, preço de banana.",
    time: '1 dia atrás'
  },
  {
    name: 'DRK_SENSI',
    initial: 'D',
    text: "Regedit tá afiada demais. A mira não treme, fica cravada. Amassando geral no 4v4 apostado. Tmj HS MAX!",
    time: '1 dia atrás'
  },
  {
    name: 'LUCAS_GAME',
    initial: 'L',
    text: "Mano, achei que era golpe mas chegou certinho. O painel é muito fácil de usar e o aimlock puxa muito forte.",
    time: '3 horas atrás'
  },
  {
    name: 'GABRIEL_XIT',
    initial: 'G',
    text: "Tô amassando todo mundo na ranqueada. A sensibilidade fica perfeita, parece que tô jogando no emulador.",
    time: 'Agora mesmo'
  }
];

const allReviews = [...reviews, ...reviews, ...reviews];

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden relative border-t border-brand-red/20">
      {/* Background Effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-red/10 blur-[200px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-20 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-6 bg-brand-red/10 border-2 border-brand-red/30 px-6 py-2 rounded-sm">
             <span className="w-2.5 h-2.5 bg-brand-red rounded-full animate-pulse shadow-[0_0_15px_rgba(255,0,60,0.8)]"></span>
             <span className="text-brand-red font-black font-gaming tracking-[0.3em] uppercase text-sm">Squad Verificado</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black text-white italic uppercase tracking-tight drop-shadow-[0_4px_30px_rgba(255,0,60,0.3)] mb-4">
            FALA DA <span className="text-brand-red glow-text-red">TROPA</span>
          </h2>
          <p className="text-gray-300 font-gaming text-xl">Veja o que os <span className="text-brand-red font-bold">mestres</span> estão dizendo</p>
        </div>
      </div>

      {/* Infinite Marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>
        
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {allReviews.map((review, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[420px] mx-5 shrink-0 bg-gradient-to-br from-[#0f0f0f] to-[#050505] border-2 border-white/10 p-8 rounded-sm relative group hover:border-brand-red/60 transition-all hover:bg-gradient-to-br hover:from-brand-red/10 hover:to-[#050505] hover:shadow-[0_8px_40px_rgba(255,0,60,0.2)] hover:-translate-y-1"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-sm"></div>
              
              {/* Header */}
              <div className="relative flex items-center gap-5 mb-6 pb-6 border-b-2 border-white/5 group-hover:border-brand-red/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-black flex items-center justify-center font-display font-black text-2xl text-white border-2 border-white/20 group-hover:border-brand-red group-hover:text-brand-red transition-all rounded-sm group-hover:scale-110 group-hover:rotate-6">
                  {review.initial}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-black text-white uppercase text-xl group-hover:text-brand-red transition-colors">{review.name}</h3>
                    <BadgeCheck className="w-5 h-5 text-brand-red drop-shadow-[0_0_8px_rgba(255,0,60,0.6)]" />
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-brand-red text-brand-red drop-shadow-[0_0_6px_rgba(255,0,60,0.5)]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="relative text-gray-300 font-gaming text-base md:text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors">
                “{review.text}”
              </p>

              {/* Footer */}
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand-red/80 flex items-center gap-1.5 group-hover:text-brand-red transition-colors">
                  <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse"></span>
                  VERIFICADO VIA WHATSAPP
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;