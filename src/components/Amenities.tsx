'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Droplets,
  Gauge,
  Users,
  ShieldCheck,
} from 'lucide-react';

export const Amenities: React.FC = () => {
  const { t } = useLanguage();

  const standardsList = [
    {
      icon: <Droplets className="w-6 h-6 text-brand-700" />,
      title: t.amenity_ro_title,
      desc: t.amenity_ro_desc,
    },
    {
      icon: <Gauge className="w-6 h-6 text-brand-700" />,
      title: t.amenity_pressure_title,
      desc: t.amenity_pressure_desc,
    },
    {
      icon: <Users className="w-6 h-6 text-brand-700" />,
      title: t.amenity_crew_title,
      desc: t.amenity_crew_desc,
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-700" />,
      title: t.amenity_chemicals_title,
      desc: t.amenity_chemicals_desc,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <span>{t.amenities_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.amenities_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.amenities_subtitle}
          </p>
        </div>

        {/* Standards Grid (4 Clean Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {standardsList.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-start"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
