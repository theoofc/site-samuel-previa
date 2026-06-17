import React, { useState } from "react";
import { Sparkles, ArrowRight, User, Mail, Phone, BookOpen, AlertCircle, FileText, CheckCircle2, Ticket } from "lucide-react";

interface EnrollFormProps {
  preSelectedCourse?: string;
}

export function EnrollForm({ preSelectedCourse = "" }: EnrollFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseChoice, setCourseChoice] = useState(preSelectedCourse || "Masterclass Design Artístico");
  const [notes, setNotes] = useState("");
  
  // Status and feedback states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successLead, setSuccessLead] = useState<any | null>(null);

  // Sync state if pre-selected course shifts
  React.useEffect(() => {
    if (preSelectedCourse) {
      setCourseChoice(preSelectedCourse);
    }
  }, [preSelectedCourse]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessLead(null);

    if (!fullName.trim() || !email.trim() || !phone.trim() || !courseChoice) {
      setErrorMsg("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          selectedCourse: courseChoice,
          notes
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSuccessLead(data.lead);
        // Clear form
        setFullName("");
        setEmail("");
        setPhone("");
        setNotes("");
      } else {
        setErrorMsg(data.message || "Ocorreu um erro ao enviar sua inscrição.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("O servidor de inscrições está temporariamente offline. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inscricao" className="py-24 bg-transparent border-t border-zinc-200 px-4 sm:px-6 relative text-zinc-900">
      {/* Background radial glow */}
      <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Section title */}
        <div className="text-center space-y-4">
          <span className="text-amber-600 text-xxs font-black tracking-widest uppercase px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 inline-block">
             ✉ Inscrições Abertas
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-zinc-950 uppercase tracking-tight leading-none">
            Garanta Sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Vaga</span>
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-650 font-normal leading-relaxed">
            Como limitamos nossas salas a apenas <strong>12 alunos por turma</strong> para garantir atenção total do professor, preencha seus dados para reservar sua vaga.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left panel instructions */}
          <div className="md:col-span-5 text-left space-y-6">
            <h3 className="text-sm font-black uppercase text-amber-600 tracking-wider">Como funciona o cadastro?</h3>
            
            {/* Steps list */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-amber-600 text-xs font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wide">Envio dos Dados</h4>
                  <p className="text-[11px] text-zinc-600 leading-relaxed font-normal mt-1">Preencha o formulário ao lado com suas informações de contato.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-amber-600 text-xs font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wide">Contato por WhatsApp</h4>
                  <p className="text-[11px] text-zinc-600 leading-relaxed font-normal mt-1">Nossa equipe entrará em contato via WhatsApp nas próximas 24 horas para tirar todas as suas dúvidas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 text-amber-600 text-xs font-black flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wide">Início do Treinamento</h4>
                  <p className="text-[11px] text-zinc-600 leading-relaxed font-normal mt-1">Tudo pronto! Com a inscrição confirmada, você já garante seu espaço na próxima turma.</p>
                </div>
              </div>
            </div>

            {/* Quote container */}
            <div className="p-5 rounded-2xl bg-white/80 border border-zinc-250 space-y-1 pt-6 text-[11px] text-zinc-650">
              <span className="text-[8px] font-black uppercase tracking-widest text-amber-600 block mb-1">Garantia Elite</span>
              "O aprendizado prático em modelos reais é a forma mais rápida de se tornar um barbeiro de sucesso."
            </div>
          </div>

          {/* Right panel: React Form */}
          <div className="md:col-span-7 bg-white/80 border border-zinc-200 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative">
            
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-2.5 text-xs text-red-500 text-left">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 animate-bounce" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Full name input */}
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase tracking-wider text-zinc-550 font-extrabold flex items-center gap-1">
                  <User className="w-3 h-3 text-amber-600" />
                  <span>Nome Completo *</span>
                </label>
                <input 
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="w-full bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 focus:border-amber-500 focus:outline-none rounded-xl p-3 text-xs text-zinc-900 transition font-sans"
                />
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-wider text-zinc-550 font-extrabold flex items-center gap-1">
                    <Mail className="w-3 h-3 text-amber-600" />
                    <span>E-mail *</span>
                  </label>
                  <input 
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@exemplo.com"
                    className="w-full bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 focus:border-amber-500 focus:outline-none rounded-xl p-3 text-xs text-zinc-900 transition font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] uppercase tracking-wider text-zinc-550 font-extrabold flex items-center gap-1">
                    <Phone className="w-3 h-3 text-amber-600" />
                    <span>WhatsApp / Celular *</span>
                  </label>
                  <input 
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(11) 99999-8888"
                    className="w-full bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 focus:border-amber-500 focus:outline-none rounded-xl p-3 text-xs text-zinc-900 transition font-sans"
                  />
                </div>
              </div>

              {/* Program Choice Dropdown */}
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase tracking-wider text-zinc-550 font-extrabold flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-amber-600" />
                  <span>Escolha o Curso de Interesse *</span>
                </label>
                <select
                  value={courseChoice}
                  onChange={(e) => setCourseChoice(e.target.value)}
                  className="w-full bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 focus:border-amber-500 focus:outline-none rounded-xl p-3 text-xs text-zinc-800 transition cursor-pointer font-sans"
                >
                  <option value="Masterclass Design Artístico">Masterclass Design Artístico (Corte Artístico e Desenhos - R$ 2.450)</option>
                  <option value="Masterclass Degradê & Corte Moderno">Masterclass Degradê & Corte Moderno (Cortes Modernos - R$ 3.100)</option>
                  <option value="Combo Duplo Profissional">Combo Duplo Profissional (Os dois cursos completo - R$ 4.900)</option>
                </select>
              </div>

              {/* Cover/Notes area */}
              <div className="space-y-1.5">
                <label className="text-[9px] uppercase tracking-wider text-zinc-550 font-extrabold flex items-center gap-1">
                  <FileText className="w-3 h-3 text-amber-600" />
                  <span>Quer nos contar algo sobre seus objetivos? (Opcional)</span>
                </label>
                <textarea 
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Se quiser, escreva o que você deseja aprender ou seus objetivos na carreira de barbeiro."
                  className="w-full bg-zinc-50 border border-zinc-200 hover:border-amber-500/50 focus:border-amber-500 focus:outline-none rounded-xl p-3 text-xs text-zinc-900 transition resize-none font-sans"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 mt-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black text-xs font-black uppercase tracking-widest rounded-xl transition hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>Salvando dados...</span>
                ) : (
                  <>
                    <span>Enviar Reserva de Vaga</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>

      {/* POPUP: Approved VIP Lead Ticket Certificate Modal */}
      {successLead && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-white border-2 border-amber-500 rounded-3xl p-6 sm:p-10 text-center space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.15)] animate-fade-in-down overflow-hidden text-zinc-900">
            
            {/* Seal / Icon Header */}
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8 text-amber-600" />
            </div>

            {/* Approved Title Header */}
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-650 block">
                Cadastro recebido com sucesso
              </span>
              <h3 className="text-2xl font-black text-zinc-950 uppercase tracking-tight leading-none text-center">
                Vaga Reservada
              </h3>
            </div>

            {/* Personal Ticket representation container */}
            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 text-left relative space-y-3 font-sans">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-r border-zinc-200" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-l border-zinc-200" />

              <div className="flex justify-between items-center text-xs pb-2 border-b border-zinc-200">
                <span className="text-zinc-500 font-bold uppercase text-[9px] tracking-widest">Inscrito:</span>
                <span className="text-zinc-950 font-extrabold text-[10px] truncate max-w-[200px]">{successLead.fullName}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-550 block font-bold uppercase text-[8px] tracking-wider">Identificador ID:</span>
                  <span className="text-amber-650 font-mono text-[9px] font-black uppercase truncate block">{successLead.id}</span>
                </div>
                <div>
                  <span className="text-zinc-550 block font-bold uppercase text-[8px] tracking-wider">Curso Desejado:</span>
                  <span className="text-zinc-800 font-bold text-[10px] truncate block">{successLead.selectedCourse}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 flex justify-between items-center">
                <div>
                  <span className="text-zinc-500 block font-bold uppercase text-[8px] tracking-wider">Inscrição Status:</span>
                  <span className="text-emerald-600 font-bold text-[9px] uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Processando sua Vaga
                  </span>
                </div>
                <Ticket className="w-5 h-5 text-amber-500/40" />
              </div>
            </div>

            {/* Instruction paragraph */}
            <p className="text-xxs sm:text-xs text-zinc-600 font-normal leading-relaxed text-center">
              Obrigado, <strong>{successLead.fullName.split(" ")[0]}</strong>. Nós registramos seus dados. Nossa equipe enviará uma mensagem no seu WhatsApp <strong>{successLead.phone}</strong> em poucas horas para confirmar seu início e forma de pagamento.
            </p>

            {/* Button container close */}
            <button
              onClick={() => setSuccessLead(null)}
              className="px-6 py-3 rounded-xl bg-zinc-950 hover:bg-black text-white font-bold text-[10px] uppercase tracking-wider cursor-pointer w-full transition"
            >
              Fechar
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
