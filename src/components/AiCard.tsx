import { useInView } from '../hooks/useInView';

interface AiCardProps {
  markBg: string;
  mark: string;
  title: string;
  desc: string;
}

/** One tool card in the AI Toolkit grid. Split out from AiToolkitSection
 * so each card can watch its own scroll position via useInView (a hook
 * can't be called inside a .map() callback) — see the SCROLL REVEAL
 * block in global.css. */
export function AiCard({ markBg, mark, title, desc }: AiCardProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <div className={`ai-card glass${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="ai-mark" style={{ background: markBg }}>
        {mark}
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
