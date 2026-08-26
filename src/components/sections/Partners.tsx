import { Section } from "@/components/layout/Section";
import uninassau from "@/assets/uninassau.png";
import ufdpar from "@/assets/ufdpar.png";
import uespi from "@/assets/uespi.png";
import lapronu from "@/assets/lapronu.png";

const partners = [
  { name: "UESPI", src: uespi },
  { name: "LAPRONU", src: lapronu },
  { name: "UFDPar", src: ufdpar },
  { name: "UNINASSAU", src: uninassau },
] as const;

export function Partners() {
  return (
    <Section
      id="parceiros"
      eyebrow="Instituições parceiras"
      title="Feito em rede"
      description="Universidades e grupos de pesquisa que apoiam a realização do 1º PRODELTA."
      tone="muted"
    >
      <ul className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {partners.map((partner) => (
          <li
            key={partner.name}
            data-reveal
            className="reveal grid place-items-center rounded-3xl bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={partner.src}
              alt={`Logotipo ${partner.name}`}
              className="h-20 w-auto object-contain"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
