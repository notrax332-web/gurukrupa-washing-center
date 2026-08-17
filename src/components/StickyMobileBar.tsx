'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import { Phone, Navigation, Calculator } from 'lucide-react';

export const StickyMobileBar: React.FC = () => {
  const { t } = useLanguage();

  const googleDirectionsUrl = STUDIO_INFO.googleShareUrl;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg">
      <div className="max-w-md mx-auto grid grid-cols-12 gap-2">
        {/* Quick Calc Button */}
        <a
          href="#calculator"
          className="col-span-3 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex flex-col items-center justify-center text-[10px] font-bold active:scale-95 transition-all"
          aria-label="Calculate Wash Price"
        >
          <Calculator className="w-4 h-4 text-brand-700 mb-0.5" />
          <span>Rates</span>
        </a>

        {/* Directions Button */}
        <a
          href={googleDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex flex-col items-center justify-center text-[10px] font-bold active:scale-95 transition-all"
        >
          <Navigation className="w-4 h-4 text-brand-700 mb-0.5" />
          <span>{t.sticky_directions}</span>
        </a>

        {/* Primary Click to Call Button */}
        <a
          href={`tel:${STUDIO_INFO.phoneRaw}`}
          className="col-span-5 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white flex items-center justify-center gap-1.5 text-xs font-bold shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 fill-current shrink-0" />
          <span>{t.sticky_call}</span>
        </a>
      </div>
    </div>
  );
};
