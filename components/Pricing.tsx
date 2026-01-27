import React from 'react';
import { Check } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'month',
    name: 'PLATA',
    duration: 'Mensal',
    oldPrice: 'R$ 19,90',
    price: '4,99',
    features: [
      'Anti-Ban Básico',
      'Painel Limitado',
      'Sem Atualizações',
      'Renova Todo Mês'
    ],
    link: 'https://sharkbot.com.br/c/tickect-basic-ff',
    recommended: false
  },
  {
    id: 'trimester',
    name: 'PLATINA',
    duration: '3 Meses',
    oldPrice: 'R$ 39,90',
    price: '8,99',
    features: [
      'Anti-Ban Intermediário',
      'Painel PRO',
      'Expira em 90 dias',
      'Sem Grupo VIP'
    ],
    link: 'https://sharkbot.com.br/c/platina',
    recommended: false
  },
  {
    id: 'lifetime',
    name: 'MESTRE',
    duration: 'Vitalício',
    oldPrice: 'R$ 147,90',
    price: '14,90',
    features: [
      '✨ ACESSO ETERNO (Pague 1x, Use Sempre)',
      '🔥 Anti-Ban ULTIMATE Indetectável',
      '⚡ Todas Atualizações Grátis para Sempre',
      '🎯 Painel Completo + Recursos Secretos',
      '💪 Grupo VIP Exclusivo (Mestres Only)',
      '🏆 Pack Sensi de Youtubers Famosos',
      '🎓 Curso Completo Mestre em 24h',
      '🚀 Suporte Prioritário 24/7',
      '💰 Economize R$ 133 (90% OFF)'
    ],
    link: 'https://sharkbot.com.br/c/mestre',
    recommended: true
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-16 relative bg-black overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header compact */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-2 mb-6">
            <div className="inline-block bg-red-600 text-white text-[10px] font-black px-4 py-1.5 rounded shadow-[0_0_15px_rgba(255,0,60,0.4)] border border-white/20">
              ⚠️ APENAS 7 VAGAS VITALÍCIO HOJE
            </div>
            <div className="text-brand-red text-[10px] font-bold">
              ⚡ Promoção encerra em: <span className="text-white">03:47:22</span>
            </div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-black mb-3 text-white italic uppercase">
            ESCOLHA SEU <span className="text-brand-red">PLANO</span>
          </h2>
          <p className="text-gray-400 font-gaming text-sm">
            <span className="text-brand-red font-bold">97%</span> escolhem o VITALÍCIO
          </p>
        </div>

        {/* Cards - ultra compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col rounded-lg border overflow-hidden
                ${plan.recommended 
                  ? 'border-2 border-brand-red bg-gradient-to-b from-brand-red/5 to-black scale-[1.03] shadow-[0_4px_30px_rgba(255,0,60,0.3)]' 
                  : 'border border-gray-700 bg-gradient-to-b from-gray-900 to-black'
                }
              `}
            >
              {/* Simple badges */}
              {plan.recommended ? (
                <>
                  <div className="w-full bg-yellow-500 py-1 text-black font-black text-[10px] text-center">
                    ⭐ MAIS ESCOLHIDO
                  </div>
                  <div className="absolute top-1 right-2 bg-red-600 text-white px-2 py-0.5 rounded-full font-black text-[9px] border border-white">
                    90% OFF
                  </div>
                </>
              ) : (
                <div className="absolute top-2 right-2 bg-gray-600 text-gray-300 px-2 py-0.5 rounded text-[9px] font-bold">
                  NÃO RECOMENDADO
                </div>
              )}
              
              {/* Header */}
              <div className="px-5 text-center py-5 border-b border-gray-800">
                <h3 className={`font-display font-black text-xl mb-1 uppercase ${
                  plan.recommended ? 'text-yellow-400' : 'text-gray-400'
                }`}>
                  {plan.name}
                </h3>
                
                <div className={`text-[10px] line-through mb-1 ${
                  plan.recommended ? 'text-gray-600' : 'text-gray-500'
                }`}>{plan.oldPrice}</div>
                
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className={`text-xs font-bold ${plan.recommended ? 'text-brand-red' : 'text-gray-500'}`}>R$</span>
                  <span className={`text-4xl font-black ${
                    plan.recommended ? 'text-brand-red' : 'text-gray-400'
                  }`}>{plan.price}</span>
                </div>
                
                <div className={`text-[10px] font-bold uppercase ${
                  plan.recommended ? 'text-brand-red' : 'text-gray-500'
                }`}>
                  {plan.duration}
                </div>
                
                {plan.recommended && (
                  <div className="mt-2 inline-block bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded">
                    <span className="text-green-400 font-bold text-[9px]">✅ ECONOMIZE R$ 133</span>
                  </div>
                )}
              </div>

              {/* Features - very compact */}
              <div className="px-5 py-4 flex-grow">
                <ul className={`space-y-2 ${plan.recommended ? '' : 'opacity-80'}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start gap-2 text-[11px] font-gaming ${
                      plan.recommended ? 'text-gray-300' : 'text-gray-400'
                    }`}>
                      <Check size={12} className={`flex-shrink-0 mt-0.5 ${
                        plan.recommended ? 'text-green-500' : 'text-gray-600'
                      }`} />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {plan.recommended && (
                  <div className="mt-4 p-2 bg-green-500/5 border border-green-500/20 rounded">
                    <p className="text-green-400 font-bold text-[10px] text-center">
                      🏆 +2.847 jogadores MESTRES
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a 
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 font-black uppercase tracking-wide block text-center text-xs border rounded transition-all ${
                    plan.recommended
                      ? 'bg-brand-red hover:bg-red-700 text-white border-brand-red shadow-[0_4px_20px_rgba(255,0,60,0.4)] hover:scale-[1.02]'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {plan.recommended ? '🔥 QUERO SER MESTRE' : 'Selecionar'}
                </a>
                {plan.recommended && (
                  <p className="text-center text-green-400 text-[9px] font-bold mt-1">
                    ⚡ Últimas vagas
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;