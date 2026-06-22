import type { Metadata } from 'next';
import { Urbanist, Inter } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'The Juice Standard | Juice Bar & Smoothies in Tucson, AZ',
  description:
    'Fresh cold-pressed juices, signature smoothies, acai bowls, and wellness shots in Tucson, AZ. 100% organic ingredients. Open 7am-7pm daily.',
  keywords: [
    'juice bar',
    'smoothies',
    'acai bowls',
    'Tucson',
    'Arizona',
    'cold-pressed juice',
    'wellness shots',
    'organic',
  ],
  openGraph: {
    title: 'The Juice Standard | Juice Bar & Smoothies in Tucson, AZ',
    description:
      'Fresh cold-pressed juices, signature smoothies, acai bowls, and wellness shots. 100% organic ingredients.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'The Juice Standard',
    description:
      'Fresh cold-pressed juices, signature smoothies, acai bowls, and wellness shots in Tucson, AZ.',
    url: 'https://thejuicestandard.com',
    telephone: '+1-520-555-0142',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '742 N 4th Ave',
      addressLocality: 'Tucson',
      addressRegion: 'AZ',
      postalCode: '85705',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.2319,
      longitude: -110.9665,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '07:00',
      closes: '19:00',
    },
    servesCuisine: ['Juice', 'Smoothies', 'Acai Bowls', 'Health Food'],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '320',
    },
  };

  return (
    <html lang="en" className={`${urbanist.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="flow-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
