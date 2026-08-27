import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { objectives } from "@/data/event";

export function Objectives() {
  return (
    <Section
      id="objetivos"
      eyebrow="Objetivos"
      title="Por que o PRODELTA existe"
      description="Seis compromissos que orientam toda a programação do workshop."
      // Fundo Areia/Off-White e textos principais em Verde Floresta
      className="bg-[#F4F1EB] text-[#1E3F33]"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective) => (
          <li
            key={objective.title}
            data-reveal
            // Fundo branco, borda ultra sutil Verde Floresta. No hover, a borda fica Terracota.
            className="reveal group rounded-3xl border border-[#1E3F33]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#D95D39]/50"
          >
            {/* Ícone: Fundo translúcido Terracota. No hover, vira sólido e o ícone fica branco */}
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#D95D39]/15 text-[#D95D39] transition-colors border border-transparent group-hover:bg-[#D95D39] group-hover:text-white">
              <Icon name={objective.icon} className="size-6" />
            </span>
            
            {/* Título do objetivo em Verde Floresta para manter a seriedade */}
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1E3F33]">
              {objective.title}
            </h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}