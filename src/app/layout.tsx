import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#89BBdf",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hussaalsaif.com"),
  title: {
    default:
      "Hussa AlSaif — Beauty & Culture | Saudi Arabia | 530K+ Followers",
    template: "%s | Hussa AlSaif",
  },
  description:
    "Hussa AlSaif is Saudi Arabia's leading beauty and culture figure with 530K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more. Based in Saudi Arabia.",
  keywords: [
    "Hussa AlSaif",
    "حصه السيف",
    "Saudi beauty figure",
    "Saudi culture icon",
    "brand ambassador Saudi Arabia",
    "beauty authority KSA",
    "fashion figure Saudi",
    "beauty and culture Saudi Arabia",
    "GCC influencer",
    "Saudi influencer",
    "Riyadh beauty and culture figure",
    "Saudi beauty blogger",
    "influencer marketing Saudi Arabia",
    "brand partnerships KSA",
    "Sephora influencer",
    "curly hair Saudi",
    "makeup influencer Arab",
    "TikTok creator Saudi",
    "Instagram influencer KSA",
  ],
  authors: [{ name: "Hussa AlSaif", url: "https://hussaalsaif.com" }],
  creator: "Hussa AlSaif",
  publisher: "Hussa AlSaif",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/images/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: {
    canonical: "https://hussaalsaif.com",
    languages: {
      en: "https://hussaalsaif.com",
    },
  },
  openGraph: {
    title: "Hussa AlSaif — Beauty & Culture | Saudi Arabia",
    description:
      "Saudi Arabia's leading beauty and culture figure with 530K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more. Based in Saudi Arabia.",
    type: "website",
    locale: "en_US",
    url: "https://hussaalsaif.com",
    siteName: "Hussa AlSaif",
    images: [
      {
        url: "https://hussaalsaif.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hussa AlSaif — Beauty & Culture, Saudi Arabia",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussa AlSaif — Beauty & Culture | Saudi Arabia",
    description:
      "530K+ followers. Partnered with Sephora, Estee Lauder, MAC, Fendi & more. Saudi Arabia's defining beauty and culture figure.",
    images: [
      {
        url: "https://hussaalsaif.com/images/hero.jpg",
        alt: "Hussa AlSaif — Beauty & Culture, Saudi Arabia",
      },
    ],
    creator: "@hussaalsaif",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "entertainment",
};

/* ──────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
   ────────────────────────────────────── */

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://hussaalsaif.com/#person",
  name: "Hussa AlSaif",
  alternateName: ["حصه السيف", "Hussa"],
  url: "https://hussaalsaif.com",
  image: {
    "@type": "ImageObject",
    url: "https://hussaalsaif.com/images/hero.jpg",
    width: 1200,
    height: 630,
    caption:
      "Hussa AlSaif — Beauty & Culture, Saudi Arabia",
  },
  jobTitle: "Beauty & Culture Figure",
  description:
    "Saudi Arabia's leading beauty and culture figure with 530K+ combined followers across Instagram, TikTok, YouTube, and Snapchat. The defining voice in beauty, fashion, and culture for the GCC market.",
  nationality: { "@type": "Country", name: "Saudi Arabia" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh Province",
    addressCountry: "SA",
  },
  email: "inquiries@hussaalsaif.com",
  sameAs: [
    "https://instagram.com/hussa.ss",
    "https://tiktok.com/@hussa.502",
    "https://youtube.com/@hussaalsaif",
    "https://snapchat.com/add/hussa.alsaif",
    "https://hussaalsaif.com/links",
    "https://www.linkedin.com/in/hussa-alsaif-07a970289/",
    "https://fable.co/club/the-reading-room-with-hussa-205180405525",
  ],
  knowsAbout: [
    "Beauty & Skincare",
    "Fashion & Luxury",
    "Lifestyle Content",
    "Content Creation",
    "Brand Partnerships",
    "Influencer Marketing",
    "Curly Hair Care",
    "Public Relations",
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Arabic", alternateName: "ar" },
    { "@type": "Language", name: "English", alternateName: "en" },
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Masters in Marketing Graduate",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "degree",
    educationalLevel: "Bachelor's Degree",
    about: "Marketing & Fine Arts",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Beauty & Culture Figure",
    occupationLocation: { "@type": "Country", name: "Saudi Arabia" },
    skills:
      "Beauty Authority, Brand Partnerships, Cultural Leadership, Editorial Direction, Fashion Styling",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://hussaalsaif.com/#website",
  url: "https://hussaalsaif.com",
  name: "Hussa AlSaif",
  description:
    "Official website of Hussa AlSaif — Beauty & Culture, Saudi Arabia",
  publisher: { "@id": "https://hussaalsaif.com/#person" },
  inLanguage: "en",
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://hussaalsaif.com/#webpage",
  url: "https://hussaalsaif.com",
  name: "Hussa AlSaif — Beauty & Culture | Saudi Arabia",
  description:
    "Hussa AlSaif is Saudi Arabia's leading beauty and culture figure with 530K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.",
  isPartOf: { "@id": "https://hussaalsaif.com/#website" },
  about: { "@id": "https://hussaalsaif.com/#person" },
  inLanguage: "en",
  dateModified: "2026-03-15",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hussaalsaif.com",
      },
    ],
  },
};

const campaignsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://hussaalsaif.com/#campaigns",
  name: "Brand Campaigns by Hussa AlSaif",
  description:
    "Selected brand campaigns and collaborations by Saudi beauty and culture figure Hussa AlSaif",
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "CreativeWork",
        name: "Sephora Collection — Brand Partnership",
        description:
          "Brand partnership across Instagram and TikTok for Sephora's KSA product launches.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Sephora" },
        genre: "Beauty Campaign",
        image: "https://hussaalsaif.com/images/sephora-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "CreativeWork",
        name: "Fendi — Fashion Partnership",
        description:
          "Fashion content partnership for Fendi's regional presence.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Fendi" },
        genre: "Fashion",
        image: "https://hussaalsaif.com/images/fendi-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "CreativeWork",
        name: "Estée Lauder — Brand Partnership",
        description:
          "Skincare content partnership with Estée Lauder.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Estee Lauder" },
        genre: "Skincare",
        image: "https://hussaalsaif.com/images/estee-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "CreativeWork",
        name: "Too Faced x Sephora ME — Brand Partnership",
        description:
          "Beauty content for the Too Faced x Sephora Middle East collaboration.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Too Faced" },
        genre: "Beauty",
        image: "https://hussaalsaif.com/images/toofaced-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "CreativeWork",
        name: "MAC Cosmetics — Brand Partnership",
        description:
          "Makeup content for MAC new collection launches.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "MAC Cosmetics" },
        genre: "Makeup",
        image: "https://hussaalsaif.com/images/mac-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "CreativeWork",
        name: "Herbal Essences — Brand Partnership",
        description:
          "Hair care content aligned with the GCC curly hair movement.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Herbal Essences" },
        genre: "Hair Care",
        image: "https://hussaalsaif.com/images/herbal-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "CreativeWork",
        name: "Sol de Janeiro — Brand Partnership",
        description:
          "Lifestyle content introducing Sol de Janeiro to the Saudi market.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Sol de Janeiro" },
        genre: "Lifestyle",
        image: "https://hussaalsaif.com/images/soldejanerio-campaign.jpg",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "CreativeWork",
        name: "Level Shoes — Brand Partnership",
        description:
          "Styling and fashion content with Level Shoes.",
        creator: { "@id": "https://hussaalsaif.com/#person" },
        about: { "@type": "Brand", name: "Level Shoes" },
        genre: "Fashion",
        image: "https://hussaalsaif.com/images/sephora-grwm.jpg",
      },
    },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://hussaalsaif.com/#service",
  name: "Brand Partnership & Influencer Marketing",
  description:
    "Brand campaigns, ambassadorships, event appearances, and product launch collaborations with Saudi beauty and culture figure Hussa AlSaif. Reach 530K+ highly engaged consumers in KSA and GCC.",
  provider: { "@id": "https://hussaalsaif.com/#person" },
  serviceType: "Influencer Marketing",
  areaServed: [
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Place", name: "GCC Region" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Collaboration Types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Campaigns" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Brand Ambassadorships" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Event Appearances" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Product Launches" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Instagram Reels & Stories",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "TikTok Content" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "YouTube Videos" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "UGC Content" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="geo.region" content="SA" />
        <meta name="geo.placename" content="Saudi Arabia" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personJsonLd,
              websiteJsonLd,
              webPageJsonLd,
              campaignsJsonLd,
              serviceJsonLd,
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#fafcfe] text-gray-900 overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
