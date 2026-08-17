'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import {
  Phone,
  MapPin,
  Clock,
  Navigation,
  Droplets,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-24 lg:pb-14 px-4 sm:px-6 lg:px-8 relative text-xs">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: Studio Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-700 text-white">
                <Droplets className="w-4 h-4 fill-current" />
              </div>
              <span className="font-extrabold text-base tracking-tight text-white font-heading">
                GURUKRUPA <span className="text-blue-400">WASHING CENTER</span>
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {t.footer_tagline}
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-800 text-emerald-400 text-[11px] font-semibold border border-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Open 7 Days • 8:00 AM - 9:00 PM
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer_quick_links}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  {t.nav_calculator}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  {t.nav_pricing}
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  {t.nav_services}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  {t.nav_location}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  {t.nav_reviews}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.nav_faq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Wash Rates Summary (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer_services_list}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex justify-between border-b border-slate-800 pb-1">
                <span>2-Wheeler Bike Wash:</span>
                <span className="font-bold text-white">₹100</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1">
                <span>2-Wheeler Scooter Wash:</span>
                <span className="font-bold text-white">₹80</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1">
                <span>Auto Rickshaw Wash:</span>
                <span className="font-bold text-white">₹200</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1">
                <span>4/5 Seater Car Wash:</span>
                <span className="font-bold text-white">₹200 / ₹300</span>
              </li>
              <li className="flex justify-between border-b border-slate-800 pb-1">
                <span>6/7 Seater SUV Wash:</span>
                <span className="font-bold text-white">₹250 / ₹400</span>
              </li>
              <li className="flex justify-between">
                <span>Tempo / Commercial:</span>
                <span className="font-bold text-white">₹300 / ₹500</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer_contact_info}
            </h4>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {STUDIO_INFO.address.line1}, {STUDIO_INFO.address.area}, {STUDIO_INFO.address.city} - {STUDIO_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="font-bold text-white hover:text-blue-300 transition-colors"
                >
                  {STUDIO_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>8:00 AM - 9:00 PM (3 Wash Bays)</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={STUDIO_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs text-slate-200 font-semibold transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-blue-400" />
                <span>Google Maps Location</span>
                <ExternalLink className="w-3 h-3 text-slate-400 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>{t.footer_copyright}</p>
          <div className="flex items-center gap-3">
            <span>Payment Modes: UPI (GPay, PhonePe, Paytm) & Cash</span>
            <span>•</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
