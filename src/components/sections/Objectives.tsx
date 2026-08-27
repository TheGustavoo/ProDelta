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
      // Fundo Creme sólido da paleta do PDF
      className="bg-[#FDFBF7] text-[#1A365D]"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective) => (
          <li
            key={objective.title}
            data-reveal
            // Fundo branco no card para contrastar com o fundo creme
            className="reveal group rounded-3xl border border-[#79994C]/20 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#62C1C5]/50"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#62C1C5] text-[#1A365D] transition-colors border border-transparent group-hover:bg-white group-hover:border-[#62C1C5]">
              <Icon name={objective.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug text-[#1A365D]">
              {objective.title}
            </h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}