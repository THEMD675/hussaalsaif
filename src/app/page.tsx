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
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import { trackCTA, trackSocial, trackEmail, trackNav, initScrollDepthTracking } from "@/lib/analytics";

gsap.registerPlugin(ScrollTrigger);

const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), { ssr: false });

const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

const BRANDS = [
  "Sephora", "Fendi", "Too Faced", "Estee Lauder", "Dyson",
  "Kerastase", "Herbal Essences", "Redken", "MAC",
  "Wella Professionals", "Level Shoes", "La Belle", "Sol de Janeiro",
];

const PROJECTS = [
  {
    image: "/images/beauty-editorials.jpg",
    brand: "Sephora Collection",
    category: "Beauty",
    description: "Full creative direction for a regional product launch. In-store and digital activation across KSA.",
    result: "Sold out within opening weekend",
  },
  {
    image: "/images/brand-campaigns.jpg",
    brand: "Fendi FW25",
    category: "Fashion",
    description: "Editorial partnership for the regional FW25 debut. Front row, backstage, and campaign content.",
    result: "Official regional campaign face",
  },
  {
    image: "/images/gallery-6.jpg",
    brand: "Herbal Essences",
    category: "Hair Care",
    description: "Multi-platform storytelling campaign anchored in the GCC curly hair movement.",
    result: "Category-defining content series",
  },
  {
    image: "/images/gallery-5.jpg",
    brand: "Too Faced x Sephora ME",
    category: "Beauty",
    description: "Exclusive launch collaboration for the Middle East market. Digital and retail activation.",
    result: "Collection sold out in 72 hours",
  },
  {
    image: "/images/gallery-4.jpg",
    brand: "Sol de Janeiro",
    category: "Lifestyle",
    description: "Brand introduction to the Saudi market through lifestyle-driven storytelling.",
    result: "First Saudi market ambassador",
  },
  {
    image: "/images/event-coverage.jpg",
    brand: "Estee Lauder",
    category: "Skincare",
    description: "Premium editorial campaign and content series for a new skincare launch.",
    result: "Long-term brand relationship",
  },
  {
    image: "/images/gallery-1.jpg",
    brand: "MAC Cosmetics",
    category: "Makeup",
    description: "Creative campaign for new collection launches and seasonal editorial content.",
    result: "Recurring campaign partner",
  },
  {
    image: "/images/gallery-7.jpg",
    brand: "La Belle",
    category: "Fashion",
    description: "Regional fashion partnership with editorial and event content.",
    result: "Brand ambassador",
  },
  {
    image: "/images/gallery-2.jpg",
    brand: "Level Shoes",
    category: "Fashion",
    description: "Luxury retail campaign with styling content and in-store presence.",
    result: "Exclusive styling partnership",
  },
];

