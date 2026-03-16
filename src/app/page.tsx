import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import HorizontalScroll from "@/components/HorizontalScroll";
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import HomeNav from "@/components/HomeNav";
import HomeEffects from "@/components/HomeEffects";
import HeroParticles from "@/components/HeroParticles";
import LazyVideo from "@/components/LazyVideo";

const BRANDS = [
  { name: "Sephora", logo: "/images/brands/sephora.svg" },
  { name: "Fendi", logo: "/images/brands/fendi.svg" },
  { name: "Too Faced", logo: "/images/brands/too-faced.svg" },
  { name: "Estée Lauder", logo: "/images/brands/estee-lauder.svg" },
  { name: "Herbal Essences", logo: "/images/brands/herbal-essences.svg" },
  { name: "MAC", logo: "/images/brands/mac.svg" },
  { name: "Wella", logo: "/images/brands/wella.svg" },
  { name: "P&G", logo: "/images/brands/pg.svg" },
  { name: "Oral-B", logo: "/images/brands/oral-b.svg" },
  { name: "Level Shoes", logo: "/images/brands/level-shoes.svg" },
  { name: "Sol de Janeiro", logo: "/images/brands/sol-de-janeiro.svg" },
  { name: "Denman", logo: "/images/brands/denman.svg" },
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
    brand: "Sephora GRWM",
    category: "Beauty",
    description: "GRWM content featuring new products exclusively through Sephora Middle East.",
    result: "Brand partnership",
  },
];

const STATS = [
  { value: "530K+", label: "Combined Reach" },
  { value: "191K", label: "YouTube Subs" },
  { value: "4.8%", label: "Avg Engagement" },
  { value: "12", label: "Brand Partners" },
];

const SOCIALS = [
  { name: "Instagram", handle: "@hussa.ss", url: "https://instagram.com/hussa.ss", followers: "141K" },
  { name: "TikTok", handle: "@hussa.502", url: "https://tiktok.com/@hussa.502", followers: "198K" },
  { name: "YouTube", handle: "@hussaalsaif", url: "https://youtube.com/@hussaalsaif", followers: "191K" },
  { name: "Snapchat", handle: "@hussa.alsaif", url: "https://snapchat.com/add/hussa.alsaif", followers: "Active" },
];

const DEMOGRAPHICS = [
  { label: "Primarily Women", description: "Young Saudi women who set beauty and fashion trends in their circles — 78% female audience" },
  { label: "Gen Z & Millennials", description: "The 18-34 demographic with the highest purchasing power in the Gulf — 85% of audience" },
  { label: "Saudi-First", description: "Rooted in Saudi Arabia with strong reach across the wider GCC — 92% KSA & GCC" },
  { label: "High Intent", description: "An audience that discovers, trusts, and buys based on Hussa's recommendations — 4.8% avg engagement" },
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
  { icon: "trending", title: "Commercial Impact", desc: "How Hussa's audience responds to brand content" },
  { icon: "star", title: "Partnership Case Studies", desc: "A look at past brand collaborations and creative direction" },
  { icon: "tag", title: "Collaboration Framework", desc: "Scope, creative approach, and investment levels for different partnership tiers" },
  { icon: "play", title: "Creative Formats", desc: "Editorial, campaign, event, digital, and long-form storytelling capabilities" },
];

