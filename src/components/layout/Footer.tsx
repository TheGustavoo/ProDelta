import { Instagram, Mail, MapPin } from "lucide-react";
import { eventInfo, REGISTRATION_URL } from "@/data/event";
import logo from "@/assets/logo-prodelta.png.asset.json";

const socials = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "E-mail", href: "#", icon: Mail },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo.url}
              alt="Logotipo do 1º PRODELTA"
              className="size-12 shrink-0 object-contain"
              loading="lazy"
            />
            <span className="truncate font-display text-lg font-semibold">{eventInfo.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {eventInfo.subtitle}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-clay">Evento</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>{eventInfo.dates}</li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {eventInfo.venue} — {eventInfo.city}
            </li>
            <li>
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Formulário de inscrição
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-clay">
            Redes sociais
          </h2>
          <ul className="mt-4 flex gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  className="grid size-11 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <social.icon className="size-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Perfis oficiais a serem divulgados pela organização.
          </p>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} {eventInfo.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
