import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'kr' | 'en';

const STORAGE_KEY = 'yk-portfolio-lang';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  // English is the default setting site-wide — a first-time visitor
  // always lands in English regardless of browser/OS locale. Previously
  // this fell back to detecting the browser's language (Korean locale ->
  // 'kr'), which meant the "default" language actually varied by
  // visitor. Once someone explicitly switches (via the KR/EN toggle),
  // that choice is remembered via STORAGE_KEY as before.
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'kr' || stored === 'en') return stored;
  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'kr' ? 'ko' : 'en';
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === 'kr' ? 'en' : 'kr'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
