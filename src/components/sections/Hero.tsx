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
    <section id="topo" className="relative overflow-hidden surface-warm grain pt-28 pb-0">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-clay"
          >
            <Sparkles className="size-3.5" aria-hidden="true" />
            {eventInfo.name}
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            {eventInfo.headline}
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
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
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">
              <CalendarDays className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <dt className="sr-only">Data</dt>
              <dd>{eventInfo.dates}</dd>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-medium shadow-soft">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
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
            <CtaButton size="lg" label="Garantir minha inscrição" />
            <a
              href="#sobre"
              className="text-sm font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
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
          <img
            src={logo}
            alt="Logotipo oficial do 1º PRODELTA — Workshop de Produção e Nutrição Animal do Delta"
            className="w-64 drop-shadow-xl sm:w-80 lg:w-full lg:max-w-md"
            width={420}
            height={430}
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