export default function Home() {
  return (
    <main className="relative">
      <HomeEffects />
      <HomeNav />

      {/* -- HERO -- */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40 pb-24 w-full">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-20 items-center">
            <div>
              <ScrollReveal delay={0.1}>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-8">
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
                  The curly-hair icon with a Masters in Marketing, a book club, and the trust of the world&apos;s most discerning beauty houses.
                </p>
                <p className="text-gray-500 max-w-md leading-[1.8] mb-10 text-[14px]">
                  Sephora. Fendi. Estée Lauder. MAC. P&amp;G.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex gap-4 flex-wrap">
                  <div data-track={JSON.stringify({type:"cta",label:"Explore Partnership",section:"hero"})}>
                    <MagneticButton href="#contact" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                      Explore Partnership
                    </MagneticButton>
                  </div>
                  <div data-track={JSON.stringify({type:"cta",label:"View Portfolio",section:"hero"})}>
                    <MagneticButton href="#work" className="border border-[#89BBdf]/40 hover:border-[#89BBdf] text-[#89BBdf] px-8 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                      View Portfolio
                    </MagneticButton>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.3}>
              <div className="hero-image-wrapper rounded-3xl h-[420px] sm:h-[520px] lg:h-[620px] shadow-2xl shadow-[#89BBdf]/8 overflow-hidden relative">
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
        <p className="text-center text-[12px] font-medium tracking-[0.4em] uppercase text-gray-400 mb-8">Trusted By</p>
        <div className="flex animate-marquee whitespace-nowrap items-center" aria-hidden="true">
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="mx-8 sm:mx-12 shrink-0 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105 flex items-center justify-center relative" style={{ width: 120, height: 40 }}>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                sizes="120px"
                className="object-contain"
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
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-6">The Hussa Effect</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">
            What happens when brands partner with Hussa.
          </TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[15px] mb-16 max-w-lg">When Hussa partners with a brand, her audience pays attention. Global names from Sephora to Fendi trust her to introduce their products to the Saudi and GCC market.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass rounded-2xl p-7 sm:p-9 text-center hover:shadow-xl hover:shadow-[#89BBdf]/5 transition-all duration-500">
                  <p className="text-3xl sm:text-4xl font-serif font-bold text-gradient mb-2"><AnimatedCounter value={stat.value} /></p>
                  <p className="text-[13px] text-gray-500 font-medium tracking-[0.15em] uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Pioneer</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">She Started the Movement</div>
                <p className="text-gray-600 text-[13px] leading-relaxed">She pioneered the GCC curly hair movement. When Hussa talks about a product, her audience searches for it.</p>
              </div>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Repeat</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Brands Come Back</div>
                <p className="text-gray-600 text-[13px] leading-relaxed">Sephora, Estée Lauder, MAC &mdash; the brands that work with Hussa come back. Because the results speak.</p>
              </div>
              <div className="result-card rounded-2xl p-8 sm:p-10">
                <div className="text-[#89BBdf] text-3xl font-serif font-bold mb-3">Cultural</div>
                <div className="text-gray-900 font-semibold text-[15px] mb-2">Beyond Beauty</div>
                <p className="text-gray-600 text-[13px] leading-relaxed">Book club host, bilingual storyteller, cultural tastemaker. She&apos;s not just beauty &mdash; she&apos;s culture.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- ABOUT -- */}
      <section id="about" className="py-28 sm:py-40 bg-[#f8fbfe] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal>
                <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-6">Hussa AlSaif</p>
              </ScrollReveal>
              <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-10">Not an influencer. A cultural force.</TextReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-gray-600 leading-[1.85] mb-6 text-[15px]">Hussa pioneered the Saudi curly hair movement before brands caught on. With a <strong className="text-gray-700">Masters in Marketing</strong> and a Fine Arts background, she built an audience that trusts her taste implicitly.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-gray-600 leading-[1.85] mb-6 text-[15px]">141K Instagram from 25 curated posts. 198K on TikTok. 191K YouTube subscribers with 2.5M+ views. Active daily on Snapchat. When Hussa recommends something, her audience buys it.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-gray-600 leading-[1.85] mb-8 text-[15px]">Beyond beauty: host of <em>The Reading Room</em> book club, bilingual storyteller across Arabic and English. Brands don&apos;t brief Hussa &mdash; they collaborate with her.</p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <div className="flex flex-wrap gap-3">
                  {["Beauty Authority", "Cultural Figure", "The Reading Room", "Fine Arts", "Bilingual AR/EN"].map((tag) => (
                    <span key={tag} className="bg-[#89BBdf]/10 text-[#5a9ac5] px-4 py-2 rounded-full text-[13px] font-medium">{tag}</span>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2}>
              <div className="rounded-3xl h-[400px] sm:h-[500px] lg:h-[550px] shadow-2xl shadow-[#89BBdf]/8 overflow-hidden relative">
                <LazyVideo src="/videos/about.mp4" poster="/images/about.jpg" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* -- PORTFOLIO -- */}
      <section id="work" className="bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-28 sm:pt-40">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-6">Selected Collaborations</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-4">A portfolio of world-class partnerships.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[15px] mb-8 max-w-lg">From global beauty houses to luxury fashion maisons. Each partnership is a meeting of equals &mdash; her creative vision, their brand world.</p>
          </ScrollReveal>
        </div>
        <div className="hidden md:block">
          <HorizontalScroll projects={PROJECTS} />
        </div>
        <div className="md:hidden px-5 pb-16">
          <div className="grid grid-cols-1 gap-6">
            {PROJECTS.slice(0, 6).map((project) => (
                <div key={project.brand} className="group">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    {project.video ? (
                      <LazyVideo src={project.video} poster={project.image} />
                    ) : (
                      <Image src={project.image} alt={`${project.brand} — ${project.category}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#89BBdf] mb-1.5">{project.category}</p>
                      <h3 className="font-serif text-xl font-bold text-white mb-2">{project.brand}</h3>
                      <p className="text-white/70 text-[13px] leading-relaxed mb-2">{project.description}</p>
                      <p className="text-[#89BBdf] text-[13px] font-semibold">{project.result}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- HER AUDIENCE -- */}
      <section id="audience" className="py-28 sm:py-40 bg-[#f8fbfe] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ScrollReveal>
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-6">Her Audience</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">The most valuable consumer in the Gulf.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[15px] mb-16 max-w-lg">Young Saudi women with purchasing power, brand awareness, and trust in Hussa&apos;s taste. This is the audience every beauty and fashion brand is trying to reach.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
              {DEMOGRAPHICS.map((demo) => (
                <div key={demo.label} className="demo-card rounded-2xl p-7 sm:p-9">
                  <p className="text-[#89BBdf] font-serif font-bold text-[18px] sm:text-[20px] mb-2">{demo.label}</p>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{demo.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
                        <p className="text-gray-500 text-[13px] leading-relaxed">{interest.description}</p>
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
                    <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:s.name})} className="flex items-center justify-between group py-2">
                      <div>
                        <p className="font-semibold text-[14px] group-hover:text-[#89BBdf] transition-colors">{s.name}</p>
                        <p className="text-gray-500 text-[13px]">{s.handle}</p>
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
            <p className="text-[#89BBdf] font-medium tracking-[0.35em] uppercase text-[13px] mb-6">For Partners</p>
          </ScrollReveal>
          <TextReveal as="h2" className="font-serif text-3xl sm:text-4xl md:text-[2.8rem] font-bold leading-[1.15] mb-6">Explore a collaboration with Hussa.</TextReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[15px] mb-16 max-w-lg">The partnership deck includes audience intelligence, past collaboration results, and creative scope. It&apos;s designed for teams evaluating a strategic fit.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {MEDIA_KIT_ITEMS.map((item) => (
                <div key={item.title} className="media-kit-card rounded-2xl p-7 sm:p-8">
                  <div className="w-10 h-10 rounded-xl bg-[#89BBdf]/10 flex items-center justify-center mb-4">
                    {item.icon === "chart" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>)}
                    {item.icon === "grid" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>)}
                    {item.icon === "trending" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>)}
                    {item.icon === "star" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
                    {item.icon === "tag" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>)}
                    {item.icon === "play" && (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#89BBdf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>)}
                  </div>
                  <h3 className="font-semibold text-[15px] text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
            ))}
          </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="media-kit-cta rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-[#0d1a26]" />
              <div className="absolute inset-0 opacity-30" aria-hidden="true">
                <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#89BBdf]/20 rounded-full blur-[120px]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-[1.15] mb-4">Request the Partnership Deck</h3>
                <p className="text-gray-500 text-[15px] max-w-md mx-auto mb-8 leading-[1.8]">A curated overview of Hussa&apos;s world, audience, and collaboration framework &mdash; built for brand and agency teams.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div data-track={JSON.stringify({type:"cta",label:"View Partnership Deck",section:"partnership"})}>
                    <MagneticButton href="/media-kit" className="bg-[#89BBdf] hover:bg-[#6ea8d4] text-white px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block shadow-lg shadow-[#89BBdf]/20">
                      View Partnership Deck
                    </MagneticButton>
                  </div>
                  <div data-track={JSON.stringify({type:"cta",label:"Get in Touch",section:"partnership"})}>
                    <MagneticButton href="#contact" className="border border-white/15 hover:border-[#89BBdf] text-white hover:text-[#89BBdf] px-10 py-4 rounded-full font-semibold transition-all text-[13px] tracking-wide inline-block">
                      Get in Touch
                    </MagneticButton>
                  </div>
                </div>
                <p className="text-gray-500 text-[13px] mt-6">Available upon request for qualifying brands</p>
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
              <p className="text-[#89BBdf] font-medium text-[13px]">Accepting Select Partnerships &mdash; Q2 2026</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              The right partnership<br /><span className="text-gradient">starts here</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-gray-500 text-[15px] max-w-lg mx-auto mb-4 leading-[1.8]">Hussa works with a limited number of brands each quarter to ensure every collaboration receives the creative depth it deserves. If there&apos;s a fit, her team will be in touch.</p>
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
              <a href="/media-kit/download" data-track={JSON.stringify({type:"cta",label:"Download Media Kit",section:"contact"})} className="bg-white/10 hover:bg-white/15 backdrop-blur text-white px-8 py-3.5 rounded-full font-semibold transition-all text-[12px] tracking-wide inline-flex items-center gap-2 border border-white/10 hover:border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Media Kit
              </a>
              <a href="mailto:inquiries@hussaalsaif.com?subject=Urgent%20Partnership%20Inquiry" data-track={JSON.stringify({type:"email",email:"inquiries@hussaalsaif.com",section:"contact"})} className="border border-white/10 hover:border-[#89BBdf]/40 text-gray-500 hover:text-[#89BBdf] px-8 py-3.5 rounded-full font-semibold transition-all text-[12px] tracking-wide inline-flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                Direct Email
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600 text-[13px] tracking-[0.15em] uppercase">
              <a href="https://wa.me/966552550777" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"WhatsApp"})} className="hover:text-[#25D366] transition-colors">WhatsApp</a>
              <a href="https://instagram.com/hussa.ss" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"Instagram"})} className="hover:text-[#89BBdf] transition-colors">Instagram</a>
              <a href="https://tiktok.com/@hussa.502" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"TikTok"})} className="hover:text-[#89BBdf] transition-colors">TikTok</a>
              <a href="https://youtube.com/@hussaalsaif" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"YouTube"})} className="hover:text-[#89BBdf] transition-colors">YouTube</a>
              <a href="https://snapchat.com/add/hussa.alsaif" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"Snapchat"})} className="hover:text-[#89BBdf] transition-colors">Snapchat</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* -- FOOTER -- */}
      <footer className="bg-gray-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <p className="font-serif text-xl font-bold text-white tracking-tight">Hussa AlSaif<span className="text-[#89BBdf]">.</span></p>
              <p className="text-gray-600 text-[13px] tracking-[0.25em] uppercase">Saudi Arabia</p>
            </div>
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] text-gray-500 tracking-wide">
              <a href="/media-kit" className="hover:text-[#89BBdf] transition-colors">Media Kit</a>
              <a href="/links" className="hover:text-[#89BBdf] transition-colors">Links</a>
              <a href="https://instagram.com/hussa.ss" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"Instagram"})} className="hover:text-[#89BBdf] transition-colors">Instagram</a>
              <a href="https://tiktok.com/@hussa.502" target="_blank" rel="noopener noreferrer" data-track={JSON.stringify({type:"social",platform:"TikTok"})} className="hover:text-[#89BBdf] transition-colors">TikTok</a>
              <a href="mailto:inquiries@hussaalsaif.com?subject=Partnership%20Inquiry" data-track={JSON.stringify({type:"email",email:"inquiries@hussaalsaif.com",section:"footer"})} className="hover:text-[#89BBdf] transition-colors">Contact</a>
            </div>
            <p className="text-gray-600 text-[13px]">&copy; 2026 Hussa AlSaif</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
