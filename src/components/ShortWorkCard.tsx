import type { RefObject } from 'react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/types';
import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

/** Compact, single-screen summary card — used for 'short'-tier projects
 * to keep the card small. When the project also has `process` +
 * `caseStudy` set, the whole card links through to its /work/:slug case
 * study page (same as a full-tier card); otherwise it's a static block. */
export function ShortWorkCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const card = project.card[lang];
  const result = project.resultLine?.[lang];
  const hasCaseStudy = Boolean(project.caseStudy && project.process);
  // Own scroll-reveal, independent of sibling cards — see the SCROLL
  // REVEAL block in global.css. `hasCaseStudy` is fixed for the lifetime
  // of a mounted card (derived from static project data), so it's safe
  // to reuse this one ref/inView pair across both branches below.
  const { ref, inView } = useInView<HTMLAnchorElement>(0.2);

  const content = (
    <>
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
    </>
  );

  if (hasCaseStudy) {
    return (
      <Link
        to={`/work/${project.slug}`}
        className={`short-card glass press-bounce${inView ? ' in-view' : ''}`}
        ref={ref}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={`short-card glass${inView ? ' in-view' : ''}`} ref={ref as unknown as RefObject<HTMLDivElement>}>
      {content}
    </div>
  );
}
