import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { projectsByOrder } from '../data/projects';
import { WorkCard } from './WorkCard';

export function WorkSection() {
  const { lang } = useLanguage();
  const work = siteCopy[lang].work;

  return (
    <div id="work" className="section">
      <div className="section-head">
        <h2 className="section-title">{work.title}</h2>
        <div className="section-meta">{work.count}</div>
      </div>
      <div className="work-grid">
        {projectsByOrder.map((project) => (
          <WorkCard project={project} key={project.slug} />
        ))}
      </div>
    </div>
  );
}
