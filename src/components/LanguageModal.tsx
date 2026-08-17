'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/locales/translations';
import { Globe, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languagesList: { id: Language; label: string; native: string; desc: string }[] = [
  {
    id: 'en',
    label: 'English',
    native: 'English',
    desc: 'Standard interface with transparent rates',
  },
  {
    id: 'mr',
    label: 'Marathi',
    native: 'मराठी',
    desc: 'मराठी भाषेमध्ये दर व संपूर्ण माहिती',
  },
  {
    id: 'hi',
    label: 'Hindi',
    native: 'हिंदी',
    desc: 'शुद्ध हिंदी भाषा में सभी रेट्स और जानकारी',
  },
  {
    id: 'hi-en',
    label: 'Hinglish',
    native: 'Hinglish',
    desc: 'Aasan Hinglish mein rates aur booking',
  },
];

export const LanguageModal: React.FC = () => {
  const { isFirstVisitModalOpen, language, confirmInitialLanguage, t } = useLanguage();
  const [selected, setSelected] = React.useState<Language>(language);

  if (!isFirstVisitModalOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-900"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-700">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                {t.lang_modal_title}
              </h2>
              <p className="text-xs text-slate-500">
                {t.lang_modal_subtitle}
              </p>
            </div>
          </div>

          {/* Language Cards */}
          <div className="space-y-2.5 my-5">
            {languagesList.map((lang) => {
              const isSelected = selected === lang.id;
              return (
                <button
                  key={lang.id}
                  type="button"
                  onClick={() => setSelected(lang.id)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all flex items-center justify-between border ${
                    isSelected
                      ? 'bg-blue-50/80 border-brand-600 ring-1 ring-brand-600'
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{lang.native}</span>
                      {lang.id !== 'en' && lang.id !== 'hi-en' && (
                        <span className="text-xs text-slate-500">({lang.label})</span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{lang.desc}</p>
                  </div>

                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? 'bg-brand-600 border-brand-600 text-white'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Confirm Button */}
          <button
            type="button"
            onClick={() => confirmInitialLanguage(selected)}
            className="w-full py-3.5 px-5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-sm transition-all active:scale-[0.99]"
          >
            {t.lang_modal_confirm}
          </button>

          <p className="text-center text-[11px] text-slate-400 mt-3">
            {t.lang_modal_note}
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
