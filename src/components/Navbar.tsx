'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/locales/translations';
import { STUDIO_INFO } from '@/data/pricingData';
import {
  Phone,
  Globe,
  Menu,
  X,
  ChevronDown,
  Navigation,
  Droplets
} from 'lucide-react';

const langOptions: { id: Language; label: string; short: string }[] = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'mr', label: 'मराठी', short: 'MR' },
  { id: 'hi', label: 'हिंदी', short: 'HI' },
  { id: 'hi-en', label: 'Hinglish', short: 'HI-EN' },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Gurukrupa Washing Center and Detailing Studio Home"
          >
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-700 text-white shadow-sm">
              <Droplets className="w-5 h-5 fill-current" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-heading">
                  GURUKRUPA <span className="text-brand-700 font-semibold">WASH</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                  Pune
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                Washing Center & Detailing Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <a
              href="#calculator"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_calculator}
            </a>
            <a
              href="#pricing"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_pricing}
            </a>
            <a
              href="#comparison"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_services}
            </a>
            <a
              href="#location"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_location}
            </a>
            <a
              href="#reviews"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_reviews}
            </a>
            <a
              href="#faq"
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 hover:text-brand-700 hover:bg-slate-50 transition-colors"
            >
              {t.nav_faq}
            </a>
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status Pill (Desktop) */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>{t.nav_open_badge}</span>
            </div>

            {/* Persistent Language Selector Pill/Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold transition-all"
                aria-label="Change language"
              >
                <Globe className="w-4 h-4 text-brand-700" />
                <span>{langOptions.find((l) => l.id === language)?.short}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-1.5 w-44 rounded-xl bg-white border border-slate-200 shadow-xl py-1 z-20 overflow-hidden">
                    {langOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setLanguage(opt.id);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm flex items-center justify-between transition-colors ${
                          language === opt.id
                            ? 'bg-blue-50 text-brand-700 font-bold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{opt.label}</span>
                        {language === opt.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-700" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Click to Call CTA Button */}
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
              <span className="hidden sm:inline">{STUDIO_INFO.phone}</span>
              <span className="sm:hidden">{t.nav_call_now}</span>
            </a>

            {/* Mobile Burger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 mt-2 shadow-lg">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <span className="text-xs text-slate-500 font-medium">Language:</span>
            <div className="flex items-center gap-1">
              {langOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setLanguage(opt.id)}
                  className={`px-2.5 py-1 rounded-md text-xs font-bold transition-all ${
                    language === opt.id
                      ? 'bg-brand-700 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {opt.short}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
            >
              {t.nav_calculator}
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
            >
              {t.nav_pricing}
            </a>
            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
            >
              {t.nav_services}
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800"
            >
              {t.nav_location}
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-xl bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>{t.nav_call_now}: {STUDIO_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
