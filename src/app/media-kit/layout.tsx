import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit — Audience Demographics, Campaign Results & Rates",
  description:
    "Hussa AlSaif media kit for brand managers: 330K+ followers, 20%+ engagement rate (4x MENA average), 84% female audience aged 18-34, 91% GCC reach. Case studies with Sephora, Fendi, Estee Lauder, MAC, Dyson & more. Rate card and content formats included.",
  alternates: {
    canonical: "https://hussaalsaif.com/media-kit",
  },
  openGraph: {
    title: "Media Kit — Hussa AlSaif | Saudi Content Creator & Brand Ambassador",
    description:
      "330K+ followers across Instagram & TikTok. 84% female audience, 91% GCC reach, 20%+ engagement rate. Partnered with Sephora, Fendi, Estee Lauder, MAC, Dyson & more. Download the full media kit.",
    type: "website",
    url: "https://hussaalsaif.com/media-kit",
    images: [
      {
        url: "https://hussaalsaif.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hussa AlSaif Media Kit — Saudi Content Creator with 330K+ followers and brand partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Media Kit — Hussa AlSaif",
    description:
      "330K+ followers, 20%+ engagement rate, 84% female audience. Full campaign case studies and rate card. Saudi content creator.",
  },
};

export default function MediaKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
