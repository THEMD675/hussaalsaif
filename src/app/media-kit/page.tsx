"use client";

import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "528K+", label: "Combined Reach" },
  { value: "2.5M+", label: "YouTube Views" },
  { value: "10.6M+", label: "TikTok Likes" },
  { value: "14", label: "Brand Partners" },
];

const PLATFORMS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K", engagement: "4.8%", color: "#E1306C" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K", engagement: "10.6M likes", color: "#000000" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif", followers: "191K", engagement: "2.5M views", color: "#FF0000" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif", followers: "Active", engagement: "Daily stories", color: "#FFFC00" },
];

const DEMOGRAPHICS = [
  { label: "Primarily Women", description: "Young Saudi women who set beauty and fashion trends in their circles" },
  { label: "Gen Z & Millennials", description: "The 18-34 demographic with the highest purchasing power in the Gulf" },
  { label: "Saudi-First", description: "Rooted in Saudi Arabia with strong reach across the wider GCC" },
  { label: "High Intent", description: "An audience that discovers, trusts, and buys based on Hussa's recommendations" },
];

const AUDIENCE_INTERESTS = [
  { name: "Beauty & Skincare", description: "Product reviews, tutorials, and skincare routines drive the conversation" },
  { name: "Fashion & Luxury", description: "From high street to haute couture, her audience follows her style closely" },
  { name: "Lifestyle & Wellness", description: "Self-care, wellness, and daily routines resonate deeply" },
  { name: "Travel & Hospitality", description: "Destination and hotel content that inspires real bookings" },
  { name: "Food & Dining", description: "Restaurant and cafe culture content with strong local engagement" },
];

const BRANDS = [
  { name: "Sephora", logo: "/images/brands/sephora.svg" },
  { name: "Fendi", logo: "/images/brands/fendi.svg" },
  { name: "Too Faced", logo: "/images/brands/too-faced.svg" },
  { name: "Estée Lauder", logo: "/images/brands/estee-lauder.svg" },
  { name: "Dyson", logo: "/images/brands/dyson.svg" },
  { name: "Kérastase", logo: "/images/brands/kerastase.svg" },
  { name: "Herbal Essences", logo: "/images/brands/herbal-essences.svg" },
  { name: "Redken", logo: "/images/brands/redken.svg" },
  { name: "MAC", logo: "/images/brands/mac.svg" },
  { name: "Wella", logo: "/images/brands/wella.svg" },
  { name: "Level Shoes", logo: "/images/brands/level-shoes.svg" },
  { name: "Sol de Janeiro", logo: "/images/brands/sol-de-janeiro.svg" },
  { name: "Denman", logo: "/images/brands/denman.svg" },
];

