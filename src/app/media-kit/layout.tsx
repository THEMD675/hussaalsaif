import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit — Hussa AlSaif | Audience, Platforms & Partnerships",
  description: "Hussa AlSaif's media kit: 530K+ combined reach, 12 brand partners including Sephora, Estée Lauder, MAC, Fendi. Audience demographics, content formats, and partnership tiers.",
  alternates: { canonical: "https://hussaalsaif.com/media-kit" },
  openGraph: {
    title: "Hussa AlSaif — Media Kit 2026",
    description: "530K+ combined reach. 12 brand partners. Audience demographics, content formats, and partnership tiers.",
    type: "website",
    url: "https://hussaalsaif.com/media-kit",
    images: [{ url: "https://hussaalsaif.com/images/hero.jpg", width: 1200, height: 630, alt: "Hussa AlSaif — Media Kit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussa AlSaif — Media Kit 2026",
    description: "530K+ combined reach. 12 brand partners. Beauty & culture icon media kit.",
  },
};

export default function MediaKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
