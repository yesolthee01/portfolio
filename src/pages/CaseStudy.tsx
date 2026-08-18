import { Navigate, useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { ProjectImage } from '../components/ProjectImage';
import { useLanguage } from '../i18n/LanguageContext';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import type { Finding, LoopStep } from '../data/types';

function FindingCard({
  finding,
  index,
  variant,
}: {
  finding: Finding;
  index: number;
  variant?: 'featured' | 'compact';
}) {
  return (
    <div className={`finding-card glass${variant ? ` finding-card--${variant}` : ''}`}>
      <div className="finding-index">{String(index + 1).padStart(2, '0')}</div>
      <h3>{finding.title}</h3>
      <p className="finding-issue">{finding.issue}</p>
      <p className="finding-fix">{finding.fix}</p>
    </div>
  );
}

function LoopStepRow({ step, index }: { step: LoopStep; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <div className={`loop-step${inView ? ' in-view' : ''}`} ref={ref}>
      <div className="loop-step-text">
        <div className="loop-step-index">{String(index + 1).padStart(2, '0')}</div>
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
      {step.image ? (
        <ProjectImage
          src={step.image}
          alt={step.title}
          label={step.imageLabel ?? `${step.title} UI`}
          className="loop-step-image"
        />
      ) : (
        <div className="img-placeholder loop-step-image">
          <span>{step.imageLabel ?? `${step.title} UI`}</span>
        </div>
      )}
    </div>
  );
}

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

  const findings = cs.findings ?? [];
  const featuredFindings = findings.filter((f) => f.featured);
  const compactFindings = findings.filter((f) => !f.featured);
  const findingsSplit = featuredFindings.length > 0 && compactFindings.length > 0;

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

        {cs.solution && cs.solution.length > 0 && (
          <div className="case-solution">
            <div className="case-solution-label">{cs.solutionLabel ?? 'THE SOLUTION'}</div>
            <div className="solution-grid">
              {cs.solution.map((pillar, i) => (
                <div className="solution-card glass" key={pillar.title}>
                  <div className="solution-index">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{pillar.title}</h3>
                  <p className="solution-subtitle">{pillar.subtitle}</p>
                  <p className="solution-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {cs.loopSteps && cs.loopSteps.length > 0 && (
          <div className="case-loop">
            <div className="case-loop-label">{cs.loopLabel ?? 'LEARNING LOOP'}</div>
            <div className="loop-flow glass">
              {cs.loopSteps.map((step, i) => (
                <span className="loop-flow-step" key={step.title}>
                  {step.title}
                  {i < cs.loopSteps!.length - 1 && <span className="loop-flow-arrow">→</span>}
                </span>
              ))}
              <span className="loop-flow-arrow loop-flow-arrow--cycle">↻</span>
            </div>
            {cs.loopIntro && <p className="case-loop-intro">{cs.loopIntro}</p>}
            <div className="loop-steps">
              {cs.loopSteps.map((step, i) => (
                <LoopStepRow step={step} index={i} key={step.title} />
              ))}
            </div>
          </div>
        )}

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

        {findings.length > 0 && (
          <div className="case-findings">
            <div className="case-findings-label">{cs.findingsLabel ?? 'FROM USER TESTING'}</div>
            {cs.findingsIntro && <p className="case-findings-intro">{cs.findingsIntro}</p>}
            {findingsSplit ? (
              <>
                <div className="findings-grid findings-grid--featured">
                  {featuredFindings.map((finding, i) => (
                    <FindingCard finding={finding} index={i} variant="featured" key={finding.title} />
                  ))}
                </div>
                <div className="findings-grid findings-grid--compact">
                  {compactFindings.map((finding, i) => (
                    <FindingCard
                      finding={finding}
                      index={featuredFindings.length + i}
                      variant="compact"
                      key={finding.title}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="findings-grid">
                {findings.map((finding, i) => (
                  <FindingCard finding={finding} index={i} key={finding.title} />
                ))}
              </div>
            )}
          </div>
        )}

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
