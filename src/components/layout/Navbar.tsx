import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CtaButton } from "@/components/ui/CtaButton";
import logo from "@/assets/logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#programacao", label: "Programação" },
  { href: "#palestrantes", label: "Palestrantes" },
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
        // Fundo Verde Floresta translúcido quando rolar a página
        scrolled ? "bg-[#1E3F33]/95 shadow-md backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Logotipo do 1º PRODELTA"
            className="size-11 shrink-0 object-contain"
            width={44}
            height={44}
          />
          {/* Texto do logotipo em Off-White */}
          <span className="truncate font-display text-lg font-semibold text-[#F4F1EB]">
            PRODELTA
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              // Links em Off-White, ficando Terracota ao passar o mouse
              className="text-sm font-medium text-[#F4F1EB]/80 transition-colors hover:text-[#D95D39]"
            >
              {link.label}
            </a>
          ))}
          {/* Componente base aplicado na versão Desktop */}
          <CtaButton label="Inscreva-se" />
        </div>

        {/* Botão Menu Hambúrguer (Mobile) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#F4F1EB]/20 bg-transparent text-[#F4F1EB] transition-colors hover:bg-[#F4F1EB]/10 lg:hidden"
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
            // Fundo do menu Mobile em Verde Floresta
            className="overflow-hidden border-t border-[#F4F1EB]/10 bg-[#1E3F33]/98 backdrop-blur lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#F4F1EB] transition-colors hover:bg-[#F4F1EB]/10 hover:text-[#D95D39]"
                >
                  {link.label}
                </a>
              ))}
              {/* Componente base aplicado na versão Mobile (Largura total) */}
              <CtaButton className="mt-3 w-full justify-center" label="Inscreva-se" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}