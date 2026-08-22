import { Nav } from '../components/Nav';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import type { ExperienceItem, ActivityItem } from '../data/types';

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <div className="exp-card glass">
      <div className="exp-card-head">
        <div className="exp-card-index">{String(index + 1).padStart(2, '0')}</div>
        <div className="exp-card-heading">
          <div className="exp-role">{item.role}</div>
          <div className="exp-org">
            {item.org} · {item.location}
          </div>
        </div>
        <div className="exp-period">{item.period}</div>
      </div>
      <ul className="exp-bullets">
        {item.highlights.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
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
          <p className="case-subtitle">{ap.intro}</p>
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
          <div className="exp-list">
            {ap.experience.map((item, i) => (
              <ExperienceCard item={item} index={i} key={`${item.org}-${item.period}`} />
            ))}
          </div>
        </div>

        <div className="case-section">
          <div className="case-section-label about-exp-label">{ap.intlLabel}</div>
          <div className="exp-list">
            {ap.intlExposure.map((item, i) => (
              <ExperienceCard item={item} index={i} key={`${item.org}-${item.period}-intl`} />
            ))}
          </div>
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
