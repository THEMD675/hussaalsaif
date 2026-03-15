"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  target,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  const handleMouse = (e: React.MouseEvent) => {
    if (isTouchRef.current || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: (clientX - (left + width / 2)) * 0.25,
      y: (clientY - (top + height / 2)) * 0.25,
    });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const Component = href ? "a" : "div";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Component
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={className}
        onClick={onClick}
      >
        {children}
      </Component>
    </div>
  );
}
