import { useLanguage } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';

export function Hero() {
  const { lang } = useLanguage();
  const hero = siteCopy[lang].hero;

  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="eyebrow glass">
          <b>{hero.eyebrow}</b>
        </div>

        <h1 className="hero-title">
          {hero.headlinePre}
          <span className="accent">{hero.headlineAccent}</span>
          {hero.headlinePost}
        </h1>

        <p className="hero-sub">{hero.sub}</p>

        <div className="chip-row">
          {hero.chips.map((chip) => (
            <span className="chip glass" key={chip}>
              {chip}
            </span>
          ))}
        </div>

        <div className="hero-cta">
          <a href="#work" className="btn btn-primary press-bounce">
            {hero.ctaWork}
          </a>
          <a href="#contact" className="btn btn-outline press-bounce">
            {hero.ctaContact}
          </a>
        </div>
      </div>
    </div>
  );
}
