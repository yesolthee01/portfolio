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
          <span className="idx">03</span> {ai.title}
        </h2>
        <div className="section-meta">{ai.sub}</div>
      </div>
      {ai.categories.map((category) => (
        <div className="toolkit-category" key={category.label}>
          <div className="toolkit-category-label">{category.label}</div>
          <div className="ai-grid">
            {category.items.map((item) => (
              <div className="ai-card glass" key={item.title}>
                <div className="ai-mark" style={{ background: item.markBg }}>
                  {item.mark}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          {category.note && <p className="toolkit-category-note">{category.note}</p>}
        </div>
      ))}
    </div>
  );
}
