import React from 'react';
import { Play, ShieldCheck, Crosshair, Zap, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-[#0a0000] to-black perspective-1000">
      {/* Multiple Layered Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-radial from-brand-red/20 via-brand-red/10 to-transparent blur-[200px] rounded-full pointer-events-none z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-gradient-radial from-red-600/15 via-brand-red/5 to-transparent blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-radial from-brand-red/10 to-transparent blur-[160px] rounded-full pointer-events-none z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Enhanced 3D Grid */}
      <div className="absolute inset-0 top-[15%] h-[150%] w-full bg-grid opacity-30 pointer-events-none -z-10" style={{transform: 'perspective(1000px) rotateX(60deg)'}}></div>
      
      {/* Premium Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.08),rgba(255,0,0,0.03),rgba(255,0,0,0.08))] bg-[length:100%_3px,4px_100%] pointer-events-none z-0 opacity-60"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-brand-red/40 rounded-full blur-sm animate-float"></div>
        <div className="absolute top-[40%] right-[15%] w-3 h-3 bg-brand-red/30 rounded-full blur-sm animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[60%] left-[20%] w-2 h-2 bg-red-500/40 rounded-full blur-sm animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[30%] right-[30%] w-2 h-2 bg-brand-red/35 rounded-full blur-sm animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[70%] left-[40%] w-3 h-3 bg-brand-red/25 rounded-full blur-sm animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative">
        
        {/* Premium Glassmorphism Badge */}
        <div className="flex justify-center mb-12 animate-fade-in-down">
            <div className="relative group cursor-default">
                {/* Glow background */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 via-red-600/30 to-brand-red/30 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                
                {/* Glass card */}
                <div className="relative border-2 border-brand-red/40 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl px-8 py-3 rounded-lg flex items-center gap-4 shadow-[0_8px_32px_rgba(255,0,60,0.15)] group-hover:shadow-[0_12px_48px_rgba(255,0,60,0.3)] group-hover:border-brand-red/60 transition-all duration-500 overflow-hidden">
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <span className="relative flex h-3.5 w-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-br from-brand-red to-red-600 shadow-[0_0_12px_rgba(255,0,60,0.8)]"></span>
                    </span>
                    <span className="relative text-white font-gaming font-black tracking-[0.25em] text-sm md:text-base uppercase group-hover:text-brand-red transition-colors duration-300">
                        Sistema Indetectável v4.2
                    </span>
                </div>
            </div>
        </div>

        {/* Ultra Premium Typography */}
        <div className="relative mb-16 group">
            <h1 className="font-display font-black italic uppercase tracking-tighter leading-[0.9]">
                {/* Subtitle responsivo */}
                <span className="block text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white mb-2 md:mb-4 drop-shadow-[0_6px_25px_rgba(255,255,255,0.15)] transition-all duration-700 group-hover:translate-x-3 group-hover:drop-shadow-[0_8px_35px_rgba(255,0,60,0.4)] animate-fade-in-up">
                    VIRE UM
                </span>
                {/* Main title responsivo */}
                <div className="relative inline-block">
                    {/* Background glow layers */}
                    <div className="absolute inset-0 text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] text-brand-red blur-[30px] md:blur-[60px] opacity-60 animate-pulse-slow">MONSTRO</div>
                    <div className="absolute inset-0 text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] text-red-600 blur-[20px] md:blur-[40px] opacity-40 animate-pulse-slow" style={{animationDelay: '1s'}}>MONSTRO</div>
                    {/* Main gradient text */}
                    <span className="relative block text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] text-transparent bg-clip-text bg-gradient-to-b from-brand-red via-[#ff1a47] to-[#c9002e] drop-shadow-[0_0_40px_rgba(255,0,60,1)] md:drop-shadow-[0_0_100px_rgba(255,0,60,1)] transition-all duration-700 group-hover:-translate-x-3 group-hover:scale-[1.02] scale-y-[1.10] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                        MONSTRO
                    </span>
                    {/* Outline effect */}
                    <span className="absolute inset-0 text-5xl sm:text-7xl md:text-[10rem] lg:text-[13rem] text-transparent [-webkit-text-stroke:1px_rgba(255,0,60,0.3)] md:[-webkit-text-stroke:2px_rgba(255,0,60,0.3)] opacity-50 group-hover:opacity-70 transition-opacity">
                        MONSTRO
                    </span>
                </div>
                {/* Bottom text responsivo */}
                <span className="block text-xl sm:text-2xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 font-bold mt-6 md:mt-10 tracking-[0.3em] md:tracking-[0.5em] font-gaming drop-shadow-[0_4px_20px_rgba(255,255,255,0.1)] animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                    NO FREE FIRE
                </span>
            </h1>
        </div>

        {/* Premium Description */}
        <div className="max-w-4xl mx-auto mb-24 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
          <p className="text-gray-200 text-2xl md:text-3xl font-gaming font-semibold tracking-wide leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)] mb-2">
            O{' '}
            <span className="relative inline-block group/brand cursor-default">
              <span className="absolute inset-0 blur-xl bg-brand-red/50 opacity-60 group-hover/brand:opacity-100 transition-opacity"></span>
              <span className="relative text-brand-red font-black drop-shadow-[0_0_20px_rgba(255,0,60,0.8)] group-hover/brand:scale-105 transition-transform inline-block">
                HS MAX 3.0
              </span>
            </span>
            {' '}transforma sua jogabilidade.
          </p>
          <p className="text-gray-300 text-xl md:text-2xl font-gaming tracking-wide leading-relaxed">
            A ferramenta secreta dos{' '}
            <span className="relative inline-block group/text cursor-default">
              <span className="text-white font-bold border-b-2 border-brand-red/50 group-hover/text:border-brand-red pb-1 transition-all group-hover/text:text-brand-red">
                Mestres e Desafiantes
              </span>
              <span className="absolute -inset-1 bg-brand-red/10 blur-lg opacity-0 group-hover/text:opacity-100 transition-opacity -z-10 rounded"></span>
            </span>
            .
          </p>
        </div>

        {/* Premium Glass Stats Cards */}
        <div className="relative flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 max-w-7xl mx-auto animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          {/* Background decorative lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
          
          <StatItem icon={ShieldCheck} title="100% SEGURO" subtitle="Anti-Ban V4.2" />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-brand-red/40 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-red rounded-full shadow-[0_0_12px_rgba(255,0,60,0.8)] animate-pulse"></div>
            </div>
          </div>
          
          <StatItem icon={Crosshair} title="FULL VERMELHO" subtitle="Aim Lock 99%" />
          
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-brand-red/40 to-transparent relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-red rounded-full shadow-[0_0_12px_rgba(255,0,60,0.8)] animate-pulse"></div>
            </div>
          </div>
          
          <StatItem icon={Zap} title="ZERO LAG" subtitle="FPS Boost" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle: string }) => (
    <div className="relative flex items-center gap-6 group cursor-default flex-1">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-red-600/20 to-brand-red/20 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10"></div>
        
        {/* Glass card */}
        <div className="relative flex items-center gap-6 px-10 py-6 rounded-xl border-2 border-white/[0.08] bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-2xl group-hover:border-brand-red/40 group-hover:from-brand-red/[0.12] group-hover:to-brand-red/[0.04] transition-all duration-500 w-full shadow-[0_8px_32px_rgba(0,0,0,0.3)] group-hover:shadow-[0_12px_48px_rgba(255,0,60,0.25)] group-hover:scale-[1.03] overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Icon container with premium effects */}
            <div className="relative">
                <div className="absolute inset-0 bg-brand-red/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative p-5 bg-gradient-to-br from-brand-red/20 via-brand-red/10 to-transparent rounded-lg group-hover:from-brand-red/30 group-hover:via-brand-red/15 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,0,60,0.5)] group-hover:rotate-6 group-hover:scale-110 border border-brand-red/20 group-hover:border-brand-red/40">
                    <Icon className="w-10 h-10 text-brand-red drop-shadow-[0_0_16px_rgba(255,0,60,1)] group-hover:scale-110 transition-transform duration-500" />
                </div>
            </div>
            
            {/* Text content */}
            <div className="text-left flex-1">
                <span className="block text-white font-black font-display text-2xl tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-brand-red group-hover:to-white transition-all duration-500 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{title}</span>
                <span className="block text-sm text-gray-400 uppercase font-bold tracking-[0.25em] mt-1 group-hover:text-gray-300 transition-colors">{subtitle}</span>
            </div>
            
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    </div>
);

export default Hero;