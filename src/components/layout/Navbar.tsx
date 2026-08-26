import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/ui/CtaButton";
import logo from "@/assets/logo-prodelta.png.asset.json";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#objetivos", label: "Objetivos" },
  { href: "#programacao", label: "Programação" },
  { href: "#palestrantes", label: "Palestrantes" },
  { href: "#areas", label: "Áreas" },
  { href: "#organizacao", label: "Organização" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Logotipo do 1º PRODELTA"
            className="size-11 shrink-0 object-contain"
            width={44}
            height={44}
          />
          <span className="truncate font-display text-lg font-semibold">PRODELTA</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <CtaButton label="Inscreva-se" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
              <CtaButton className="mt-3 justify-center" label="Inscreva-se" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
