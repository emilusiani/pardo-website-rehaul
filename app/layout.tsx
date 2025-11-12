import '../styles/theme.css';
import './globals.css';
import Image from 'next/image';
import type { Metadata } from 'next';
import Header from './Header';
import { WebVitals } from './WebVitals';
import BackToTop from './BackToTop';

export const metadata: Metadata = {
  title: 'PARDO Construction LLC | Hospitality Remodeling',
  description: 'Premium hospitality remodeling nationwide for hotels, resorts, and dining spaces.',
  metadataBase: new URL('https://pardoconstructionllc.com'),
  openGraph: {
    title: 'PARDO Construction LLC | Hospitality Remodeling',
    description: 'Premium hospitality remodeling nationwide for hotels, resorts, and dining spaces.',
    type: 'website',
    locale: 'en_US',
    siteName: 'PARDO Construction LLC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PARDO Construction LLC | Hospitality Remodeling',
    description: 'Premium hospitality remodeling nationwide for hotels, resorts, and dining spaces.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://pardoconstructionllc.com',
    name: 'PARDO Construction LLC',
    description: 'Premium hospitality remodeling nationwide for hotels, resorts, and dining spaces.',
    url: 'https://pardoconstructionllc.com',
    logo: 'https://pardoconstructionllc.com/assets/logo.png',
    image: 'https://pardoconstructionllc.com/assets/image4.jpg',
    telephone: '+15551234567',
    email: 'info@pardoconstructionllc.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$$',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hospitality Remodeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hotel Renovations',
            description: 'Phased guest room, corridor, lobby, and amenity upgrades with minimal disruption and brand‑aligned finishes.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Restaurant & Bar',
            description: 'Dining and lounge modernizations improving flow, ambiance, and peak‑service throughput.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Resort Amenities',
            description: 'Upgrades for spa, pool, and recreation—uniting durability, lighting, and guest experience.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Guest Room Programs',
            description: 'Turnkey FF&E replacement, bath modernization, and energy‑efficient upgrades aligned to brand standards.',
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <WebVitals />
        <BackToTop />
        <a className="skip-link" href="#main">Skip to content</a>

        <Header />

        {children}

        <footer className="site-footer" role="contentinfo">
          <div className="wrap footer">
            <div className="footer-grid">
              <div className="footer-brand">
                <Image className="footer-logo" src="/assets/logo.png" alt="Pardo Construction LLC logo" width={180} height={48} loading="lazy" />
                <p>Nationwide hospitality remodeling partner delivering brand‑aligned execution and disciplined project controls.</p>
              </div>
              <div>
                <h4>Navigation</h4>
                <a href="#home">Home</a><br />
                <a href="#services">Services</a><br />
                <a href="#portfolio">Portfolio</a><br />
                <a href="#about">About</a><br />
                <a href="#contact">Contact</a>
              </div>
              <div>
                <h4>Services</h4>
                <a href="#">Hotel Renovations</a><br />
                <a href="#">Guest Room Programs</a><br />
                <a href="#">Restaurant & Bar</a><br />
                <a href="#">Resort Amenities</a>
              </div>
              <div>
                <h4>Contact</h4>
                <p>Email: info@pardoconstructionllc.com</p>
                <p>Phone: (555) 123‑4567</p>
                <p>Nationwide • All 50 States</p>
              </div>
            </div>
            <div className="legal">© {new Date().getFullYear()} PARDO Construction LLC • Licensed & Insured • All Rights Reserved</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
