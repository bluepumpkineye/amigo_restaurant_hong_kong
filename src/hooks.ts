import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* usePrefersReducedMotion                                              */
/* ------------------------------------------------------------------ */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
}

/* ------------------------------------------------------------------ */
/* useScrollReveal — one global observer toggles .is-visible on all    */
/* .reveal / .reveal-img / .char elements. Stagger via --reveal-delay. */
/* ------------------------------------------------------------------ */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-img, .char")
    );

    // Reduced motion: show everything immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ------------------------------------------------------------------ */
/* useParallax — gentle, rAF-throttled vertical drift for elements     */
/* carrying data-parallax="0.15" (speed fraction).                     */
/* ------------------------------------------------------------------ */
export function useParallax() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (nodes.length === 0) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      const vh = window.innerHeight;
      nodes.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0");
        const rect = el.getBoundingClientRect();
        // distance of element center from viewport center, as fraction of vh
        const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-offset * speed * 100).toFixed(
          2
        )}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        raf = requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* ------------------------------------------------------------------ */
/* useScrollLock — lock body scroll while overlay is open              */
/* ------------------------------------------------------------------ */
export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}

/* ------------------------------------------------------------------ */
/* useScrolled — boolean past a threshold (for sticky nav)             */
/* ------------------------------------------------------------------ */
export function useScrolled(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}
