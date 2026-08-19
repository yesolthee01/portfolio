import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, type Lang } from '../i18n/LanguageContext';
import { siteCopy } from '../data/site';

function LangToggle() {
  const { lang, setLang } = useLanguage();
  const set = (l: Lang) => () => setLang(l);
  return (
    <div className="lang-toggle">
      <button className={lang === 'kr' ? 'active' : ''} onClick={set('kr')}>
        KR
      </button>
      <button className={lang === 'en' ? 'active' : ''} onClick={set('en')}>
        EN
      </button>
    </div>
  );
}

interface NavProps {
  variant?: 'home' | 'case';
  backHref?: string;
  backLabel?: string;
}

export function Nav({ variant = 'home', backHref = '/#work', backLabel }: NavProps) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const nav = siteCopy[lang].nav;

  return (
    <div className="nav-wrap">
      <div className="nav glass">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          YESOL<span className="dot">.</span>KIM
        </Link>

        {variant === 'home' ? (
          <>
            <button
              className="nav-toggle-btn"
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <span />
            </button>
            <div className={`nav-links${open ? ' open' : ''}`}>
              <a href="#about" onClick={() => setOpen(false)}>
                {nav.about}
              </a>
              <a href="#work" onClick={() => setOpen(false)}>
                {nav.work}
              </a>
              <a href="#ai" onClick={() => setOpen(false)}>
                {nav.ai}
              </a>
              <a href="#contact" onClick={() => setOpen(false)}>
                {nav.contact}
              </a>
              <LangToggle />
            </div>
          </>
        ) : (
          <div className="nav-simple">
            <Link to={backHref} className="nav-back">
              {backLabel ?? '← ALL WORK'}
            </Link>
            <LangToggle />
          </div>
        )}
      </div>
    </div>
  );
}
