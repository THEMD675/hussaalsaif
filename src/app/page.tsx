"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

const BRANDS = [
  "Sephora", "Estée Lauder", "MAC", "Too Faced", "Sol de Janeiro",
  "P&G", "Herbal Essences", "Fendi", "Level Shoes", "La Belle",
  "Assaf", "Laverne", "ClaraLevel",
];

const SERVICES = [
  { title: "Brand Campaigns", desc: "End-to-end campaign content for global and regional brands. Multi-platform strategy from concept to delivery.", icon: "01" },
  { title: "Content Creation", desc: "IG Reels, TikTok, YouTube & Stories. Authentic, trend-driven content that drives engagement and conversions.", icon: "02" },
  { title: "Event Coverage", desc: "Brand launches, fashion shows & exclusive events. Real-time social coverage with premium production.", icon: "03" },
  { title: "Beauty & Fashion", desc: "Skincare routines, hair tutorials, makeup looks, styling content. Trusted voice in beauty.", icon: "04" },
  { title: "YouTube & Long-form", desc: "Vlogs, get-ready-with-me, product reviews and brand storytelling that builds deep audience connection.", icon: "05" },
  { title: "Guest Appearances", desc: "Brand events, panels, podcasts & live hosting. Engaging personality that draws audiences.", icon: "06" },
];

const STATS = [
  { value: "330K+", label: "Total Followers" },
  { value: "13+", label: "Brand Partners" },
  { value: "10.6M+", label: "TikTok Likes" },
  { value: "5", label: "Platforms" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "196K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif" },
];

const PORTFOLIO = [
  { label: "Brand Campaign", title: "Sephora Collection", image: "/images/beauty-editorials.jpg", span: "col-span-2 row-span-2" },
  { label: "Fashion", title: "Fendi FW25", image: "/images/brand-campaigns.jpg", span: "" },
  { label: "Hair", title: "Herbal Essences", image: "/images/gallery-6.jpg", span: "" },
  { label: "Beauty", title: "Too Faced x Sephora ME", image: "/images/gallery-5.jpg", span: "" },
  { label: "Lifestyle", title: "Sol de Janeiro", image: "/images/gallery-4.jpg", span: "" },
];

