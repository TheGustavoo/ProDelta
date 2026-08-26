import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  tone?: "cream" | "muted" | "peach";
}

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-background",
  muted: "bg-muted",
  peach: "surface-warm",
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  tone = "cream",
}: SectionProps) {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28", toneClass[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-2xl">
          {eyebrow ? (
            <p
              data-reveal
              className="reveal text-xs font-semibold uppercase tracking-[0.28em] text-clay"
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 data-reveal className="reveal mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description ? (
            <p data-reveal className="reveal mt-4 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
