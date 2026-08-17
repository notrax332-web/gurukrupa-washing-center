'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { LanguageModal } from '@/components/LanguageModal';
import { Hero } from '@/components/Hero';
import { PriceEstimator } from '@/components/PriceEstimator';
import { PricingMatrix } from '@/components/PricingMatrix';
import { Amenities } from '@/components/Amenities';
import { LocationDistance } from '@/components/LocationDistance';
import { Reviews } from '@/components/Reviews';
import { FAQ } from '@/components/FAQ';
import { StickyMobileBar } from '@/components/StickyMobileBar';
import { BookingModal } from '@/components/BookingModal';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 relative">
      {/* First-visit Language Picker Modal (4 Languages) */}
      <LanguageModal />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive Wash Price Estimator Widget */}
      <PriceEstimator />

      {/* Rate Matrix & Separate 4-Wheeler / 2-Wheeler Comparison Tables */}
      <PricingMatrix />

      {/* Studio Washing Quality Standards */}
      <Amenities />

      {/* Geolocation Distance Calculator & Google Maps Frame */}
      <LocationDistance />

      {/* Customer Ratings & Testimonials */}
      <Reviews />

      {/* Frequently Asked Questions */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Quick Action Bar */}
      <StickyMobileBar />

      {/* Slot Booking Dialog Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </main>
  );
}
