"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Track mouse position globally for the 3D scene
const mouseState = { x: 0, y: 0 };

const VERTEX_SHADER = `
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  uniform float uPixelRatio;
  varying float vAlpha;
  varying float vDepth;

  void main() {
    vec3 pos = position;

    // Organic flowing motion
    pos.x += sin(uTime * 0.4 + aPhase * 6.28) * 0.3;
    pos.y += cos(uTime * 0.3 + aPhase * 4.0) * 0.4;
    pos.z += sin(uTime * 0.2 + aPhase * 3.0) * 0.2;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Size varies with depth — cinematic DOF effect
    float depth = -mvPosition.z;
    float sizeScale = 180.0 / depth;
    gl_PointSize = aSize * sizeScale * uPixelRatio;

    // Depth-based opacity fade
    vDepth = smoothstep(2.0, 18.0, depth);
    vAlpha = mix(0.6, 0.03, vDepth);
  }
`;

const FRAGMENT_SHADER = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vAlpha;
  varying float vDepth;

  void main() {
    // Soft circular point
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    float softEdge = 1.0 - smoothstep(0.2, 0.5, dist);

    // Color gradient based on depth
    vec3 color = mix(uColorA, uColorB, vDepth);

    gl_FragColor = vec4(color, vAlpha * softEdge);
  }
`;

function ShaderParticles({ count = 600 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, sizes, phases } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute in an ellipsoidal volume for cinematic spread
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(Math.random(), 0.6) * 10;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta) * 1.3;
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.9;
      positions[i * 3 + 2] = r * Math.cos(phi);

      sizes[i] = Math.random() * 2.5 + 0.5;
      phases[i] = Math.random();
    }

    return { positions, sizes, phases };
  }, [count]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uColorA: { value: new THREE.Color("#89BBdf") },
      uColorB: { value: new THREE.Color("#c4e0f5") },
    }),
    []
  );

  const { gl } = useThree();

  useEffect(() => {
    uniforms.uPixelRatio.value = gl.getPixelRatio();
  }, [gl, uniforms]);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.getElapsedTime();

    if (mesh.current) {
      // Subtle mouse parallax
      mesh.current.rotation.y =
        state.clock.getElapsedTime() * 0.02 + mouseState.x * 0.3;
      mesh.current.rotation.x = mouseState.y * 0.15;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSize" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aPhase" args={[phases, 1]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function OrbitalRing({
  radius,
  tilt,
  rotationOffset,
  opacity,
}: {
  radius: number;
  tilt: number;
  rotationOffset: number;
  opacity: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x =
        tilt + Math.sin(t * 0.3 + rotationOffset) * 0.1 + mouseState.y * 0.1;
      mesh.current.rotation.z =
        t * 0.08 + rotationOffset + mouseState.x * 0.08;
    }
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, 0.008, 16, 128]} />
      <meshBasicMaterial color="#89BBdf" transparent opacity={opacity} />
    </mesh>
  );
}

function MouseTracker() {
  const { size } = useThree();

  useEffect(() => {
    function onMouseMove(e: MouseEvent) {
      mouseState.x = (e.clientX / size.width - 0.5) * 2;
      mouseState.y = (e.clientY / size.height - 0.5) * 2;
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [size]);

  return null;
}

export default function ParticleField() {
  const [canRender, setCanRender] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setCanRender(false);
        return;
      }
    } catch {
      setCanRender(false);
      return;
    }

    const mobile =
      window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobile);

    if (mobile) {
      const lowMemory =
        (navigator as unknown as { deviceMemory?: number }).deviceMemory !==
          undefined &&
        (navigator as unknown as { deviceMemory?: number }).deviceMemory! <= 4;
      const slowConnection =
        (
          navigator as unknown as {
            connection?: { effectiveType?: string };
          }
        ).connection?.effectiveType === "2g" ||
        (
          navigator as unknown as {
            connection?: { effectiveType?: string };
          }
        ).connection?.effectiveType === "slow-2g";
      if (lowMemory || slowConnection) {
        setCanRender(false);
        return;
      }
    }

    setCanRender(true);
  }, []);

  if (!canRender) return null;

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        frameloop="always"
      >
        <ShaderParticles count={isMobile ? 150 : 600} />
        {!isMobile && (
          <>
            <OrbitalRing
              radius={2}
              tilt={Math.PI / 3}
              rotationOffset={0}
              opacity={0.12}
            />
            <OrbitalRing
              radius={2.8}
              tilt={Math.PI / 4}
              rotationOffset={1.2}
              opacity={0.09}
            />
            <OrbitalRing
              radius={3.6}
              tilt={Math.PI / 5}
              rotationOffset={2.4}
              opacity={0.06}
            />
          </>
        )}
        {!isMobile && <MouseTracker />}
      </Canvas>
    </div>
  );
}
