'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import { Phone, MessageSquare, X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('4/5 Seater Car');

  if (!isOpen) return null;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Gurukrupa Washing Center & Detailing Studio! 🚗\nI would like to book a wash slot:\n- Name: ${customerName || 'Customer'}\n- Phone: ${customerPhone || 'Not specified'}\n- Vehicle: ${selectedVehicle}\nPlease confirm bay availability.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsapp.replace('+', '')}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md p-6 rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-900"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-800"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-blue-50 text-brand-700">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                {t.modal_booking_title}
              </h3>
              <p className="text-xs text-slate-500">
                {t.modal_booking_subtitle}
              </p>
            </div>
          </div>

          <form onSubmit={handleWhatsAppBooking} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.modal_name_label}
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="e.g. Ramesh Kulkarni"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.modal_phone_label}
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="e.g. 9822451532"
                required
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-600 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.modal_vehicle_label}
              </label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-600 focus:bg-white focus:outline-none"
              >
                <option value="2-Wheeler Bike">2-Wheeler Bike (₹100)</option>
                <option value="2-Wheeler Scooter">2-Wheeler Scooter (₹80)</option>
                <option value="Auto Rickshaw">Auto Rickshaw (₹200)</option>
                <option value="Tempo">Tempo / Commercial (₹300 - ₹500)</option>
                <option value="4/5 Seater Car">4/5 Seater Car (₹200 - ₹300)</option>
                <option value="6/7 Seater Car">6/7 Seater SUV (₹250 - ₹400)</option>
              </select>
            </div>

            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.modal_submit_whatsapp}</span>
              </button>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-brand-700" />
                <span>{t.modal_submit_call} ({STUDIO_INFO.phone})</span>
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
