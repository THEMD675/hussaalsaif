"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    function tickerCallback(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Lightweight: no per-section parallax or body color transitions
    // Let Lenis handle smooth scrolling, ScrollReveal handles section reveals

    // Handle scroll-to for anchor links
    function handleAnchorClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") {
        if (href === "#") {
          e.preventDefault();
          lenis.scrollTo(0);
        }
        return;
      }
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: 0 });
      }
    }

    document.addEventListener("click", handleAnchorClick);

    // Ensure ScrollTrigger measurements are correct after Lenis is set up
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return null;
}
