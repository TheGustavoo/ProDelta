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
      tone="cream"
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div data-reveal className="reveal rounded-3xl surface-ember p-8 text-primary-foreground">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-80">
            Coordenação geral
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold">Nome do coordenador</h3>
          <p className="mt-2 text-sm opacity-90">
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {organization.map((item) => (
            <li
              key={item}
              data-reveal
              className="reveal flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="min-w-0 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
