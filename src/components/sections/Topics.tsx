import { Section } from "@/components/layout/Section";
import { Icon } from "@/components/ui/Icon";
import { topics } from "@/data/event";

export function Topics() {
  return (
    <Section
      id="areas"
      eyebrow="// Áreas temáticas"
      title="Os eixos do conhecimento"
      description="Oito frentes que conectam pesquisa, biotecnologia e produção no campo."
      tone="cream"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {topics.map((topic) => (
          <li
            key={topic.title}
            data-reveal
            className="reveal flex items-center gap-3 rounded-2xl border border-border bg-card/85 px-5 py-5 shadow-soft backdrop-blur transition-colors hover:border-primary/40"
          >
            <Icon name={topic.icon} className="size-5 shrink-0 text-primary" />
            <span className="min-w-0 text-sm font-semibold">{topic.title}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
