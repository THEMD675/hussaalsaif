"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import ImageReveal from "@/components/ImageReveal";
import HorizontalScroll from "@/components/HorizontalScroll";

gsap.registerPlugin(ScrollTrigger);

const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

const BRANDS = [
  "Sephora", "Fendi", "Too Faced", "Estée Lauder", "Dyson",
  "Kerastase", "Herbal Essences", "Redken", "MAC",
  "Wella Professionals", "Level Shoes", "La Belle", "Sol de Janeiro",
];

const PROJECTS = [
  {
    image: "/images/beauty-editorials.jpg",
    brand: "Sephora Collection",
    category: "Beauty Campaign",
    description: "Full-funnel beauty campaign across Instagram & TikTok. Product launch content driving in-store traffic across KSA.",
    result: "2.1M reach, 340K+ engagements",
  },
  {
    image: "/images/brand-campaigns.jpg",
    brand: "Fendi FW25",
    category: "Fashion",
    description: "Luxury fashion partnership featuring event coverage and editorial-style content for regional launch.",
    result: "1.8M impressions, 12% engagement rate",
  },
  {
    image: "/images/gallery-6.jpg",
    brand: "Herbal Essences",
    category: "Hair Care",
    description: "Multi-platform product integration campaign with authentic storytelling for the GCC market.",
    result: "890K reach, 4.2x ROI on ad spend",
  },
  {
    image: "/images/gallery-5.jpg",
    brand: "Too Faced x Sephora ME",
    category: "Beauty",
    description: "Exclusive collaboration content for regional Sephora launch. In-store and digital activation.",
    result: "1.5M reach, sold out in 72 hours",
  },
  {
    image: "/images/gallery-4.jpg",
    brand: "Sol de Janeiro",
    category: "Lifestyle",
    description: "Lifestyle-driven brand awareness campaign positioning the brand for Saudi summer market.",
    result: "1.2M impressions, 280K engagements",
  },
  {
    image: "/images/event-coverage.jpg",
    brand: "Estee Lauder",
    category: "Skincare",
    description: "Premium skincare campaign with educational content series and product deep-dives.",
    result: "2.4M reach, 15% conversion lift",
  },
  {
    image: "/images/gallery-1.jpg",
    brand: "MAC Cosmetics",
    category: "Makeup",
    description: "Creative makeup content series featuring new collection launches and tutorials.",
    result: "1.1M reach, 290K engagements",
  },
  {
    image: "/images/gallery-7.jpg",
    brand: "La Belle",
    category: "Fashion",
    description: "Regional fashion brand partnership with editorial content and event coverage.",
    result: "670K reach, 8.7% engagement rate",
  },
  {
    image: "/images/gallery-2.jpg",
    brand: "Level Shoes",
    category: "Fashion",
    description: "Luxury footwear campaign with styling content and in-store activation coverage.",
    result: "940K impressions, 210K engagements",
  },
];

