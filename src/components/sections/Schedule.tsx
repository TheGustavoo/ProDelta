import { useState } from "react";
import { Clock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { cn } from "@/lib/utils";
import { schedule } from "@/data/event";

export function Schedule() {
  const [first] = schedule;
  const [active, setActive] = useState<string>(first?.id ?? "dia-1");
  const day = schedule.find((d) => d.id === active) ?? first;
  if (!day) return null;


  return (
    <Section
      id="programacao"
      eyebrow="Programação"
      title="Três dias, uma agenda completa"
      description="A grade oficial será divulgada em breve. Os horários abaixo são reservados para preenchimento posterior."
      tone="cream"
    >
      <div data-reveal className="reveal flex flex-wrap gap-3">
        {schedule.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActive(item.id)}
            aria-pressed={active === item.id}
            className={cn(
              "rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300",
              active === item.id
                ? "surface-ember text-primary-foreground shadow-soft"
                : "border border-border bg-card text-muted-foreground hover:text-primary",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={day.id}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-9"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-clay">{day.date}</p>
          <ul className="mt-6 space-y-4">
            {day.items.map((item, index) => (
              <li
                key={`${day.id}-${index}`}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 rounded-2xl bg-muted/70 p-5 sm:flex sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {item.time}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
