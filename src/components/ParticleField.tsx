"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null);
  const light = useRef<THREE.PointLight>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sizes[i] = Math.random() * 2 + 0.5;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = time * 0.03;
      mesh.current.rotation.y = time * 0.05;
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.002;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
    if (light.current) {
      light.current.position.x = Math.sin(time * 0.3) * 4;
      light.current.position.y = Math.cos(time * 0.2) * 4;
    }
  });

  return (
    <>
      <pointLight ref={light} distance={20} intensity={8} color="#89BBdf" />
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[particles.sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#89BBdf"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </>
  );
}

function FloatingSphere() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.position.y = Math.sin(time * 0.5) * 0.3;
      mesh.current.rotation.x = time * 0.1;
      mesh.current.rotation.z = time * 0.08;
    }
  });

  return (
    <mesh ref={mesh} position={[2.5, 0, -2]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshPhongMaterial
        color="#89BBdf"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function FloatingRing() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = Math.PI / 3 + time * 0.15;
      mesh.current.rotation.y = time * 0.1;
      mesh.current.position.y = Math.sin(time * 0.4) * 0.2 + 0.5;
    }
  });

  return (
    <mesh ref={mesh} position={[-2, 0.5, -1]}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshPhongMaterial color="#89BBdf" transparent opacity={0.3} />
    </mesh>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <Particles />
        <FloatingSphere />
        <FloatingRing />
      </Canvas>
    </div>
  );
}
