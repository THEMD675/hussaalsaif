"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !containerRef.current || !textRef.current || !lineRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    // Initial state
    gsap.set(textRef.current.querySelectorAll(".preloader-char"), {
      y: 80,
      opacity: 0,
    });
    gsap.set(lineRef.current, { scaleX: 0 });

    // Animate characters in
    tl.to(textRef.current.querySelectorAll(".preloader-char"), {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.06,
      ease: "power4.out",
      delay: 0.2,
    });

    // Animate the line
    tl.to(
      lineRef.current,
      {
        scaleX: 1,
        duration: 0.6,
        ease: "power3.inOut",
      },
      "-=0.3"
    );

    // Hold
    tl.to({}, { duration: 0.4 });

    // Fade out
    tl.to(containerRef.current, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.8,
      ease: "power4.inOut",
    });

    return () => {
      tl.kill();
    };
  }, [mounted, onComplete]);

  if (!mounted) return null;

  const chars = "Hussa.".split("");

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <div className="text-center">
        <div ref={textRef} className="overflow-hidden">
          <div className="flex items-baseline justify-center">
            {chars.map((char, i) => (
              <span
                key={i}
                className={`preloader-char inline-block font-serif font-bold tracking-tight ${
                  char === "." ? "text-[#89BBdf]" : "text-gray-900"
                }`}
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
        <div
          ref={lineRef}
          className="h-[1px] w-16 mx-auto mt-4 bg-[#89BBdf]/40"
          style={{ transformOrigin: "center" }}
        />
      </div>
    </div>
  );
}
