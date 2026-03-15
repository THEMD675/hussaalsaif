/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://hussaalsaif.com/'),
  title: {
    template: '%s | Hussa AlSaif',
    default: 'Hussa AlSaif — Content Creator & Brand Ambassador',
  },
  description:
    'Saudi content creator & brand ambassador with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Too Faced, Fendi & more. Beauty, lifestyle & fashion. Based in Khobar & Riyadh.',
  generator: 'Hussa AlSaif',
  applicationName: 'Hussa AlSaif',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Hussa AlSaif', 'Saudi content creator', 'brand ambassador',
    'beauty influencer', 'lifestyle', 'fashion', 'Riyadh',
    'Sephora', 'Estée Lauder', 'MAC', 'Too Faced', 'Fendi',
  ],
  authors: [
    { name: 'Hussa AlSaif', url: 'https://hussaalsaif.com' },
  ],
  creator: 'Hussa AlSaif',
  publisher: 'Hussa AlSaif',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://hussaalsaif.com',
    siteName: 'Hussa AlSaif',
    title: 'Hussa AlSaif — Content Creator & Brand Ambassador',
    description:
      'Saudi content creator with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 640,
        height: 640,
        alt: 'Hussa AlSaif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussa AlSaif — Content Creator & Brand Ambassador',
    description:
      'Saudi content creator with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.',
    images: [
      {
        url: '/images/hero.jpg',
        alt: 'Hussa AlSaif',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
