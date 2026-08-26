import { useEffect } from "react";

/**
 * Scroll suave (Lenis) sincronizado com o ScrollTrigger do GSAP.
 * Carregado dinamicamente para não pesar no bundle inicial nem quebrar o SSR.
 */
export function useSmoothScroll(): void {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let destroy: (() => void) | undefined;
    let cancelled = false;

    void (async () => {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import("lenis"),
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 1.1, smoothWheel: true });

      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      destroy = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    })();

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, []);
}
