import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "O HS MAX 3.0 dá ban?",
    answer: "Não! Nossa tecnologia utiliza um bypass externo que não altera os arquivos originais do jogo, tornando-o indetectável pelo sistema anti-cheat do Free Fire."
  },
  {
    question: "Funciona em iPhone (iOS)?",
    answer: "Sim, o HS MAX 3.0 é compatível tanto com Android quanto iOS, sem necessidade de Jailbreak ou Root."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login, senha e o link para acessar o painel e os tutoriais de instalação."
  },
  {
    question: "Preciso formatar o celular?",
    answer: "Não. A instalação é simples e não exige formatação ou procedimentos complexos."
  },
  {
    question: "Tem garantia?",
    answer: "Oferecemos 7 dias de garantia incondicional. Se não gostar ou não conseguir instalar, devolvemos 100% do seu dinheiro."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-brand-dark relative overflow-hidden">
        {/* Decorative circle */}
      <div className="absolute -right-20 top-20 w-64 h-64 border border-brand-red/20 rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          DÚVIDAS <span className="text-brand-red">FREQUENTES</span>
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-200">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-red" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;