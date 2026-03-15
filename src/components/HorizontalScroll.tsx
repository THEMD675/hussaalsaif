"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  image: string;
  brand: string;
  category: string;
}

export default function HorizontalScroll({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth - window.innerWidth;

    gsap.to(trackRef.current, {
      x: -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-6 sm:gap-8 py-8 will-change-transform">
        {projects.map((project) => (
          <div
            key={project.brand}
            className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[35vw] group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.brand}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#89BBdf] mb-2">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {project.brand}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
