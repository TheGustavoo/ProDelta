import { Section } from "@/components/layout/Section";
import { aboutText, eventInfo } from "@/data/event";
import logo from "@/assets/logo.png";

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="// Sobre o evento"
      title="O que é o PRODELTA?"
      description={aboutText}
      tone="cream"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal className="reveal justify-self-center">
          <img
            src={logo}
            alt="Selo do 1º PRODELTA"
            className="w-100 sm:w-900"
            width={288}
            height={295}
            loading="lazy"
          />
        </div>
        <div data-reveal className="reveal rounded-3xl bg-card p-8 shadow-soft sm:p-10">
          <p className="font-display text-2xl leading-snug">{eventInfo.tagline}</p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Três dias de imersão em {eventInfo.venue} — {eventInfo.city}, unindo ciência, campo e
            mercado em torno da produção animal sustentável do Delta do Parnaíba.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { k: "Dias de programação", v: "3" },
              { k: "Áreas temáticas", v: "8" },
              { k: "Data", v: "Nov 2026" },
            ].map((item) => (
              <div key={item.k}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-clay">
                  {item.k}
                </dt>
                <dd className="mt-1 font-display text-3xl font-semibold">{item.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
