import { Fragment } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';
import { renderInlineMarkup } from '../utils/markup';
import { scrollToSection } from '../utils/scrollToSection';
import { HeroBackdrop } from './HeroBackdrop';

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
      <HeroBackdrop />

      <div className="hero-inner">
        <div className="eyebrow glass hero-reveal" style={{ animationDelay: '0s' }}>
          <b>{hero.eyebrow}</b>
        </div>

        <h1 className="hero-title hero-reveal" style={{ animationDelay: '0.16s' }}>
          {renderHeadline(hero.headline)}
        </h1>

        <p className="hero-sub hero-reveal" style={{ animationDelay: '0.32s' }}>
          {hero.subLine1}
          <br />
          {hero.subLine2}
        </p>

        <div className="chip-row hero-reveal" style={{ animationDelay: '0.46s' }}>
          {hero.chips.map((chip) => (
            <span className="chip glass" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <div className="hero-cta hero-reveal" style={{ animationDelay: '0.6s' }}>
          <a href="#work" className="btn btn-primary press-bounce" onClick={scrollToSection('work')}>
            {hero.ctaWork}
          </a>
          <a href="#about" className="btn btn-outline press-bounce" onClick={scrollToSection('about')}>
            {hero.ctaAbout}
          </a>
        </div>
      </div>
    </div>
  );
}