const STATS = [
  { value: "330K+", label: "Combined Followers" },
  { value: "8.2%", label: "Avg. Engagement Rate" },
  { value: "10.6M+", label: "TikTok Likes" },
  { value: "13+", label: "Brand Partners" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif" },
];

const DEMOGRAPHICS = [
  { label: "Female", value: "84%", description: "of audience" },
  { label: "18-34", value: "76%", description: "age range" },
  { label: "Saudi Arabia", value: "68%", description: "primary market" },
  { label: "GCC Region", value: "91%", description: "total GCC reach" },
];

const AUDIENCE_INTERESTS = [
  "Beauty & Skincare",
  "Fashion & Luxury",
  "Lifestyle & Wellness",
  "Travel & Hospitality",
  "Food & Dining",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);

  // Parallax effect on hero image
  useEffect(() => {
    if (!heroImageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(heroImageRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Close mobile menu on anchor click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a[href^='#']")) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <main className="relative">
      <SmoothScroll />

      {/* -- NAV -- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight" aria-label="Hussa AlSaif - Home">
            Hussa<span className="text-[#89BBdf]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-400">
            <a href="#results" className="hover:text-[#89BBdf] transition-colors duration-300">Results</a>
            <a href="#about" className="hover:text-[#89BBdf] transition-colors duration-300">About</a>
            <a href="#work" className="hover:text-[#89BBdf] transition-colors duration-300">Work</a>
            <a href="#audience" className="hover:text-[#89BBdf] transition-colors duration-300">Audience</a>
            <a href="#contact" className="hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#media-kit" className="hidden sm:inline-block border border-[#89BBdf]/30 hover:border-[#89BBdf] text-[#89BBdf] px-5 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-300">
              Media Kit
            </a>
            <a href="#contact" className="hidden sm:inline-block bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300">
              Brand Inquiry
            </a>
            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger-line top-[13px] ${mobileMenuOpen ? "rotate-45 !top-[18px]" : ""}`} />
              <span className={`hamburger-line top-[18px] ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`hamburger-line top-[23px] ${mobileMenuOpen ? "-rotate-45 !top-[18px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        <div className={`md:hidden fixed inset-0 top-[68px] bg-white/95 backdrop-blur-2xl transition-all duration-500 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-8"}`}>
            {[
              { href: "#results", label: "Results" },
              { href: "#about", label: "About" },
              { href: "#work", label: "Work" },
              { href: "#audience", label: "Audience" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-serif text-3xl font-bold text-gray-900 hover:text-[#89BBdf] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <a href="#media-kit" className="border border-[#89BBdf]/30 text-[#89BBdf] px-6 py-3 rounded-full text-[13px] font-semibold">
                Media Kit
              </a>
              <a href="#contact" className="bg-gray-900 text-white px-6 py-3 rounded-full text-[13px] font-semibold">
                Brand Inquiry
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* -- HERO -- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-8">
                  Saudi Arabia&apos;s Leading Beauty & Lifestyle Voice
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="font-serif font-bold tracking-tight leading-[0.88] mb-10"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}>
                  Hussa<br /><span className="text-gradient">AlSaif</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-gray-500 max-w-md leading-[1.8] mb-4 text-[16px] font-medium">
                  Connecting global brands with 330K+ highly engaged Saudi &amp; GCC consumers through premium beauty, fashion, and lifestyle content.
                </p>
                <p className="text-gray-400 max-w-md leading-[1.8] mb-10 text-[14px]">
                  Trusted by Sephora, Estee Lauder, MAC, Fendi &amp; 13+ premium brands.
                  <br />84% female audience &bull; 18-34 demographic &bull; 8.2% avg. engagement rate
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="flex gap-4 flex-wrap">
                  <MagneticButton href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Start a Campaign
                  </MagneticButton>
                  <MagneticButton href="#media-kit" className="border border-[#89BBdf]/40 hover:border-[#89BBdf] text-[#89BBdf] px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Request Media Kit
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.3}>
              <ImageReveal
                src="/images/hero.jpg"
                alt="Hussa AlSaif"
                containerClassName="rounded-3xl h-[400px] sm:h-[500px] lg:h-[600px] shadow-2xl shadow-[#89BBdf]/8"
                priority
              />
            </ScrollReveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#89BBdf] to-transparent opacity-40 animate-pulse" />
        </div>
      </section>

      {/* -- BRAND MARQUEE -- */}
      <section className="py-10 border-y border-gray-100/60 overflow-hidden bg-white/50" aria-label="Brand partners">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="mx-8 sm:mx-14 text-lg sm:text-xl font-serif font-bold text-gray-200/80 tracking-wider">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* -- RESULTS / SOCIAL PROOF -- */}
      <section id="results" className="py-28 sm:py-40 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Proven Results</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">
            Numbers that matter to your brand.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">
              Every collaboration is measured. Here&apos;s what brands consistently achieve working with Hussa.
            </p>
          </ScrollReveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 * i}>
                <div className="glass rounded-2xl p-7 sm:p-9 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2">{stat.value}</p>
                  <p className="text-[11px] text-gray-400 font-medium tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Campaign Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">2.4M+</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Average Campaign Reach</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  Across Instagram Reels, TikTok, and Stories. Consistent top-tier reach in the Saudi beauty and lifestyle vertical.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">8.2%</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Engagement Rate</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  4x the industry average for beauty influencers in MENA. Authentic audience connection drives real interaction, not vanity metrics.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">72hrs</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Product Sell-Out Speed</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">
                  Multiple product launches sold out within 72 hours of Hussa&apos;s content going live. Real commercial impact, not just impressions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- ABOUT -- */}
      <section id="about" className="py-28 sm:py-40 bg-[#f8fbfe] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">About Hussa</p>
              </ScrollReveal>

              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-10">
                The curly-hair girl with a PR degree and a book club.
              </TextReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">
                  I&apos;m Hussa — 29, from Al Khobar, with a <strong className="text-gray-700">BA in Media &amp; Communication</strong> from
                  Imam Abdulrahman Bin Faisal University. I&apos;ve organized TEDx events, host a book club
                  called &quot;The Reading Room&quot; on Fable, and my curly hair routines have become my signature content.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">
                  I share what I genuinely love — the products I actually use, the fashion I actually wear.
                  No scripts. That&apos;s why brands like Sephora, Fendi, Dyson, and Kerastase keep coming back.
                  My audience trusts my recommendations because they&apos;re real.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-500 leading-[1.85] mb-8 text-[15px]">
                  Based across <strong className="text-gray-700">Khobar &amp; Riyadh</strong>. I work with brands
                  from Fendi to Herbal Essences — because authenticity isn&apos;t about price points.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {["PR & Media BA", "TEDx Organizer", "Book Club Host", "Curly Hair Expert", "Bilingual AR/EN"].map((tag) => (
                    <span key={tag} className="bg-[#89BBdf]/10 text-[#5a9ac5] px-4 py-2 rounded-full text-[12px] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <ImageReveal
                src="/images/avatar.jpg"
                alt="Hussa AlSaif"
                containerClassName="rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] shadow-2xl shadow-[#89BBdf]/8"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- WORK -- HORIZONTAL SCROLL (Desktop) + Grid (Mobile) -- */}
      <section id="work" className="bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Selected Work</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-4">
            Campaigns that delivered results.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-8 max-w-lg">
              Each project is a strategic collaboration — from creative concept to measurable commercial impact.
            </p>
          </ScrollReveal>
        </div>

        {/* Desktop: Horizontal Scroll */}
        <div className="hidden md:block">
          <HorizontalScroll projects={PROJECTS} />
        </div>

        {/* Mobile: Vertical Grid with case study info */}
        <div className="md:hidden px-5 pb-16">
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.brand} delay={0.08 * i}>
                <div className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={project.image}
                      alt={`${project.brand} — ${project.category}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#89BBdf] mb-1.5">
                        {project.category}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">
                        {project.brand}
                      </h3>
                      <p className="text-white/70 text-[12px] leading-relaxed mb-2">
                        {project.description}
                      </p>
                      <p className="text-[#89BBdf] text-[12px] font-semibold">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- AUDIENCE DEMOGRAPHICS -- */}
      <section id="audience" className="py-28 sm:py-40 bg-[#f8fbfe] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Audience Insights</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">
            Your target consumer, already listening.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">
              Hussa&apos;s audience aligns with the highest-value consumer segment in the GCC: young Saudi women with purchasing power.
            </p>
          </ScrollReveal>

          {/* Demographics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {DEMOGRAPHICS.map((demo, i) => (
              <ScrollReveal key={demo.label} delay={0.1 * i}>
                <div className="demo-card rounded-2xl p-7 sm:p-9 text-center">
                  <p className="text-4xl sm:text-5xl font-serif font-bold text-gradient mb-2">{demo.value}</p>
                  <p className="text-gray-900 font-semibold text-[14px] mb-1">{demo.label}</p>
                  <p className="text-gray-400 text-[12px]">{demo.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Audience Interests + Platform Breakdown */}
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold mb-6">Audience Interests</h3>
                <div className="space-y-4">
                  {AUDIENCE_INTERESTS.map((interest, i) => (
                    <div key={interest} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-gray-600 text-[13px] font-medium">{interest}</span>
                          <span className="text-[#89BBdf] text-[13px] font-semibold">{[92, 87, 78, 64, 58][i]}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#89BBdf] to-[#a8d4f0] rounded-full"
                            style={{ width: `${[92, 87, 78, 64, 58][i]}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glass rounded-2xl p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold mb-6">Platform Breakdown</h3>
                <div className="space-y-5">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between group py-2">
                      <div>
                        <p className="font-semibold text-[14px] group-hover:text-[#89BBdf] transition-colors">{s.name}</p>
                        <p className="text-gray-400 text-[12px]">{s.handle}</p>
                      </div>
                      <div className="text-right">
                        {s.followers && (
                          <p className="font-serif font-bold text-[#89BBdf] text-lg">{s.followers}</p>
                        )}
                        <p className="text-gray-400 text-[11px]">followers</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- MEDIA KIT CTA -- */}
      <section id="media-kit" className="py-20 sm:py-28 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <div className="media-kit-cta rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#0d1a26]" />
              <div className="absolute inset-0 opacity-30" aria-hidden="true">
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#89BBdf]/20 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10">
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">For Brand Managers</p>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-[1.15] mb-4">
                  Get the Full Media Kit
                </h2>
                <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-8 leading-[1.8]">
                  Detailed audience analytics, rate card, campaign case studies, and content formats — everything you need to present to your team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton href="mailto:inquiries@hussaalsaif.com?subject=Media%20Kit%20Request"
                    className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/20">
                    Request Media Kit
                  </MagneticButton>
                  <MagneticButton href="#contact"
                    className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Schedule a Call
                  </MagneticButton>
                </div>
                <p className="text-gray-500 text-[12px] mt-6">Typically responds within 24 hours</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- CONTACT -- */}
      <section id="contact" className="relative py-28 sm:py-40 overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-[#0d1a26]" />
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#89BBdf]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#89BBdf]/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal>
            <div className="inline-block bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8">
              <p className="text-[#89BBdf] font-medium text-[12px]">
                Q2 2026 — Limited Availability
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-bold text-white leading-[1.05] mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Let&apos;s build your<br /><span className="text-gradient">next campaign</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-[15px] max-w-lg mx-auto mb-4 leading-[1.8]">
              Accepting select brand partnerships, ambassadorships, and campaign collaborations for Q2 2026.
              Early inquiry recommended — calendar fills 6-8 weeks in advance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-500 text-[13px] mb-12">
              <span>Brand Campaigns</span>
              <span>&bull;</span>
              <span>Ambassadorships</span>
              <span>&bull;</span>
              <span>Event Appearances</span>
              <span>&bull;</span>
              <span>Product Launches</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticButton href="mailto:inquiries@hussaalsaif.com?subject=Brand%20Partnership%20Inquiry"
                className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/15">
                inquiries@hussaalsaif.com
              </MagneticButton>
              <MagneticButton href="https://instagram.com/hussa.ss" target="_blank"
                className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                @hussa.ss
              </MagneticButton>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 pt-12 border-t border-white/5">
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">24hrs</p>
                <p className="text-gray-500 text-[11px] mt-1">Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">English & Arabic</p>
                <p className="text-gray-500 text-[11px] mt-1">Bilingual Content</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">KSA & GCC</p>
                <p className="text-gray-500 text-[11px] mt-1">Coverage Area</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <footer className="bg-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-serif text-lg font-bold text-white">Hussa<span className="text-[#89BBdf]">.</span></p>
          <p className="text-gray-500 text-[13px]">&copy; 2026 Hussa AlSaif. All rights reserved.</p>
          <p className="text-gray-600 text-[11px] tracking-[0.2em] uppercase">Khobar & Riyadh</p>
        </div>
      </footer>
    </main>
  );
}
