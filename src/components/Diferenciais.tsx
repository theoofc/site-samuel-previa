import React from "react";
import { Award, Eye, Sliders, Users, FileCheck2, Cpu } from "lucide-react";

export function Diferenciais() {
  const PILLARS = [
    {
      num: "01",
      title: "Corte Perfeito Passo a Passo",
      desc: "Aulas detalhadas e fáceis de entender. Cada movimento de tesourada, ângulo e acabamento do degradê é ensinado de forma clara para você fazer sem errar.",
      icon: <Cpu className="w-5 h-5 text-amber-500" />
    },
    {
      num: "02",
      title: "Professores que Vivem a Prática",
      desc: "Nossos instrutores trabalham ativamente no mercado de cortes masculinos de alto padrão, ensinando exatamente o que as barbearias de sucesso cobram hoje em dia.",
      icon: <Users className="w-5 h-5 text-amber-400" />
    },
    {
      num: "03",
      title: "Muita Prática com Modelos",
      desc: "Chega de treinar apenas em cabeças de bonecas. Aqui você pratica de verdade em modelos reais trazidos pela escola, em um ambiente moderno, confortável e climatizado.",
      icon: <Sliders className="w-5 h-5 text-amber-500" />
    },
    {
      num: "04",
      title: "Certificado Reconhecido",
      desc: "Ao final do seu treinamento de elite, você ganha o seu certificado de conclusão oficial. Ele prova seu talento e abre caminhos nas melhores e mais valorizadas barbearias.",
      icon: <Award className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative text-zinc-900">
      {/* Background decoration flares */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-zinc-200">
          <div className="text-left space-y-3">
            <span className="text-amber-600 text-xxs font-black tracking-widest uppercase block">Nosso Compromisso de Qualidade</span>
            <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none">
              Por que escolher o <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Selo Elite</span>?
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed text-left md:text-right">
            Nossa escola foi feita para quem quer ser o melhor na profissão. Se você quer cortar cabelo com perfeição e faturar mais com isso, está no lugar certo.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((pillar) => (
            <div 
              key={pillar.num}
              className="group relative bg-white/80 border border-zinc-200 rounded-2xl p-6 sm:p-8 space-y-6 transition hover:border-amber-500 hover:shadow-md text-left backdrop-blur-md"
            >
              {/* Number and Icon Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <span className="font-mono text-3xl font-black text-zinc-300 group-hover:text-amber-500 transition duration-300">
                  {pillar.num}
                </span>
                
                <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center shadow-md">
                  {pillar.icon}
                </div>
              </div>

              {/* Pillar Texts */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-zinc-950 uppercase tracking-wide group-hover:text-amber-600 transition">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
