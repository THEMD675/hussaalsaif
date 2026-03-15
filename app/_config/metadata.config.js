/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://hussaalsaif.com/'),
  title: {
    template: '%s | Hussa AlSaif',
    default: 'Hussa AlSaif • Content Creator & Brand Ambassador',
  },
  description:
    'Saudi-based lifestyle, beauty & fashion content creator. 140K+ followers across Instagram, TikTok, YouTube & Snapchat. Brand partnerships, event coverage & campaign collaborations.',
  generator: 'Hussa AlSaif',
  applicationName: 'Hussa AlSaif',
  referrer: 'origin-when-cross-origin',
  keywords: ['Content Creator', 'Brand Ambassador', 'Beauty', 'Lifestyle', 'Saudi Arabia', 'Influencer'],
  authors: [
    { name: 'Hussa AlSaif', url: 'https://hussaalsaif.com' },
  ],
  creator: 'Hussa AlSaif',
  publisher: 'Hussa AlSaif',
  twitter: {
    card: 'summary_large_image',
    title: 'Hussa AlSaif',
    description:
      'Saudi-based lifestyle, beauty & fashion content creator. 140K+ followers. Brand partnerships & campaign collaborations.',
    images: {
      url: 'https://hussaalsaif.com/screenshot.png',
      alt: 'Hussa AlSaif Portfolio',
    },
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
