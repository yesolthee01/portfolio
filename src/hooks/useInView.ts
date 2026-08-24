import { useEffect, useRef, useState } from 'react';

/**
 * Shared `rootMargin` for big section-level reveals (a whole homepage
 * section, or a whole `.case-section` block on a case-study/about page) —
 * pass this as `useInView(0, SECTION_REVEAL_ROOT_MARGIN)`. Every
 * section-level reveal on the site should use this same constant rather
 * than a bespoke value, so "how far into view before it reveals" stays
 * one consistent rule site-wide instead of drifting per page.
 */
export const SECTION_REVEAL_ROOT_MARGIN = '0px 0px -20% 0px';

/**
 * Lightweight scroll-reveal — pairs with the `.section` / `.section.in-view`
 * CSS transition (and the equivalent `.case-section.in-view` on case-study
 * / about pages). Fires once per element.
 *
 * `rootMargin` shrinks the browser's intersection root before computing
 * `threshold` against it — a negative bottom value (e.g. `-20%`) pulls the
 * effective viewport edge up, so a large block only counts as "in view"
 * once it's scrolled meaningfully past the bottom edge, not the instant it
 * pokes in. Used for big section-level reveals (whole page sections),
 * where the default (no shrink) let the reveal finish playing while the
 * section was still mostly below the fold — by the time you could actually
 * see it, the animation was already over. Per-item reveals (cards, loop
 * steps, etc.) don't need this: leave `rootMargin` at its default there.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15, rootMargin = '0px') {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}
