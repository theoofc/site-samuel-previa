import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Award, ShieldCheck, Heart, Menu, X, Users } from "lucide-react";
import { Hero } from "./components/Hero";
import { Courses } from "./components/Courses";
import { Diferenciais } from "./components/Diferenciais";
import { Galeria } from "./components/Galeria";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { EnrollForm } from "./components/EnrollForm";
import { AdminHub } from "./components/AdminHub";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [isAdminVisible, setIsAdminVisible] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCourse = (courseName: string) => {
    setSelectedCourse(courseName);
    handleScrollToSection("inscricao");
  };

  return (
    <main className="min-h-screen bg-[#f5f5f7] text-zinc-900 flex flex-col relative font-sans antialiased selection:bg-amber-500/30 selection:text-black overflow-x-hidden" id="elite-academy-home">
      
      {/* Immersive Scroll-Responsive Scissors Background Layer (Grey/White scissor image cascading down) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ minHeight: "100%" }}>
        
        {/* We place multiple scissor instances throughout the depth of the document, each falling dynamically with scroll */}
        <div 
          className="absolute right-[-80px] sm:right-[3%] top-[5%] w-[240px] sm:w-[480px] transition-transform duration-75 ease-out opacity-[0.22]"
          style={{
            transform: `translateY(${scrollY * 0.45}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <img 
            src="/src/assets/images/barber_scissors_background_1781667425614.jpg" 
            alt="Desenho de tesoura de elite" 
            className="w-full h-auto rounded-3xl shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="absolute left-[-80px] sm:left-[3%] top-[22%] w-[200px] sm:w-[400px] transition-transform duration-100 ease-out opacity-[0.24]"
          style={{
            transform: `translateY(${scrollY * 0.52}px) rotate(${-scrollY * 0.04 + 40}deg)`,
          }}
        >
          <img 
            src="/src/assets/images/barber_scissors_background_1781667425614.jpg" 
            alt="Fundo de tesoura" 
            className="w-full h-auto rounded-3xl shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="absolute right-[-80px] sm:right-[5%] top-[40%] w-[220px] sm:w-[440px] transition-transform duration-75 ease-out opacity-[0.22]"
          style={{
            transform: `translateY(${scrollY * 0.35}px) rotate(${scrollY * 0.03 - 25}deg)`,
          }}
        >
          <img 
            src="/src/assets/images/barber_scissors_background_1781667425614.jpg" 
            alt="Desenho de tesoura de elite" 
            className="w-full h-auto rounded-3xl shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="absolute left-[-90px] sm:left-[4%] top-[60%] w-[210px] sm:w-[420px] transition-transform duration-150 ease-out opacity-[0.25]"
          style={{
            transform: `translateY(${scrollY * 0.42}px) rotate(${scrollY * 0.025 + 15}deg)`,
          }}
        >
          <img 
            src="/src/assets/images/barber_scissors_background_1781667425614.jpg" 
            alt="Fundo de tesoura profissional" 
            className="w-full h-auto rounded-3xl shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="absolute right-[-80px] sm:right-[4%] top-[80%] w-[230px] sm:w-[460px] transition-transform duration-75 ease-out opacity-[0.22]"
          style={{
            transform: `translateY(${scrollY * 0.48}px) rotate(${-scrollY * 0.03 - 10}deg)`,
          }}
        >
          <img 
            src="/src/assets/images/barber_scissors_background_1781667425614.jpg" 
            alt="Tesouro em queda livre" 
            className="w-full h-auto rounded-3xl shadow-xl grayscale"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Extreme Luxury Transparent Header / Navigation (Glassmorphism Light) */}
      <header className="fixed top-0 inset-x-0 h-20 bg-white/80 backdrop-blur-md border-b border-zinc-200/80 z-40 flex items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto w-full">
        
        {/* Brand Logo Group */}
        <div 
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => handleScrollToSection("hero")}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-zinc-200 flex items-center justify-center shrink-0 shadow-lg bg-black">
            <img 
              src="/src/assets/images/sweet_smart_logo_1781292242562.jpg" 
              alt="Treinamento de Elite Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="text-left font-sans">
            <p className="text-xs font-black text-zinc-950 uppercase tracking-[0.12em] leading-none mb-0.5">Treinamento de Elite</p>
            <span className="text-[8px] font-black uppercase text-amber-500 tracking-[0.18em]">para barbeiros</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-extrabold uppercase tracking-widest text-zinc-500">
          <button onClick={() => handleScrollToSection("cursos")} className="hover:text-amber-500 transition cursor-pointer">Cursos</button>
          <button onClick={() => handleScrollToSection("diferenciais")} className="hover:text-amber-500 transition cursor-pointer">Diferenciais</button>
          <button onClick={() => handleScrollToSection("galeria")} className="hover:text-amber-500 transition cursor-pointer">Galeria</button>
          <button onClick={() => handleScrollToSection("depoimentos")} className="hover:text-amber-500 transition cursor-pointer">Depoimentos</button>
          <button onClick={() => handleScrollToSection("planos")} className="hover:text-amber-500 transition cursor-pointer">Planos</button>
          
          {/* Secret/Review Candidates Tab Button */}
          <button 
            onClick={() => setIsAdminVisible(!isAdminVisible)} 
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-[9px] uppercase tracking-wider transition cursor-pointer ${
              isAdminVisible 
                ? "bg-amber-500/10 border-amber-500 text-amber-600" 
                : "bg-zinc-100 border-zinc-200 text-zinc-550 hover:text-zinc-800"
            }`}
          >
            <Users className="w-3 h-3 text-amber-600" />
            <span>Painel Admissões</span>
          </button>
        </nav>

        {/* CTA Top Button */}
        <div className="hidden md:block">
          <button 
            onClick={() => handleScrollToSection("inscricao")}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black text-[10px] font-black uppercase tracking-widest transition cursor-pointer shadow-lg shadow-amber-500/5 hover:scale-[1.02]"
          >
            Admissão
          </button>
        </div>

        {/* Mobile Header Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsAdminVisible(!isAdminVisible)} 
            className={`p-1 px-2.5 rounded-md border text-[9px] transition ${
              isAdminVisible 
                ? "bg-amber-500/10 border-amber-550 text-amber-600" 
                : "bg-zinc-100 border-zinc-200 text-zinc-650"
            }`}
            title="Admissions"
          >
            Leads
          </button>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-650 bg-zinc-100 border border-zinc-200 rounded"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </header>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 inset-8 bg-zinc-950/95 border border-zinc-850 z-30 p-6 rounded-2xl flex flex-col justify-between animate-fade-in text-left">
          <div className="space-y-6 flex flex-col text-sm uppercase font-bold tracking-widest text-zinc-300">
            <button onClick={() => handleScrollToSection("cursos")} className="hover:text-amber-400 transition cursor-pointer py-1.5 text-left border-b border-zinc-900">Cursos</button>
            <button onClick={() => handleScrollToSection("diferenciais")} className="hover:text-amber-400 transition cursor-pointer py-1.5 text-left border-b border-zinc-900">Diferenciais</button>
            <button onClick={() => handleScrollToSection("galeria")} className="hover:text-amber-400 transition cursor-pointer py-1.5 text-left border-b border-zinc-900">Galeria</button>
            <button onClick={() => handleScrollToSection("depoimentos")} className="hover:text-amber-400 transition cursor-pointer py-1.5 text-left border-b border-zinc-900">Depoimentos</button>
            <button onClick={() => handleScrollToSection("planos")} className="hover:text-amber-400 transition cursor-pointer py-1.5 text-left border-b border-zinc-900">Planos</button>
          </div>

          <button 
            onClick={() => handleScrollToSection("inscricao")}
            className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 text-black text-xs font-black uppercase tracking-widest rounded-xl transition cursor-pointer"
          >
            Solicitar Admissão Vaga
          </button>
        </div>
      )}

      {/* SECRET ADMIN PANEL TOGGLED DRAWER (VIP Central Hub) */}
      {isAdminVisible && (
        <div className="pt-24 px-4 sm:px-6 max-w-6xl mx-auto w-full z-30" id="admissions-panel-view">
          <div className="relative">
            <button 
              onClick={() => setIsAdminVisible(false)}
              className="absolute -top-3 right-3 text-xxs font-black uppercase bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 p-1 px-2.5 rounded-lg text-amber-500 z-10 hover:border-amber-500/20"
            >
              Fechar Painel [X]
            </button>
            <AdminHub />
          </div>
        </div>
      )}

      {/* Main Sections flow Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto overflow-hidden">
        
        {/* PARALLAX HERO SECTION */}
        <Hero onEnrollClick={() => handleScrollToSection("inscricao")} />

        {/* PROGRAMS & COURSES INGRID CRITICAL VIEW */}
        <Courses onSelectCourse={handleSelectCourse} />

        {/* PILLARS OF PRESTIGE */}
        <Diferenciais />

        {/* INTERACTIVE GALLERY & ROTATIONAL SIMULATION LAB */}
        <Galeria />

        {/* SUCCESS CAROUSEL TESTIMONIALS */}
        <Testimonials />

        {/* EXECUTIVE PLANS & PRICES */}
        <Pricing onSelectPlan={(plan) => handleSelectCourse(plan)} />

        {/* EMBEDDED CONCIERGE ADMISSIONS FORM */}
        <EnrollForm preSelectedCourse={selectedCourse} />

      </div>

      {/* MINIMALIST LUXE FOOTER */}
      <Footer />

    </main>
  );
}
