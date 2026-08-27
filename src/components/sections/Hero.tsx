import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { CtaButton } from "@/components/ui/CtaButton";
import { eventInfo } from "@/data/event";
import logo from "@/assets/logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[#1E3F33] grain pt-28 pb-0">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            // Badge superior com fundo sutil e texto em Terracota
            className="inline-flex items-center gap-2 rounded-full border border-[#D95D39]/30 bg-[#D95D39]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D95D39]"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            {eventInfo.name}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            // Título principal em Areia/Off-White para máximo contraste com o fundo verde
            className="mt-6 text-4xl font-semibold leading-[1.05] text-[#F4F1EB] sm:text-5xl lg:text-6xl"
          >
            {eventInfo.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            // Descrição levemente translúcida para não brigar com o título
            className="mt-5 max-w-xl text-lg leading-relaxed text-[#F4F1EB]/80"
          >
            {eventInfo.pitch}
          </motion.p>

          <motion.dl
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-3"
          >
            {/* Cards de data e local: Fundo claro com texto escuro e ícones Terracota */}
            <div className="flex items-center gap-2 rounded-full bg-[#F4F1EB] px-4 py-2 text-sm font-medium text-[#1E3F33] shadow-soft">
              <CalendarDays className="size-4 shrink-0 text-[#D95D39]" aria-hidden="true" />
              <dt className="sr-only">Data</dt>
              <dd>{eventInfo.dates}</dd>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#F4F1EB] px-4 py-2 text-sm font-medium text-[#1E3F33] shadow-soft">
              <MapPin className="size-4 shrink-0 text-[#D95D39]" aria-hidden="true" />
              <dt className="sr-only">Local</dt>
              <dd>
                {eventInfo.venue} — {eventInfo.city}
              </dd>
            </div>
          </motion.dl>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            {/* Substituí temporariamente o <CtaButton /> por uma tag <button> 
                para garantir que o estilo Terracota seja aplicado imediatamente aqui */}
            <button className="inline-flex h-12 items-center justify-center rounded-full bg-[#D95D39] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#c25130] hover:shadow-lg">
              Garantir minha inscrição
            </button>
            <a
              href="#sobre"
              // Link "Saiba mais" ajustado para Off-white, mudando para Terracota no hover
              className="text-sm font-semibold text-[#F4F1EB] underline-offset-4 transition-colors hover:text-[#D95D39] hover:underline"
            >
              Saiba mais
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="justify-self-center"
        >
          #COLOCAR FOTO DA TURMA
        </motion.div>
      </div>
    </section>
  );
}