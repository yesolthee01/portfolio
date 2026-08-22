import { Fragment } from 'react';
import { Nav } from '../components/Nav';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import type { ExperienceItem, ActivityItem } from '../data/types';

/** A vertical line-and-dot timeline (date left, marker center, content
 * right) — one shared CSS grid per list so a single continuous line can
 * span every entry, with each entry contributing 3 grid cells (date /
 * dot / content) in document order. */
function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="exp-timeline">
      <div className="exp-timeline-line" />
      {items.map((item) => (
        <Fragment key={`${item.org}-${item.period}`}>
          <div className="exp-timeline-date">{item.period}</div>
          <div className="exp-timeline-dot" />
          <div className="exp-timeline-content">
            <div className="exp-role">{item.role}</div>
            <div className="exp-org">
              {item.org} · {item.location}
            </div>
            <ul className="exp-bullets">
              {item.highlights.map((line, hi) => (
                <li key={hi}>{line}</li>
              ))}
            </ul>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

function ActivityRow({ item }: { item: ActivityItem }) {
  return (
    <div className="activity-item">
      <div className="activity-org">{item.org}</div>
      <div className="activity-role">{item.role}</div>
      {item.note && <div className="activity-note">{item.note}</div>}
    </div>
  );
}

export function About() {
  const { lang } = useLanguage();
  const ap = siteCopy[lang].aboutPage;

  return (
    <div className="page">
      <Nav variant="case" backHref="/#about" backLabel={ap.backLabel} />

      <div className="frame">
        <div className="case-hero">
          <div className="eyebrow glass">{ap.eyebrow}</div>
          <h1 className="case-title">{ap.title}</h1>
          {ap.intro.split('\n').map((para, i) => (
            <p className="case-subtitle" key={i}>
              {para}
            </p>
          ))}
        </div>

        <div className="case-section">
          <div className="case-section-label about-strengths-label">{ap.strengthsLabel}</div>
          <div className="process-grid">
            {ap.strengths.map((s, i) => (
              <div className="process-card glass" key={s.title}>
                <div className="process-index">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="case-section">
          <div className="case-section-label about-exp-label">{ap.experienceLabel}</div>
          <ExperienceTimeline items={ap.experience} />
        </div>

        <div className="case-section">
          <div className="case-section-label about-exp-label">{ap.intlLabel}</div>
          <ExperienceTimeline items={ap.intlExposure} />
        </div>

        <div className="case-section case-row">
          <div className="case-section-label case-row-label">{ap.educationLabel}</div>
          <p className="case-row-body">
            {ap.educationOrg}
            <br />
            {ap.educationDept}
          </p>
        </div>

        <div className="case-section">
          <div className="case-section-label about-activities-label">{ap.activitiesLabel}</div>
          <div className="activities-grid">
            <div className="activity-group">
              <div className="activity-group-label">{ap.uxActivitiesLabel}</div>
              {ap.uxActivities.map((item) => (
                <ActivityRow item={item} key={item.org} />
              ))}
            </div>
            <div className="activity-group">
              <div className="activity-group-label">{ap.extraActivitiesLabel}</div>
              {ap.extraActivities.map((item) => (
                <ActivityRow item={item} key={item.org} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
