import type { Project } from '../data/types';
import { useLanguage } from '../i18n/LanguageContext';

/** Compact, single-screen summary for 'short'-tier projects — no case
 * study page, just image + a couple lines + the headline result. */
export function ShortWorkCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const card = project.card[lang];
  const result = project.resultLine?.[lang];

  return (
    <div className="short-card glass">
      <div className="card-eyebrow">{card.imgLabel}</div>
      <h3 className="short-card-title">{card.title}</h3>
      <p className="short-card-desc">{card.desc}</p>
      {result && <p className="short-card-result">→ {result}</p>}
      <div className="tag-row">
        {project.tags.map((tag) => (
          <span className={`tag glass medium-${project.medium}`} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
