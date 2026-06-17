import React, { useState } from "react";
import { Clock, GraduationCap, ChevronRight, CheckCircle, Flame, Star } from "lucide-react";
import { Course } from "../types";

// Explicit courses mapping using the 2 generated backview haircut photos
const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Masterclass Design Artístico",
    tagline: "Desenhos Criativos, riscos modernos e Hair Tattoo",
    duration: "40 Horas de Treinamento",
    intensity: "Prática Total em Modelos Reais",
    price: "R$ 2.450,00 ou 12x de R$ 245,00",
    imageUrl: "/src/assets/images/backview_haircut_1_1781666070529.jpg",
    description: "Aprenda do zero a fazer os desenhos e riscos mais pedidos nas barbearias hoje em dia, como riscos retos, setas e degradês sombreados perfeitos com navalha e máquina.",
    features: [
      "Como desenhar riscos retos e perfeitos",
      "Uso correto e seguro de máquinas de acabamento e navalhas",
      "Como fazer sombreados incríveis no corte",
      "Técnicas fáceis de tintura para destacar os riscos",
      "Acompanhamento de perto pelo professor durante todo o treino"
    ],
    curriculum: [
      "Módulo 1: Como segurar a máquina e planejar o desenho",
      "Módulo 2: Como usar a navalha sem machucar e com precisão",
      "Módulo 3: Degradê escuro e claro para dar contraste",
      "Módulo 4: Aplicação de cor para realçar os riscos e finalizações",
      "Módulo 5: Teste prático completo em modelo real com ajuda do tutor"
    ]
  },
  {
    id: "course-2",
    title: "Masterclass de Degradê & Corte Moderno",
    tagline: "Aprenda o Degradê sem marcas e os Cortes mais famosos do momento",
    duration: "60 Horas de Treinamento",
    intensity: "Especialização Avançada",
    price: "R$ 3.100,00 ou 12x de R$ 310,00",
    imageUrl: "/src/assets/images/backview_haircut_2_1781666087834.jpg",
    description: "Domine de uma vez por todas o degradê perfeito (Fade) e os cortes modernos de tesoura. Aprenda a avaliar o tipo de rosto de cada cliente para indicar o melhor visual com facilidade.",
    features: [
      "Como escolher o corte certo para cada formato de rosto",
      "Degradê limpo e sem nenhuma marca da máquina (Skin Fade)",
      "Como cortar com a tesoura por cima sem deixar marcas ou bicos",
      "Penteados modernos com pomadas e uso correto do secador",
      "Como divulgar seu trabalho no Instagram e cobrar mais caro pelo corte"
    ],
    curriculum: [
      "Módulo 1: Formatos de rosto e cabeças de treino",
      "Módulo 2: Divisões corretas e controle seguro da tesoura",
      "Módulo 3: Transição perfeita do degradê (efeito limpo)",
      "Módulo 4: Secador, pomadas e escovação profissional",
      "Módulo 5: Como tirar fotos incríveis e postar no Instagram"
    ]
  }
];

interface CoursesProps {
  onSelectCourse: (courseTitle: string) => void;
}

export function Courses({ onSelectCourse }: CoursesProps) {
  const [activeDetails, setActiveDetails] = useState<string | null>(null);

  const toggleDetails = (courseId: string) => {
    setActiveDetails(activeDetails === courseId ? null : courseId);
  };

  return (
    <section id="cursos" className="py-24 sm:py-32 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative text-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-650 text-xxs font-black tracking-widest uppercase">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>Formações Acadêmicas Exclusivas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none">
            Nossos Programas <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Mestres</span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed">
            Nossos treinamentos são focados em prática real e cortes modernos. Sem enrolação e sem segredos. Você aprende a teoria e já aplica na prática tudo o que aprendeu.
          </p>
        </div>

        {/* 2-Column Courses Grid (ONLY using 2 haircut photos we generated to respect strict user rules!) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {COURSES.map((course) => {
            const isDetailed = activeDetails === course.id;
            return (
              <div 
                key={course.id}
                className="group relative bg-white/90 border border-zinc-200 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:border-amber-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] text-left flex flex-col justify-between"
              >
                {/* Course Banner Image Box */}
                <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden bg-zinc-100 border-b border-zinc-200">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent z-10" />
                  <img 
                    src={course.imageUrl} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badges */}
                  <span className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded-md bg-white/90 border border-zinc-200 text-[10px] font-extrabold uppercase text-amber-600 tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Flame className="w-3 h-3 text-amber-500 animate-pulse" />
                    Elite {course.id === "course-1" ? "Design" : "Fade Master"}
                  </span>

                  <span className="absolute bottom-4 right-4 z-20 px-2.5 py-1 rounded-md bg-black/80 text-[10px] font-bold text-white tracking-wide">
                    {course.duration}
                  </span>
                </div>

                {/* Card Interior */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-amber-600 text-[10px] font-bold tracking-widest uppercase">
                      <Star className="w-3.5 h-3.5 fill-amber-500/20 text-amber-500" />
                      <span>{course.intensity}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight group-hover:text-amber-600 transition duration-300">
                      {course.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="py-4 border-t border-zinc-200 space-y-2">
                    {course.features.slice(0, 3).map((feat, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-zinc-700 font-normal">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Display */}
                  <div className="bg-amber-500/5 rounded-2xl p-4 border border-amber-500/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-zinc-500 font-bold">Investimento Acadêmico</span>
                      <p className="text-xs sm:text-sm font-black text-zinc-950 tracking-tight">{course.price}</p>
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-extrabold uppercase bg-amber-500/10 text-amber-600 rounded-md border border-amber-500/20">
                      Material Incluso
                    </span>
                  </div>

                  {/* Collapsible Syllabus/Curriculum section */}
                  {isDetailed && (
                    <div className="mt-4 pt-4 border-t border-zinc-200 space-y-3 animate-fade-in text-left">
                      <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Grade Curricular do Curso:</p>
                      <ul className="space-y-1.5">
                        {course.curriculum.map((item, index) => (
                          <li key={index} className="text-xxs sm:text-xs text-zinc-650 flex items-start gap-2 leading-relaxed">
                            <span className="text-amber-500 font-black shrink-0">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Card Action Controls */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <button
                      onClick={() => toggleDetails(course.id)}
                      className="py-3 px-4 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-[10px] font-black uppercase text-zinc-700 tracking-wider transition cursor-pointer text-center"
                    >
                      {isDetailed ? "Ocultar Grade" : "Ver Grade"}
                    </button>
                    
                    <button
                      onClick={() => onSelectCourse(course.title)}
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 font-black text-[10px] uppercase text-black tracking-widest transition cursor-pointer text-center hover:shadow-[0_0_15px_rgba(245,158,11,0.25)] flex items-center justify-center gap-1.5"
                    >
                      <span>Quero Fazer</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
