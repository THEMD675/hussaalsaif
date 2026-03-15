"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (isTouchDevice || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  // On touch devices, render without the magnetic motion wrapper
  if (isTouchDevice) {
    return (
      <div ref={ref}>
        {href ? (
          <a
            href={href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className={`${className} min-h-[44px] min-w-[44px] flex items-center justify-center`}
          >
            {children}
          </a>
        ) : (
          <div className={`${className} min-h-[44px] min-w-[44px] flex items-center justify-center`}>{children}</div>
        )}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {href ? (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={className}
        >
          {children}
        </a>
      ) : (
        <div className={className}>{children}</div>
      )}
    </motion.div>
  );
}
