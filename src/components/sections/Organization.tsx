import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { organization } from "@/data/event";

export function Organization() {
  return (
    <Section
      id="organizacao"
      eyebrow="// ORGANIZAÇÃO"
      title="Quem realiza o PRODELTA"
      description="Coordenação científica e equipe responsável pela realização do workshop."
      // Fundo Areia Quente com o texto principal em Verde Floresta
      className="bg-[#D4E5E2] text-[#1E3F33]"
    >
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        
        {/* Card Principal (Coordenador): Fundo branco para destacar bem do Areia Quente */}
        <div data-reveal className="reveal rounded-3xl border border-[#1E3F33]/10 bg-white p-8 text-[#1E3F33] shadow-xl">
          {/* Subtítulo no tom Ferrugem para fundos claros */}
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B45C33]">
            Coordenação geral
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">
            Nome do coordenador
          </h3>
          <p className="mt-2 text-sm text-[#DE8728]/80">
            {/* Espaço para a descrição do coordenador */}
          </p>
        </div>

        {/* Lista da Equipe */}
        <ul className="grid gap-3 sm:grid-cols-2">
          {organization.map((item) => (
            <li
              key={item}
              data-reveal
              // Cartões brancos. No hover, eles levantam levemente e a borda acende em Âmbar
              className="reveal group flex items-start gap-3 rounded-2xl border border-[#1E3F33]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DE8728]/50 hover:shadow-md"
            >
              {/* Ícone de check usando o nosso Âmbar vibrante */}
              <CheckCircle2 
                className="mt-0.5 size-5 shrink-0 text-[#DE8728] transition-transform group-hover:scale-110" 
                aria-hidden="true" 
              />
              <span className="min-w-0 text-sm font-medium leading-relaxed text-[#1E3F33]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}