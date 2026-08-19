import { Link } from 'react-router-dom';
import type { Project } from '../data/types';
import { useLanguage } from '../i18n/LanguageContext';
import { ProjectImage } from './ProjectImage';

export function WorkCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const card = project.card[lang];

  return (
    <Link to={`/work/${project.slug}`} className="card press-bounce">
      <div className="card-visual">
        <ProjectImage src={project.images.thumb} alt={card.title} label={card.imgLabel} />
      </div>
      <div className="card-body">
        <div className="card-eyebrow">{card.imgLabel}</div>
        <h3 className="card-title">{card.title}</h3>
        <p className="card-desc">{card.desc}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span className={`tag glass medium-${project.medium}`} key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
