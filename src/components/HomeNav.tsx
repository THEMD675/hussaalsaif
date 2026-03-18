"use client";

import { useEffect, useState } from "react";
import { trackCTA, trackNav } from "@/lib/analytics";

export default function HomeNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a[href^='#']") || target.closest("a[href^='/']")) {
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-14 sm:h-16 flex items-center justify-between">
        <a href="/" aria-label="Hussa AlSaif - Home">
          <img src="/images/logo-hs.svg" alt="Hussa AlSaif" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg" />
        </a>

        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-500">
          <a href="#world" onClick={() => trackNav("World")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">World</a>
          <a href="#about" onClick={() => trackNav("About")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">About</a>
          <a href="#work" onClick={() => trackNav("Portfolio")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Portfolio</a>
          <a href="#audience" onClick={() => trackNav("Reach")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Reach</a>
          <a href="#contact" onClick={() => trackNav("Contact")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="#partnership" onClick={() => trackCTA("Partnerships", "nav")} className="hidden md:inline-block border border-[#89BBdf]/30 hover:border-[#89BBdf] text-[#89BBdf] px-5 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-300">
            Partnerships
          </a>
          <a href="#contact" onClick={() => trackCTA("Inquiries", "nav")} className="hidden md:inline-block bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300">
            Inquiries
          </a>

          {/* Hamburger — clean SVG, no CSS positioning hacks */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="5" x2="18" y2="5" />
                <line x1="2" y1="10" x2="18" y2="10" />
                <line x1="2" y1="15" x2="18" y2="15" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-14 sm:top-16 bg-white border-b border-gray-100 shadow-lg">
          <div className="flex flex-col py-4 px-5">
            {[
              { href: "#world", label: "World" },
              { href: "#about", label: "About" },
              { href: "#work", label: "Portfolio" },
              { href: "#audience", label: "Reach" },
              { href: "/media-kit", label: "Media Kit" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => trackNav(link.label)}
                className="py-3 text-[15px] font-semibold text-gray-900 hover:text-[#89BBdf] transition-colors border-b border-gray-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => trackCTA("Inquiries", "mobile-nav")} className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-full text-[13px] font-semibold text-center">
              Inquiries
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
