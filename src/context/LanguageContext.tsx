'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, TranslationDict } from '@/locales/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDict;
  isFirstVisitModalOpen: boolean;
  setIsFirstVisitModalOpen: (open: boolean) => void;
  confirmInitialLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isFirstVisitModalOpen, setIsFirstVisitModalOpen] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('apex_wash_lang') as Language;
      const hasChosen = localStorage.getItem('apex_wash_lang_chosen');

      if (savedLang && ['en', 'mr', 'hi', 'hi-en'].includes(savedLang)) {
        setLanguageState(savedLang);
      }

      if (!hasChosen) {
        setIsFirstVisitModalOpen(true);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('apex_wash_lang', lang);
      localStorage.setItem('apex_wash_lang_chosen', 'true');
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  };

  const confirmInitialLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsFirstVisitModalOpen(false);
  };

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isFirstVisitModalOpen,
        setIsFirstVisitModalOpen,
        confirmInitialLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
