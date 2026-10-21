import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

export type Language = 'en' | 'fa';

export interface LanguageContextType {
  language: Language;
  lang: Language;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  setLanguage: (lang: Language) => void;
  setLang: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('asma_lang');
    if (saved === 'fa' || saved === 'en') return saved;
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/fa')) return 'fa';
    return 'en';
  });

  const dir = language === 'fa' ? 'rtl' : 'ltr';
  const isRTL = language === 'fa';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem('asma_lang', language);
  }, [language, dir]);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'en' ? 'fa' : 'en'));
  };

  const t = (key: string): string => {
    const dict = (translations as any)[language];
    return dict?.[key] || (translations as any).en?.[key] || key;
  };

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        lang: language, 
        dir, 
        isRTL, 
        setLanguage, 
        setLang: setLanguage, 
        toggleLanguage, 
        t 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
