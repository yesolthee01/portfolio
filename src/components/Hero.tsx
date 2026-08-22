import { Fragment } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { renderInlineMarkup } from '../utils/markup';

/** Parses hero headline markup: '\n' -> line break, '**word**' -> emphasis
 * (see `renderInlineMarkup`; `.hero-title strong` renders it as an accent
 * span). Keeps the copy in `site.ts` as plain, readable strings while still
 * giving each line an exact, deliberate break point (see the `headline`
 * field's doc comment for why that matters at this font size). */
function renderHeadline(headline: string) {
  return headline.split('\n').map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {renderInlineMarkup(line)}
    </Fragment>
  ));
}

export function Hero() {
  const { lang } = useLanguage();
  const hero = siteCopy[lang].hero;

  return (
    <div className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <svg className="hero-shape--ring-1" viewBox="0 0 100 100">
          <circle className="hero-shape" cx="50" cy="50" r="46" strokeWidth="0.6" />
        </svg>
        <svg className="hero-shape--line-1" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line className="hero-shape" x1="0" y1="90" x2="100" y2="10" strokeWidth="0.5" />
        </svg>
        <svg className="hero-shape--ring-3" viewBox="0 0 100 100">
          <circle className="hero-shape" cx="50" cy="50" r="47" strokeWidth="0.8" />
        </svg>
        <svg className="hero-shape--line-2" viewBox="0 0 100 100" preserveAspectRatio="none">
          <line className="hero-shape" x1="0" y1="15" x2="100" y2="85" strokeWidth="0.5" />
        </svg>
        <svg className="hero-shape--ring-2" viewBox="0 0 100 100">
          <circle className="hero-shape" cx="50" cy="50" r="46" strokeWidth="0.6" />
        </svg>
      </div>

      <div className="hero-inner">
        <div className="eyebrow glass hero-reveal" style={{ animationDelay: '0s' }}>
          <b>{hero.eyebrow}</b>
        </div>

        <h1 className="hero-title hero-reveal" style={{ animationDelay: '0.12s' }}>
          {renderHeadline(hero.headline)}
        </h1>

        <p className="hero-sub hero-reveal" style={{ animationDelay: '0.24s' }}>
          {hero.subLine1}
          <br />
          {hero.subLine2}
        </p>

        <div className="chip-row hero-reveal" style={{ animationDelay: '0.34s' }}>
          {hero.chips.map((chip) => (
            <span className="chip glass" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <div className="hero-cta hero-reveal" style={{ animationDelay: '0.44s' }}>
          <a href="#work" className="btn btn-primary press-bounce">
            {hero.ctaWork}
          </a>
          <a href="#about" className="btn btn-outline press-bounce">
            {hero.ctaAbout}
          </a>
        </div>
      </div>
    </div>
  );
}
