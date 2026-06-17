import React, { useState, useEffect } from "react";
import { Users, Search, Calendar, ShieldCheck, Mail, Phone, BookOpen, AlertCircle, RefreshCw, Layers } from "lucide-react";
import { LeadSubmission } from "../types";

export function AdminHub() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterCourse, setFilterCourse] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    setErrorMsg("");
    try {
      const response = await fetch("/api/leads");
      const data = await response.json();
      if (response.ok && data.success) {
        setLeads(data.leads || []);
      } else {
        setErrorMsg("Erro ao recuperar candidaturas do servidor.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("O servidor de banco de dados de leads está offline.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesCourse = filterCourse === "all" || lead.selectedCourse.includes(filterCourse) || (filterCourse === "Residência" && lead.selectedCourse.includes("Residência"));
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      lead.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
      lead.phone.includes(searchQuery);
    return matchesCourse && matchesSearch;
  });

  return (
    <div className="bg-zinc-900/60 border border-zinc-850 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative space-y-6">
      
      {/* Dashboard Mini Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-850 pb-5 text-left">
        <div className="space-y-1">
          <span className="text-[9px] uppercase tracking-widest font-black text-amber-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Painel de Admissões de Luxo [Central Reservada]</span>
          </span>
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            Banco de Candidatos Admissíveis
          </h3>
        </div>

        <button 
          onClick={fetchLeads}
          disabled={loading}
          className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 text-[10px] font-black uppercase tracking-wider rounded-xl transition cursor-pointer flex items-center gap-1.5 self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>Sincronizar Banco</span>
        </button>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xxs text-red-400 text-left flex items-center gap-2">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Filter and Search actions bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Course Filter selector */}
        <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-1.5 px-3 flex items-center gap-2 text-xs">
          <span className="text-[10px] text-zinc-500 uppercase font-black tracking-wider">Curso:</span>
          <select 
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="bg-transparent text-zinc-300 focus:outline-none cursor-pointer w-full"
          >
            <option value="all">Todos os Programas</option>
            <option value="Coiffeur d'Art">Coiffeur d'Art</option>
            <option value="Haute Sculpture">Haute Sculpture</option>
            <option value="Residência">Residência Elite Full</option>
          </select>
        </div>

        {/* Text queries */}
        <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-1.5 px-3 flex items-center gap-2 text-xs sm:col-span-2">
          <Search className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar por nome, telefone ou e-mail..."
            className="bg-transparent text-white focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Candidates List Render */}
      <div className="space-y-3.5">
        
        {loading && leads.length === 0 ? (
          <div className="py-12 text-zinc-550 text-xs text-center font-light">
            Recuperando dados seguros dos candidatos...
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="py-12 text-zinc-550 text-xs text-center border-2 border-dashed border-zinc-850 rounded-2xl font-light">
            Nenhuma candidatura registrada correspondente aos filtros.
          </div>
        ) : (
          <div className="grid gap-3">
            {filteredLeads.map((lead) => (
              <div 
                key={lead.id}
                className="bg-zinc-950/80 border border-zinc-850 rounded-2xl p-4 sm:p-5 text-left relative space-y-3 hover:border-zinc-700 transition"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-2.5">
                  <div>
                    <h4 className="text-xs sm:text-sm font-black text-white uppercase">{lead.fullName}</h4>
                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">{lead.id}</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[8px] font-extrabold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20 self-start sm:self-auto">
                    Aguardando Contato
                  </span>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xxs sm:text-xs">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{lead.email}</span>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400">
                    <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span>{lead.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-400">
                    <BookOpen className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate font-semibold text-white">{lead.selectedCourse}</span>
                  </div>
                </div>

                {/* Candidate selection motivation notes if exists */}
                {lead.notes && (
                  <div className="p-3 bg-zinc-900/40 border border-zinc-900 rounded-xl text-xxs text-zinc-450 italic mt-2 leading-relaxed">
                    " {lead.notes} "
                  </div>
                )}

                {/* Time stamp */}
                <div className="flex justify-between items-center text-[9px] text-zinc-600 font-mono mt-1">
                  <span>Inscrito em: {new Date(lead.submittedAt).toLocaleString("pt-BR")}</span>
                  <span className="uppercase text-amber-500/60 font-bold">Inscrição Direta</span>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}
