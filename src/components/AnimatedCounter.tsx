"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");
  const { prefix, number, decimals, suffix } = parseValue(value);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current) return;
    hasStarted.current = true;

    const duration = 2000; // 2 seconds
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
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, number, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
