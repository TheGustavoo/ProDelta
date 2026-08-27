import { Section } from "@/components/layout/Section";
import uninassau from "@/assets/uninassau.png";
import ufdpar from "@/assets/ufdpar.png";
import uespi from "@/assets/uespi.png";
import lapronu from "@/assets/lapronu.png";
// ATENÇÃO: O import do "inspector" foi removido daqui para não quebrar seu site!

const partners = [
  { name: "UESPI", src: uespi, url: "https://www.instagram.com/uespioficial/" },
  { name: "LAPRONU", src: lapronu, url: "https://www.instagram.com/lapronu/" },
  { name: "UFDPar", src: ufdpar, url: "https://www.instagram.com/ufdpar.br/" },
  { name: "UNINASSAU", src: uninassau, url: "https://www.instagram.com/uninassau.parnaiba.pi/" },
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
            className="reveal"
          >
            {/* A tag <a> transforma o card inteiro em um link clicável */}
            <a
              href={partner.url}
              target="_blank"           // Faz abrir em uma nova aba
              rel="noopener noreferrer" // Segurança extra do navegador
              title={`Visitar Instagram da ${partner.name}`} // Textinho ao deixar o mouse parado
              className="grid h-full place-items-center rounded-3xl bg-card p-9 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:opacity-90 cursor-pointer"
            >
              <img
                src={partner.src}
                alt={`Logotipo ${partner.name}`}
                className="h-25 auto object-contain transition-transform duration-300 hover:scale-110" // Imagem dá um leve zoom no hover
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}