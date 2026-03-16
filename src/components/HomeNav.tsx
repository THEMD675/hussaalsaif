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
    <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-5 flex items-center justify-between">
        <a href="#" aria-label="Hussa AlSaif - Home">
          <img src="/images/logo-hs.svg" alt="Hussa AlSaif" className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg" />
        </a>
        <div className="hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide uppercase text-gray-500">
          <a href="#world" onClick={() => trackNav("World")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">World</a>
          <a href="#about" onClick={() => trackNav("About")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">About</a>
          <a href="#work" onClick={() => trackNav("Portfolio")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Portfolio</a>
          <a href="#audience" onClick={() => trackNav("Reach")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Reach</a>
          <a href="#contact" onClick={() => trackNav("Contact")} className="nav-link hover:text-[#89BBdf] transition-colors duration-300">Contact</a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#partnership" onClick={() => trackCTA("Partnerships", "nav")} className="hidden md:inline-block border border-[#89BBdf]/30 hover:border-[#89BBdf] text-[#89BBdf] px-5 py-2.5 rounded-full text-[12px] font-semibold transition-all duration-300">
            Partnerships
          </a>
          <a href="#contact" onClick={() => trackCTA("Inquiries", "nav")} className="hidden md:inline-block bg-gray-900 hover:bg-[#89BBdf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300">
            Inquiries
          </a>
          <button
            className="md:hidden relative w-11 h-11 flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#89BBdf] rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger-line top-[14px] ${mobileMenuOpen ? "rotate-45 !top-[21px]" : ""}`} />
            <span className={`hamburger-line top-[21px] ${mobileMenuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`hamburger-line top-[28px] ${mobileMenuOpen ? "-rotate-45 !top-[21px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu — solid bg, no backdrop-blur for performance */}
      <div
        className={`md:hidden fixed inset-0 top-[56px] sm:top-[68px] bg-white transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className={`flex flex-col items-center justify-center h-full gap-7 transition-transform duration-300 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-4"}`}>
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
              className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 hover:text-[#89BBdf] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => trackCTA("Inquiries", "mobile-nav")} className="mt-4 bg-gray-900 text-white px-8 py-3 rounded-full text-[13px] font-semibold">
            Inquiries
          </a>
        </div>
      </div>
    </nav>
  );
}
