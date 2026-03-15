import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links — All Social Media & Contact",
  description:
    "All of Hussa AlSaif's links in one place. Follow on Instagram (@hussa.ss), TikTok (@hussa.502), YouTube, Snapchat, join The Reading Room book club, and get in touch for brand partnerships in Saudi Arabia.",
  alternates: {
    canonical: "https://hussaalsaif.com/links",
  },
  openGraph: {
    title: "Hussa AlSaif — Links | Social Media & Contact",
    description:
      "Follow Hussa AlSaif on Instagram, TikTok, YouTube & Snapchat. Saudi beauty & culture icon with 530K+ followers. Brand partnership inquiries welcome.",
    type: "website",
    url: "https://hussaalsaif.com/links",
    images: [
      {
        url: "https://hussaalsaif.com/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hussa AlSaif — Saudi beauty &amp; culture icon social media links",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hussa AlSaif — Links",
    description:
      "All of Hussa AlSaif's social media links. Saudi beauty & culture icon with 530K+ followers.",
  },
};

const LINKS = [
  {
    label: "Work With Me",
    href: "mailto:inquiries@hussaalsaif.com?subject=Brand%20Partnership%20Inquiry",
    description: "Brand partnerships & collaborations",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    featured: true,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/hussa.ss",
    description: "@hussa.ss",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    external: true,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@hussa.502",
    description: "@hussa.502",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V12a4.83 4.83 0 01-3.77-1.54V6.69h3.77z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@hussaalsaif",
    description: "@hussaalsaif",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
    external: true,
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/add/hussa.alsaif",
    description: "@hussa.alsaif",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.21 1.5c2.62.02 4.78 1.57 5.72 3.9.36.9.42 2.48.42 3.17 0 .42-.04.93-.1 1.37.43.18.88.3 1.37.3.32 0 .57-.06.76-.12.12-.04.23-.06.33-.06.26 0 .52.12.52.42 0 .56-1.2 1.02-2.1 1.22-.1.02-.17.1-.18.2-.04.22-.09.42-.25.58-.4.4-1.14.48-1.72.62-.22.06-.46.12-.56.24-.14.16-.08.46.1.82.82 1.62 2.1 2.76 3.94 3.06.22.04.42.2.42.44 0 .6-1.56 1.1-2.44 1.3-.1.02-.18.18-.2.3-.06.22-.12.66-.7.66-.34 0-.82-.16-1.5-.4-.88-.3-1.74-.42-2.5.22-.62.52-1.1.76-1.84.76s-1.22-.24-1.84-.76c-.76-.64-1.62-.52-2.5-.22-.68.24-1.16.4-1.5.4-.58 0-.64-.44-.7-.66-.02-.12-.1-.28-.2-.3C3.56 18.1 2 17.6 2 17s.2-.4.42-.44c1.84-.3 3.12-1.44 3.94-3.06.18-.36.24-.66.1-.82-.1-.12-.34-.18-.56-.24-.58-.14-1.32-.22-1.72-.62-.16-.16-.21-.36-.25-.58-.01-.1-.08-.18-.18-.2C2.85 11.84 1.65 11.38 1.65 10.82c0-.3.26-.42.52-.42.1 0 .21.02.33.06.19.06.44.12.76.12.49 0 .94-.12 1.37-.3-.06-.44-.1-.95-.1-1.37 0-.69.06-2.27.42-3.17.94-2.33 3.1-3.88 5.72-3.9h1.54z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "The Reading Room",
    href: "https://fable.co/club/the-reading-room-with-hussa-205180405525",
    description: "My book club on Fable",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "Media Kit",
    href: "/media-kit",
    description: "Rates, demographics & case studies",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    label: "Brand Inquiries",
    href: "mailto:inquiries@hussaalsaif.com?subject=Brand%20Partnership%20Inquiry",
    description: "inquiries@hussaalsaif.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "hussaalsaif.com",
    href: "/",
    description: "My website",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
];

const SOCIAL_ICONS = [
  {
    label: "Instagram",
    href: "https://instagram.com/hussa.ss",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@hussa.502",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.16 8.16 0 005.58 2.17V12a4.83 4.83 0 01-3.77-1.54V6.69h3.77z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@hussaalsaif",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/add/hussa.alsaif",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.21 1.5c2.62.02 4.78 1.57 5.72 3.9.36.9.42 2.48.42 3.17 0 .42-.04.93-.1 1.37.43.18.88.3 1.37.3.32 0 .57-.06.76-.12.12-.04.23-.06.33-.06.26 0 .52.12.52.42 0 .56-1.2 1.02-2.1 1.22-.1.02-.17.1-.18.2-.04.22-.09.42-.25.58-.4.4-1.14.48-1.72.62-.22.06-.46.12-.56.24-.14.16-.08.46.1.82.82 1.62 2.1 2.76 3.94 3.06.22.04.42.2.42.44 0 .6-1.56 1.1-2.44 1.3-.1.02-.18.18-.2.3-.06.22-.12.66-.7.66-.34 0-.82-.16-1.5-.4-.88-.3-1.74-.42-2.5.22-.62.52-1.1.76-1.84.76s-1.22-.24-1.84-.76c-.76-.64-1.62-.52-2.5-.22-.68.24-1.16.4-1.5.4-.58 0-.64-.44-.7-.66-.02-.12-.1-.28-.2-.3C3.56 18.1 2 17.6 2 17s.2-.4.42-.44c1.84-.3 3.12-1.44 3.94-3.06.18-.36.24-.66.1-.82-.1-.12-.34-.18-.56-.24-.58-.14-1.32-.22-1.72-.62-.16-.16-.21-.36-.25-.58-.01-.1-.08-.18-.18-.2C2.85 11.84 1.65 11.38 1.65 10.82c0-.3.26-.42.52-.42.1 0 .21.02.33.06.19.06.44.12.76.12.49 0 .94-.12 1.37-.3-.06-.44-.1-.95-.1-1.37 0-.69.06-2.27.42-3.17.94-2.33 3.1-3.88 5.72-3.9h1.54z" />
      </svg>
    ),
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#f0f7fc] via-[#fafcfe] to-white -z-10" />
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#89BBdf]/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] left-1/4 w-[300px] h-[300px] bg-[#89BBdf]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[480px] mx-auto px-5 py-12 pb-20">
        {/* Profile Section */}
        <div className="text-center mb-10">
          <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-2 ring-[#89BBdf]/30 ring-offset-4 ring-offset-[#fafcfe] shadow-xl shadow-[#89BBdf]/10">
            <Image
              src="/images/avatar-hd.jpg"
              alt="Hussa AlSaif"
              fill
              sizes="112px"
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
          <h1 className="font-serif text-2xl font-bold tracking-tight mb-1">
            Hussa<span className="text-gradient">.</span>
          </h1>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-[280px] mx-auto">
            Beauty &amp; Culture Icon
          </p>
          <p className="text-[#89BBdf] text-[12px] font-medium tracking-wide mt-1">
            Saudi Arabia
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3">
          {LINKS.map((link) => {
            const isExternal = "external" in link && link.external;
            const isFeatured = "featured" in link && link.featured;
            const isMailto = link.href.startsWith("mailto:");
            const isInternal = !isExternal && !isMailto;

            const className = isFeatured
              ? "group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 bg-gray-900 text-white hover:bg-[#89BBdf] hover:shadow-lg hover:shadow-[#89BBdf]/20 hover:-translate-y-0.5"
              : "group relative flex items-center gap-4 rounded-2xl p-4 transition-all duration-300 bg-white/70 backdrop-blur-xl border border-[#89BBdf]/12 hover:border-[#89BBdf]/30 hover:shadow-lg hover:shadow-[#89BBdf]/8 hover:-translate-y-0.5";

            const inner = (
              <>
                <div
                  className={
                    isFeatured
                      ? "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/20"
                      : "w-10 h-10 rounded-xl bg-[#89BBdf]/10 flex items-center justify-center shrink-0 text-[#89BBdf] transition-colors duration-300 group-hover:bg-[#89BBdf]/15"
                  }
                >
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={
                      isFeatured
                        ? "font-semibold text-[14px]"
                        : "font-semibold text-[14px] text-gray-900"
                    }
                  >
                    {link.label}
                  </p>
                  <p
                    className={
                      isFeatured
                        ? "text-[12px] text-white/60 truncate"
                        : "text-[12px] text-gray-400 truncate"
                    }
                  >
                    {link.description}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    isFeatured
                      ? "shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-1"
                      : "shrink-0 text-gray-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#89BBdf]"
                  }
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </>
            );

            if (isInternal) {
              return (
                <Link key={link.label} href={link.href} className={className}>
                  {inner}
                </Link>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className={className}
              >
                {inner}
              </a>
            );
          })}
        </div>

        {/* Social Icons Row */}
        <div className="flex justify-center gap-4 mt-10">
          {SOCIAL_ICONS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-xl border border-[#89BBdf]/12 flex items-center justify-center text-gray-400 hover:text-[#89BBdf] hover:border-[#89BBdf]/30 hover:shadow-md hover:shadow-[#89BBdf]/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block font-serif text-sm font-bold text-gray-300 hover:text-[#89BBdf] transition-colors duration-300"
          >
            hussaalsaif.com
          </Link>
        </div>
      </div>
    </main>
  );
}
