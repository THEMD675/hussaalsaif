import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fafcfe] text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
