'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  VEHICLE_PRICING_DATA,
  FOUR_WHEELER_FEATURES,
  TWO_WHEELER_FEATURES,
  STUDIO_INFO,
} from '@/data/pricingData';
import {
  Check,
  X,
  Phone,
} from 'lucide-react';
import {
  BikeIcon,
  ScooterIcon,
  AutoRickshawIcon,
  TempoIcon,
  CarSedanIcon,
  CarSUVIcon,
} from './VehicleIcons';

const vehicleIconComponents: Record<string, React.ReactNode> = {
  bike: <BikeIcon className="w-5 h-5" />,
  scooter: <ScooterIcon className="w-5 h-5" />,
  auto: <AutoRickshawIcon className="w-5 h-5" />,
  tempo: <TempoIcon className="w-5 h-5" />,
  car_4_5: <CarSedanIcon className="w-5 h-5" />,
  car_6_7: <CarSUVIcon className="w-5 h-5" />,
};

export const PricingMatrix: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <span>{t.matrix_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.matrix_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.matrix_subtitle}
          </p>
        </div>

        {/* 1. Vehicle Rates Table (Desktop) & Cards (Mobile) */}
        <div className="mb-16">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider text-slate-700 font-bold">
                  <th className="py-3.5 px-6">{t.matrix_col_category}</th>
                  <th className="py-3.5 px-6 text-center text-brand-800">
                    {t.matrix_col_full}
                  </th>
                  <th className="py-3.5 px-6 text-center text-slate-700">
                    {t.matrix_col_body}
                  </th>
                  <th className="py-3.5 px-6 text-right">{t.matrix_col_action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {VEHICLE_PRICING_DATA.map((vehicle) => {
                  const name = (t as any)[vehicle.nameKey] || vehicle.id;
                  const desc = (t as any)[vehicle.taglineKey] || '';
                  return (
                    <tr
                      key={vehicle.id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                            {vehicleIconComponents[vehicle.icon]}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">
                              {name}
                            </p>
                            <p className="text-xs text-slate-500">{desc}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block font-extrabold text-base text-slate-900 bg-blue-50/60 border border-blue-200 px-3.5 py-1 rounded-lg">
                          ₹{vehicle.fullWashPrice}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {vehicle.hasBodyWashOption && vehicle.bodyWashPrice !== null ? (
                          <span className="inline-block font-extrabold text-base text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1 rounded-lg">
                            ₹{vehicle.bodyWashPrice}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 italic">
                            —
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <a
                          href={`tel:${STUDIO_INFO.phoneRaw}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-semibold text-xs shadow-sm transition-all"
                        >
                          <Phone className="w-3.5 h-3.5 fill-current" />
                          <span>Call</span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Grid View */}
          <div className="md:hidden space-y-3">
            {VEHICLE_PRICING_DATA.map((vehicle) => {
              const name = (t as any)[vehicle.nameKey] || vehicle.id;
              const desc = (t as any)[vehicle.taglineKey] || '';
              return (
                <div
                  key={vehicle.id}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-slate-100 text-slate-700">
                        {vehicleIconComponents[vehicle.icon]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{name}</h4>
                        <p className="text-[11px] text-slate-500">{desc}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <div className="p-2.5 rounded-lg bg-blue-50/50 border border-blue-200 text-center">
                      <span className="text-[11px] text-slate-500 block mb-0.5">
                        Full Wash
                      </span>
                      <span className="text-base font-extrabold text-brand-800">
                        ₹{vehicle.fullWashPrice}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-center">
                      <span className="text-[11px] text-slate-500 block mb-0.5">
                        Body Wash
                      </span>
                      <span className="text-base font-extrabold text-slate-800">
                        {vehicle.hasBodyWashOption && vehicle.bodyWashPrice !== null
                          ? `₹${vehicle.bodyWashPrice}`
                          : '—'}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`tel:${STUDIO_INFO.phoneRaw}`}
                    className="w-full py-2.5 rounded-lg bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Call to Book (+91 9822451532)</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. 4-Wheelers & Commercial Comparison Table */}
        <div id="comparison" className="mb-14">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {t.matrix_4w_comp_title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.matrix_4w_comp_subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider font-bold">
                  <th className="py-3 px-5 text-slate-700">{t.matrix_feature_head}</th>
                  <th className="py-3 px-4 text-center text-slate-700 w-32 sm:w-40">
                    {t.matrix_body_head}
                  </th>
                  <th className="py-3 px-4 text-center text-brand-800 bg-blue-50/50 w-32 sm:w-40">
                    {t.matrix_full_head}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {FOUR_WHEELER_FEATURES.map((item, idx) => {
                  const featName = (t as any)[item.featureKey] || item.featureKey;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-5 font-medium text-slate-800">
                        {featName}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.body ? (
                          <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="py-3 px-4 text-center bg-blue-50/20">
                        {item.full ? (
                          <Check className="w-4 h-4 text-brand-700 mx-auto stroke-[2.5]" />
                        ) : (
                          <X className="w-4 h-4 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. 2-Wheelers Service Comparison (Separate Table) */}
        <div>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              {t.matrix_2w_comp_title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {t.matrix_2w_comp_subtitle}
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wider font-bold">
                  <th className="py-3 px-5 text-slate-700">{t.matrix_feature_head}</th>
                  <th className="py-3 px-4 text-center text-brand-800 bg-blue-50/30 w-36 sm:w-44">
                    {t.matrix_tw_bike_col}
                  </th>
                  <th className="py-3 px-4 text-center text-brand-800 bg-blue-50/30 w-36 sm:w-44">
                    {t.matrix_tw_scooter_col}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {TWO_WHEELER_FEATURES.map((item, idx) => {
                  const featName = (t as any)[item.featureKey] || item.featureKey;
                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-5 font-medium text-slate-800">
                        {featName}
                      </td>
                      <td className="py-3 px-4 text-center bg-blue-50/10">
                        <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                      </td>
                      <td className="py-3 px-4 text-center bg-blue-50/10">
                        <Check className="w-4 h-4 text-emerald-600 mx-auto stroke-[2.5]" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
