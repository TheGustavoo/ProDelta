import { Ticket, Instagram, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { eventInfo } from "@/data/event";

export function Registration() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    // Reduzimos a altura da área verde (py-12 sm:py-16 lg:py-16)
    <section id="inscricao" ref={ref} className="scroll-mt-24 bg-[#1E3F33] px-5 py-12 sm:px-8 lg:py-16">
      <div
        data-reveal
        // Aumentamos a largura do card da direita para 480px no desktop
        className="reveal mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_480px] lg:items-center"
      >
        {/* COLUNA ESQUERDA */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#DE8728]">
            // bora dar o primeiro passo?
          </p>
          
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#F4F1EB] sm:text-5xl lg:text-[3.5rem]">
            Garanta sua vaga<br />no 1º PRODELTA.
          </h2>
          
          <p className="mt-5 max-w-xl text-lg text-[#F4F1EB]/80 leading-relaxed">
            A inscrição é paga pra incentivar o comprometimento e reduzir ausências — e ajuda a cobrir parte dos custos do evento. As vagas são limitadas.
          </p>
          
          {/* Botões maiores (h-14, px-9, text-base) */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeLQw2-ptJeZSfRCzSC9tttonPlmTMs4_-Zh0eyeBHtNBhAyw/viewform" 
              target="_blank"           // Faz abrir em uma nova aba
              rel="noopener noreferrer" // Segurança extra do navegador
              className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[#DE8728] px-9 text-base font-bold text-[#1E3F33] transition-all hover:bg-[#c47522] hover:text-[#F4F1EB] hover:shadow-xl"
            >
              Fazer inscrição
              <Ticket className="size-5" aria-hidden="true" />
            </a>
            
            <a 
              href="https://www.instagram.com/lapronu/" 
              className="inline-flex h-14 items-center justify-center gap-2.5 rounded-full border border-[#F4F1EB]/30 bg-transparent px-9 text-base font-semibold text-[#F4F1EB] transition-colors hover:bg-[#F4F1EB]/10"
              target="_blank"           // Faz abrir em uma nova aba
              rel="noopener noreferrer" // Segurança extra do navegador
            >
              <Instagram className="size-5" aria-hidden="true" />
              Seguir no Instagram
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA (Card mais largo) */}
        <div className="rounded-3xl bg-[#F4F1EB] p-8 text-[#1E3F33] shadow-2xl sm:p-10">

          <div className="flex flex-wrap items-baseline gap-4">
            <span className="text-5xl font-black tracking-tight text-[#1E3F33]">R$ 20</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3F33]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#1E3F33]">
              <span className="size-2 rounded-full bg-[#1E3F33]"></span>
              Vagas limitadas
            </span>
          </div>

          <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.15em] text-[#1E3F33]/70">
            17,18 E 19 NOV 2026 • UNINASSAU, PARNAÍBA - PI
          </p>

          <hr className="my-6 border-[#1E3F33]/15" />

          <ul className="flex flex-col gap-4 text-base font-medium text-[#1E3F33]/90">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#1E3F33] mt-0.5" aria-hidden="true" />
              <span>Acesso a todas as palestras e à roda de conversa</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#1E3F33] mt-0.5" aria-hidden="true" />
              <span>Certificado de participação</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#1E3F33] mt-0.5" aria-hidden="true" />
              <span>Coffee break & área de networking</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-[#1E3F33] mt-0.5" aria-hidden="true" />
              <span>Sorteios e brindes dos patrocinadores</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}