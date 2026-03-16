"use client";

import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { prefix: string; number: number; decimals: number; suffix: string } {
  // Match patterns like "330K+", "10.6M+", "8.2%", "13+"
  const match = value.match(/^([^\d]*)(\d+\.?\d*)\s*([A-Za-z%+]*)$/);
  if (!match) return { prefix: "", number: 0, decimals: 0, suffix: value };

  const prefix = match[1];
  const numStr = match[2];
  const suffix = match[3];
  const number = parseFloat(numStr);
  const decimalParts = numStr.split(".");
  const decimals = decimalParts.length > 1 ? decimalParts[1].length : 0;

  return { prefix, number, decimals, suffix };
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsInView(true); observer.disconnect(); } },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const { prefix, number, decimals, suffix } = parseValue(value);
  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? number.toFixed(decimals) : number.toString()
  );
  const hasAnimated = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    // Reset to 0 then animate up
    setDisplayValue(decimals > 0 ? "0." + "0".repeat(decimals) : "0");

    const duration = 2000;
    const startTime = performance.now();

    function easeOutExpo(t: number): number {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    }

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const current = easedProgress * number;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.round(current).toString());
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, number, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
