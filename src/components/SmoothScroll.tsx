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

    // --- Parallax between sections ---
    const sections = document.querySelectorAll("section");
    const parallaxCtxs: gsap.Context[] = [];

    sections.forEach((section) => {
      const ctx = gsap.context(() => {
        // Subtle parallax on section content
        const inner = section.querySelector(":scope > div");
        if (inner) {
          gsap.fromTo(
            inner,
            { y: 40 },
            {
              y: -40,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }

        // Section fade-in
        gsap.fromTo(
          section,
          { opacity: 0.7 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 30%",
              scrub: true,
            },
          }
        );
      });
      parallaxCtxs.push(ctx);
    });

    // --- Scroll-linked body color transitions ---
    // Alternate between warm white and cool blue-white
    const colorSections = [
      { trigger: "#about", bg: "#f6f9fc" },
      { trigger: "#audience", bg: "#f6f9fc" },
    ];

    const colorCtxs: gsap.Context[] = [];
    colorSections.forEach(({ trigger, bg }) => {
      const el = document.querySelector(trigger);
      if (!el) return;
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => {
            gsap.to("body", { backgroundColor: bg, duration: 0.8, ease: "power2.out" });
          },
          onLeave: () => {
            gsap.to("body", { backgroundColor: "#fafcfe", duration: 0.8, ease: "power2.out" });
          },
          onEnterBack: () => {
            gsap.to("body", { backgroundColor: bg, duration: 0.8, ease: "power2.out" });
          },
          onLeaveBack: () => {
            gsap.to("body", { backgroundColor: "#fafcfe", duration: 0.8, ease: "power2.out" });
          },
        });
      });
      colorCtxs.push(ctx);
    });

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
      parallaxCtxs.forEach((ctx) => ctx.revert());
      colorCtxs.forEach((ctx) => ctx.revert());
      lenis.destroy();
    };
  }, []);

  return null;
}
