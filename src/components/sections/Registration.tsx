import { CalendarDays, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { eventInfo } from "@/data/event";

export function Registration() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="inscricao" ref={ref} className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div
        data-reveal
        // Fundo trocado para Verde Floresta sólido, removendo o laranja do background
        className="reveal mx-auto grid max-w-6xl gap-8 rounded-[2rem] bg-[#1E3F33] p-10 text-[#F4F1EB] shadow-xl sm:p-14 lg:grid-cols-[1.2fr_auto] lg:items-center"
      >
        <div>
          {/* Subtítulo em Terracota para dar um toque de cor */}
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D95D39]">
            Inscrição
          </p>
          
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl text-[#F4F1EB]">
            Garanta sua vaga no 1º PRODELTA
          </h2>
          
          <p className="mt-4 max-w-xl text-base text-[#F4F1EB]/80">
            A inscrição é paga pra incentivar o comprometimento e reduzir ausências — e ajuda a cobrir parte dos custos do evento. As vagas são limitadas.
          </p>
          
          <dl className="mt-6 flex flex-wrap gap-6 text-sm font-medium text-[#F4F1EB]/80">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-5 shrink-0 text-[#D95D39]" aria-hidden="true" />
              <dt className="sr-only">Data</dt>
              <dd>{eventInfo.dates}</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-5 shrink-0 text-[#D95D39]" aria-hidden="true" />
              <dt className="sr-only">Local</dt>
              <dd>
                {eventInfo.venue} — {eventInfo.city}
              </dd>
            </div>
          </dl>
        </div>

        {/* Botão em Terracota para se destacar sobre o fundo verde */}
        <CtaButton
          size="lg"
          label="Inscrever-se agora"
          className="justify-self-start bg-[#D95D39] text-white ring-[#D95D39]/50 transition-colors hover:bg-[#c25130] hover:shadow-xl lg:justify-self-end"
        />
      </div>
    </section>
  );
}