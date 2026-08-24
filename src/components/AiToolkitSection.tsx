import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView, SECTION_REVEAL_ROOT_MARGIN } from '../hooks/useInView';
import { AiCard } from './AiCard';

export function AiToolkitSection() {
  const { lang } = useLanguage();
  const ai = siteCopy[lang].aiToolkit;
  const { ref, inView } = useInView<HTMLDivElement>(0, SECTION_REVEAL_ROOT_MARGIN);

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
              <AiCard markBg={item.markBg} mark={item.mark} title={item.title} desc={item.desc} key={item.title} />
            ))}
          </div>
          {category.note && <p className="toolkit-category-note">{category.note}</p>}
        </div>
      ))}
    </div>
  );
}
