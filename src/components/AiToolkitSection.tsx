import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';

export function AiToolkitSection() {
  const { lang } = useLanguage();
  const ai = siteCopy[lang].aiToolkit;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div id="ai" className={`section${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section-head">
        <h2 className="section-title">
          <span className="idx">02</span> {ai.title}
        </h2>
        <div className="section-meta">{ai.sub}</div>
      </div>
      <div className="ai-grid">
        {ai.items.map((item) => (
          <div className="ai-card glass" key={item.title}>
            <div className="ai-mark" style={{ background: item.markBg }}>
              {item.mark}
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
