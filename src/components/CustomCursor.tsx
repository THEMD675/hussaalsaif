"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsMounted(true);

    function onMouseMove(e: MouseEvent) {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    }

    function onEnterInteractive() {
      isHovering.current = true;
      if (ringRef.current) {
        ringRef.current.style.width = "48px";
        ringRef.current.style.height = "48px";
        ringRef.current.style.borderColor = "rgba(137, 187, 223, 0.5)";
        ringRef.current.style.background = "rgba(137, 187, 223, 0.06)";
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = "0";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(0)";
      }
    }

    function onLeaveInteractive() {
      isHovering.current = false;
      if (ringRef.current) {
        ringRef.current.style.width = "32px";
        ringRef.current.style.height = "32px";
        ringRef.current.style.borderColor = "rgba(137, 187, 223, 0.2)";
        ringRef.current.style.background = "transparent";
      }
      if (dotRef.current) {
        dotRef.current.style.opacity = "1";
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    }

    function onMouseLeaveWindow() {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    }

    function onMouseEnterWindow() {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    }

    function animate() {
      // Dot follows closely
      dotPos.current.x += (target.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (target.current.y - dotPos.current.y) * 0.25;
      // Ring trails behind with more lag
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.1;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.1;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotPos.current.x}px`;
        dotRef.current.style.top = `${dotPos.current.y}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    const selectors =
      "a, button, [role='button'], input, textarea, select, .result-card, .demo-card, .media-kit-card";
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(selectors);
      newElements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = "none";
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
      document.body.style.cursor = "";
      style.remove();
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: "none",
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(137, 187, 223, 0.9)",
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: 0,
          willChange: "left, top",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "transparent",
          border: "1px solid rgba(137, 187, 223, 0.2)",
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.3s ease, background 0.3s ease, opacity 0.3s ease",
          opacity: 0,
          willChange: "left, top",
        }}
      />
    </>
  );
}
