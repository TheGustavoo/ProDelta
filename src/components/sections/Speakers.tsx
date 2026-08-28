import { UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { speakers } from "@/data/event";

export function Speakers() {
  return (
    <Section
      id="palestrantes"
      eyebrow="// PALESTRANTES"
      title="Quem vai subir ao palco"
      description="Os nomes confirmados serão anunciados em breve — os espaços abaixo estão reservados."
      // Fundo Areia Quente com o texto principal em Verde Floresta
      className="bg-[#D4E5E2] text-[#1E3F33]"
    >
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker, index) => (
          <li
            key={index}
            data-reveal
            // Cards brancos com borda sutil e hover elegante
            className="reveal flex flex-col items-center rounded-3xl border border-[#1E3F33]/10 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#DE8728]/50 hover:shadow-xl"
          >
            {/* Ícone com fundo e anel usando nosso Âmbar */}
            <span className="grid size-28 place-items-center rounded-full bg-[#E5D3A7]/40 ring-4 ring-[#DE8728]/30">
              <UserRound className="size-12 text-[#1E3F33]" aria-hidden="true" />
            </span>
            
            <h3 className="mt-6 text-lg font-semibold text-[#1E3F33]">{speaker.name}</h3>
            
            <p className="mt-2 text-sm leading-relaxed text-[#1E3F33]/80">{speaker.bio}</p>
            
            {/* Tag "Confirmado" usando nosso Âmbar */}
            <span className="mt-5 rounded-full bg-[#DE8728]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#1E3F33]">
              Confirmado
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}