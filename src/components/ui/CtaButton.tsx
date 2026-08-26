import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { REGISTRATION_URL } from "@/data/event";

interface CtaButtonProps {
  label?: string;
  className?: string;
  size?: "md" | "lg";
}

/** Botão principal de inscrição — abre o Google Forms em nova aba. */
export function CtaButton({ label = "Fazer inscrição", className, size = "md" }: CtaButtonProps) {
  return (
    <motion.a
      href={REGISTRATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full surface-ember font-semibold text-primary-foreground shadow-soft ring-1 ring-primary/25 transition-shadow hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        className,
      )}
    >
      {label}
      <ArrowUpRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
    </motion.a>
  );
}
