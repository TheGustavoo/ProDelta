# 1º PRODELTA — Landing Page

Landing page institucional do **1º Workshop de Produção e Nutrição Animal do Delta do Parnaíba**.

## Tecnologias

- **React 19** + **TypeScript**
- **TanStack Start** (framework full-stack)
- **Tailwind CSS v4**
- **Motion**, **GSAP + ScrollTrigger**, **Lenis** (animações e scroll suave)
- **Lucide React** (ícones)
- **Bun** (gerenciador de pacotes e runtime)

## Pré-requisitos

Instale o Bun no seu sistema:

```bash
curl -fsSL https://bun.sh/install | bash
```

> Também funciona com Node.js + npm, mas o projeto foi configurado com Bun (`bun.lock` e `bunfig.toml`). Recomendamos usar Bun para evitar incompatibilidades.

## Como rodar no seu PC

### 1. Obter os arquivos

Opção A — clonar do GitHub (se o repositório estiver conectado):

```bash
git clone <URL-DO-REPOSITORIO>
cd <NOME-DA-PASTA>
```

Opção B — extrair o arquivo `prodelta-project.zip` fornecido:

```bash
unzip prodelta-project.zip -d prodelta
cd prodelta
```

### 2. Instalar dependências

```bash
bun install
```

### 3. Iniciar o servidor de desenvolvimento

```bash
bun run dev
```

A página estará disponível em: **http://localhost:8080**

## Outros comandos úteis

```bash
bun run build        # Build de produção
bun run build:dev    # Build modo desenvolvimento
bun run preview      # Preview do build de produção
bun run lint         # Verificar erros com ESLint
bun run format       # Formatar código com Prettier
```

## Onde editar o conteúdo

Todas as informações do evento (título, data, local, palestrantes, programação, parceiros, link de inscrição etc.) estão centralizadas em:

```
src/data/event.ts
```

> **Importante:** o link do botão de inscrição está no campo `REGISTRATION_URL`. Substitua o placeholder pela URL real do Google Forms antes de publicar.

## Estrutura de pastas

```text
src/
├── assets/              # Imagens e logos (ponteiros de asset)
├── components/
│   ├── layout/          # Navbar, Footer, Section
│   ├── sections/        # Hero, About, Objectives, Schedule, Speakers, Topics, Organization, Partners, Registration
│   └── ui/              # Componentes reutilizáveis de interface
├── data/
│   └── event.ts         # Fonte única de verdade do conteúdo
├── hooks/               # useSmoothScroll, useScrollReveal, useMobile
├── lib/                 # Utilitários
├── routes/
│   ├── __root.tsx       # Template global (head, fontes, linguagem)
│   └── index.tsx        # Página principal
├── router.tsx           # Configuração do roteador
├── server.ts            # Entry SSR
├── start.ts             # Configuração de middleware
└── styles.css           # Paleta de cores, tipografia e utilitários Tailwind
```

## Publicação

Este projeto usa TanStack Start com target Cloudflare Workers. Para publicar, siga as instruções da plataforma de hospedagem escolhida (ex: Vercel, Netlify, Cloudflare Pages) ou use o botão **Publish** do Lovable.

---

Feito com Lovable + TanStack Start.
