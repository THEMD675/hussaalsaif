"use client";

import { useRef, useEffect, useState, Suspense } from "react";
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
const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

const BRANDS = [
  { name: "Sephora", logo: "/images/brands/sephora.svg", color: "#000000" },
  { name: "Fendi", logo: "/images/brands/fendi.svg", color: "#000000" },
  { name: "Too Faced", logo: "/images/brands/too-faced.svg", color: "#E91E8C" },
  { name: "Estée Lauder", logo: "/images/brands/estee-lauder.svg", color: "#002B5C" },
  { name: "Dyson", logo: "/images/brands/dyson.svg", color: "#DA291C" },
  { name: "Kérastase", logo: "/images/brands/kerastase.svg", color: "#000000" },
  { name: "Herbal Essences", logo: "/images/brands/herbal-essences.svg", color: "#006B3F" },
  { name: "Redken", logo: "/images/brands/redken.svg", color: "#000000" },
  { name: "MAC", logo: "/images/brands/mac.svg", color: "#000000" },
  { name: "Wella", logo: "/images/brands/wella.svg", color: "#C4161C" },
  { name: "Level Shoes", logo: "/images/brands/level-shoes.svg", color: "#000000" },
  { name: "Sol de Janeiro", logo: "/images/brands/sol-de-janeiro.svg", color: "#F7C948" },
  { name: "Denman", logo: "/images/brands/denman.svg", color: "#E30613" },
];

const PROJECTS = [
  {
    image: "/images/sephora-campaign.jpg",
    video: "/videos/sephora.mp4",
    brand: "Sephora Collection",
    category: "Beauty",
    description: "Lip tint launch content across Instagram and TikTok for Sephora's KSA market.",
    result: "Ongoing partnership",
  },
  {
    image: "/images/fendi-campaign.jpg",
    video: "/videos/fendi.mp4",
    brand: "Fendi FW25",
    category: "Fashion",
    description: "Fashion week content partnership for Fendi's Fall/Winter 2025 regional presence.",
    result: "Brand collaboration",
  },
  {
    image: "/images/herbal-campaign.jpg",
    brand: "Herbal Essences",
    category: "Hair Care",
    description: "Curly hair content aligned with the GCC natural hair movement Hussa helped pioneer.",
    result: "Brand partnership",
  },
  {
    image: "/images/toofaced-campaign.jpg",
    video: "/videos/toofaced.mp4",
    brand: "Too Faced x Sephora ME",
    category: "Beauty",
    description: "Ramadan collection haul and looks for the Too Faced x Sephora Middle East collaboration.",
    result: "Brand partnership",
  },
  {
    image: "/images/soldejanerio-campaign.jpg",
    brand: "Sol de Janeiro",
    category: "Lifestyle",
    description: "Limited-edition Sundays in Rio product launch for the Saudi market.",
    result: "Brand partnership",
  },
  {
    image: "/images/estee-campaign.jpg",
    brand: "Estée Lauder",
    category: "Skincare",
    description: "Skincare routine and product integration with Estée Lauder.",
    result: "Brand partnership",
  },
  {
    image: "/images/mac-campaign.jpg",
    video: "/videos/mac.mp4",
    brand: "MAC Cosmetics",
    category: "Makeup",
    description: "Studio Radiance foundation and concealer review and tutorial content.",
    result: "Brand partnership",
  },
  {
    image: "/images/sephora-grwm.jpg",
    brand: "Sephora x Lancôme",
    category: "Beauty",
    description: "GRWM content featuring new Lancôme products exclusively through Sephora Middle East.",
    result: "Brand partnership",
  },
];

