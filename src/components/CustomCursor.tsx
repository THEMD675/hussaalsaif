"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    function onMouseMove(e: MouseEvent) {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!isVisible) setIsVisible(true);
    }

    function onMouseEnterInteractive() {
      setIsHovering(true);
    }

    function onMouseLeaveInteractive() {
      setIsHovering(false);
    }

    function onMouseLeaveWindow() {
      setIsVisible(false);
    }

    function onMouseEnterWindow() {
      setIsVisible(true);
    }

    // Smooth cursor animation loop
    function animate() {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    // Attach hover listeners to interactive elements
    const interactiveSelectors = "a, button, [role='button'], input, textarea, select, .magnetic-wrap, .result-card, .demo-card, .glass";
    const interactiveElements = document.querySelectorAll(interactiveSelectors);
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterInteractive);
      el.addEventListener("mouseleave", onMouseLeaveInteractive);
    });

    // Use MutationObserver to catch dynamically added elements
    const observer = new MutationObserver(() => {
      const newElements = document.querySelectorAll(interactiveSelectors);
      newElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
        el.addEventListener("mouseenter", onMouseEnterInteractive);
        el.addEventListener("mouseleave", onMouseLeaveInteractive);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    rafRef.current = requestAnimationFrame(animate);

    // Add cursor:none to body
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
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterInteractive);
        el.removeEventListener("mouseleave", onMouseLeaveInteractive);
      });
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: isHovering ? "44px" : "12px",
        height: isHovering ? "44px" : "12px",
        borderRadius: "50%",
        background: isHovering
          ? "rgba(137, 187, 223, 0.15)"
          : "rgba(137, 187, 223, 0.9)",
        border: isHovering ? "1.5px solid rgba(137, 187, 223, 0.6)" : "none",
        transition: "width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s ease, border 0.3s ease, opacity 0.3s ease",
        opacity: isVisible ? 1 : 0,
        mixBlendMode: "normal",
        willChange: "transform",
      }}
    />
  );
}
