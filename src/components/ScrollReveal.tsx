"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

// Single shared IntersectionObserver for ALL ScrollReveal instances
let sharedObserver: IntersectionObserver | null = null;
const callbacks = new Map<Element, () => void>();

function getObserver() {
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = callbacks.get(entry.target);
          if (cb) {
            cb();
            callbacks.delete(entry.target);
            sharedObserver?.unobserve(entry.target);
          }
        }
      });
    },
    { threshold: 0.08, rootMargin: "-30px" }
  );
  return sharedObserver;
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getObserver();
    callbacks.set(el, () => setVisible(true));
    observer.observe(el);

    return () => {
      callbacks.delete(el);
      observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
