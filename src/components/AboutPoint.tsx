import { useInView } from '../hooks/useInView';

interface AboutPointProps {
  index: number;
  text: string;
}

/** One numbered keyword line in the About section's point list. Split out
 * from AboutSection so each point can watch its own scroll position via
 * useInView (a hook can't be called inside a .map() callback) — see the
 * SCROLL REVEAL block in global.css. */
export function AboutPoint({ index, text }: AboutPointProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div className={`about-point${inView ? ' in-view' : ''}`} ref={ref}>
      <span className="about-point-index">{String(index).padStart(2, '0')}</span>
      <span className="about-point-text">{text}</span>
    </div>
  );
}
