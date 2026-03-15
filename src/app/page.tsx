"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import ImageReveal from "@/components/ImageReveal";
import HorizontalScroll from "@/components/HorizontalScroll";

const ParticleField = dynamic(() => import("@/components/ParticleField"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

const BRANDS = [
  "Sephora", "Estée Lauder", "MAC", "Too Faced", "Sol de Janeiro",
  "P&G", "Herbal Essences", "Fendi", "Level Shoes", "La Belle",
  "Assaf", "Laverne", "ClaraLevel",
];

const PROJECTS = [
  { image: "/images/beauty-editorials.jpg", brand: "Sephora Collection", category: "Beauty Campaign" },
  { image: "/images/brand-campaigns.jpg", brand: "Fendi FW25", category: "Fashion" },
  { image: "/images/gallery-6.jpg", brand: "Herbal Essences", category: "Hair Care" },
  { image: "/images/gallery-5.jpg", brand: "Too Faced × Sephora ME", category: "Beauty" },
  { image: "/images/gallery-4.jpg", brand: "Sol de Janeiro", category: "Lifestyle" },
  { image: "/images/event-coverage.jpg", brand: "Estée Lauder", category: "Skincare" },
  { image: "/images/gallery-1.jpg", brand: "MAC Cosmetics", category: "Makeup" },
  { image: "/images/gallery-7.jpg", brand: "La Belle", category: "Fashion" },
  { image: "/images/gallery-2.jpg", brand: "Level Shoes", category: "Fashion" },
];

const STATS = [
  { value: "330K+", label: "Followers" },
  { value: "13+", label: "Brands" },
  { value: "10.6M+", label: "TikTok Likes" },
  { value: "5", label: "Platforms" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif" },
];

export default function Home() {
  return (
    <main className="relative">
      <SmoothScroll />

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight">
            Hussa<span className="text-[#89BBdf]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-400">
            <a href="#about" className="hover:text-[#89BBdf] transition-colors duration-300">About</a>
            <a href="#work" className="hover:text-[#89BBdf] transition-colors duration-300">Work</a>
            <a href="#contact" className="hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
          </div>
          <a href="#contact" className="bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300">
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-24">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-8">
                  Content Creator & Brand Ambassador
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="font-serif font-bold tracking-tight leading-[0.88] mb-10"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 8rem)" }}>
                  Hussa<br /><span className="text-gradient">AlSaif</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <p className="text-gray-400 max-w-md leading-[1.8] mb-12 text-[15px]">
                  Beauty. Lifestyle. Fashion.<br />
                  330K+ followers. Trusted by Sephora, Estée Lauder,
                  MAC, Fendi & more. Based in Khobar &amp; Riyadh.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <div className="flex gap-4 flex-wrap">
                  <MagneticButton href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    Work With Me
                  </MagneticButton>
                  <MagneticButton href="#work" className="border border-gray-200 hover:border-[#89BBdf] hover:text-[#89BBdf] px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                    View Work
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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#89BBdf] to-transparent opacity-40 animate-pulse" />
        </div>
      </section>

      {/* ── BRAND MARQUEE ── */}
      <section className="py-10 border-y border-gray-100/60 overflow-hidden bg-white/50">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="mx-8 sm:mx-14 text-lg sm:text-xl font-serif font-bold text-gray-200/80 tracking-wider">
              {brand}
            </span>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 sm:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">About</p>
              </ScrollReveal>

              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-10">
                Where beauty meets influence — creating content that moves the Kingdom and beyond.
              </TextReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-gray-400 leading-[1.85] mb-6 text-[15px]">
                  Based in Khobar & Riyadh, Hussa creates authentic beauty, lifestyle and fashion
                  content that resonates across the Gulf. With a Bachelor&apos;s in Media & Communication
                  from Imam Abdulrahman Bin Faisal University, she brings professional depth to every collaboration.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-400 leading-[1.85] text-[15px]">
                  Partnered with 13+ global brands including Sephora, Estée Lauder, MAC, Too Faced, and Fendi —
                  connecting brands with the Saudi & GCC market through genuine storytelling and content that converts.
                </p>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {STATS.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.1 * i}>
                  <div className="glass rounded-2xl p-7 sm:p-9 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                    <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2">{stat.value}</p>
                    <p className="text-[11px] text-gray-400 font-medium tracking-[0.15em] uppercase">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK — HORIZONTAL SCROLL ── */}
      <section id="work" className="bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Portfolio</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-4">
            Selected work and brand collaborations.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-400 text-[15px] mb-8 max-w-lg">
              A curated selection of campaigns across beauty, fashion, and lifestyle.
            </p>
          </ScrollReveal>
        </div>
        <HorizontalScroll projects={PROJECTS} />
      </section>

      {/* ── PLATFORMS ── */}
      <section className="py-28 sm:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-6">Platforms</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-16">
            Where your brand gets seen.
          </TextReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SOCIALS.map((s, i) => (
              <ScrollReveal key={s.name} delay={0.08 * i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer"
                  className="group block glass rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                  <p className="font-serif text-lg sm:text-xl font-bold group-hover:text-[#89BBdf] transition-colors duration-300">{s.name}</p>
                  <p className="text-[#89BBdf] font-medium text-xs mt-1">{s.handle}</p>
                  {s.followers && <p className="text-gray-300 text-xs mt-4">{s.followers} followers</p>}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="relative py-28 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-[#0d1a26]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#89BBdf]/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#89BBdf]/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[11px] mb-8">Get in Touch</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-bold text-white leading-[1.05] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Let&apos;s create<br /><span className="text-gradient">together</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-400 text-[15px] max-w-md mx-auto mb-12 leading-[1.8]">
              For brand partnerships, campaigns, event coverage & creative collaborations — based in Khobar &amp; Riyadh.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="mailto:inquiries@hussaalsaif.com"
                className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/15">
                inquiries@hussaalsaif.com
              </MagneticButton>
              <MagneticButton href="https://instagram.com/hussa.ss" target="_blank"
                className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                @hussa.ss
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
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
