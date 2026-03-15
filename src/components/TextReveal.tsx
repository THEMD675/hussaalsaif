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
  /** Split by "word" (default) or "char" for character-level animation */
  splitBy?: "word" | "char";
}

export default function TextReveal({
  children,
  className = "",
  as: Tag = "p",
  delay = 0,
  stagger = 0.04,
  splitBy = "word",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const setupAnimation = useCallback(() => {
    if (!ref.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const el = ref.current;
    const text = children;
    el.textContent = "";

    const animTargets: HTMLSpanElement[] = [];

    if (splitBy === "char") {
      const words = text.split(" ");
      words.forEach((word, wi) => {
        if (wi > 0) {
          el.appendChild(document.createTextNode(" "));
        }
        const wordWrap = document.createElement("span");
        wordWrap.style.display = "inline-block";
        wordWrap.style.whiteSpace = "nowrap";

        word.split("").forEach((char) => {
          const wrapper = document.createElement("span");
          wrapper.style.display = "inline-block";
          wrapper.style.overflow = "hidden";
          wrapper.style.verticalAlign = "bottom";
          const inner = document.createElement("span");
          inner.style.display = "inline-block";
          inner.style.transform = "translateY(110%)";
          inner.style.willChange = "transform";
          inner.textContent = char;
          wrapper.appendChild(inner);
          wordWrap.appendChild(wrapper);
          animTargets.push(inner);
        });

        el.appendChild(wordWrap);
      });
    } else {
      const words = text.split(" ");
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
        inner.style.transform = "translateY(110%)";
        inner.style.willChange = "transform";
        inner.textContent = word;
        wrapper.appendChild(inner);
        el.appendChild(wrapper);
        animTargets.push(inner);
      });
    }

    const ctx = gsap.context(() => {
      gsap.to(animTargets, {
        y: 0,
        duration: 1,
        stagger,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }, el);

    return ctx;
  }, [children, delay, stagger, splitBy]);

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
