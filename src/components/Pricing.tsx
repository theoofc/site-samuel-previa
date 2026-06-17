import React from "react";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { PricingPlan } from "../types";

const PLANS: PricingPlan[] = [
  {
    id: "plan-1",
    name: "Curso Único",
    tagline: "Escolha um dos dois treinamentos",
    price: "R$ 2.450",
    period: "pagamento único",
    features: [
      "Acesso completo a 1 curso de sua escolha",
      "Material teórico digital em PDF, fácil de ler",
      "Modelos reais trazidos pela escola para as aulas práticas",
      "Certificado oficial do curso escolhido",
      "Grupo de dúvidas no WhatsApp por 6 meses"
    ],
    popular: false,
    ctaText: "Escolher Curso & Inscrever"
  },
  {
    id: "plan-2",
    name: "Combo Duplo Profissional",
    tagline: "A formação completa para faturar mais",
    price: "R$ 4.900",
    period: "em até 12x sem juros",
    features: [
      "Formação completa: Design Artístico + Degradê & Corte Moderno",
      "Palestra especial de como criar seu nome e postar fotos nas redes sociais",
      "Kit de ferramentas profissionais para usar durante e pós-curso",
      "Ajuda individual e semanal direta com os professores",
      "Indicação para vagas de trabalho nas melhores barbearias parceiras",
      "Suporte vitalício para tirar dúvidas após formado"
    ],
    popular: true,
    ctaText: "Acessar Combo Completo"
  }
];

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section id="planos" className="py-24 sm:py-32 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative text-zinc-900">
      {/* Background radial effects */}
      <div className="absolute bottom-[20%] left-[-10%] w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-amber-650 text-xxs font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 inline-block">
             🏷 Investimento na Sua Carreira
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none">
            Escolha o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Plano Ideal</span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed">
            Se você está começando agora ou quer se especializar ainda mais para atrair melhores clientes, temos a opção perfeita para você.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`group relative rounded-3xl p-6 sm:p-10 text-left transition duration-300 backdrop-blur-md flex flex-col justify-between ${
                plan.popular 
                  ? "bg-amber-500/5 border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.08)]" 
                  : "bg-white/80 border border-zinc-200 hover:border-amber-500/35"
              }`}
            >
              {/* Popular Indicator Ribbons */}
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-amber-500/25">
                  <Sparkles className="w-3 h-3 text-black animate-spin-slow" />
                  <span>Recomendado</span>
                </div>
              )}

              {/* Header block */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xxs text-zinc-550 uppercase tracking-wider font-semibold">
                    {plan.tagline}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 pt-3 border-b border-zinc-200 pb-5">
                  <span className="text-3xl sm:text-5xl font-black text-zinc-950 italic tracking-tight font-serif text-transparent bg-clip-text bg-gradient-to-r from-zinc-950 to-zinc-600">
                    {plan.price}
                  </span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
                    / {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-4 pt-4">
                  <p className="text-[10px] font-black uppercase tracking-wider text-amber-600">Benefícios inclusos:</p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-normal leading-snug">
                        <div className="w-4.5 h-4.5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-amber-600" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-widest transition cursor-pointer text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] hover:scale-[1.02]"
                      : "bg-zinc-900 text-white hover:bg-black"
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
