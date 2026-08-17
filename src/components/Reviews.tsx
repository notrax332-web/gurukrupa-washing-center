'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { STUDIO_INFO } from '@/data/pricingData';
import { Star, CheckCircle2 } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  vehicle: string;
  rating: number;
  date: string;
  avatar: string;
  comment: {
    en: string;
    mr: string;
    hi: string;
    'hi-en': string;
  };
  service: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: '1',
    name: 'Rahul Deshmukh',
    vehicle: 'Mahindra XUV700',
    rating: 5,
    date: '3 days ago',
    avatar: 'RD',
    comment: {
      en: 'Very clean full wash. They washed the underbody thoroughly and vacuumed the cabin and boot without leaving dust. Soft RO water leaves zero water spots on dark paint.',
      mr: 'उत्कृष्ट फुल वॉश! अंडरबॉडी व्यवस्थित साफ केली आणि केबिन व डिकीचे चांगले व्हॅक्यूमिंग केले. RO पाण्यामुळे काळ्या रंगावर पांढरे डाग पडत नाहीत.',
      hi: 'बहुत ही बढ़िया फुल वॉश। अंडरबॉडी अच्छे से साफ की और केबिन-डिक्की की वैक्यूमिंग भी साफ-सुथरी की। RO पानी की वजह से कोई सफेद दाग नहीं आते।',
      'hi-en': 'Bahut hi badhiya full wash! Underbody acche se saaf ki aur cabin-boot vacuuming bhi clean ki. RO water se koi white spots nahi padte.',
    },
    service: '6/7 Seater Full Wash',
  },
  {
    id: '2',
    name: 'Pratik Patil',
    vehicle: 'Royal Enfield Hunter 350',
    rating: 5,
    date: '1 week ago',
    avatar: 'PP',
    comment: {
      en: 'Best bike wash in the area for just ₹100. Thick snow foam and complete degreasing of the engine and tyres. Staff is very careful.',
      mr: 'फक्त १०० रुपयात सर्वोत्तम बाईक वॉश! दाट स्नो फोम आणि इंजिन व टायर्सची पूर्ण स्वच्छता केली. कर्मचारी खूप काळजीपूर्वक काम करतात.',
      hi: 'सिर्फ ₹100 में सबसे अच्छा बाइक वॉश। गाढ़ा स्नो फोम और इंजन व टायर्स की पूरी सफाई की। स्टाफ बहुत ध्यान से काम करता है।',
      'hi-en': 'Sirf ₹100 mein best bike wash! Thick snow foam aur engine-tyres ki complete cleaning ki. Staff kaafi careful hai.',
    },
    service: '2-Wheeler Bike Wash',
  },
  {
    id: '3',
    name: 'Anjali Sharma',
    vehicle: 'Honda City',
    rating: 5,
    date: '2 weeks ago',
    avatar: 'AS',
    comment: {
      en: 'Transparent rates and honest service. They washed floor mats cleanly and vacuumed all seat corners. Fixed ₹300 for full wash with zero hidden charges.',
      mr: 'पारदर्शक दर आणि प्रामाणिक सेवा. फ्लोअर मॅट छान धुतले आणि सीट्सचे कोपरे स्वच्छ व्हॅक्यूम केले. फुल वॉशसाठी फिक्स ₹३०० दर.',
      hi: 'पारदर्शी रेट्स और ईमानदार सर्विस। फ्लोर मैट अच्छे से धोए और सीट्स के कोने साफ किए। फुल वॉश का फिक्स ₹300 रेट।',
      'hi-en': 'Transparent rates aur honest service. Floor mats acche se wash kiye aur seats ke corners saaf kiye. Fixed ₹300 full wash rate.',
    },
    service: '4/5 Seater Full Wash',
  },
  {
    id: '4',
    name: 'Vikas Jadhav',
    vehicle: 'Tata Ace (Tempo)',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'VJ',
    comment: {
      en: 'Quick body wash for tempo at ₹300. High pressure wash cleared all mud from the chassis and wheel arches quickly.',
      mr: 'टेम्पोसाठी ₹३०० मध्ये उत्तम बॉडी वॉश. हाय प्रेशर जेटने चेसिस आणि व्हील आर्चमधील सर्व माती झटक्यात साफ केली.',
      hi: 'टेंपो के लिए ₹300 में बढ़िया बॉडी वॉश। हाई प्रेशर वॉश से चेसिस और पहियों की सारी मिट्टी तुरंत साफ हो गई।',
      'hi-en': 'Tempo ke liye ₹300 mein fast body wash. High pressure se chassis aur wheels ki saari mitti saaf ho gayi.',
    },
    service: 'Tempo Body Wash',
  },
];

export const Reviews: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <span>{t.reviews_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.reviews_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.reviews_subtitle}
          </p>
        </div>

        {/* Rating Overview Card */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <span className="text-4xl font-extrabold text-slate-900 font-heading">
                  {STUDIO_INFO.rating.score}
                </span>
                <div className="flex flex-col items-start">
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">Out of 5.0 Stars</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                {t.reviews_based_on}
              </p>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Verified Studio Visitors</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviewsData.map((rev) => {
            const commentText = rev.comment[language] || rev.comment.en;
            return (
              <div
                key={rev.id}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-blue-100 text-brand-800 font-bold flex items-center justify-center text-xs">
                        {rev.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                        <p className="text-xs text-slate-500">{rev.vehicle}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                    "{commentText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-medium text-slate-700">
                    {rev.service}
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