const CONTENT_FORMATS = [
  {
    title: "Instagram Reels",
    description: "15-90s high-production vertical video. Ideal for product launches, tutorials, and brand storytelling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M12 8v8"/><path d="M8 12h8"/>
      </svg>
    ),
  },
  {
    title: "TikTok",
    description: "Trend-driven, authentic short-form content. High virality potential with 10.6M+ lifetime likes.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
  },
  {
    title: "YouTube",
    description: "Long-form reviews, vlogs, and brand integration content. Deep-dive product features and lifestyle.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    title: "Instagram Stories",
    description: "24hr ephemeral content with polls, Q&A, and swipe-up links. Perfect for flash promos and event coverage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>
      </svg>
    ),
  },
  {
    title: "Event Coverage",
    description: "On-site brand activations, launches, and pop-ups. Multi-platform real-time storytelling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14v-4z"/><rect x="3" y="6" width="12" height="12" rx="2"/>
      </svg>
    ),
  },
  {
    title: "UGC / Whitelisting",
    description: "Authentic user-generated style content for brand ad accounts. Raw, relatable, conversion-focused.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

const CASE_STUDIES = [
  {
    image: "/images/sephora-campaign.jpg",
    brand: "Sephora Collection",
    category: "Beauty Campaign",
    description: "Lip tint launch content across Instagram and TikTok for Sephora's KSA product launches.",
    result: "Ongoing partnership",
  },
  {
    image: "/images/fendi-campaign.jpg",
    brand: "Fendi FW25",
    category: "Fashion",
    description: "Fashion week content partnership for Fendi's Fall/Winter 2025 regional presence.",
    result: "Brand collaboration",
  },
  {
    image: "/images/toofaced-campaign.jpg",
    brand: "Too Faced x Sephora ME",
    category: "Beauty",
    description: "Ramadan collection haul and looks for the Too Faced x Sephora Middle East collaboration.",
    result: "Brand partnership",
  },
  {
    image: "/images/mac-campaign.jpg",
    brand: "MAC Cosmetics",
    category: "Makeup",
    description: "Studio Radiance foundation and concealer review and tutorial content.",
    result: "Brand partnership",
  },
];

export default function MediaKit() {
  return (
    <>
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          .no-print {
            display: none !important;
          }
          .print-break {
            page-break-before: always;
          }
          section {
            page-break-inside: avoid;
          }
          .glass, .result-card, .demo-card {
            box-shadow: none !important;
            border: 1px solid #e5e7eb !important;
          }
          nav, footer .no-print {
            display: none !important;
          }
        }
      `}</style>

      <main className="relative bg-white min-h-screen">
        {/* -- NAV -- */}
        <nav className="no-print fixed top-0 left-0 right-0 z-50 glass" role="navigation">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
            <Link href="/" aria-label="Hussa AlSaif - Home">
              <img src="/images/logo-hs.svg" alt="Hussa AlSaif" className="h-9 w-9 rounded-lg" />
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-gray-400 hover:text-gray-900 text-[13px] font-medium transition-colors">
                Back to Site
              </Link>
              <button
                onClick={() => window.print()}
                className="bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-300"
              >
                Download as PDF
              </button>
            </div>
          </div>
        </nav>

        {/* ============================================
            HERO
            ============================================ */}
        <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
              <div>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">
                  Media Kit 2026
                </p>
                <h1
                  className="font-serif font-bold tracking-tight leading-[0.9] mb-6"
                  style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
                >
                  Hussa<br />
                  <span className="text-gradient">AlSaif</span>
                </h1>
                <p className="text-gray-500 max-w-md leading-[1.8] text-[16px] font-medium mb-4">
                  Beauty &amp; Culture Icon &mdash; Saudi Arabia
                </p>
                <p className="text-gray-400 max-w-md leading-[1.8] text-[14px] mb-8">
                  528K+ combined reach across Instagram, TikTok &amp; YouTube. 2.5M+ YouTube views. 10.6M+ TikTok likes. 14 brand partnerships with the world&apos;s most discerning beauty houses.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {["Beauty", "Fashion", "Lifestyle", "Curly Hair", "Bilingual AR/EN"].map((tag) => (
                    <span key={tag} className="bg-[#89BBdf]/10 text-[#5a9ac5] px-4 py-2 rounded-full text-[12px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 text-[13px] text-gray-400">
                  <span>Saudi Arabia</span>
                  <span className="text-gray-200">|</span>
                  <span>inquiries@hussaalsaif.com</span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-[320px] h-[420px] sm:w-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-[#89BBdf]/10">
                  <Image
                    src="/images/media-kit-hero.jpg"
                    alt="Hussa AlSaif — Beauty and Culture Icon media kit portrait"
                    fill
                    sizes="(max-width: 768px) 320px, 360px"
                    className="object-cover object-[center_20%]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            KEY STATS
            ============================================ */}
        <section className="py-16 sm:py-20 bg-white border-y border-gray-100/60">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-10 text-center">
              At a Glance
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-7 sm:p-9 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500"
                >
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-[11px] text-gray-400 font-medium tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PLATFORM BREAKDOWN
            ============================================ */}
        <section className="py-20 sm:py-28 bg-[#f8fbfe]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Platforms</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Platform Breakdown
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              Multi-platform presence with strong engagement across all channels.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-7 sm:p-8 text-center group hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <p className="font-serif font-bold text-3xl text-gradient mb-2">{p.followers}</p>
                  <p className="font-semibold text-[14px] text-gray-900 group-hover:text-[#89BBdf] transition-colors mb-1">
                    {p.name}
                  </p>
                  <p className="text-gray-400 text-[12px] mb-2">{p.handle}</p>
                  <p className="text-[#89BBdf] text-[11px] font-medium">{p.engagement}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            AUDIENCE DEMOGRAPHICS
            ============================================ */}
        <section className="py-20 sm:py-28 bg-white print-break">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Audience</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Audience Demographics
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              Hussa&apos;s audience aligns with the highest-value consumer segment in the GCC: young Saudi women with purchasing power.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {DEMOGRAPHICS.map((demo) => (
                <div key={demo.label} className="demo-card rounded-2xl p-7 sm:p-9">
                  <p className="text-[#89BBdf] font-serif font-bold text-[18px] sm:text-[20px] mb-2">{demo.label}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{demo.description}</p>
                </div>
              ))}
            </div>

            {/* Audience Interests */}
            <div className="max-w-2xl">
              <h3 className="font-serif text-xl font-bold mb-8">Audience Interests</h3>
              <div className="space-y-5">
                {AUDIENCE_INTERESTS.map((interest) => (
                  <div key={interest.name} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#89BBdf] mt-2 shrink-0" />
                    <div>
                      <p className="text-gray-900 text-[14px] font-semibold mb-0.5">{interest.name}</p>
                      <p className="text-gray-400 text-[13px] leading-relaxed">{interest.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            BRAND PARTNERS
            ============================================ */}
        <section className="py-20 sm:py-28 bg-[#f8fbfe]">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Trusted By</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Brand Partners
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              Partnered with leading global and regional brands across beauty, fashion, lifestyle, and haircare.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {BRANDS.map((brand) => (
                <div
                  key={brand.name}
                  className="glass rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:shadow-[#89BBdf]/5 transition-all duration-500 flex flex-col items-center justify-center gap-3"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 sm:h-10 w-auto object-contain opacity-50 grayscale"
                  />
                  <p className="font-serif text-sm font-bold text-gray-300">
                    {brand.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CONTENT FORMATS
            ============================================ */}
        <section className="py-20 sm:py-28 bg-white print-break">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Services</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Content Formats
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              Flexible content solutions across every major platform and format.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {CONTENT_FORMATS.map((format) => (
                <div
                  key={format.title}
                  className="result-card rounded-2xl p-7 sm:p-8"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#89BBdf]/10 flex items-center justify-center mb-4 text-[#89BBdf]">
                    {format.icon}
                  </div>
                  <h3 className="font-semibold text-[15px] text-gray-900 mb-2">{format.title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CASE STUDIES
            ============================================ */}
        <section className="py-20 sm:py-28 bg-[#f8fbfe] print-break">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Results</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Campaign Case Studies
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              A selection of brand collaborations across beauty, fashion, and lifestyle.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {CASE_STUDIES.map((study) => (
                <div key={study.brand} className="glass rounded-2xl overflow-hidden group">
                  <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.brand} ${study.category} campaign by Hussa AlSaif — ${study.result}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#89BBdf]">
                        {study.category}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-white">{study.brand}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-3">{study.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#89BBdf]" />
                      <p className="text-[#89BBdf] text-[13px] font-semibold">{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            PARTNERSHIP TIERS / RATE CARD
            ============================================ */}
        <section className="py-20 sm:py-28 bg-white print-break">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-4">Partnerships</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-[1.15] mb-4">
              Partnership Tiers
            </h2>
            <p className="text-gray-400 text-[15px] mb-12 max-w-lg">
              Hussa works with a limited number of brands each quarter to maintain authenticity and impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { tier: "Single Post", desc: "One Instagram Reel or TikTok with Stories coverage. Perfect for product launches and seasonal campaigns.", price: "Available on request" },
                { tier: "Campaign", desc: "Multi-post series (3-5 posts) across 2+ platforms. Ideal for sustained brand storytelling.", price: "Available on request" },
                { tier: "Brand Ambassador", desc: "Quarterly or annual partnership with category exclusivity. Deep integration with Hussa's personal brand.", price: "Available on request" },
                { tier: "Custom", desc: "Event appearances, creative direction, long-form content, or something we haven't thought of yet.", price: "Let's talk" },
              ].map((item) => (
                <div key={item.tier} className="result-card rounded-2xl p-7 sm:p-8 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-serif text-lg font-bold text-gray-900">{item.tier}</h3>
                    <span className="text-[11px] font-semibold text-[#89BBdf] bg-[#89BBdf]/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0 ml-3">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            CONTACT CTA
            ============================================ */}
        <section className="py-20 sm:py-28 relative overflow-hidden print-break">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-[#0d1a26]" />
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#89BBdf]/15 rounded-full blur-[150px]" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Get in Touch</p>
            <h2
              className="font-serif font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Ready to <span className="text-gradient">collaborate?</span>
            </h2>
            <p className="text-gray-400 text-[15px] max-w-lg mx-auto mb-10 leading-[1.8]">
              For partnership inquiries, rate cards, and custom campaign proposals, reach out directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 no-print">
              <a
                href="mailto:inquiries@hussaalsaif.com?subject=Brand%20Partnership%20Inquiry"
                className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/20"
              >
                inquiries@hussaalsaif.com
              </a>
              <a
                href="https://instagram.com/hussa.ss"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block"
              >
                @hussa.ss
              </a>
            </div>

            {/* Print-only contact info */}
            <div className="hidden print:block text-gray-400 text-[14px] space-y-1">
              <p>inquiries@hussaalsaif.com</p>
              <p>Instagram: @hussa.ss</p>
              <p>TikTok: @hussa.502</p>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-10 pt-10 border-t border-white/5">
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">Fast</p>
                <p className="text-gray-500 text-[11px] mt-1">Response</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">EN &amp; AR</p>
                <p className="text-gray-500 text-[11px] mt-1">Bilingual</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">KSA &amp; GCC</p>
                <p className="text-gray-500 text-[11px] mt-1">Coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* -- FOOTER -- */}
        <footer className="bg-gray-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-serif text-lg font-bold text-white">Hussa<span className="text-[#89BBdf]">.</span></p>
            <p className="text-gray-500 text-[13px]">&copy; 2026 Hussa AlSaif. All rights reserved.</p>
            <p className="text-gray-600 text-[11px] tracking-[0.2em] uppercase">Saudi Arabia</p>
          </div>
        </footer>
      </main>
    </>
  );
}
