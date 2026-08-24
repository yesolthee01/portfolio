import { useEffect } from 'react';

/**
 * The single global interaction pass: a soft glow that follows the cursor
 * across every card surface (see the `.card::after` etc. rules in
 * global.css). One delegated `pointermove` listener on `document` finds
 * the hovered card via `closest()` and writes its pointer position as
 * `--spot-x`/`--spot-y` (percentages) — the CSS radial-gradient and
 * hover opacity do the rest. Mounted once from `App.tsx`.
 *
 * Skipped entirely on touch/coarse-pointer devices and for
 * prefers-reduced-motion, matching the CSS gates in global.css.
 */
const SPOTLIGHT_SELECTOR = [
  '.card',
  '.short-card',
  '.ai-card',
  '.finding-card',
  '.age-card',
  '.role-card',
  '.qa-card',
  '.solution-card',
  '.process-card',
  '.case-principle-card',
].join(', ');

export function useCursorSpotlight() {
  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!canHover || reducedMotion) return;

    let raf = 0;

    const handleMove = (event: PointerEvent) => {
      const target = event.target as Element | null;
      const card = target?.closest(SPOTLIGHT_SELECTOR) as HTMLElement | null;
      if (!card) return;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--spot-x', `${x}%`);
        card.style.setProperty('--spot-y', `${y}%`);
      });
    };

    document.addEventListener('pointermove', handleMove, { passive: true });
    return () => {
      document.removeEventListener('pointermove', handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}
