"use client";

import { useRef, useEffect, useCallback } from "react";

// Canvas 2D particle system — same visual, zero Three.js overhead (~700KB saved)
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<
    { x: number; y: number; baseX: number; baseY: number; size: number; phase: number; depth: number }[]
  >([]);
  const rafRef = useRef(0);

  const init = useCallback((canvas: HTMLCanvasElement) => {
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 40 : 150;
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
      cachedW = rect.width;
      cachedH = rect.height;
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

    let cachedW = canvas.getBoundingClientRect().width;
    let cachedH = canvas.getBoundingClientRect().height;

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, cachedW, cachedH);
      time += 0.008;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const particles = particlesRef.current;
      const len = particles.length;
      const sin = Math.sin;
      const cos = Math.cos;
      const t15 = time * 1.5;
      const t12 = time * 1.2;
      const mx05 = (mx - 0.5) * 30;
      const my05 = (my - 0.5) * 30;

      for (let i = 0; i < len; i++) {
        const p = particles[i];
        const depthFactor = 1 - p.depth;
        const motionScale = 1 - p.depth * 0.5;

        p.x = p.baseX + sin(t15 + p.phase * 6) * 20 * motionScale + mx05 * depthFactor;
        p.y = p.baseY + cos(t12 + p.phase * 4) * 25 * motionScale + my05 * depthFactor;

        const alpha = 0.08 + depthFactor * 0.35;
        const size = p.size * (0.5 + depthFactor * 1.2);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.depth < 0.33 ? "#89BBdf" : p.depth < 0.66 ? "#a0cde6" : "#c4e0f5";
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, 6.283);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Draw orbital rings
      const isMobile = cachedW < 768;
      if (!isMobile) {
        const cx = cachedW * 0.5 + (mx - 0.5) * 20;
        const cy = cachedH * 0.5 + (my - 0.5) * 20;

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
