import { UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { speakers } from "@/data/event";

export function Speakers() {
  return (
    <Section
      id="palestrantes"
      eyebrow="Palestrantes"
      title="Quem vai subir ao palco"
      description="Os nomes confirmados serão anunciados em breve — os espaços abaixo estão reservados."
      tone="muted"
    >
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <li
            key={index}
            data-reveal
            className="reveal flex flex-col items-center rounded-3xl bg-card p-8 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span className="grid size-28 place-items-center rounded-full surface-warm ring-4 ring-secondary/50">
              <UserRound className="size-12 text-clay" aria-hidden="true" />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{speaker.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{speaker.bio}</p>
            <span className="mt-5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-secondary-foreground">
              Confirmado
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
