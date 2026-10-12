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

  // 링크에 지정된 언어를 먼저 적용
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang === 'kr' || urlLang === 'en') return urlLang;

  // 링크에 언어가 없으면 이전에 선택한 언어 사용
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'kr' || stored === 'en') return stored;

  return 'kr';
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
