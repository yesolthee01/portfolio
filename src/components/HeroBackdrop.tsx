import { useEffect, useRef } from 'react';

/**
 * Ambient geometric backdrop behind the hero — two "seesaw" pairs, each a
 * single <svg> holding one diagonal line (the beam) and one filled ball
 * riding on it, plus a lone slowly-spinning ring for extra ambience.
 *
 * Each pair reacts to the pointer two ways at once, so the connection to
 * mouse movement reads clearly instead of feeling like background noise:
 *   - the whole line+ball group *rotates* (the beam visibly tilts), and
 *   - the ball *slides along the beam's own length* (like a marble
 *     rolling toward the lower end) — its cx/cy are computed by moving a
 *     point along the line's local (unrotated) coordinates, then nudged
 *     outward along the line's perpendicular so it visually rests just
 *     above the stroke rather than straddling it. Since that slide + the
 *     perpendicular nudge both happen in local space, the ball stays
 *     glued to the beam through the rigid rotation applied on top.
 * A slow idle sway/spin/drift runs underneath the pointer-driven motion
 * so the backdrop is never fully still, even with no pointer input.
 *
 * Driven entirely by a single requestAnimationFrame loop writing directly
 * to each shape's attributes/style via refs — not React state — so
 * pointer movement never triggers a re-render. Deliberately not a CSS
 * animation: a CSS `animation` and this rAF loop would both be trying to
 * own the same properties and fight each other.
 */

interface Beam {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  /** Unit perpendicular, pre-flipped to point "up" (negative y) so the
   * ball reads as resting on top of the beam rather than under it. */
  nx: number;
  ny: number;
}

function makeBeam(x1: number, y1: number, x2: number, y2: number): Beam {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  let nx = -dy / len;
  let ny = dx / len;
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  return { x1, y1, x2, y2, nx, ny };
}

// Local, unrotated coordinates in each pair's own 0-100 viewBox.
const BEAM_1 = makeBeam(6, 82, 94, 18);
const BEAM_2 = makeBeam(6, 18, 94, 82);

function placeBall(ball: SVGCircleElement | null, beam: Beam, tOffset: number, radius: number) {
  if (!ball) return;
  const t = Math.min(0.92, Math.max(0.08, 0.5 + tOffset));
  const lineX = beam.x1 + (beam.x2 - beam.x1) * t;
  const lineY = beam.y1 + (beam.y2 - beam.y1) * t;
  const offset = radius + 1.4;
  ball.setAttribute('cx', String(lineX + beam.nx * offset));
  ball.setAttribute('cy', String(lineY + beam.ny * offset));
}

export function HeroBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svg1Ref = useRef<SVGSVGElement>(null);
  const ball1Ref = useRef<SVGCircleElement>(null);
  const svg2Ref = useRef<SVGSVGElement>(null);
  const ball2Ref = useRef<SVGCircleElement>(null);
  const ring3Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    // .hero-backdrop is `pointer-events: none` (it has to be, so it never
    // blocks clicks on the hero content sitting above it) — which also
    // means it never receives mouse events itself. Track the pointer on
    // its parent (.hero, the actual hit-testable element) instead.
    const hitTarget = root?.parentElement;
    if (!root || !hitTarget) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let smoothX = 0;
    let smoothY = 0;
    let raf = 0;
    const start = performance.now();

    function onMove(e: MouseEvent) {
      const rect = hitTarget!.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      targetY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    }
    function onLeave() {
      targetX = 0;
      targetY = 0;
    }

    function tick(now: number) {
      const t = (now - start) / 1000;
      // Ease the raw pointer position toward smoothed values so the
      // seesaw settles instead of snapping. Snappier than a purely
      // ambient drift would need, so the response to pointer movement
      // reads immediately rather than lagging behind it.
      smoothX += (targetX - smoothX) * 0.12;
      smoothY += (targetY - smoothY) * 0.12;

      // Pair 1 (top-left beam, running lower-left to upper-right): tilts
      // with the pointer, ball slides along the beam toward the
      // pointer's side. A gentle idle sway keeps it alive with no
      // pointer input.
      const tilt1 = smoothX * 16 + Math.sin(t * 0.2) * 2.5;
      placeBall(ball1Ref.current, BEAM_1, smoothX * 0.36 + Math.sin(t * 0.15) * 0.05, 4.2);
      if (svg1Ref.current) {
        const driftX = Math.sin(t * 0.09) * 8;
        const driftY = Math.cos(t * 0.11) * 6;
        svg1Ref.current.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${tilt1}deg)`;
      }

      // Pair 2 (bottom-right beam, running upper-left to lower-right):
      // tilts and slides the opposite sense, so the two never move in
      // lockstep with each other.
      const tilt2 = smoothX * -14 + Math.sin(t * 0.17 + 2) * 2.5;
      placeBall(ball2Ref.current, BEAM_2, smoothX * -0.34 + Math.sin(t * 0.13 + 1) * 0.05, 3.8);
      if (svg2Ref.current) {
        const driftX = Math.cos(t * 0.1 + 1) * -8;
        const driftY = Math.sin(t * 0.08 + 2) * 6;
        svg2Ref.current.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${tilt2}deg)`;
      }

      // Lone ring: continuous spin plus a clearly-visible pointer
      // parallax.
      if (ring3Ref.current) {
        const spin = (t * 7) % 360;
        ring3Ref.current.style.transform = `translate(${smoothX * 24}px, ${smoothY * 24}px) rotate(${spin}deg)`;
      }

      raf = requestAnimationFrame(tick);
    }

    hitTarget.addEventListener('mousemove', onMove);
    hitTarget.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      hitTarget.removeEventListener('mousemove', onMove);
      hitTarget.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero-backdrop" ref={rootRef} aria-hidden="true">
      <svg className="hero-seesaw--1" viewBox="0 0 100 100" ref={svg1Ref}>
        <line className="hero-seesaw-line" x1="6" y1="82" x2="94" y2="18" />
        <circle className="hero-seesaw-ball" ref={ball1Ref} cx="50" cy="46" r="4.2" />
      </svg>
      <svg className="hero-shape--ring-3" viewBox="0 0 100 100" ref={ring3Ref}>
        <circle className="hero-shape" cx="50" cy="50" r="47" strokeWidth="0.8" />
      </svg>
      <svg className="hero-seesaw--2" viewBox="0 0 100 100" ref={svg2Ref}>
        <line className="hero-seesaw-line" x1="6" y1="18" x2="94" y2="82" />
        <circle className="hero-seesaw-ball" ref={ball2Ref} cx="50" cy="54" r="3.8" />
      </svg>
    </div>
  );
}