const STATS = [
  { value: "13+", label: "Brand Partnerships" },
  { value: "72", label: "Hour Sell-Outs" },
  { value: "3+", label: "Return Collaborations" },
  { value: "1", label: "Saudi Beauty Voice" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif" },
];

const DEMOGRAPHICS = [
  { label: "Women", value: "84%", description: "of audience" },
  { label: "18-34", value: "76%", description: "age range" },
  { label: "Saudi Arabia", value: "68%", description: "primary market" },
  { label: "GCC Region", value: "91%", description: "total reach" },
];

const AUDIENCE_INTERESTS = [
  "Beauty & Skincare",
  "Fashion & Luxury",
  "Lifestyle & Wellness",
  "Travel & Hospitality",
  "Food & Dining",
];

const MEDIA_KIT_ITEMS = [
  { icon: "chart", title: "Audience Profile", desc: "Who she reaches: demographics, psychographics, and purchasing behavior" },
  { icon: "grid", title: "Platform Presence", desc: "Where she shows up and the cultural weight behind each channel" },
  { icon: "trending", title: "Commercial Impact", desc: "Sell-through rates, conversion data, and brand lift metrics" },
  { icon: "star", title: "Partnership Case Studies", desc: "How past collaborations translated into measurable business results" },
  { icon: "tag", title: "Collaboration Framework", desc: "Scope, creative approach, and investment levels for different partnership tiers" },
  { icon: "play", title: "Creative Formats", desc: "Editorial, campaign, event, digital, and long-form storytelling capabilities" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroImageRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    return initScrollDepthTracking();
  }, []);

  return (
    <main className="relative">
      <SmoothScroll />
      <CustomCursor />
      <BackToTop />

      {/* -- NAV -- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight" aria-label="Hussa AlSaif - Home">
            Hussa<span className="text-[#89BBdf]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-400">
            <a href="#world" onClick={() => trackNav("World")} className="hover:text-[#89BBdf] transition-colors duration-300">World</a>
            <a href="#about" onClick={() => trackNav("About")} className="hover:text-[#89BBdf] transition-colors duration-300">About</a>
            <a href="#work" onClick={() => trackNav("Portfolio")} className="hover:text-[#89BBdf] transition-colors duration-300">Portfolio</a>
            <a href="#audience" onClick={() => trackNav("Reach")} className="hover:text-[#89BBdf] transition-colors duration-300">Reach</a>
            <a href="#contact" onClick={() => trackNav("Contact")} className="hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#partnership" onClick={() => trackCTA("Partnerships", "nav")} className="hidden sm:inline-block border border-[#89BBdf]/30 hover:border-[#89BBdf] text-[#89BBdf] px-5 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-300">
              Partnerships
            </a>
            <a href="#contact" onClick={() => trackCTA("Inquiries", "nav")} className="hidden sm:inline-block bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300">
              Inquiries
            </a>
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

        <div className={`md:hidden fixed inset-0 top-[68px] bg-white/95 backdrop-blur-2xl transition-all duration-500 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-500 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-8"}`}>
            {[
              { href: "#world", label: "World" },
              { href: "#about", label: "About" },
              { href: "#work", label: "Portfolio" },
              { href: "#audience", label: "Reach" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => trackNav(link.label)}
                className="font-serif text-3xl font-bold text-gray-900 hover:text-[#89BBdf] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-4 mt-4">
              <a href="#partnership" onClick={() => trackCTA("Partnerships", "mobile-nav")} className="border border-[#89BBdf]/30 text-[#89BBdf] px-6 py-3 rounded-full text-[13px] font-semibold">
                Partnerships
              </a>
              <a href="#contact" onClick={() => trackCTA("Inquiries", "mobile-nav")} className="bg-gray-900 text-white px-6 py-3 rounded-full text-[13px] font-semibold">
                Inquiries
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* -- HERO -- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40 pb-24 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-8">
                  Beauty &amp; Culture &mdash; Saudi Arabia
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="font-serif font-bold tracking-tight leading-[0.88] mb-10"
                  style={{ fontSize: "clamp(3.2rem, 8vw, 8rem)" }}>
                  Hussa<br /><span className="text-gradient">AlSaif</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-500 max-w-md leading-[1.8] mb-4 text-[16px] font-medium">
                  The authority on beauty, hair, and style for a generation of Saudi women. When Hussa speaks, her audience acts.
                </p>
                <p className="text-gray-400 max-w-md leading-[1.8] mb-10 text-[14px]">
                  Trusted by Sephora, Fendi, Estee Lauder, MAC, Dyson &amp; the world&apos;s most discerning beauty houses.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex gap-4 flex-wrap">
                  <MagneticButton href="#contact" onClick={() => trackCTA("Explore Partnership", "hero")} className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Explore Partnership
                  </MagneticButton>
                  <MagneticButton href="#work" onClick={() => trackCTA("View Portfolio", "hero")} className="border border-[#89BBdf]/40 hover:border-[#89BBdf] text-[#89BBdf] px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    View Portfolio
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <div ref={heroImageRef} className="hero-image-wrapper rounded-3xl h-[420px] sm:h-[520px] lg:h-[620px] shadow-2xl shadow-[#89BBdf]/8 overflow-hidden relative">
                <Image src="/images/hero.jpg" alt="Hussa AlSaif" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw" className="object-cover hero-image" priority />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
          <div className="scroll-indicator flex flex-col items-center gap-1">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="scroll-chevron"><path d="M1 1L10 8L19 1" stroke="#89BBdf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" className="scroll-chevron scroll-chevron-2"><path d="M1 1L10 8L19 1" stroke="#89BBdf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </section>

      {/* -- BRAND MARQUEE -- */}
      <section className="py-10 border-y border-gray-100/60 overflow-hidden bg-white/50" aria-label="Brand partners">
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="mx-8 sm:mx-14 text-lg sm:text-xl font-serif font-bold text-gray-200/80 tracking-wider">{brand}</span>
          ))}
        </div>
      </section>

      {/* -- THE HUSSA EFFECT -- */}
      <section id="world" className="py-28 sm:py-40 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">The Hussa Effect</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">
            What happens when brands partner with Hussa.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">She doesn&apos;t just create content. She creates demand. Products sell out. Launches trend. Brands become part of the conversation.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.1 * i}>
                <div className="glass rounded-2xl p-7 sm:p-9 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2"><AnimatedCounter value={stat.value} /></p>
                  <p className="text-[11px] text-gray-400 font-medium tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Sell-Outs</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Products Don&apos;t Last</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">Multiple product launches have sold out within 72 hours of Hussa&apos;s involvement. Not impressions. Not views. Empty shelves.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Repeat</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Brands Come Back</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">Sephora, Estee Lauder, MAC, Kerastase &mdash; the biggest names in beauty don&apos;t partner once. They build ongoing relationships because the results speak for themselves.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Cultural</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">She Sets the Tone</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">In the Saudi beauty space, Hussa doesn&apos;t follow trends. She is the reference point &mdash; from curly hair routines to what&apos;s worth buying this season.</p>
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
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Hussa AlSaif</p>
              </ScrollReveal>
              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-10">Saudi Arabia&apos;s definitive voice in beauty.</TextReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">Hussa AlSaif is a Saudi beauty and culture figure based between <strong className="text-gray-700">Al Khobar and Riyadh</strong>. With a background in <strong className="text-gray-700">Media &amp; Communication</strong>, she brings editorial instinct and genuine taste to everything she touches.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">She pioneered the Saudi curly hair movement, founded <em>The Reading Room</em> &mdash; a literary community on Fable &mdash; and has organized TEDx events. Her world is beauty, but her range is culture.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-500 leading-[1.85] mb-8 text-[15px]">Brands don&apos;t brief Hussa. They collaborate with her. Because her audience doesn&apos;t follow recommendations &mdash; they follow <em>her</em>.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {["Beauty Authority", "Cultural Figure", "The Reading Room", "TEDx Organizer", "Bilingual AR/EN"].map((tag) => (
                    <span key={tag} className="bg-[#89BBdf]/10 text-[#5a9ac5] px-4 py-2 rounded-full text-[12px] font-medium">{tag}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <ImageReveal src="/images/hero.jpg" alt="Hussa AlSaif" containerClassName="rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] shadow-2xl shadow-[#89BBdf]/8" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- PORTFOLIO -- */}
      <section id="work" className="bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Selected Collaborations</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-4">A portfolio of world-class partnerships.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-8 max-w-lg">From global beauty houses to luxury fashion maisons. Each partnership is a meeting of equals &mdash; her creative vision, their brand world.</p>
          </ScrollReveal>
        </div>
        <div className="hidden md:block">
          <HorizontalScroll projects={PROJECTS} />
        </div>
        <div className="md:hidden px-5 pb-16">
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.brand} delay={0.08 * i}>
                <div className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <Image src={project.image} alt={`${project.brand} — ${project.category}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#89BBdf] mb-1.5">{project.category}</p>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">{project.brand}</h3>
                      <p className="text-white/70 text-[12px] leading-relaxed mb-2">{project.description}</p>
                      <p className="text-[#89BBdf] text-[12px] font-semibold">{project.result}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* -- HER AUDIENCE -- */}
      <section id="audience" className="py-28 sm:py-40 bg-[#f8fbfe] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Her Audience</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">The most valuable consumer in the Gulf.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">Young Saudi women with purchasing power, brand awareness, and trust in Hussa&apos;s taste. This is the audience every beauty and fashion brand is trying to reach.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {DEMOGRAPHICS.map((demo, i) => (
              <ScrollReveal key={demo.label} delay={0.1 * i}>
                <div className="demo-card rounded-2xl p-7 sm:p-9 text-center">
                  <p className="text-4xl sm:text-5xl font-serif font-bold text-gradient mb-2"><AnimatedCounter value={demo.value} /></p>
                  <p className="text-gray-900 font-semibold text-[14px] mb-1">{demo.label}</p>
                  <p className="text-gray-400 text-[12px]">{demo.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold mb-6">What They Care About</h3>
                <div className="space-y-4">
                  {AUDIENCE_INTERESTS.map((interest, i) => (
                    <div key={interest} className="flex items-center gap-4">
                      <div className="flex-1">
                        <div className="flex justify-between mb-1.5">
                          <span className="text-gray-600 text-[13px] font-medium">{interest}</span>
                          <span className="text-[#89BBdf] text-[13px] font-semibold">{[92, 87, 78, 64, 58][i]}%</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#89BBdf] to-[#a8d4f0] rounded-full" style={{ width: `${[92, 87, 78, 64, 58][i]}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="glass rounded-2xl p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold mb-6">Where She Lives</h3>
                <div className="space-y-5">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" onClick={() => trackSocial(s.name)} className="flex items-center justify-between group py-2">
                      <div>
                        <p className="font-semibold text-[14px] group-hover:text-[#89BBdf] transition-colors">{s.name}</p>
                        <p className="text-gray-400 text-[12px]">{s.handle}</p>
                      </div>
                      <div className="text-right">
                        {s.followers && (<p className="font-serif font-bold text-[#89BBdf] text-lg">{s.followers}</p>)}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- PARTNERSHIP -- */}
      <section id="partnership" className="py-28 sm:py-40 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">For Partners</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">Explore a collaboration with Hussa.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">The partnership deck includes audience intelligence, past collaboration results, and creative scope. It&apos;s designed for teams evaluating a strategic fit.</p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {MEDIA_KIT_ITEMS.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.08 * i}>
                <div className="media-kit-card rounded-2xl p-7 sm:p-8">
                  <div className="w-10 h-10 rounded-xl bg-[#89BBdf]/10 flex items-center justify-center mb-4">
                    {item.icon === "chart" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>)}
                    {item.icon === "grid" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>)}
                    {item.icon === "trending" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>)}
                    {item.icon === "star" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                    {item.icon === "tag" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>)}
                    {item.icon === "play" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>)}
                  </div>
                  <h3 className="font-semibold text-[15px] text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-400 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.3}>
            <div className="media-kit-cta rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#0d1a26]" />
              <div className="absolute inset-0 opacity-30" aria-hidden="true">
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#89BBdf]/20 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-[1.15] mb-4">Request the Partnership Deck</h3>
                <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-8 leading-[1.8]">A curated overview of Hussa&apos;s world, audience, and collaboration framework &mdash; built for brand and agency teams.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton href="/media-kit" onClick={() => trackCTA("View Partnership Deck", "partnership")} className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/20">
                    View Partnership Deck
                  </MagneticButton>
                  <MagneticButton href="#contact" onClick={() => trackCTA("Get in Touch", "partnership")} className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Get in Touch
                  </MagneticButton>
                </div>
                <p className="text-gray-500 text-[12px] mt-6">Available upon request for qualifying brands</p>
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
              <p className="text-[#89BBdf] font-medium text-[12px]">Accepting Select Partnerships &mdash; Q2 2026</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              The right partnership<br /><span className="text-gradient">starts here</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-[15px] max-w-lg mx-auto mb-4 leading-[1.8]">Hussa works with a limited number of brands each quarter to ensure every collaboration receives the creative depth it deserves. If there&apos;s a fit, her team will be in touch.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-500 text-[13px] mb-12">
              <span>Brand Campaigns</span>
              <span>&bull;</span>
              <span>Ambassadorships</span>
              <span>&bull;</span>
              <span>Event Appearances</span>
              <span>&bull;</span>
              <span>Creative Direction</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="max-w-2xl mx-auto mb-12">
              <ContactForm />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticButton href="mailto:inquiries@hussaalsaif.com?subject=Partnership%20Inquiry" onClick={() => trackEmail("inquiries@hussaalsaif.com", "contact")} className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/15">
                inquiries@hussaalsaif.com
              </MagneticButton>
              <MagneticButton href="https://instagram.com/hussa.ss" target="_blank" onClick={() => trackSocial("Instagram")} className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                @hussa.ss
              </MagneticButton>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 pt-12 border-t border-white/5">
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">48hrs</p>
                <p className="text-gray-500 text-[11px] mt-1">Response Time</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">English & Arabic</p>
                <p className="text-gray-500 text-[11px] mt-1">Bilingual</p>
              </div>
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">KSA & GCC</p>
                <p className="text-gray-500 text-[11px] mt-1">Primary Markets</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <footer className="bg-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <p className="font-serif text-xl font-bold text-white tracking-tight">Hussa AlSaif<span className="text-[#89BBdf]">.</span></p>
              <p className="text-gray-600 text-[11px] tracking-[0.25em] uppercase">Khobar &middot; Riyadh</p>
            </div>
            <div className="flex items-center gap-8 text-[12px] text-gray-500 tracking-wide">
              <a href="https://instagram.com/hussa.ss" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("Instagram")} className="hover:text-[#89BBdf] transition-colors duration-300">Instagram</a>
              <a href="https://tiktok.com/@hussa.502" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("TikTok")} className="hover:text-[#89BBdf] transition-colors duration-300">TikTok</a>
              <a href="https://youtube.com/@hussaalsaif" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("YouTube")} className="hover:text-[#89BBdf] transition-colors duration-300">YouTube</a>
              <a href="mailto:inquiries@hussaalsaif.com" onClick={() => trackEmail("inquiries@hussaalsaif.com", "footer")} className="hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
            </div>
            <p className="text-gray-600 text-[11px]">&copy; 2026 Hussa AlSaif</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
