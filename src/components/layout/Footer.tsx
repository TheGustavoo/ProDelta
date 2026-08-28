import { Instagram, Mail, MapPin } from "lucide-react";
import { eventInfo, REGISTRATION_URL } from "@/data/event";
import logo from "@/assets/logo.png";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "E-mail", href: "#", icon: Mail },
] as const;

export function Footer() {
  return (
    // Fundo Verde Floresta sólido aplicado aqui
    <footer className="bg-[#0F201A] px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        
        {/* Coluna 1: Identidade */}
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Logotipo do 1º PRODELTA"
              className="size-12 shrink-0 object-contain"
              loading="lazy"
            />
            {/* Texto em Off-White */}
            <span className="truncate font-display text-lg font-semibold text-[#F4F1EB]">
              {eventInfo.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F4F1EB]/80">
            {eventInfo.subtitle}
          </p>
        </div>

        {/* Coluna 2: Informações do Evento */}
        <div>
          {/* Títulos em Terracota para destaque */}
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#DE8728]">
            Evento
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[#F4F1EB]/80">
            <li>{eventInfo.dates}</li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#DE8728]" aria-hidden="true" />
              {eventInfo.venue} — {eventInfo.city}
            </li>
            <li>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                // Link em Terracota, mudando para branco no hover
                className="font-semibold text-[#DE8728] underline-offset-4 hover:text-white hover:underline transition-colors"
              >
                Formulário de inscrição
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Redes Sociais */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#DE8728]">
            Redes sociais
          </h2>
          <ul className="mt-4 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  // Fundo translúcido, ficando Terracota no hover
                  className="grid size-11 place-items-center rounded-full bg-[#F4F1EB]/10 text-[#F4F1EB] transition-colors hover:bg-[#DE8728] hover:text-white"
                >
                  <social.icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#F4F1EB]/60">
            Perfis oficiais a serem divulgados pela organização.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-[#F4F1EB]/10 pt-6 text-xs text-[#F4F1EB]/60 text-center md:text-left">
        © {new Date().getFullYear()} {eventInfo.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}