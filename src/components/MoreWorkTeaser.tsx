import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { useInView } from '../hooks/useInView';

/** Placeholder slot so future projects (Mediforme, Ddor-ing, Zzero,
 * Mindway, etc.) have an obvious place to land later without needing a
 * "Coming Soon" section of their own. */
export function MoreWorkTeaser() {
  const { lang } = useLanguage();
  const more = siteCopy[lang].moreWork;
  // Own scroll-reveal, independent of the cards above it — see the
  // SCROLL REVEAL block in global.css.
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <div className={`more-work-card${inView ? ' in-view' : ''}`} ref={ref}>
      <span className="more-work-badge">{more.badge}</span>
      <h3 className="more-work-title">{more.title}</h3>
      <p className="more-work-desc">{more.desc}</p>
    </div>
  );
}
