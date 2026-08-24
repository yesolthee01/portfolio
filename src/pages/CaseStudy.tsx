import { useRef, useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { Nav } from '../components/Nav';
import { ProjectImage } from '../components/ProjectImage';
import { useLanguage } from '../i18n/LanguageContext';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import { useInView } from '../hooks/useInView';
import type { Finding, LoopStep, AgeCard, RoleCard, PrincipleQA } from '../data/types';

function HeroGallery({ images, alt, label }: { images: string[]; alt: string; label: string }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  // One-shot "peek" nudge on first entering the page, hinting the hero is
  // swipeable — a small CSS transform on the track, independent of real
  // scroll position, so it can't desync from the actual slide index.
  const { ref: peekRef, inView: peek } = useInView<HTMLDivElement>(0.4);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.min(images.length - 1, Math.max(0, i));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setIndex(Math.min(images.length - 1, Math.max(0, i)));
  };

  return (
    <div className="case-hero-gallery" ref={peekRef}>
      <div
        className={`case-hero-gallery-track${peek ? ' peek' : ''}`}
        ref={trackRef}
        onScroll={handleScroll}
      >
        {images.map((src, i) => (
          <div className="case-hero-gallery-slide" key={src}>
            <ProjectImage
              src={src}
              alt={`${alt} ${i + 1}`}
              label={`${label} ${i + 1}/${images.length}`}
              className="case-hero-gallery-img"
            />
          </div>
        ))}
      </div>

      {index > 0 && (
        <button
          type="button"
          className="case-hero-gallery-arrow case-hero-gallery-arrow--prev"
          aria-label="Previous photo"
          onClick={() => scrollToIndex(index - 1)}
        >
          ←
        </button>
      )}
      {index < images.length - 1 && (
        <button
          type="button"
          className="case-hero-gallery-arrow case-hero-gallery-arrow--next"
          aria-label="Next photo"
          onClick={() => scrollToIndex(index + 1)}
        >
          →
        </button>
      )}

      <div className="case-hero-gallery-dots">
        {images.map((src, i) => (
          <button
            type="button"
            className={`case-hero-gallery-dot${i === index ? ' active' : ''}`}
            key={src}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => scrollToIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

function FindingCard({
  finding,
  index,
  variant,
}: {
  finding: Finding;
  index: number;
  variant?: 'featured' | 'compact' | 'banner';
}) {
  return (
    <div className={`finding-card glass${variant ? ` finding-card--${variant}` : ''}`}>
      {finding.image && (
        <div className="finding-image-box">
          <ProjectImage
            src={finding.image}
            alt={finding.title}
            label={finding.imageLabel ?? finding.title}
            className="finding-image"
          />
        </div>
      )}
      <div className="finding-card-body">
        <div className="finding-index">{String(index + 1).padStart(2, '0')}</div>
        <h3>{finding.title}</h3>
        <p className="finding-issue">{finding.issue}</p>
        <p className="finding-fix">{finding.fix}</p>
      </div>
    </div>
  );
}

function AgeCardRow({ card, index }: { card: AgeCard; index: number }) {
  return (
    <div className="age-card glass">
      <div className="age-card-head">
        <div className="age-card-index">{String(index + 1).padStart(2, '0')}</div>
        <div>
          <div className="age-card-group">{card.ageGroup}</div>
          <div className="age-card-tagline">{card.tagline}</div>
        </div>
      </div>
      <div className="age-card-body">
        <div className="age-card-field">
          <span className="age-card-field-label">Research Insight</span>
          <p>{card.insight}</p>
        </div>
        <div className="age-card-field">
          <span className="age-card-field-label">Design Translation</span>
          <p>{card.translation}</p>
        </div>
        <div className="age-card-field age-card-field--interaction">
          <p>{card.interaction}</p>
        </div>
      </div>
    </div>
  );
}

function RoleCardRow({ card, index }: { card: RoleCard; index: number }) {
  return (
    <div className="role-card glass">
      <div className="role-card-head">
        <div className="role-card-index">{String(index + 1).padStart(2, '0')}</div>
        <div>
          <div className="role-card-role">{card.role}</div>
          <div className="role-card-focus">{card.focus}</div>
        </div>
      </div>
      <p className="role-card-desc">{card.desc}</p>
      <div className="role-card-priority">
        <span className="role-card-priority-label">{card.priorityLabel}</span>
        <div className="tag-row">
          {card.priority.map((item) => (
            <span className="tag glass" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrincipleQACard({ qa }: { qa: PrincipleQA }) {
  return (
    <div className="qa-card glass">
      <div className="qa-role">{qa.role}</div>
      <p className="qa-question">“{qa.question}”</p>
      <p className="qa-answer">→ {qa.answer}</p>
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
  const findingsBanner = cs.findingsImageLayout === 'banner';

  return (
    <div className="page">
      <Nav variant="case" backHref="/#work" backLabel={cs.backToWorkLabel} />

      <div className="frame">
        <div className="case-hero">
          <div className="card-eyebrow case-eyebrow">{cs.eyebrow}</div>
          <h1 className="case-title">{cs.title}</h1>
          <p className="case-subtitle">{cs.subtitle}</p>
          {project.heroVideo ? (
            <div className="case-hero-video">
              <iframe
                src={`https://www.youtube.com/embed/${project.heroVideo}`}
                title={cs.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : project.heroImages && project.heroImages.length > 1 ? (
            <HeroGallery images={project.heroImages} alt={cs.title} label={cs.heroLabel} />
          ) : (
            <ProjectImage
              src={project.images.hero}
              alt={cs.title}
              label={cs.heroLabel}
              className="case-hero-image"
            />
          )}
        </div>

        {cs.principleQA && cs.principleQA.length > 0 ? (
          <div className="case-section case-principle">
            <div className="case-section-label case-principle-label">{cs.principleLabel ?? 'DESIGN PRINCIPLE'}</div>
            {cs.principleIntro && <p className="case-principle-intro">{cs.principleIntro}</p>}
            <div className="principle-qa-grid">
              {cs.principleQA.map((qa) => (
                <PrincipleQACard qa={qa} key={qa.role} />
              ))}
            </div>
            {cs.principleClosing && <p className="case-principle-closing">{cs.principleClosing}</p>}
          </div>
        ) : (
          cs.principle && (
            <div className="case-section case-principle">
              <div className="case-section-label case-principle-label">{cs.principleLabel ?? 'DESIGN PRINCIPLE'}</div>
              <div className="case-principle-card glass">
                <p className="case-principle-body">{cs.principle}</p>
              </div>
            </div>
          )
        )}

        {cs.role && (
          <div className="case-section case-row">
            <div className="case-section-label case-row-label">{cs.roleLabel ?? 'MY ROLE'}</div>
            <p className="case-row-body">{cs.role}</p>
          </div>
        )}

        <div className="case-section case-row">
          <div className="case-section-label case-row-label">{cs.problemLabel}</div>
          <p className="case-row-body">{cs.problem}</p>
        </div>

        {cs.solution && cs.solution.length > 0 && (
          <div className="case-section case-solution">
            <div className="case-section-label case-solution-label">{cs.solutionLabel ?? 'THE SOLUTION'}</div>
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
          <div className="case-section case-loop">
            <div className="case-section-label case-loop-label">{cs.loopLabel ?? 'LEARNING LOOP'}</div>
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

        {cs.researchBasis && (
          <div className="case-section case-row">
            <div className="case-section-label case-row-label">{cs.researchBasisLabel ?? 'RESEARCH BASIS'}</div>
            <p className="case-row-body">{cs.researchBasis}</p>
          </div>
        )}

        {cs.ageCards && cs.ageCards.length > 0 && (
          <div className="case-section case-research">
            <div className="case-section-label case-research-label">{cs.researchLabel ?? 'RESEARCH → DESIGN TRANSLATION'}</div>
            {cs.researchIntro && <p className="case-research-intro">{cs.researchIntro}</p>}
            <div className="age-cards">
              {cs.ageCards.map((card, i) => (
                <AgeCardRow card={card} index={i} key={card.ageGroup} />
              ))}
            </div>
          </div>
        )}

        {cs.roleCards && cs.roleCards.length > 0 && (
          <div className="case-section case-roles">
            <div className="case-section-label case-roles-label">{cs.rolesLabel ?? 'ROLE-BASED UX'}</div>
            {cs.rolesIntro && <p className="case-roles-intro">{cs.rolesIntro}</p>}
            <div className="role-cards">
              {cs.roleCards.map((card, i) => (
                <RoleCardRow card={card} index={i} key={card.role} />
              ))}
            </div>
          </div>
        )}

        <div className="case-section case-process">
          <div className="case-section-label case-process-label">{cs.processLabel}</div>
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
          <div className="case-section case-findings">
            <div className="case-section-label case-findings-label">{cs.findingsLabel ?? 'FROM USER TESTING'}</div>
            {cs.findingsIntro && <p className="case-findings-intro">{cs.findingsIntro}</p>}
            {findingsBanner ? (
              <div className="findings-grid findings-grid--banner">
                {findings.map((finding, i) => (
                  <FindingCard finding={finding} index={i} variant="banner" key={finding.title} />
                ))}
              </div>
            ) : findingsSplit ? (
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

        <div className="case-section case-row">
          <div className="case-section-label case-row-label">{cs.resultLabel}</div>
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
