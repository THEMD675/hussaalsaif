"use client";

import { useRef, useEffect, useState, useCallback } from "react";

// Canvas 2D particle system — same visual, zero Three.js overhead (~700KB saved)
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visible, setVisible] = useState(true);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<
    { x: number; y: number; baseX: number; baseY: number; size: number; phase: number; depth: number }[]
  >([]);
  const rafRef = useRef(0);

  const init = useCallback((canvas: HTMLCanvasElement) => {
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const count = isMobile ? 40 : 250;
    const w = canvas.width;
    const h = canvas.height;

    particlesRef.current = Array.from({ length: count }, () => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 0.5,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random(),
      };
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx!.scale(dpr, dpr);
      init(canvas);
    }

    resize();
    window.addEventListener("resize", resize);

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) / rect.width;
      mouseRef.current.y = (e.clientY - rect.top) / rect.height;
    }
    window.addEventListener("mousemove", onMouseMove);

    let time = 0;

    function animate() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        // Organic flowing motion
        const ox = Math.sin(time * 1.5 + p.phase * 6) * 20 * (1 - p.depth * 0.5);
        const oy = Math.cos(time * 1.2 + p.phase * 4) * 25 * (1 - p.depth * 0.5);

        // Subtle mouse influence
        const dx = (mx - 0.5) * 30 * (1 - p.depth);
        const dy = (my - 0.5) * 30 * (1 - p.depth);

        p.x = p.baseX + ox + dx;
        p.y = p.baseY + oy + dy;

        // Depth-based opacity and size
        const alpha = 0.08 + (1 - p.depth) * 0.35;
        const size = p.size * (0.5 + (1 - p.depth) * 1.2);

        // Color: baby blue gradient based on depth
        const r = 137;
        const g = 187 + Math.floor(p.depth * 30);
        const b = 223 + Math.floor(p.depth * 20);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.fill();
      }

      // Draw orbital rings
      const isMobile = w < 768;
      if (!isMobile) {
        const cx = w * 0.5 + (mx - 0.5) * 20;
        const cy = h * 0.5 + (my - 0.5) * 20;

        for (let i = 0; i < 3; i++) {
          const radius = 120 + i * 60;
          const rotation = time * (0.3 - i * 0.05);
          const opacity = 0.06 - i * 0.015;

          ctx.save();
          ctx.translate(cx, cy);
          ctx.rotate(rotation);
          ctx.scale(1, 0.35 + i * 0.1);
          ctx.beginPath();
          ctx.arc(0, 0, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(137, 187, 223, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          ctx.restore();
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    // IntersectionObserver to pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!rafRef.current) rafRef.current = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 w-full h-full"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    />
  );
}
