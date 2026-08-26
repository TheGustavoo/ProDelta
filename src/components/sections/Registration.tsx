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
        className="reveal mx-auto grid max-w-6xl gap-8 rounded-[2rem] surface-ember p-10 text-primary-foreground shadow-lift sm:p-14 lg:grid-cols-[1.2fr_auto] lg:items-center"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] opacity-85">Inscrição</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Garanta sua vaga no 1º PRODELTA
          </h2>
          <p className="mt-4 max-w-xl text-base opacity-90">
            As inscrições são feitas pelo formulário oficial do evento. O link abre em uma nova aba.
          </p>
          <dl className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
              <dt className="sr-only">Data</dt>
              <dd>{eventInfo.dates}</dd>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              <dt className="sr-only">Local</dt>
              <dd>
                {eventInfo.venue} — {eventInfo.city}
              </dd>
            </div>
          </dl>
        </div>

        <CtaButton
          size="lg"
          label="Inscrever-se agora"
          className="justify-self-start bg-card bg-none text-primary ring-card/60 lg:justify-self-end"
        />
      </div>
    </section>
  );
}
