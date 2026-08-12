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
  if (typeof window === 'undefined') return 'kr';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'kr' || stored === 'en') return stored;
  return window.navigator.language?.toLowerCase().startsWith('ko') ? 'kr' : 'en';
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
