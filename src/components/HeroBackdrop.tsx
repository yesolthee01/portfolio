import { useEffect, useRef } from 'react';

/**
 * Ambient geometric backdrop behind the hero — a couple of thin outlined
 * circles and diagonal lines. Two "seesaw" pairs (ring-1 + line-1,
 * ring-2/ring-3 + line-2): as the pointer moves, each line tilts around
 * its center like a seesaw beam, and its paired ring rides the tilt,
 * moving opposite the line's lean — the way a ball would roll along a
 * tilting beam. On top of that reactive tilt, everything keeps a slow,
 * independent idle drift so the backdrop is never fully still even
 * without pointer input.
 *
 * The pointer is tracked with a proper dt-normalized spring (critically
 * damped — no bounce/overshoot) rather than a flat per-frame lerp, so the
 * shapes settle at a consistent, predictable rate regardless of monitor
 * refresh rate. Both pointer axes drive the tilt/lift math (earlier this
 * only read the horizontal position, so moving the cursor vertically did
 * nothing — the beams now react correctly no matter which way the
 * pointer moves), and the idle drift amplitude is kept well below the
 * pointer-reactive range so it never masks or fights the direct response.
 *
 * Driven entirely by a single requestAnimationFrame loop writing directly
 * to each shape's `style.transform` via refs — not React state — so
 * pointer movement never triggers a re-render. Deliberately NOT a CSS
 * animation: a CSS `animation` and this rAF loop would both be trying to
 * own the same `transform` property and fight each other.
 */
export function HeroBackdrop() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGSVGElement>(null);
  const line1Ref = useRef<SVGSVGElement>(null);
  const ring2Ref = useRef<SVGSVGElement>(null);
  const line2Ref = useRef<SVGSVGElement>(null);
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
    let velX = 0;
    let velY = 0;
    let raf = 0;
    const start = performance.now();
    let prev = start;

    // Critically damped spring (mass = 1): snaps to the pointer within a
    // couple hundred ms with zero overshoot/oscillation, instead of the
    // old flat 0.06-per-frame lerp (frame-rate dependent, and slow enough
    // to read as "not quite tracking the cursor"). damping ≈ 2*sqrt(stiffness)
    // is the critical point; nudged slightly past it so it settles cleanly.
    const STIFFNESS = 70;
    const DAMPING = 17;

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
      // Clamp dt so a dropped/backgrounded tab doesn't fling the spring on
      // return (e.g. after alt-tabbing away for a minute).
      const dt = Math.min((now - prev) / 1000, 1 / 30);
      prev = now;

      const accX = (targetX - smoothX) * STIFFNESS - velX * DAMPING;
      velX += accX * dt;
      smoothX += velX * dt;

      const accY = (targetY - smoothY) * STIFFNESS - velY * DAMPING;
      velY += accY * dt;
      smoothY += velY * dt;

      // Seesaw pair 1 (top-left): line-1 tilts mainly with the pointer's
      // horizontal position, with a lighter vertical contribution so
      // moving the cursor up/down also visibly moves the beam instead of
      // being ignored; ring-1 rides the opposite end.
      const tilt1 = smoothX * 9 + smoothY * 4;
      const idleFloat1 = Math.sin(t * 0.12) * 9;
      if (line1Ref.current) {
        const driftX = Math.sin(t * 0.08) * 6;
        const driftY = Math.cos(t * 0.1) * 5;
        line1Ref.current.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${tilt1}deg)`;
      }
      if (ring1Ref.current) {
        const seesawLift = smoothX * -20 + smoothY * -9;
        const driftX = Math.cos(t * 0.09) * 7;
        ring1Ref.current.style.transform = `translate(${driftX}px, ${idleFloat1 + seesawLift}px)`;
      }

      // Seesaw pair 2 (bottom-right): line-2 tilts the opposite sense;
      // ring-2 rides it.
      const tilt2 = smoothX * -8 + smoothY * -3;
      const idleFloat2 = Math.sin(t * 0.1 + 2) * 10;
      if (line2Ref.current) {
        const driftX = Math.sin(t * 0.07 + 1) * -7;
        const driftY = Math.cos(t * 0.09) * 6;
        line2Ref.current.style.transform = `translate(${driftX}px, ${driftY}px) rotate(${tilt2}deg)`;
      }
      if (ring2Ref.current) {
        const seesawLift = smoothX * 18 + smoothY * 8;
        const driftX = Math.cos(t * 0.08 + 1) * -8;
        ring2Ref.current.style.transform = `translate(${driftX}px, ${idleFloat2 + seesawLift}px)`;
      }

      // ring-3: no paired beam — a gentle pointer-parallax drift plus a
      // slow continuous spin, both computed here since JS now owns this
      // element's transform too.
      if (ring3Ref.current) {
        const spin = (t * 6) % 360;
        ring3Ref.current.style.transform = `translate(${smoothX * 16}px, ${smoothY * 16}px) rotate(${spin}deg)`;
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
      <svg className="hero-shape--ring-1" viewBox="0 0 100 100" ref={ring1Ref}>
        <circle className="hero-shape" cx="50" cy="50" r="46" strokeWidth="0.6" />
      </svg>
      <svg className="hero-shape--line-1" viewBox="0 0 100 100" preserveAspectRatio="none" ref={line1Ref}>
        <line className="hero-shape" x1="0" y1="90" x2="100" y2="10" strokeWidth="0.5" />
      </svg>
      <svg className="hero-shape--ring-3" viewBox="0 0 100 100" ref={ring3Ref}>
        <circle className="hero-shape" cx="50" cy="50" r="47" strokeWidth="0.8" />
      </svg>
      <svg className="hero-shape--line-2" viewBox="0 0 100 100" preserveAspectRatio="none" ref={line2Ref}>
        <line className="hero-shape" x1="0" y1="15" x2="100" y2="85" strokeWidth="0.5" />
      </svg>
      <svg className="hero-shape--ring-2" viewBox="0 0 100 100" ref={ring2Ref}>
        <circle className="hero-shape" cx="50" cy="50" r="46" strokeWidth="0.6" />
      </svg>
    </div>
  );
}
