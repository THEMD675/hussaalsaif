"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import WhatsAppButton from "@/components/WhatsAppButton";
import { trackCTA, trackSocial, trackEmail, initScrollDepthTracking } from "@/lib/analytics";

const BackToTop = dynamic(() => import("@/components/BackToTop"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function HomeEffects() {
  useEffect(() => {
    return initScrollDepthTracking();
  }, []);

  // Force autoplay on ALL muted videos — iOS requires user interaction
  useEffect(() => {
    const playAllVideos = () => {
      document.querySelectorAll("video[muted]").forEach((v) => {
        const video = v as HTMLVideoElement;
        if (video.paused) {
          video.play().catch(() => {});
        }
      });
    };

    const timer = setTimeout(playAllVideos, 500);

    const onFirstInteraction = () => {
      playAllVideos();
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
    };
    window.addEventListener("touchstart", onFirstInteraction, { once: true, passive: true });
    window.addEventListener("scroll", onFirstInteraction, { once: true, passive: true });
    window.addEventListener("click", onFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("touchstart", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
      window.removeEventListener("click", onFirstInteraction);
    };
  }, []);

  // Click delegation for data-track analytics attributes
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest("[data-track]");
      if (!el) return;
      try {
        const data = JSON.parse(el.getAttribute("data-track")!);
        switch (data.type) {
          case "cta": trackCTA(data.label, data.section); break;
          case "social": trackSocial(data.platform); break;
          case "email": trackEmail(data.email, data.section); break;
        }
      } catch { /* malformed data-track */ }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <SmoothScroll />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
