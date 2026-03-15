"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  image: string;
  video?: string;
  brand: string;
  category: string;
  description?: string;
  result?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouchRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -3, y: x * 3 });

    // Move image slightly opposite to cursor for parallax feel
    if (imageWrapRef.current) {
      imageWrapRef.current.style.transform = `scale(1.05) translate(${x * -8}px, ${y * -8}px)`;
    }
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    if (imageWrapRef.current) {
      imageWrapRef.current.style.transform = "scale(1) translate(0px, 0px)";
    }
  };

  return (
    <div
      ref={cardRef}
      className="flex-shrink-0 w-[75vw] sm:w-[50vw] md:w-[35vw] group cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <div className="relative aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden mb-4">
        <div
          ref={imageWrapRef}
          className="absolute inset-0 transition-transform duration-700 ease-out"
        >
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              poster={project.image}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={project.image}
              alt={`${project.brand} ${project.category} campaign by Hussa AlSaif${project.result ? ` — ${project.result}` : ""}`}
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 768px) 50vw, 35vw"
              className="object-cover"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#89BBdf] mb-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {project.category}
          </p>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {project.brand}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalScroll({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const totalWidth = trackRef.current!.scrollWidth - window.innerWidth;

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

      // Stagger reveal each card as it enters
      const cards = trackRef.current!.querySelectorAll(".flex-shrink-0");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0.4, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              // Cards reveal as they scroll into view
              start: "left 90%",
              end: "left 50%",
              scrub: true,
              horizontal: true,
            },
          }
        );
      });
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden touch-pan-y">
      <div ref={trackRef} className="flex gap-6 sm:gap-8 py-8 pl-5 sm:pl-8 will-change-transform">
        {projects.map((project) => (
          <ProjectCard key={project.brand} project={project} />
        ))}
        <div className="flex-shrink-0 w-[5vw]" aria-hidden="true" />
      </div>
    </div>
  );
}
