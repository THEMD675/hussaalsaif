"use client";

import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  stagger?: number;
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 0.03,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const setupAnimation = useCallback(() => {
    if (!ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const el = ref.current;

    // Split text into words safely using DOM API instead of innerHTML
    const text = children;
    const words = text.split(" ");
    el.textContent = "";

    const wordSpans: HTMLSpanElement[] = [];
    words.forEach((word, i) => {
      if (i > 0) {
        el.appendChild(document.createTextNode(" "));
      }
      const wrapper = document.createElement("span");
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "bottom";
      const inner = document.createElement("span");
      inner.style.display = "inline-block";
      inner.style.transform = "translateY(100%)";
      inner.textContent = word;
      wrapper.appendChild(inner);
      el.appendChild(wrapper);
      wordSpans.push(inner);
    });

    const ctx = gsap.context(() => {
      gsap.to(wordSpans, {
        y: 0,
        duration: 0.8,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return ctx;
  }, [children, delay, stagger]);

  useEffect(() => {
    hasAnimated.current = false;
    const ctx = setupAnimation();
    return () => {
      ctx?.revert();
    };
  }, [setupAnimation]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={className}
    >
      {children}
    </Tag>
  );
}
