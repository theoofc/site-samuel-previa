import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Award } from "lucide-react";

interface HeroProps {
  onEnrollClick: () => void;
}

export function Hero({ onEnrollClick }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  // Parallax Event listener
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-4 sm:px-6 py-24"
    >
      {/* Parallax Background Container */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-75 ease"
        style={{
          transform: `translateY(${scrollY * 0.35}px) scale(1.05)`,
        }}
      >
        <img 
          src="/src/assets/images/hero_background_1781666034767.jpg" 
          alt="Treinamento de Elite para Barbeiros - Salão de Alta Performance" 
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Glow Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-[#f5f5f7]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Floating Animated Golden Light Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-amber-400/30 blur-sm animate-pulse" />
        <div className="absolute top-[60%] left-[15%] w-3 h-3 rounded-full bg-amber-300/20 blur-md animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-amber-200/40 blur-sm animate-pulse [animation-delay:0.8s]" />
        <div className="absolute top-[80%] right-[10%] w-4 h-4 rounded-full bg-amber-500/10 blur-lg animate-pulse [animation-delay:2.2s]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 sm:space-y-10" id="hero-content">
        
        {/* Elite Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] text-amber-400 text-xs font-semibold tracking-widest uppercase animate-fade-in-down"
          id="hero-elite-tag"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
          <span>Formação Avançada de Alta Performance</span>
        </div>

        {/* Cinematic Title */}
        <div className="space-y-4 sm:space-y-6" id="hero-title-group">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-none">
            <span className="block text-zinc-400 font-extralight text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] mb-1 sm:mb-2">Treinamento de Elite</span>
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(212,175,55,0.2)]">
              para Barbeiros
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed tracking-wide">
            Aprenda as melhores técnicas de corte, degradê perfeito e desenhos modernos de forma simples e 100% prática com quem realmente é referência no Brasil.
          </p>
        </div>

        {/* Feature Points Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4 text-left font-sans">
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Award className="w-4.5 h-4.5 text-amber-500" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Certificado Oficial</p>
              <p className="text-[10px] text-zinc-400">Reconhecido no mercado</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4.5 h-4.5 text-amber-400" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Treino Prático</p>
              <p className="text-[10px] text-zinc-400">Prática em modelos reais</p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 backdrop-blur-md col-span-2 sm:col-span-1 flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4.5 h-4.5 text-amber-400" />
            </div>
            <div>
              <p className="text-white text-xs font-bold uppercase tracking-wider">Turmas Pequenas</p>
              <p className="text-[10px] text-zinc-400">Atenção total do professor</p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" id="hero-actions">
          <button
            onClick={onEnrollClick}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black text-xs font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition duration-300 cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
            <span>Reservar Minha Candidatura</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition" />
          </button>
          
          <a
            href="#cursos"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950/80 border border-zinc-850 hover:border-zinc-700 text-white hover:bg-zinc-900 text-xs font-black uppercase tracking-widest transition duration-300 cursor-pointer flex items-center justify-center"
          >
            Conhecer os Cursos Elite
          </a>
        </div>

        {/* Beautiful Scroll Down Indicator */}
        <div className="pt-8 flex flex-col items-center justify-center" id="scroll-indicator">
          <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-550 font-bold mb-2">Deslizar para explorar</span>
          <div className="w-5 h-8 rounded-full border border-zinc-700/60 flex items-start justify-center p-1.5 opacity-55 animate-bounce">
            <div className="w-1 h-2 rounded-full bg-amber-400" />
          </div>
        </div>

      </div>
    </section>
  );
}
