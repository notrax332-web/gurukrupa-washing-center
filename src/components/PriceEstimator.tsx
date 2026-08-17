'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  VEHICLE_PRICING_DATA,
  STUDIO_INFO,
} from '@/data/pricingData';
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  Droplets,
  Info,
  Sparkles
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
  bike: <BikeIcon className="w-6 h-6" />,
  scooter: <ScooterIcon className="w-6 h-6" />,
  auto: <AutoRickshawIcon className="w-6 h-6" />,
  tempo: <TempoIcon className="w-6 h-6" />,
  car_4_5: <CarSedanIcon className="w-6 h-6" />,
  car_6_7: <CarSUVIcon className="w-6 h-6" />,
};

type WashTier = 'full' | 'body';

export const PriceEstimator: React.FC = () => {
  const { t } = useLanguage();

  const [selectedVehicleId, setSelectedVehicleId] = useState<string>('car_4_5');
  const [selectedWashTier, setSelectedWashTier] = useState<WashTier>('full');

  // Active vehicle
  const selectedVehicle =
    VEHICLE_PRICING_DATA.find((v) => v.id === selectedVehicleId) || VEHICLE_PRICING_DATA[4];

  // If vehicle is 2-wheeler, tier is automatically 'full'
  const isTwoWheeler = selectedVehicle.category === 'two_wheeler';
  const effectiveTier: WashTier = isTwoWheeler ? 'full' : selectedWashTier;

  // Price calculation
  const calculatedPrice =
    effectiveTier === 'full'
      ? selectedVehicle.fullWashPrice
      : (selectedVehicle.bodyWashPrice ?? selectedVehicle.fullWashPrice);

  const vehicleName = (t as any)[selectedVehicle.nameKey] || selectedVehicle.id;

  // WhatsApp link generator
  const getWhatsAppBookingUrl = () => {
    const washName = effectiveTier === 'full' ? 'Full Wash' : 'Body Wash';
    const text = encodeURIComponent(
      `Hello Gurukrupa Washing Center & Detailing Studio! 🚗\nI want to book a wash slot:\n- Vehicle: ${vehicleName}\n- Wash Type: ${washName}\n- Fixed Rate: ₹${calculatedPrice}\nPlease confirm bay availability.`
    );
    return `https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}?text=${text}`;
  };

  return (
    <section id="calculator" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <span>{t.calc_section_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.calc_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.calc_subtitle}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vehicle & Wash Type Selectors */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Vehicle Selector */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-700 text-white text-xs flex items-center justify-center font-bold">
                    1
                  </span>
                  {t.calc_select_vehicle}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {VEHICLE_PRICING_DATA.map((vehicle) => {
                  const isSelected = selectedVehicleId === vehicle.id;
                  const vName = (t as any)[vehicle.nameKey] || vehicle.id;
                  return (
                    <button
                      key={vehicle.id}
                      type="button"
                      onClick={() => {
                        setSelectedVehicleId(vehicle.id);
                        if (vehicle.category === 'two_wheeler') {
                          setSelectedWashTier('full');
                        }
                      }}
                      className={`relative p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between min-h-[105px] ${
                        isSelected
                          ? 'bg-blue-50/80 border-brand-600 ring-1 ring-brand-600 shadow-sm'
                          : 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-100/70'
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg w-fit transition-colors ${
                          isSelected
                            ? 'bg-brand-700 text-white shadow-sm'
                            : 'bg-white text-slate-700 border border-slate-200'
                        }`}
                      >
                        {vehicleIconComponents[vehicle.icon]}
                      </div>

                      <div className="mt-2.5">
                        <p className="text-xs font-bold text-slate-900 leading-snug">
                          {vName}
                        </p>
                        <p className="text-[11px] text-brand-700 font-semibold mt-0.5">
                          From ₹{vehicle.category === 'two_wheeler' ? vehicle.fullWashPrice : vehicle.bodyWashPrice}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Wash Type Selector */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-brand-700 text-white text-xs flex items-center justify-center font-bold">
                    2
                  </span>
                  {t.calc_wash_type_label}
                </h3>
              </div>

              {/* 2-Wheelers Note */}
              {isTwoWheeler ? (
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs sm:text-sm text-brand-900 flex items-start gap-3">
                  <Info className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900 mb-0.5">
                      {vehicleName} — Full Wash Package
                    </p>
                    <p className="text-xs text-slate-600">{t.calc_two_wheeler_note}</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Full Wash Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedWashTier('full')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedWashTier === 'full'
                        ? 'bg-blue-50/80 border-brand-600 ring-1 ring-brand-600 shadow-sm'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {t.calc_full_wash}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-brand-800">
                        ₹{selectedVehicle.fullWashPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {t.calc_full_wash_desc}
                    </p>
                  </button>

                  {/* Body Wash Option */}
                  <button
                    type="button"
                    onClick={() => setSelectedWashTier('body')}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      selectedWashTier === 'body'
                        ? 'bg-blue-50/80 border-brand-600 ring-1 ring-brand-600 shadow-sm'
                        : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-xs sm:text-sm text-slate-900">
                        {t.calc_body_wash}
                      </span>
                      <span className="text-xs sm:text-sm font-extrabold text-brand-800">
                        ₹{selectedVehicle.bodyWashPrice}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      {t.calc_body_wash_desc}
                    </p>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Calculated Total Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                    {t.calc_fixed_rate_badge}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900">
                    {vehicleName}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-blue-50 text-brand-700 text-xs font-bold border border-blue-200">
                  {effectiveTier === 'full' ? 'Full Wash' : 'Body Wash'}
                </span>
              </div>

              {/* Price Calculation Output */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-5 text-center">
                <span className="text-xs text-slate-500 block mb-1">
                  {t.calc_total_estimate}
                </span>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-4xl font-extrabold text-brand-800 font-heading">
                    ₹{calculatedPrice}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">(Taxes Included)</span>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {t.calc_inclusions_heading}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% RO Purified Soft Water Rinse</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Active Snow Foam Cleaning</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Underbody Chassis Jet Wash</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tyre & Rim Cleaning + Dressing</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Exterior Glass & Mirror Wipe</span>
                </div>
                {effectiveTier === 'full' && !isTwoWheeler && (
                  <>
                    <div className="flex items-center gap-2 text-xs text-brand-800 font-semibold bg-blue-50/80 p-1.5 rounded-lg border border-blue-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      <span>Cabin & Boot Deep Vacuuming</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-brand-800 font-semibold bg-blue-50/80 p-1.5 rounded-lg border border-blue-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0" />
                      <span>Floor Mat Deep Wash & Cleaning</span>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={`tel:${STUDIO_INFO.phoneRaw}`}
                  className="w-full py-3 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>{t.calc_book_call_btn}</span>
                </a>

                <a
                  href={getWhatsAppBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>{t.calc_book_whatsapp_btn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
