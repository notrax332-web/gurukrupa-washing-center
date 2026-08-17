'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Compass,
  Clock,
  CheckCircle2,
  AlertCircle,
  Share2,
  Car,
  ChevronDown
} from 'lucide-react';

interface PuneArea {
  name: string;
  nameMr: string;
  nameHi: string;
  distanceKm: number;
  driveMins: number;
}

const POPULAR_PUNE_AREAS: PuneArea[] = [
  { name: 'Chikhali / Sharad Nagar', nameMr: 'चिखली / शरद नगर', nameHi: 'चिखली / शरद नगर', distanceKm: 0.8, driveMins: 2 },
  { name: 'Akurdi / Pradhikaran', nameMr: 'आकुर्डी / प्राधिकरण', nameHi: 'आकुर्डी / प्राधिकरण', distanceKm: 3.2, driveMins: 8 },
  { name: 'Nigdi / Yamuna Nagar', nameMr: 'निगडी / यमुना नगर', nameHi: 'निगडी / यमुना नगर', distanceKm: 3.8, driveMins: 9 },
  { name: 'Moshi / Alandi Road', nameMr: 'मोशी / आळंदी रस्ता', nameHi: 'मोशी / आलंदी रोड', distanceKm: 4.2, driveMins: 10 },
  { name: 'Talwade IT Park', nameMr: 'तळवडे आयटी पार्क', nameHi: 'तलवड़े आईटी पार्क', distanceKm: 4.5, driveMins: 10 },
  { name: 'Pimpri / Chinchwad Station', nameMr: 'पिंपरी / चिंचवड स्टेशन', nameHi: 'पिंपरी / चिंचवड़ स्टेशन', distanceKm: 5.8, driveMins: 12 },
  { name: 'Bhosari / MIDC', nameMr: 'भोसरी / एमआयडीसी', nameHi: 'भोसरी / एमआईडीसी', distanceKm: 6.5, driveMins: 14 },
  { name: 'Ravet / Punawale', nameMr: 'रावेत / पुनावळे', nameHi: 'रावेत / पुनावले', distanceKm: 7.5, driveMins: 15 },
  { name: 'Wakad / Hinjawadi IT Park', nameMr: 'वाकड / हिंजवडी आयटी पार्क', nameHi: 'वाकड़ / हिंजवड़ी आईटी पार्क', distanceKm: 12.5, driveMins: 22 },
  { name: 'Pune City (Shivajinagar)', nameMr: 'पुणे शहर (शिवाजीनगर)', nameHi: 'पुणे शहर (शिवाजीनगर)', distanceKm: 18.5, driveMins: 35 },
];

function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

