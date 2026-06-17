import React from "react";
import { Award, Instagram, Youtube, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-zinc-200 px-6 py-12 sm:py-16 text-zinc-600">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 sm:gap-12 items-start text-left">
        
        {/* Brand Column */}
        <div className="space-y-4 md:col-span-1.5" id="footer-brand-col">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-zinc-200 flex items-center justify-center shrink-0 shadow-md bg-black">
              <img 
                src="/src/assets/images/sweet_smart_logo_1781292242562.jpg" 
                alt="Logo elite" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <p className="text-xs font-black text-zinc-950 uppercase tracking-widest">Treinamento de Elite</p>
              <span className="text-[8px] font-black uppercase text-amber-500 tracking-wider">para barbeiros</span>
            </div>
          </div>
          
          <p className="text-xxs sm:text-xs text-zinc-550 leading-relaxed font-normal">
            O centro educacional líder em formação profissional de barbeiros de alta performance, cortes modernos e práticos. Elevando sua barbearia ao nível de elite.
          </p>
        </div>

        {/* Links Navigation column */}
        <div className="space-y-4" id="footer-links-col">
          <h4 className="text-[10px] font-black uppercase text-zinc-950 tracking-widest">Explorar Academia</h4>
          <ul className="space-y-2 text-xxs sm:text-xs font-normal">
            <li><a href="#hero" className="hover:text-amber-500 transition">Início / Topo</a></li>
            <li><a href="#cursos" className="hover:text-amber-500 transition">Formações Mestre</a></li>
            <li><a href="#diferenciais" className="hover:text-amber-500 transition">Diferenciais Elite</a></li>
            <li><a href="#galeria" className="hover:text-amber-400 transition">Galeria de Resultados</a></li>
            <li><a href="#depoimentos" className="hover:text-amber-400 transition">Depoimentos Alunos</a></li>
          </ul>
        </div>

        {/* Location column */}
        <div className="space-y-4" id="footer-location-col">
          <h4 className="text-[10px] font-black uppercase text-zinc-950 tracking-widest">Sede Central</h4>
          <p className="text-xxs sm:text-xs text-zinc-550 leading-relaxed font-normal">
            Rua Oscar Freire, 1024 - Jardins<br />
            São Paulo - SP, CEP 01426-001<br />
            Telefone: (11) 3088-7700
          </p>
          <div className="flex gap-3 text-zinc-500 pt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition" title="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="hover:text-amber-500 transition" title="WhatsApp Concierge">
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Security / Accreditation Column */}
        <div className="space-y-4" id="footer-legal-col">
          <h4 className="text-[10px] font-black uppercase text-zinc-950 tracking-widest">Credenciamento</h4>
          <div className="p-4 bg-white/80 border border-zinc-200 rounded-xl space-y-1.5">
            <p className="text-[9px] font-black uppercase text-amber-600 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Selo Elite</span>
            </p>
            <p className="text-[9.5px] text-zinc-550 leading-normal font-normal">
              Curso profissional livre com conformidade técnica de corte sob certificação nacional homologada pelo Treinamento de Elite.
            </p>
          </div>
        </div>

      </div>

      {/* Sub Footer details */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-zinc-200 text-xxs sm:text-xs text-zinc-500 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© 2026 Treinamento de Elite para Barbeiros S/A. Todos os direitos reservados. CNPJ 12.345.678/0001-90.</p>
        <p className="font-mono text-[9px] tracking-widest uppercase">
          Projetado com excelência por <span className="text-amber-500">Elite Creative</span>
        </p>
      </div>

    </footer>
  );
}