const STATS = [
  { value: "528K+", label: "Combined Reach" },
  { value: "2.5M+", label: "YouTube Views" },
  { value: "10.6M+", label: "TikTok Likes" },
  { value: "14", label: "Brand Partners" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif" },
];

const DEMOGRAPHICS = [
  { label: "Primarily Women", icon: "female", description: "Young Saudi women who set beauty and fashion trends in their circles" },
  { label: "Gen Z & Millennials", icon: "age", description: "The 18-34 demographic with the highest purchasing power in the Gulf" },
  { label: "Saudi-First", icon: "location", description: "Rooted in Saudi Arabia with strong reach across the wider GCC" },
  { label: "High Intent", icon: "intent", description: "An audience that discovers, trusts, and buys based on Hussa's recommendations" },
];

const AUDIENCE_INTERESTS = [
  { name: "Beauty & Skincare", description: "Product reviews, tutorials, and skincare routines drive the conversation" },
  { name: "Fashion & Luxury", description: "From high street to haute couture, her audience follows her style closely" },
  { name: "Lifestyle & Wellness", description: "Self-care, wellness, and daily routines resonate deeply" },
  { name: "Travel & Hospitality", description: "Destination and hotel content that inspires real bookings" },
  { name: "Food & Dining", description: "Restaurant and cafe culture content with strong local engagement" },
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
      <BackToTop />

      {/* -- NAV -- */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <a href="#" aria-label="Hussa AlSaif - Home">
            <img src="/images/logo-hs.svg" alt="Hussa AlSaif" className="h-9 w-9 rounded-lg" />
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-400">
            <a href="#world" onClick={() => trackNav("World")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">World</a>
            <a href="#about" onClick={() => trackNav("About")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">About</a>
            <a href="#work" onClick={() => trackNav("Portfolio")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Portfolio</a>
            <a href="#audience" onClick={() => trackNav("Reach")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Reach</a>
            <a href="#contact" onClick={() => trackNav("Contact")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
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
                  The curly-hair icon with a PR degree, a book club, and the trust of the world&apos;s most discerning beauty houses.
                </p>
                <p className="text-gray-400 max-w-md leading-[1.8] mb-10 text-[14px]">
                  Sephora. Fendi. Dyson. Kerastase. Estée Lauder. MAC.
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
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/hero.jpg"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-webkit-playsinline="true"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
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
      <section className="marquee-container py-16 sm:py-20 border-y border-gray-100/40 bg-white" aria-label="Brand partners">
        <p className="text-center text-[10px] font-medium tracking-[0.4em] uppercase text-gray-300 mb-8">Trusted By</p>
        <div className="flex animate-marquee whitespace-nowrap items-center" aria-hidden="true">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="mx-10 sm:mx-14 shrink-0 opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={140}
                height={48}
                className="h-7 sm:h-9 w-auto object-contain"
                loading="lazy"
              />
            </div>
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
            <p className="text-gray-400 text-[15px] mb-16 max-w-lg">When Hussa partners with a brand, her audience pays attention. 13+ global brands trust her to introduce their products to the Saudi and GCC market.</p>
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
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Pioneer</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">She Started the Movement</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">She pioneered the GCC curly hair movement. When Hussa talks about a product, her audience searches for it.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Repeat</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Brands Come Back</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">Sephora, Kerastase, Dyson &mdash; the brands that work with Hussa come back. Because the results speak.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Cultural</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Beyond Beauty</div>
                <p className="text-gray-400 text-[13px] leading-relaxed">Book club host, TEDx organizer, bilingual storyteller. She&apos;s not just beauty &mdash; she&apos;s culture.</p>
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
              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-10">Not an influencer. A cultural force.</TextReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">Hussa pioneered the Saudi curly hair movement before brands caught on. With a <strong className="text-gray-700">Media &amp; Communication</strong> degree and a genuine obsession with beauty, she built an audience that trusts her taste implicitly.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-500 leading-[1.85] mb-6 text-[15px]">141K Instagram followers from just 25 curated posts. 196K on TikTok with 10.6M+ likes. Every piece of content is a conversation, not a broadcast. When Hussa recommends something, her audience buys it.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-500 leading-[1.85] mb-8 text-[15px]">Beyond beauty: host of <em>The Reading Room</em> book club, TEDx organizer, bilingual storyteller across Arabic and English. Brands don&apos;t brief Hussa &mdash; they collaborate with her.</p>
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
              <div className="rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] shadow-2xl shadow-[#89BBdf]/8 overflow-hidden relative">
                <video autoPlay loop muted playsInline preload="metadata" poster="/images/about.jpg" className="absolute inset-0 w-full h-full object-cover">
                  <source src="/videos/about.mp4" type="video/mp4" />
                </video>
              </div>
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
                    {project.video ? (
                      <video autoPlay loop muted playsInline preload="none" poster={project.image} className="absolute inset-0 w-full h-full object-cover">
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image src={project.image} alt={`${project.brand} — ${project.category}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
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
                <div className="demo-card rounded-2xl p-7 sm:p-9">
                  <p className="text-[#89BBdf] font-serif font-bold text-[18px] sm:text-[20px] mb-2">{demo.label}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{demo.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-8 sm:p-10">
                <h3 className="font-serif text-xl font-bold mb-6">What They Care About</h3>
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <a href="/media-kit" onClick={() => trackCTA("Download Media Kit", "contact")} className="bg-white/10 hover:bg-white/15 backdrop-blur text-white px-8 py-3.5 rounded-full font-semibold transition-all text-[12px] tracking-wide inline-flex items-center gap-2 border border-white/10 hover:border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Media Kit
              </a>
              <a href="mailto:inquiries@hussaalsaif.com?subject=Urgent%20Partnership%20Inquiry" onClick={() => trackEmail("inquiries@hussaalsaif.com", "contact")} className="border border-white/10 hover:border-[#89BBdf]/40 text-gray-400 hover:text-[#89BBdf] px-8 py-3.5 rounded-full font-semibold transition-all text-[12px] tracking-wide inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Direct Email
              </a>
            </div>
            <div className="flex justify-center gap-8 text-gray-600 text-[11px] tracking-[0.15em] uppercase">
              <a href="https://instagram.com/hussa.ss" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("Instagram")} className="hover:text-[#89BBdf] transition-colors">Instagram</a>
              <a href="https://tiktok.com/@hussa.502" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("TikTok")} className="hover:text-[#89BBdf] transition-colors">TikTok</a>
              <a href="https://youtube.com/@hussaalsaif" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("YouTube")} className="hover:text-[#89BBdf] transition-colors">YouTube</a>
              <a href="https://snapchat.com/add/hussa.alsaif" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("Snapchat")} className="hover:text-[#89BBdf] transition-colors">Snapchat</a>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-12 pt-12 border-t border-white/5">
              <div className="text-center">
                <p className="text-white font-serif font-bold text-lg">Fast</p>
                <p className="text-gray-500 text-[11px] mt-1">Response</p>
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
              <p className="text-gray-600 text-[11px] tracking-[0.25em] uppercase">Saudi Arabia</p>
            </div>
            <div className="flex items-center gap-8 text-[12px] text-gray-500 tracking-wide">
              <a href="/media-kit" className="hover:text-[#89BBdf] transition-colors duration-300">Media Kit</a>
              <a href="/links" className="hover:text-[#89BBdf] transition-colors duration-300">Links</a>
              <a href="https://instagram.com/hussa.ss" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("Instagram")} className="hover:text-[#89BBdf] transition-colors duration-300">Instagram</a>
              <a href="https://tiktok.com/@hussa.502" target="_blank" rel="noopener noreferrer" onClick={() => trackSocial("TikTok")} className="hover:text-[#89BBdf] transition-colors duration-300">TikTok</a>
              <a href="mailto:inquiries@hussaalsaif.com?subject=Partnership%20Inquiry" onClick={() => trackEmail("inquiries@hussaalsaif.com", "footer")} className="hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
            </div>
            <p className="text-gray-600 text-[11px]">&copy; 2026 Hussa AlSaif</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