export const LocationDistance: React.FC = () => {
  const { language, t } = useLanguage();

  const [isLocating, setIsLocating] = useState(false);
  const [distanceKm, setDistanceKm] = useState<number | null>(null);
  const [estDriveMins, setEstDriveMins] = useState<number | null>(null);
  const [selectedAreaName, setSelectedAreaName] = useState<string | null>(null);
  const [detectionSource, setDetectionSource] = useState<'gps' | 'area' | null>(null);
  const [geoError, setGeoError] = useState<string | null>(null);
  const googleDirectionsUrl = STUDIO_INFO.googleShareUrl;

  const handleSelectArea = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const areaIndex = parseInt(e.target.value, 10);
    if (isNaN(areaIndex) || areaIndex < 0) {
      setDistanceKm(null);
      setEstDriveMins(null);
      setSelectedAreaName(null);
      setDetectionSource(null);
      return;
    }

    const area = POPULAR_PUNE_AREAS[areaIndex];
    if (area) {
      setDistanceKm(area.distanceKm);
      setEstDriveMins(area.driveMins);
      const nameByLang =
        language === 'mr' ? area.nameMr : language === 'hi' ? area.nameHi : area.name;
      setSelectedAreaName(nameByLang);
      setDetectionSource('area');
      setGeoError(null);
    }
  };

  const fetchGeolocationDistance = () => {
    if (typeof window === 'undefined' || !navigator.geolocation) {
      setGeoError('GPS is not supported in this browser. Please select your area below or open Google Maps.');
      return;
    }

    setIsLocating(true);
    setGeoError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const km = calculateHaversineDistance(
          userLat,
          userLng,
          STUDIO_INFO.coordinates.lat,
          STUDIO_INFO.coordinates.lng
        );

        setDistanceKm(km);
        const minutes = Math.max(4, Math.round((km / 26) * 60));
        setEstDriveMins(minutes);
        setSelectedAreaName('Your GPS Location');
        setDetectionSource('gps');
        setIsLocating(false);
      },
      (error) => {
        console.warn('Geolocation error:', error);
        let msg = 'Could not read GPS location. Please choose your nearby area from the list below or click "Open Google Maps".';
        if (error.code === 1) {
          msg = 'Location permission was denied. You can select your area below or use Google Maps.';
        } else if (error.code === 3) {
          msg = 'GPS request timed out. Please select your area below or use Google Maps.';
        }
        setGeoError(msg);
        setIsLocating(false);
      },
      {
        enableHighAccuracy: false, // More reliable across mobile networks and laptops
        timeout: 8000,
        maximumAge: 120000,
      }
    );
  };

  return (
    <section id="location" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.location_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.location_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.location_subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Distance & Address Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-lg bg-blue-100 text-brand-700">
                  <Navigation className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Studio Distance & Route</h3>
                  <p className="text-xs text-slate-500">Find driving distance from your area in Pune</p>
                </div>
              </div>

              {/* Area Quick Selector */}
              <div className="mb-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Select Your Area in Pune:
                </label>
                <div className="relative">
                  <select
                    onChange={handleSelectArea}
                    defaultValue=""
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs sm:text-sm font-medium appearance-none focus:outline-none focus:border-brand-600 pr-9 shadow-sm"
                  >
                    <option value="" disabled>
                      -- Choose your nearby locality --
                    </option>
                    {POPULAR_PUNE_AREAS.map((area, idx) => {
                      const name =
                        language === 'mr' ? area.nameMr : language === 'hi' ? area.nameHi : area.name;
                      return (
                        <option key={idx} value={idx}>
                          {name} (~{area.distanceKm} km)
                        </option>
                      );
                    })}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Live Distance Result Card */}
              {distanceKm !== null ? (
                <div className="p-4 rounded-xl bg-white border border-blue-200 shadow-sm mb-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{selectedAreaName}</span>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-brand-800 font-medium border border-blue-100">
                      {detectionSource === 'gps' ? 'Live GPS' : 'Pune Road Route'}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-100">
                    <div>
                      <span className="text-xs text-slate-500 block mb-0.5">
                        {t.geo_distance_approx}
                      </span>
                      <span className="text-2xl font-extrabold text-slate-900 font-heading">
                        ~{distanceKm} <span className="text-xs font-normal text-slate-500">km</span>
                      </span>
                    </div>

                    <div>
                      <span className="text-xs text-slate-500 block mb-0.5">
                        {t.geo_drive_time}
                      </span>
                      <span className="text-2xl font-extrabold text-slate-900 font-heading">
                        ~{estDriveMins} <span className="text-xs font-normal text-slate-500">min</span>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 mb-4 text-xs text-slate-600 leading-relaxed">
                  {geoError ? (
                    <div className="flex items-start gap-2 text-rose-600">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{geoError}</span>
                    </div>
                  ) : (
                    <span>Select your locality from the dropdown above or open Google Maps for real-time turn-by-turn navigation.</span>
                  )}
                </div>
              )}

              {/* Primary Action Buttons */}
              <div className="space-y-2">
                {/* Direct Google Maps Navigation (Most Reliable on all phones/laptops) */}
                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                  <span>Open Google Maps Directions</span>
                </a>

                {/* Device GPS Button */}
                <button
                  type="button"
                  onClick={fetchGeolocationDistance}
                  disabled={isLocating}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Compass className={`w-3.5 h-3.5 text-brand-700 ${isLocating ? 'animate-spin' : ''}`} />
                  <span>
                    {isLocating
                      ? 'Detecting GPS Location...'
                      : 'Use Device GPS Sensor'}
                  </span>
                </button>
              </div>
            </div>

            {/* Address Details */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{t.geo_address_heading}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {STUDIO_INFO.address.line1}, {STUDIO_INFO.address.area}, {STUDIO_INFO.address.city}, {STUDIO_INFO.address.state} - {STUDIO_INFO.address.pincode}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Landmark: {STUDIO_INFO.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2.5 border-t border-slate-200">
                <Clock className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-900 text-xs">{t.geo_hours_heading}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {t.working_days_val} • {STUDIO_INFO.workingHours.time}
                  </p>
                  <span className="text-[11px] text-emerald-700 font-medium block mt-0.5">
                    3 Washing Bays Operating
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-7 h-[360px] lg:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
            <iframe
              src={STUDIO_INFO.googleEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Gurukrupa washing center and Detailing studio Location Map"
              className="w-full h-full"
            />
            <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200 flex items-center justify-between shadow-sm">
              <span className="text-xs font-bold text-slate-900">Gurukrupa Washing Center & Detailing Studio</span>
              <a
                href={STUDIO_INFO.googleShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded-md bg-brand-700 text-white text-xs font-bold flex items-center gap-1 hover:bg-brand-800"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
