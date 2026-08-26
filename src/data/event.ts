/**
 * Fonte única de conteúdo do 1º PRODELTA.
 * Estrutura tipada e pronta para futura substituição por uma API.
 */

export const PLACEHOLDER = "A definir" as const;

/** Link externo do Google Forms de inscrição (substituir quando fornecido). */
export const REGISTRATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSf-PRODELTA-PLACEHOLDER/viewform";

export interface EventInfo {
  readonly name: string;
  readonly subtitle: string;
  readonly tagline: string;
  readonly dates: string;
  readonly datesISO: { start: string; end: string };
  readonly venue: string;
  readonly city: string;
  readonly headline: string;
  readonly pitch: string;
}

export const eventInfo: EventInfo = {
  name: "1º PRODELTA",
  subtitle: "Workshop de Produção e Nutrição Animal do Delta do Parnaíba",
  tagline:
    "Tecnologias Sustentáveis no Delta: Inovação e Biotecnologia Aplicadas à Produção Animal.",
  dates: "25, 26 e 27 de novembro de 2026",
  datesISO: { start: "2026-11-25", end: "2026-11-27" },
  venue: "UNINASSAU",
  city: "Parnaíba – PI",
  headline: "O maior Workshop de Produção e Nutrição Animal do Delta do Parnaíba",
  pitch:
    "Conhecimento, inovação, sustentabilidade e networking para transformar a produção animal do Nordeste.",
};

export const aboutText =
  "O 1º PRODELTA é um workshop regional que reúne pesquisadores, professores, estudantes, produtores rurais e profissionais do agronegócio para discutir as mais recentes tecnologias sustentáveis aplicadas à produção e nutrição animal.";

export type IconName =
  | "Sprout"
  | "Handshake"
  | "Leaf"
  | "FlaskConical"
  | "GraduationCap"
  | "Dna"
  | "Beef"
  | "CloudSun"
  | "Wheat"
  | "Tractor";

export interface Objective {
  readonly title: string;
  readonly icon: IconName;
}

export const objectives: readonly Objective[] = [
  { title: "Promover inovação na produção animal", icon: "Sprout" },
  { title: "Integrar universidades e setor produtivo", icon: "Handshake" },
  { title: "Incentivar práticas sustentáveis", icon: "Leaf" },
  { title: "Fortalecer pesquisas científicas", icon: "FlaskConical" },
  { title: "Capacitar estudantes e profissionais", icon: "GraduationCap" },
  { title: "Difundir biotecnologias", icon: "Dna" },
];

export interface ScheduleDay {
  readonly id: string;
  readonly label: string;
  readonly date: string;
  readonly items: readonly { time: string; title: string; detail: string }[];
}

/** Programação ainda não divulgada — placeholders identificados para preenchimento. */
export const schedule: readonly ScheduleDay[] = [
  {
    id: "dia-1",
    label: "Dia 1",
    date: "25 de novembro de 2026",
    items: [
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
    ],
  },
  {
    id: "dia-2",
    label: "Dia 2",
    date: "26 de novembro de 2026",
    items: [
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
    ],
  },
  {
    id: "dia-3",
    label: "Dia 3",
    date: "27 de novembro de 2026",
    items: [
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
      { time: PLACEHOLDER, title: "Atividade a definir", detail: "Conteúdo em breve" },
    ],
  },
];

export interface Speaker {
  readonly name: string;
  readonly bio: string;
}

/** Placeholders conforme material oficial. */
export const speakers: readonly Speaker[] = [
  { name: "Nome do palestrante", bio: "Formação e qualificação e sobre o que vai falar." },
  { name: "Nome do palestrante", bio: "Formação e qualificação e sobre o que vai falar." },
  { name: "Nome do palestrante", bio: "Formação e qualificação e sobre o que vai falar." },
];

export interface Topic {
  readonly title: string;
  readonly icon: IconName;
}

export const topics: readonly Topic[] = [
  { title: "Biotecnologia", icon: "Dna" },
  { title: "Nutrição Animal", icon: "Wheat" },
  { title: "Produção Animal", icon: "Beef" },
  { title: "Sustentabilidade", icon: "Leaf" },
  { title: "Mudanças Climáticas", icon: "CloudSun" },
  { title: "Recursos Genéticos", icon: "FlaskConical" },
  { title: "Pecuária Tropical", icon: "Sprout" },
  { title: "Inovação no Campo", icon: "Tractor" },
];

export const organization: readonly string[] = [
  "Professor de Medicina Veterinária",
  "Pesquisador",
  "Especialista em Produção e Nutrição de Pequenos Ruminantes",
  "Orientador da LAPRONU",
  "Pesquisador da Embrapa Caprinos e Ovinos",
  "Experiência em pesquisa, inovação e extensão rural voltadas à sustentabilidade da produção animal.",
];
