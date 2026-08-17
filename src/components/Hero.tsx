'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import {
  Phone,
  Calculator,
  Star,
  CheckCircle2,
  Droplets,
  Gauge,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BikeIcon, AutoRickshawIcon, CarSedanIcon } from './VehicleIcons';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-b from-blue-50/50 via-slate-50 to-white pt-28 pb-14 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-5">
              <span>{t.hero_tag}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.2] font-heading mb-4">
              {t.hero_title_1}{' '}
              <span className="text-brand-700">
                {t.hero_title_accent}
              </span>{' '}
              {t.hero_title_2}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mb-6 leading-relaxed">
              {t.hero_subtitle}
            </p>

            {/* Quality Standard Badges */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <Droplets className="w-4 h-4 text-brand-600" />
                <span>{t.hero_badge_ro_water}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{t.hero_badge_ph_neutral}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <Gauge className="w-4 h-4 text-indigo-600" />
                <span>{t.hero_badge_pressure}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#calculator"
                className="px-6 py-3 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4" />
                <span>{t.hero_cta_calculate}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-brand-700 fill-current" />
                <span>{t.hero_cta_call}</span>
              </a>
            </div>

            {/* Rating / Trust Line */}
            <div className="flex items-center gap-6 pt-5 border-t border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-extrabold text-slate-900">4.9 / 5</span>
                <span className="text-slate-500">(480+ Reviews)</span>
              </div>
              <div>•</div>
              <div className="flex items-center gap-1 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.hero_stat_satisfaction}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Rate Snapshot Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 bg-white border border-slate-200 shadow-md">
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    Standard Rate Card
                  </h3>
                  <p className="text-xs text-slate-500">Fixed Upfront Rates (Taxes Incl.)</p>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                  Fixed Rates
                </span>
              </div>

              <div className="space-y-2.5 mb-5">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-700 flex items-center justify-center">
                      <BikeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">2-Wheeler (Bike / Scooter)</p>
                      <p className="text-[11px] text-slate-500">Bike ₹100 • Scooter ₹80</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-brand-800">From ₹80</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-700 flex items-center justify-center">
                      <AutoRickshawIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Auto Rickshaw / Tempo</p>
                      <p className="text-[11px] text-slate-500">Auto ₹200 • Tempo ₹300-₹500</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-brand-800">From ₹200</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-700 flex items-center justify-center">
                      <CarSedanIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Cars (4/5 & 6/7 Seater)</p>
                      <p className="text-[11px] text-slate-500">4-5 Seater ₹200-₹300 • SUV ₹250-₹400</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-brand-800">From ₹200</span>
                  </div>
                </div>
              </div>

              <a
                href="#calculator"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
              >
                <span>Open Price Calculator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
