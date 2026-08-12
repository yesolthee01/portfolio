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
          <span className="idx">03</span> {about.title}
        </h2>
      </div>
      <div className="about-grid">
        <div>
          <p className="about-body">{about.body}</p>
        </div>
        <div className="about-keywords">
          <div className="about-keyword glass">{about.kw1}</div>
          <div className="about-keyword glass">{about.kw2}</div>
          <div className="about-keyword glass">{about.kw3}</div>
          <div className="about-keyword glass accent">{about.kw4}</div>
        </div>
      </div>
    </div>
  );
}
