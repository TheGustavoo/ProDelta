import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { objectives } from "@/data/event";

export function Objectives() {
  return (
    <Section
      id="objetivos"
      eyebrow="// CONTEÚDO"
      title="Uma programação diversificada"
      description="A submissão de palestras é aberta à comunidade. Veja as áreas que vão estar no palco:"
      // Fundo Areia Quente. Mudei o texto da seção para Verde Floresta para dar contraste!
      className="bg-[#D4E5E2] text-[#1E3F33]"
    >
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective) => (
          <li
            key={objective.title}
            data-reveal
            // Card: Fundo branco com borda bem clarinha. 
            // Hover: Borda fica Terracota e a sombra aumenta junto com o salto.
            className="reveal group flex items-center gap-5 rounded-2xl border border-[#1E3F33]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#DE8728]/60 hover:shadow-xl"
          >
            {/* Ícone: Começa em Verde Floresta com borda fina. 
                Hover: Borda, Fundo e Ícone mudam para Terracota. */}
            <span className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-[#1E3F33]/20 bg-transparent text-[#1E3F33] transition-colors group-hover:border-[#DE8728] group-hover:bg-[#DE8728]/10 group-hover:text-[#DE8728]">
              <Icon name={objective.icon} className="size-6" />
            </span>
            
            {/* Título do Cartão: Fica em Verde Floresta para manter a leitura firme */}
            <h3 className="text-base font-semibold leading-snug text-[#1E3F33]">
              {objective.title}
            </h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}