import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { organization } from "@/data/event";

export function Organization() {
  return (
    <Section
      id="organizacao"
      eyebrow="Organização"
      title="Quem realiza o PRODELTA"
      description="Coordenação científica e equipe responsável pela realização do workshop."
      // Degradê diagonal de Ciano para Verde Oliva. Texto branco para alto contraste.
      className="bg-gradient-to-br from-[#62C1C5] to-[#79994C] text-white"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Card Principal: Branco absoluto para saltar aos olhos */}
        <div data-reveal className="reveal rounded-3xl bg-white p-8 text-[#1A365D] shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-70 text-[#1A365D]">
            Coordenação geral
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Nome do coordenador</h3>
          <p className="mt-2 text-sm opacity-90">
            {/* Espaço para a descrição */}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {organization.map((item) => (
            <li
              key={item}
              data-reveal
              // Fundo Creme com borda translúcida
              className="reveal flex items-start gap-3 rounded-2xl border border-white/40 bg-[#FDFBF7] p-5 shadow-sm"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#79994C]" aria-hidden="true" />
              <span className="min-w-0 text-sm leading-relaxed text-[#1A365D] font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}