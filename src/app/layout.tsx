import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  title: 'Gurukrupa Washing Center and Detailing Studio Pune | 100% RO Water Foam Wash',
  description:
    'Vehicle wash center in Pune. 100% RO soft water, active foam wash, underbody chassis wash & interior vacuuming. 2-Wheeler wash from ₹80, 4-Wheeler from ₹200. Call +91 9822451532.',
  keywords: [
    'Gurukrupa Washing Center',
    'Gurukrupa Detailing Studio',
    'Car Wash Pune',
    'Bike Wash Pune',
    'Vehicle Washing Center',
    'RO Water Foam Wash',
    'Car body wash price'
  ],
  authors: [{ name: 'Gurukrupa Washing Center and Detailing Studio' }],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 min-h-screen antialiased selection:bg-blue-100 selection:text-brand-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
