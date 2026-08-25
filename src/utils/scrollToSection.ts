import type { MouseEvent } from 'react';

/**
 * Handles a same-page `<a href="#id">` anchor click with an explicit
 * smooth scroll, instead of relying on the browser's native anchor jump.
 * A native jump falls back to whatever `scroll-behavior` `html` has, and
 * that's deliberately `auto` (not `smooth`) site-wide now — see the
 * comment in global.css — because a blanket smooth-scroll there used to
 * also apply to instant resets like ScrollManager's page-to-page scroll,
 * causing Previous/Next between case studies to visibly scroll up from
 * wherever you'd been reading instead of just starting at the top.
 *
 * So smooth scrolling is opted into explicitly per case instead: this
 * helper for same-page anchors (Hero's CTA buttons, Nav's home-variant
 * links — both only ever rendered on Home, where every target id already
 * exists in the DOM), and `scrollIntoView({ behavior: 'smooth' })` in
 * ScrollManager (App.tsx) for cross-page navigation that lands on a hash,
 * e.g. a case study's "back to work" link going to `/#work`.
 *
 * `preventDefault` stops the native (now-instant) jump, this performs the
 * same explicit smooth scroll, and `pushState` keeps the URL hash in sync
 * (so refresh/back-button/sharing the link still lands in the right
 * place) without triggering a second, competing scroll.
 */
export function scrollToSection(id: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', `#${id}`);
  };
}
