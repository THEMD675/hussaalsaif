"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export default function ImageReveal({
  src,
  alt,
  fill = true,
  className = "",
  containerClassName = "",
  priority = false,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !overlayRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(overlayRef.current, {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.inOut",
        transformOrigin: "right center",
      }).from(
        imageRef.current,
        {
          scale: 1.3,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${containerClassName}`}>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-[#89BBdf]/20"
        style={{ transformOrigin: "right center" }}
      />
      <div ref={imageRef} className="w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill={fill}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
          className={`object-cover ${className}`}
          priority={priority}
        />
      </div>
    </div>
  );
}
