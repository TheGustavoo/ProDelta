import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Objectives } from "@/components/sections/Objectives";
import { Schedule } from "@/components/sections/Schedule";
import { Speakers } from "@/components/sections/Speakers";
import { Topics } from "@/components/sections/Topics";
import { Organization } from "@/components/sections/Organization";
import { Partners } from "@/components/sections/Partners";
import { Registration } from "@/components/sections/Registration";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { eventInfo, aboutText } from "@/data/event";

const title = "1º PRODELTA 2026 — Produção e Nutrição Animal do Delta";
const description =
  "Workshop de Produção e Nutrição Animal do Delta do Parnaíba: 25 a 27 de novembro de 2026, na UNINASSAU, Parnaíba-PI. Inscrições abertas.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: `${eventInfo.name} — ${eventInfo.subtitle}`,
          description: aboutText,
          startDate: eventInfo.datesISO.start,
          endDate: eventInfo.datesISO.end,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: eventInfo.venue,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Parnaíba",
              addressRegion: "PI",
              addressCountry: "BR",
            },
          },
        }),
      },
    ],
  }),
});

function Index() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <Schedule />
        <Speakers />
        <Topics />
        <Organization />
        <Partners />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}
