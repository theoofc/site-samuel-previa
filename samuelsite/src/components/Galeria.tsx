import React, { useState, useRef } from "react";
import { Play, Eye, Maximize2, Compass, RotateCcw, Video, Upload, Trash2, ShieldCheck, Film } from "lucide-react";

export function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  
  // Interactive 3D Rotation simulation variables
  const [rotationFrame, setRotationFrame] = useState(180); // 0 to 365 degrees
  // Before / After slider state
  const [befAfterSplit, setBefAfterSplit] = useState(50); // 0 to 100 percentage split

  // Pre-configured and uploaded files list (Client-side localized state)
  const [customMedia, setCustomMedia] = useState<{ id: string; url: string; type: "image" | "video"; title: string; student: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload handler which loads actual files natively using object URLs
  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const newMedia = Array.from(files).map((file: any, index) => {
      const type = file.type.startsWith("video") ? "video" : "image";
      return {
        id: `media-${Date.now()}-${index}`,
        url: URL.createObjectURL(file),
        type: type as "image" | "video",
        title: file.name.split(".")[0].substring(0, 30),
        student: "Enviado por Você"
      };
    });
    setCustomMedia((prev) => [...prev, ...newMedia]);
  };

  const handleMediaDelete = (id: string) => {
    setCustomMedia((prev) => prev.filter((item) => item.id !== id));
  };

  // Predefined high-end photos
  const PHOTOS = [
    {
      url: "/src/assets/images/sweet_smart_logo_1781292242562.jpg",
      title: "Logo Oficial de Elite",
      student: "Identidade Visual de Prestígio",
      desc: "Logomarca oficial enviada pelo administrador para o treinamento de barbeiros."
    },
    {
      url: "/src/assets/images/backview_haircut_1_1781666070529.jpg",
      title: "Design Relâmpago 3D (Hair Tattoo)",
      student: "Por: Aluno Elite Lucas M.",
      desc: "Lâmina cirúrgica e fade milimétrico criativo."
    },
    {
      url: "/src/assets/images/backview_haircut_2_1781666087834.jpg",
      title: "Alta Escultura & Conexão de Contorno",
      student: "Por: Alunas Elite Beatriz S. e Julia F.",
      desc: "Finalização fumaça texturizada e navalha afiada."
    }
  ];

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative text-zinc-900">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/5 border border-amber-500/20 text-amber-500 text-xxs font-black tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Portfólio de Alta Definição</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none animate-fade-in">
            Trabalhos <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Reais e Mídias</span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed">
            Veja as fotos e vídeos enviados. Abaixo, você também pode anexar vídeos e fotos diretamente do seu celular ou computador para testes de visualização instantânea!
          </p>
        </div>

        {/* Outer Grid: Photo Gallery & Interactive Video/Rotational Simulators */}
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Photo Works - Strictly limited to these 3 generated/uploaded images */}
          <div className="md:col-span-6 space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-black uppercase text-amber-500 tracking-widest text-left flex items-center gap-2">
                <span>●</span> Galeria de Portfólio Inicial
              </h3>
              <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-wider">3 Itens Oficiais</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
              {PHOTOS.map((photo, index) => (
                <div 
                  key={index}
                  className="group relative bg-[#0e0e11] border border-zinc-900 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-500/20 transition duration-300 flex flex-col sm:flex-row shadow-lg"
                  onClick={() => setSelectedPhoto(photo.url)}
                >
                  <div className="aspect-square w-full sm:w-44 relative overflow-hidden shrink-0 bg-black">
                    <img 
                      src={photo.url} 
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Inspect Mask */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                      <div className="w-9 h-9 rounded-full bg-amber-500 text-black flex items-center justify-center hover:scale-110 transition">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Texts - Refined Typography with High contrast */}
                  <div className="p-5 flex-1 flex flex-col justify-center text-left space-y-1">
                    <p className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest leading-none">{photo.student}</p>
                    <h4 className="text-sm font-bold text-white uppercase tracking-tight">{photo.title}</h4>
                    <p className="text-xxs sm:text-xs text-zinc-400 font-light leading-relaxed">{photo.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality Statement Box */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850 text-left space-y-2">
              <span className="text-[10px] font-black uppercase text-amber-400">Garantia de Ensino de Elite</span>
              <p className="text-xxs sm:text-xs text-zinc-400 font-light leading-relaxed">
                Nossos alunos são estimulados a documentar seus cortes em alta resolução sob a mentoria de iluminação editorial do nosso próprio estúdio, capacitando eles a criarem portfólios profissionais de prestígio antes mesmo da formatura.
              </p>
            </div>
          </div>

          {/* RIGHT: Video and Interactive Rotation/Before-After Lab */}
          <div className="md:col-span-6 space-y-8">
            <h3 className="text-xs font-black uppercase text-amber-505 tracking-widest text-left flex items-center gap-2">
              <span>●</span> Vídeos e Interatividades Realistas
            </h3>

            {/* TAB INTERACTIVE 1: Main High-End Barbering Video Player (Real streaming) */}
            <div className="bg-zinc-900/60 border border-zinc-850 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-amber-500" />
                  <h4 className="text-sm font-black text-white uppercase tracking-wider">Demonstração de Vídeo Prático</h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-amber-500/15 text-amber-400 border border-amber-500/20">
                  Player HD
                </span>
              </div>

              <p className="text-xxs text-zinc-400 font-light text-left">
                Assista à agilidade cirúrgica da finalização de corte e corte artístico ensinado em nossos laboratórios práticos.
              </p>

              {/* HTML5 high quality video node */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 bg-black shadow-inner">
                <video 
                  src="https://assets.mixkit.co/videos/preview/mixkit-barber-cutting-the-hair-of-a-man-with-clippers-42261-large.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                  poster="/src/assets/images/hero_background_1781666034767.jpg"
                  playsInline
                  loop
                />
              </div>
            </div>

            {/* TAB INTERACTIVE 2: Dynamic Before & After Beard / Hair Cut Transformer */}
            <div className="bg-zinc-900/60 border border-zinc-850 rounded-2xl p-5 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="px-2 py-0.5 rounded text-[8px] font-extrabold uppercase bg-red-500/10 text-red-400 border border-red-500/20">
                    TRANSFORMAÇÃO
                  </span>
                  <h4 className="text-sm font-black text-white uppercase tracking-wider mt-1">Antes & Depois Interativo</h4>
                </div>
                <Video className="w-4 h-4 text-zinc-550" />
              </div>

              <p className="text-xxs text-zinc-400 font-light select-none text-left">
                Arraste o controle deslizante para comparar o antes e depois do corte de cabelo e degradê.
              </p>

              {/* Before/After Split Container */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 select-none">
                
                {/* AFTER IMAGE (Background) */}
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src="/src/assets/images/backview_haircut_2_1781666087834.jpg" 
                    alt="Depois da Transformação" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 right-3 text-[9px] uppercase tracking-widest font-black text-amber-400 bg-black/70 px-2 py-1 rounded">
                    Depois
                  </span>
                </div>

                {/* BEFORE IMAGE (Foreground split cliped) */}
                <div 
                  className="absolute inset-y-0 left-0 h-full overflow-hidden"
                  style={{ width: `${befAfterSplit}%` }}
                >
                  <img 
                    src="/src/assets/images/hero_background_1781666034767.jpg" 
                    alt="Antes da Transformação" 
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: "100%", height: "100%", transform: "scale(1.2)" }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-widest font-black text-zinc-400 bg-black/70 px-2 py-1 rounded">
                    Antes (Modelo)
                  </span>
                </div>

                {/* Custom Split Line separator */}
                <div 
                  className="absolute inset-y-0 w-1.5 bg-amber-500/80 cursor-ew-resize flex items-center justify-center transform -translate-x-1/2"
                  style={{ left: `${befAfterSplit}%` }}
                >
                  <div className="w-5 h-5 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center shadow-lg">
                    <span className="text-[7px] text-black font-black">↔</span>
                  </div>
                </div>

                {/* Drag event overlay */}
                <input 
                  type="range"
                  min="0"
                  max="100"
                  value={befAfterSplit}
                  onChange={(e) => setBefAfterSplit(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
                />
              </div>
            </div>

          </div>
        </div>

        {/* NEW SECTION: EXPERIMENTAL WORKSPACE MEDIA UPLOADER (Enables upload of real photos & videos in the browser!) */}
        <div className="bg-[#0c0c0f] border border-zinc-900 rounded-3xl p-6 sm:p-8 text-left space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-900 pb-5">
            <div className="space-y-1">
              <span className="text-[9px] uppercase tracking-widest font-black text-amber-500 flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-amber-500" />
                <span>Central de Teste e Exibição de Clientes</span>
              </span>
              <h3 className="text-xl font-black text-white uppercase tracking-tight">
                Anexe Suas Próprias Fotos e Vídeos de Barba e Cortes
              </h3>
              <p className="text-xxs sm:text-xs text-zinc-400 leading-relaxed font-light">
                Quer ver no painel as fotos e mídias de alta definição que salvou? Selecione os arquivos abaixo para que eles carreguem imediatamente dentro do layout dinâmico do aplicativo.
              </p>
            </div>

            <button 
              onClick={() => fileInputRef.current?.click()}
              className="px-5 py-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black text-[10px] font-black uppercase tracking-widest rounded-xl transition cursor-pointer flex items-center gap-2"
            >
              <Upload className="w-4 h-4 text-black" />
              <span>Selecionar Arquivos</span>
            </button>
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*,video/*" 
              multiple 
              onChange={handleMediaUpload}
            />
          </div>

          {/* Render of custom uploaded images and videos */}
          {customMedia.length === 0 ? (
            <div className="py-12 border-2 border-dashed border-zinc-900 rounded-2xl flex flex-col items-center justify-center space-y-2 text-zinc-650 text-xs">
              <Video className="w-8 h-8 text-zinc-800 animate-pulse" />
              <p className="font-light">Seus arquivos de mídia adicionados aparecerão aqui em tempo real.</p>
              <p className="text-[10px] text-zinc-700">Formatos aceitos: MP4, MOV, JPG, PNG e WebP</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {customMedia.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-zinc-900/40 border border-zinc-850 rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                    {item.type === "video" ? (
                      <video src={item.url} controls className="w-full h-full object-cover" preload="metadata" />
                    ) : (
                      <div 
                        className="w-full h-full cursor-pointer overflow-hidden relative group"
                        onClick={() => setSelectedPhoto(item.url)}
                      >
                        <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                          <Eye className="w-5 h-5 text-amber-500" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-4 flex items-center justify-between gap-3 text-xs">
                    <div className="text-left truncate space-y-0.5">
                      <p className="text-[9px] uppercase tracking-widest font-mono text-amber-500 font-bold">{item.student}</p>
                      <h5 className="font-bold text-white truncate text-xxs sm:text-xs" title={item.title}>
                        {item.title}
                      </h5>
                    </div>

                    <button 
                      onClick={() => handleMediaDelete(item.id)}
                      className="p-2 bg-zinc-950 hover:bg-red-500/10 border border-zinc-850 hover:border-red-500/20 text-zinc-500 hover:text-red-400 rounded-lg transition"
                      title="Excluir Mídia"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* MODAL: Large Photo Overlay Viewer */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl max-h-screen relative">
            <button className="absolute -top-10 right-0 text-white text-xs font-black uppercase tracking-wider bg-zinc-900 border border-zinc-800 p-2 rounded-lg cursor-pointer">
              Fechar [X]
            </button>
            <img 
              src={selectedPhoto} 
              alt="Ampliada" 
              className="max-w-full max-h-[80vh] rounded-2xl object-contain border border-zinc-800 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

    </section>
  );
}

