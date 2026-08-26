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
      tone="muted"
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {objectives.map((objective) => (
          <li
            key={objective.title}
            data-reveal
            className="reveal group rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground transition-colors group-hover:surface-ember group-hover:text-primary-foreground">
              <Icon name={objective.icon} className="size-6" />
            </span>
            <h3 className="mt-5 text-lg font-semibold leading-snug">{objective.title}</h3>
          </li>
        ))}
      </ul>
    </Section>
  );
}
