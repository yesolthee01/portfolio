import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { fullProjects, shortProjects } from '../data/projects';
import { WorkCard } from './WorkCard';
import { ShortWorkCard } from './ShortWorkCard';
import { MoreWorkTeaser } from './MoreWorkTeaser';
import { useInView } from '../hooks/useInView';

export function WorkSection() {
  const { lang } = useLanguage();
  const work = siteCopy[lang].work;
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div id="work" className={`section${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="section-head">
        <h2 className="section-title">
          <span className="idx">02</span> {work.title}
        </h2>
        <div className="section-meta">
          {fullProjects.length} PROJECTS · {shortProjects.length} MORE
        </div>
      </div>
      <div className="work-grid">
        {fullProjects.map((project) => (
          <WorkCard project={project} key={project.slug} />
        ))}
      </div>
      <div className="short-grid">
        {shortProjects.map((project) => (
          <ShortWorkCard project={project} key={project.slug} />
        ))}
      </div>
      <MoreWorkTeaser />
    </div>
  );
}
