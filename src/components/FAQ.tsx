'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  q: {
    en: string;
    mr: string;
    hi: string;
    'hi-en': string;
  };
  a: {
    en: string;
    mr: string;
    hi: string;
    'hi-en': string;
  };
}

const faqList: FAQItem[] = [
  {
    id: '1',
    q: {
      en: 'What is the difference between Body Wash and Full Wash?',
      mr: 'बॉडी वॉश आणि फुल वॉशमध्ये काय फरक आहे?',
      hi: 'बॉडी वॉश और फुल वॉश में क्या अंतर है?',
      'hi-en': 'Body Wash aur Full Wash mein kya difference hai?',
    },
    a: {
      en: 'Both Body Wash and Full Wash include underbody chassis jet wash, high-pressure RO rinse, snow foam wash, tyre dressing, and glass wiping. Full Wash additionally includes complete interior cleaning: deep cabin & boot vacuuming and floor mat washing.',
      mr: 'बॉडी वॉश आणि फुल वॉश दोन्हीमध्ये अंडरबॉडी चेसिस जेट वॉश, हाय प्रेशर RO पाणी, स्नो फोम, टायर पॉलिश आणि काचांची पुसणी समाविष्ट आहे. फुल वॉशमध्ये याव्यतिरिक्त संपूर्ण इंटिरिअर क्लिनिंग: केबिन व डिकीचे डीप व्हॅक्यूमिंग आणि फ्लोअर मॅट वॉश समाविष्ट आहे.',
      hi: 'बॉडी वॉश और फुल वॉश दोनों में अंडरबॉडी चेसिस जेट वॉश, हाई प्रेशर RO पानी, स्नो फोम, टायर पॉलिश और शीशों की सफाई शामिल है। फुल वॉश में इसके अलावा पूरा इंटीरियर क्लीनिंग: केबिन व डिक्की की डीप वैक्यूमिंग और फ्लोर मैट की सफाई शामिल है।',
      'hi-en': 'Body Wash aur Full Wash dono mein underbody chassis jet wash, high pressure RO wash, snow foam, tyre polish aur glass wipe milta hai. Full Wash mein iske alawa complete interior cleaning: cabin & boot vacuuming aur floor mat wash include rehta hai.',
    },
  },
  {
    id: '2',
    q: {
      en: 'Why do 2-wheelers (Bikes & Scooters) have a single complete wash?',
      mr: '२-चाकी वाहनांसाठी (बाईक व स्कूटर) एकच संपूर्ण वॉश का आहे?',
      hi: '2-व्हीलर (बाइक व स्कूटर) के लिए एक ही कंप्लीट वॉश क्यों है?',
      'hi-en': '2-Wheelers (Bikes & Scooters) ke liye single complete wash kyun hai?',
    },
    a: {
      en: 'Because on bikes and scooters, the engine, chassis, and body panels require thorough washing together. We provide a complete deep wash covering high pressure RO rinse, snow foam, degreasing, tyre dressing, and mirror wipe for ₹100 (Bike) and ₹80 (Scooter).',
      mr: 'कारण २-चाकी गाड्यांचे इंजिन आणि सर्व भाग उघडे असतात. आम्ही हाय प्रेशर पाणी, स्नो फोम, डिग्रेसिंग, टायर पॉलिश आणि काच पुसणीचे संपूर्ण पॅकेज देतो — बाईकसाठी ₹१०० आणि स्कूटरसाठी ₹८०.',
      hi: 'क्योंकि 2-व्हीलर में इंजन और बॉडी पार्ट्स खुले होते हैं। हम हाई प्रेशर RO पानी, स्नो फोम, डिग्रीसिंग, टायर पॉलिश और मिरर सफाई का पूरा पैकेज देते हैं — बाइक के लिए ₹100 और स्कूटर के लिए ₹80।',
      'hi-en': 'Kyunki bikes aur scooters ke sabhi parts khule hote hain. Hum high pressure RO wash, snow foam, degreasing, tyre polish aur mirror wipe ek sath dete hain — Bike ke liye ₹100 aur Scooter ke liye ₹80.',
    },
  },
  {
    id: '3',
    q: {
      en: 'Do I need a prior appointment or can I drive in directly?',
      mr: 'आधी अपॉइंटमेंट घ्यावी लागते की थेट येऊ शकतो?',
      hi: 'क्या पहले अपॉइंटमेंट लेना जरूरी है या सीधे आ सकते हैं?',
      'hi-en': 'Kya pehle appointment lena zaroori hai ya direct aa sakte hain?',
    },
    a: {
      en: 'We have 3 dedicated washing bays, so walk-ins are always welcome! You can also call us beforehand (+91 9822451532) to check current bay availability.',
      mr: 'आमच्याकडे ३ वॉशिंग बे आहेत, त्यामुळे तुम्ही थेट येऊ शकता! तुम्ही येण्यापूर्वी +91 9822451532 वर कॉल करून बे उपलब्ध आहे का ते विचारू शकता.',
      hi: 'हमारे पास 3 वॉशिंग बे हैं, इसलिए आप सीधे आ सकते हैं! आप आने से पहले +91 9822451532 पर कॉल करके बे उपलब्धता भी पता कर सकते हैं।',
      'hi-en': 'Hamare paas 3 washing bays hain, isliye walk-ins hamesha welcome hain! Aap aane se pehle +91 9822451532 par call karke bay availability check kar sakte hain.',
    },
  },
  {
    id: '4',
    q: {
      en: 'How does RO purified water protect vehicle paint?',
      mr: 'RO शुद्ध पाणी गाडीच्या रंगाचे कसे संरक्षण करते?',
      hi: 'RO शुद्ध पानी गाड़ी के पेंट को कैसे सुरक्षित रखता है?',
      'hi-en': 'RO soft water se paint kaise safe rehta hai?',
    },
    a: {
      en: 'Normal hard water leaves mineral white water spots on the paint and windshield after drying. Our TDS-controlled soft RO water ensures a clean, spot-free natural finish.',
      mr: 'साध्या पाण्याने गाडी वाळल्यावर पांढरे पाण्याचे डाग पडतात. आमचे TDS नियंत्रित मऊ RO पाणी वापरल्याने रंगावर आणि काचेवर कोणतेही डाग न पडता स्वच्छ फिनिश मिळते.',
      hi: 'साधारण खारे पानी से सूखने के बाद सफेद दाग पड़ जाते हैं। हमारे TDS-कंट्रोल्ड सॉफ्ट RO पानी से बिना किसी सफेद दाग के साफ चमक मिलती है।',
      'hi-en': 'Normal hard water se sukhne ke baad white spots padte hain. TDS-controlled soft RO water se zero watermarks ke sath clean finish aati hai.',
    },
  },
  {
    id: '5',
    q: {
      en: 'What payment modes are accepted at the studio?',
      mr: 'पैसे भरण्यासाठी कोणते पर्याय उपलब्ध आहेत?',
      hi: 'पेमेंट के कौन से तरीके स्वीकार किए जाते हैं?',
      'hi-en': 'Payment ke kaunse methods accepted hain?',
    },
    a: {
      en: 'We accept UPI (Google Pay, PhonePe, Paytm) and Cash.',
      mr: 'आम्ही UPI (Google Pay, PhonePe, Paytm) आणि रोख रक्कम (Cash) स्वीकारतो.',
      hi: 'हम UPI (Google Pay, PhonePe, Paytm) और नकद (Cash) स्वीकार करते हैं।',
      'hi-en': 'Hum UPI (Google Pay, PhonePe, Paytm) aur Cash accept karte hain.',
    },
  },
];

export const FAQ: React.FC = () => {
  const { language, t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-brand-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq_badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mb-3">
            {t.faq_title}
          </h2>
          <p className="text-sm text-slate-600">
            {t.faq_subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            const question = item.q[language] || item.q.en;
            const answer = item.a[language] || item.a.en;

            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-blue-50/40 border-brand-300 shadow-sm'
                    : 'bg-slate-50/70 border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {question}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-brand-700 text-white rotate-180'
                        : 'bg-white text-slate-500 border border-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                        {answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
