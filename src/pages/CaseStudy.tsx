import { Navigate, useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { ProjectImage } from '../components/ProjectImage';
import { useLanguage } from '../i18n/LanguageContext';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project || !project.caseStudy || !project.process) {
    return <Navigate to="/" replace />;
  }

  const cs = project.caseStudy[lang];
  const process = project.process[lang];
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <div className="page">
      <Nav variant="case" backHref="/#work" backLabel={cs.backToWorkLabel} />

      <div className="frame">
        <div className="case-hero">
          <div className="eyebrow glass">{cs.eyebrow}</div>
          <h1 className="case-title">{cs.title}</h1>
          <p className="case-subtitle">{cs.subtitle}</p>
          <ProjectImage
            src={project.images.hero}
            alt={cs.title}
            label={cs.heroLabel}
            className="case-hero-image"
          />
        </div>

        {cs.role && (
          <div className="case-row">
            <div className="case-row-label">{cs.roleLabel ?? 'MY ROLE'}</div>
            <p className="case-row-body">{cs.role}</p>
          </div>
        )}

        <div className="case-row">
          <div className="case-row-label">{cs.problemLabel}</div>
          <p className="case-row-body">{cs.problem}</p>
        </div>

        <div className="case-process">
          <div className="case-process-label">{cs.processLabel}</div>
          <div className="process-grid">
            {process.map((step, i) => (
              <div className="process-card glass" key={step.title}>
                <div className="process-index">{String(i + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-row">
          <div className="case-row-label">{cs.resultLabel}</div>
          <p className="case-row-body">{cs.result}</p>
        </div>

        <div className="case-footer-nav">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="btn btn-outline press-bounce">
              {cs.prevLabel}
            </Link>
          ) : (
            <span className="btn-disabled">{cs.prevLabel}</span>
          )}

          <Link to={next ? `/work/${next.slug}` : '/#work'} className="btn btn-primary press-bounce">
            {cs.nextLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
