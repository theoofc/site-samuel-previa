import React, { useState, useEffect } from "react";
import { MessageSquare, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "../types";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Alexandre G. Krummenacher",
    role: "Proprietário do Krummen Hair",
    text: "O curso mudou completamente meu faturamento. Antes, eu cobrava R$ 40 em um corte comum. Hoje, após me especializar com cortes modernos e degradês perfeitos, meu corte custa R$ 150 e a agenda vive lotada com 2 meses de antecedência. É incomparável.",
    rating: 5,
    initials: "AK",
    achievement: "Faturamento triplicado em 6 meses"
  },
  {
    id: "test-2",
    name: "Mariana Albuquerque",
    role: "Stylist Oficial na Maison de Beauté",
    text: "Minha experiência no Treinamento de Elite para Barbeiros foi indescritível. O salão estúdio avançado nos dá a sensação real de trabalhar no mais alto nível de performance. A precisão técnica que os mestres exigem de nós eleva nosso olhar à perfeição.",
    rating: 5,
    initials: "MA",
    achievement: "Atuando em Salão de Luxo em São Paulo"
  },
  {
    id: "test-3",
    name: "Felipe Rodrigues",
    role: "Educador Independente & Artista Capilar",
    text: "O curso me transformou de um barbeiro comum para um artista disputado nas redes sociais. As dicas de como fotografar os cortes e divulgar meu trabalho me renderam novos clientes e maior visibilidade.",
    rating: 5,
    initials: "FR",
    achievement: "Ganhador de Campeonatos de Corte 2025"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 7000); // Transitions every 7s
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="depoimentos" className="py-24 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[40%] right-[-10%] w-72 h-72 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-600 text-xxs font-black tracking-widest uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>Vozes de Quem Conquistou o Topo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none">
            Depoimentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">dos Graduados</span>
          </h2>
        </div>

        {/* Testimonials Slider Viewport */}
        <div className="relative min-h-[300px] sm:min-h-[250px] flex items-center justify-center">
          
          {/* Main testimonial card */}
          <div className="w-full bg-white/80 border border-zinc-200 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl text-left space-y-6 sm:space-y-8 relative overflow-hidden transition-all duration-500 text-zinc-900">
            
            {/* Elegant luxury brackets background */}
            <span className="absolute top-0 right-4 text-9xl font-serif text-zinc-300/20 select-none">“</span>

            {/* Testimonial Core Text */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 font-normal leading-relaxed italic">
              "{TESTIMONIALS[activeIndex].text}"
            </p>

            {/* Testimonial Author details and Avatar initials */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-zinc-200 w-full">
              <div className="flex items-center gap-3.5">
                
                {/* Initials luxury glowing representation */}
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 flex items-center justify-center shrink-0 border border-amber-550 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                  <div className="absolute -inset-1 rounded-full border border-amber-500/25 animate-pulse" />
                  <span className="text-black font-black text-sm tracking-widest uppercase">
                    {TESTIMONIALS[activeIndex].initials}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-950 uppercase leading-snug">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <p className="text-xxs text-zinc-550 font-bold uppercase tracking-wider">
                    {TESTIMONIALS[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Achievement Badge and Stars info */}
              <div className="space-y-1.5 sm:text-right">
                <div className="flex items-center lg:justify-end gap-1">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <span className="inline-block px-2.5 py-0.5 text-[9px] uppercase font-extrabold bg-amber-500/10 text-amber-600 border border-amber-500/20 rounded-md">
                   🏆 {TESTIMONIALS[activeIndex].achievement}
                </span>
              </div>
            </div>

          </div>

          {/* Absolute Navigation Arrow Buttons (Floating beside container) */}
          <div className="absolute -bottom-16 sm:bottom-auto sm:-left-6 sm:top-1/2 sm:-translate-y-1/2 flex gap-3 sm:block">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 hover:border-amber-500 text-zinc-800 hover:text-amber-600 flex items-center justify-center transition cursor-pointer shadow-lg hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute -bottom-16 right-0 sm:bottom-auto sm:-right-6 sm:top-1/2 sm:-translate-y-1/2 flex gap-3 sm:block">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-zinc-200 hover:border-amber-500 text-zinc-800 hover:text-amber-600 flex items-center justify-center transition cursor-pointer shadow-lg hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Carousel Indicators dot row */}
        <div className="flex justify-center items-center gap-2 pt-6">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index ? "w-6 bg-amber-500" : "w-1.5 bg-zinc-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
