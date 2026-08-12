import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';

/** Placeholder slot so future projects (Mediforme, Ddor-ing, Zzero,
 * Mindway, etc.) have an obvious place to land later without needing a
 * "Coming Soon" section of their own. */
export function MoreWorkTeaser() {
  const { lang } = useLanguage();
  const more = siteCopy[lang].moreWork;

  return (
    <div className="more-work-card">
      <span className="more-work-badge">{more.badge}</span>
      <h3 className="more-work-title">{more.title}</h3>
      <p className="more-work-desc">{more.desc}</p>
    </div>
  );
}
