"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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

    // --- Section background color transitions ---
    // Targets sections that transition between white and blue-tinted backgrounds
    const sectionTransitions = [
      { trigger: "#results", from: "#fafcfe", to: "#ffffff" },
      { trigger: "#about", from: "#ffffff", to: "#f8fbfe" },
      { trigger: "#work", from: "#f8fbfe", to: "#ffffff" },
      { trigger: "#audience", from: "#ffffff", to: "#f8fbfe" },
      { trigger: "#media-kit", from: "#f8fbfe", to: "#ffffff" },
    ];

    const sectionCtxs: gsap.Context[] = [];
    sectionTransitions.forEach(({ trigger }) => {
      const el = document.querySelector(trigger);
      if (!el) return;
      const ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0.85 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      });
      sectionCtxs.push(ctx);
    });

    // Handle scroll-to for anchor links (#about, #work, #contact, etc.)
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

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      sectionCtxs.forEach((ctx) => ctx.revert());
      lenis.destroy();
    };
  }, []);

  return null;
}