export default function Home() {
  return (
    <main className="relative">
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight">
            Hussa<span className="text-[#89BBdf]">.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#about" className="hover:text-[#89BBdf] transition-colors">About</a>
            <a href="#services" className="hover:text-[#89BBdf] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#89BBdf] transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-[#89BBdf] transition-colors">Contact</a>
          </div>
          <a href="#contact" className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-5 py-2 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-[#89BBdf]/30">
            Let&apos;s Talk
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white">
        <ParticleField />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4 sm:mb-6">Content Creator & Brand Ambassador</p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] mb-6 sm:mb-8">
                  Hussa<br /><span className="text-gradient">AlSaif</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed mb-8 sm:mb-12">
                  Beauty. Lifestyle. Fashion.<br />
                  330K+ followers. Trusted by Sephora, Estée Lauder, MAC, Fendi & more.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex gap-3 sm:gap-4 flex-wrap">
                  <MagneticButton href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm tracking-wide inline-block">Work With Me</MagneticButton>
                  <MagneticButton href="#portfolio" className="border border-gray-300 hover:border-[#89BBdf] hover:text-[#89BBdf] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm tracking-wide inline-block">View Work</MagneticButton>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-full lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-[#89BBdf]/10">
                <Image src="/images/hero.jpg" alt="Hussa AlSaif" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#89BBdf] rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* BRAND MARQUEE */}
      <section className="py-6 sm:py-8 border-y border-gray-100 overflow-hidden bg-white">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span key={i} className="mx-6 sm:mx-12 text-lg sm:text-2xl font-serif font-bold text-gray-200 tracking-wide">{brand}</span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <ScrollReveal><p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4">About</p></ScrollReveal>
              <ScrollReveal delay={0.1}><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">Where beauty<br />meets <span className="text-gradient">influence</span></h2></ScrollReveal>
              <ScrollReveal delay={0.2}><p className="text-gray-400 leading-relaxed mb-6">Based in Khobar & Riyadh, Hussa AlSaif creates authentic lifestyle, beauty and fashion content that resonates with audiences across the Gulf. With a Bachelor&apos;s in Media & Communication from Imam Abdulrahman Bin Faisal University, she brings professional expertise to every collaboration.</p></ScrollReveal>
              <ScrollReveal delay={0.3}><p className="text-gray-400 leading-relaxed">With 330K+ engaged followers across five platforms and partnerships with 13+ global brands including Sephora, Estée Lauder, MAC, Too Faced, and Fendi — she connects brands with the Saudi & GCC market through genuine storytelling and content that converts.</p></ScrollReveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {STATS.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.1 * i}>
                  <div className="glass rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                    <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide uppercase">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 sm:py-32 bg-[#f8fbfe]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal><p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4">Services</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12 sm:mb-16">What I <span className="text-gradient">offer</span></h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.08 * i}>
                <div className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#89BBdf]/30 hover:shadow-2xl hover:shadow-[#89BBdf]/5 transition-all duration-500 h-full">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-gray-100 group-hover:text-[#89BBdf]/20 transition-colors duration-500">{service.icon}</span>
                  <h3 className="font-serif text-lg sm:text-xl font-bold mt-4 mb-3 group-hover:text-[#89BBdf] transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal><p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4">Portfolio</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12 sm:mb-16">Selected <span className="text-gradient">work</span></h2></ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px] md:auto-rows-[250px]">
            {PORTFOLIO.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.08 * i} className={item.span}>
                <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden relative group cursor-pointer">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 z-10">
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#89BBdf] mb-1">{item.label}</p>
                    <h3 className="font-serif text-base sm:text-lg md:text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-3 sm:mt-4">
            {[
              { image: "/images/gallery-1.jpg", brand: "Estée Lauder" },
              { image: "/images/gallery-2.jpg", brand: "MAC" },
              { image: "/images/gallery-3.jpg", brand: "Level Shoes" },
              { image: "/images/gallery-7.jpg", brand: "La Belle" },
            ].map((item, i) => (
              <ScrollReveal key={item.brand} delay={0.08 * i}>
                <div className="relative h-[180px] sm:h-[200px] md:h-[250px] rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer">
                  <Image src={item.image} alt={item.brand} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4"><p className="font-serif text-sm sm:text-base font-bold text-white">{item.brand}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="py-20 sm:py-32 bg-[#f8fbfe]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal><p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4">Platforms</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-12 sm:mb-16">Where your brand <span className="text-gradient">gets seen</span></h2></ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {SOCIALS.map((s, i) => (
              <ScrollReveal key={s.name} delay={0.08 * i}>
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="group block glass rounded-2xl p-5 sm:p-8 hover:border-[#89BBdf]/30 hover:shadow-2xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                  <p className="font-serif text-lg sm:text-xl font-bold group-hover:text-[#89BBdf] transition-colors duration-300">{s.name}</p>
                  <p className="text-[#89BBdf] font-medium text-xs sm:text-sm mt-1">{s.handle}</p>
                  {s.followers && <p className="text-gray-300 text-xs sm:text-sm mt-3 sm:mt-4">{s.followers} followers</p>}
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-[#1a2a3a]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#89BBdf]/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-[#89BBdf]/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal><p className="text-[#89BBdf] font-semibold tracking-[0.3em] uppercase text-xs mb-4 sm:mb-6">Get in Touch</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 sm:mb-8">Let&apos;s create<br /><span className="text-gradient">together</span></h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8 sm:mb-12 leading-relaxed">For partnerships, campaigns, event coverage & collaborations — based in Khobar &amp; Riyadh.</p></ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <MagneticButton href="mailto:inquiries@hussaalsaif.com" className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm tracking-wide inline-block shadow-lg shadow-[#89BBdf]/20">inquiries@hussaalsaif.com</MagneticButton>
              <MagneticButton href="https://instagram.com/hussa.ss" target="_blank" className="border border-white/20 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold transition-all text-sm tracking-wide inline-block">@hussa.ss</MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-gray-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="font-serif text-lg font-bold text-white">Hussa<span className="text-[#89BBdf]">.</span></p>
          <p className="text-gray-500 text-sm">&copy; 2026 Hussa AlSaif. All rights reserved.</p>
          <p className="text-gray-600 text-xs tracking-widest uppercase">Khobar & Riyadh, Saudi Arabia</p>
        </div>
      </footer>
    </main>
  );
}
