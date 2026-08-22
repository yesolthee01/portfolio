import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';
import { renderInlineMarkup } from '../utils/markup';

export function AboutSection() {
  const { lang } = useLanguage();
  const about = siteCopy[lang].about;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div id="about" className={`section${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section-head">
        <h2 className="section-title">
          <span className="idx">01</span> {about.title}
        </h2>
      </div>
      <div className="about-grid">
        <div>
          {about.body.split('\n').map((para, i) => (
            <p className="about-body" key={i}>
              {renderInlineMarkup(para)}
            </p>
          ))}
          <Link to="/about" className="about-more-link">
            {about.moreAboutLabel}
          </Link>
        </div>
        <div className="about-points">
          {[about.kw1, about.kw2, about.kw3, about.kw4].map((point, i) => (
            <div className="about-point" key={point}>
              <span className="about-point-index">{String(i + 1).padStart(2, '0')}</span>
              <span className="about-point-text">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
