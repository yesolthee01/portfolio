import { useEffect, useRef } from 'react';

interface WaveDividerProps {
  /** id of the section this divider sits above — when that section
   * scrolls into view, the wave gets one bigger pulse. */
  watchId?: string;
}

/**
 * The site's signature transition motif: a wave that drifts gently and
 * continuously, then gives one bigger "ripple" pulse when the next
 * section scrolls into view. Pure CSS animation + IntersectionObserver —
 * deliberately simple and robust (a mouse-reactive canvas version was
 * tried earlier and dropped, see project notes).
 */
export function WaveDivider({ watchId }: WaveDividerProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const onAnimEnd = (e: AnimationEvent) => {
      if (e.animationName === 'wavePulse') wrap.classList.remove('pulse');
    };
    wrap.addEventListener('animationend', onAnimEnd);

    let observer: IntersectionObserver | undefined;
    const target = watchId ? document.getElementById(watchId) : null;

    if (target) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              wrap.classList.remove('pulse');
              // restart the animation
              void wrap.offsetWidth;
              wrap.classList.add('pulse');
              observer?.unobserve(target);
            }
          });
        },
        { threshold: 0.2 },
      );
      observer.observe(target);
    }

    return () => {
      wrap.removeEventListener('animationend', onAnimEnd);
      observer?.disconnect();
    };
  }, [watchId]);

  return (
    <div className="wave-wrap" ref={wrapRef} aria-hidden="true">
      <svg className="wave-svg" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path
          fill="#c7d3d6"
          opacity=".55"
          d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 C1350,100 1550,20 1800,60 C2050,100 2250,20 2400,60 L2400,120 L0,120 Z"
        />
      </svg>
      <svg className="wave-svg layer2" viewBox="0 0 2400 120" preserveAspectRatio="none">
        <path
          fill="#d9d4c7"
          opacity=".5"
          d="M0,70 C200,30 400,100 700,65 C950,35 1150,95 1400,65 C1650,35 1900,95 2400,65 L2400,120 L0,120 Z"
        />
      </svg>
    </div>
  );
}
