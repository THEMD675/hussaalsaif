"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 300 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
      sizes[i] = Math.random() * 1.5 + 0.3;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.015;
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(time * 0.3 + i * 0.05) * 0.001;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[particles.sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#89BBdf"
        transparent
        opacity={0.35}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingRing() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.PI / 4 + time * 0.08;
      mesh.current.rotation.y = time * 0.05;
      mesh.current.position.y = Math.sin(time * 0.3) * 0.3;
    }
  });

  return (
    <mesh ref={mesh} position={[3, 0.5, -2]}>
      <torusGeometry args={[1.8, 0.008, 16, 128]} />
      <meshPhongMaterial color="#89BBdf" transparent opacity={0.2} />
    </mesh>
  );
}

function FloatingArc() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.z = time * 0.06;
      mesh.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.1;
      mesh.current.position.y = Math.cos(time * 0.25) * 0.2 - 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={[-2.5, -0.5, -1.5]}>
      <torusGeometry args={[1.2, 0.006, 16, 128, Math.PI * 1.2]} />
      <meshPhongMaterial color="#89BBdf" transparent opacity={0.15} />
    </mesh>
  );
}

export default function ParticleField() {
  const [canRender, setCanRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check for WebGL support and device capability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setCanRender(false);
        return;
      }
    } catch {
      setCanRender(false);
      return;
    }

    const mobile = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    // Completely disable on low-end devices: low memory, high device pixel ratio on small screen, or slow connection
    if (mobile) {
      const lowMemory = (navigator as unknown as { deviceMemory?: number }).deviceMemory !== undefined
        && (navigator as unknown as { deviceMemory?: number }).deviceMemory! <= 4;
      const slowConnection = (navigator as unknown as { connection?: { effectiveType?: string } }).connection?.effectiveType === "2g"
        || (navigator as unknown as { connection?: { effectiveType?: string } }).connection?.effectiveType === "slow-2g";
      if (lowMemory || slowConnection) {
        setCanRender(false);
        return;
      }
    }

    setCanRender(true);
  }, []);

  if (!canRender) return null;

  // On mobile, render a much lighter version — no rings/arcs, fewer particles, on-demand rendering
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: "low-power" }}
        style={{ background: "transparent" }}
        frameloop={isMobile ? "demand" : "always"}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 3, 5]} intensity={3} color="#89BBdf" distance={25} />
        <Particles count={isMobile ? 80 : 300} />
        {!isMobile && <FloatingRing />}
        {!isMobile && <FloatingArc />}
      </Canvas>
    </div>
  );
}
