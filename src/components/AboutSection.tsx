import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';

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
              {para}
            </p>
          ))}
          <Link to="/about" className="about-more-link">
            {about.moreAboutLabel}
          </Link>
        </div>
        <div className="about-keywords">
          <div className="about-keyword glass">{about.kw1}</div>
          <div className="about-keyword glass">{about.kw2}</div>
          <div className="about-keyword glass">{about.kw3}</div>
          <div className="about-keyword glass">{about.kw4}</div>
        </div>
      </div>
    </div>
  );
}
