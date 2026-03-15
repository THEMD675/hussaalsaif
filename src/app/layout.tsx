import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://hussaalsaif.com"),
  title: "Hussa AlSaif — Content Creator & Brand Ambassador",
  description:
    "Saudi content creator & brand ambassador with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Too Faced, Fendi & more. Based in Khobar & Riyadh.",
  keywords: ["Hussa AlSaif", "Saudi content creator", "brand ambassador", "beauty", "lifestyle", "fashion", "Riyadh", "Khobar"],
  openGraph: {
    title: "Hussa AlSaif — Content Creator & Brand Ambassador",
    description: "Saudi content creator with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.",
    type: "website",
    locale: "en_US",
    url: "https://hussaalsaif.com",
    images: [{ url: "/images/hero.jpg", width: 640, height: 640, alt: "Hussa AlSaif" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussa AlSaif — Content Creator & Brand Ambassador",
    description: "Saudi content creator with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Fendi & more.",
    images: ["/images/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hussa AlSaif",
  alternateName: "حصه السيف",
  url: "https://hussaalsaif.com",
  image: "https://hussaalsaif.com/images/hero.jpg",
  jobTitle: "Content Creator & Brand Ambassador",
  description:
    "Saudi content creator & brand ambassador with 330K+ followers. Partnered with Sephora, Estée Lauder, MAC, Too Faced, Fendi & more.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Khobar & Riyadh",
    addressCountry: "SA",
  },
  sameAs: [
    "https://instagram.com/hussa.ss",
    "https://tiktok.com/@hussa.502",
    "https://youtube.com/@hussaalsaif",
    "https://snapchat.com/add/hussa.alsaif",
    "https://linktr.ee/Hussaalsaif",
    "https://fable.co/club/the-reading-room-with-hussa-205180405525",
  ],
  knowsAbout: ["Beauty", "Lifestyle", "Fashion", "Content Creation", "Brand Partnerships"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Imam Abdulrahman Bin Faisal University",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-[#fafcfe] text-gray-900 overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
