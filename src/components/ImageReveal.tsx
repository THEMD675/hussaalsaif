"use client";

import { useRef, useEffect, useState } from "react";
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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

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

      // Clip-path reveal from bottom
      tl.fromTo(
        containerRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power4.inOut",
        }
      );

      tl.to(
        overlayRef.current,
        {
          scaleX: 0,
          duration: 0.6,
          ease: "power3.inOut",
          transformOrigin: "right center",
        },
        "-=0.4"
      );

      tl.from(
        imageRef.current,
        {
          scale: 1.2,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -4, y: x * 4 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${containerClassName}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        willChange: "transform",
      }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-[#89BBdf]/15"
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
