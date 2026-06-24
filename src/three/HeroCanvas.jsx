import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, MeshDistortMaterial } from "@react-three/drei";

// Tracks the mouse across the whole window (the canvas itself is pointer-events:none
// so it never blocks the buttons/links layered on top of it).
function useWindowPointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pointer;
}

function Scene() {
  const group = useRef();
  const pointer = useWindowPointer();

  useFrame((state, delta) => {
    if (!group.current) return;
    // Ease the whole scene toward the mouse for a parallax / "looking around" feel.
    const targetY = pointer.current.x * 0.5;
    const targetX = pointer.current.y * 0.3;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
    group.current.children[0].rotation.z += delta * 0.15; // slow spin on the crystal
  });

  return (
    <group ref={group}>
      {/* Centerpiece: a morphing crystal */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh scale={1.4}>
          <icosahedronGeometry args={[1.3, 4]} />
          <MeshDistortMaterial
            color="#4f46e5"
            emissive="#22d3ee"
            emissiveIntensity={0.4}
            roughness={0.15}
            metalness={0.6}
            distort={0.4}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Floating wireframe satellites */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3.2, 1.4, -1]}>
          <torusGeometry args={[0.6, 0.18, 16, 60]} />
          <meshStandardMaterial color="#22d3ee" wireframe />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2.5}>
        <mesh position={[3.3, -1.2, -0.5]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#a855f7" wireframe />
        </mesh>
      </Float>
      <Float speed={3.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[2.6, 1.8, -2]}>
          <dodecahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#6366f1" wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[6, 6, 6]} intensity={120} color="#6366f1" />
        <pointLight position={[-6, -4, 2]} intensity={80} color="#22d3ee" />
        <Stars radius={60} depth={50} count={3500} factor={4} saturation={0} fade speed={1} />
        <Scene />
      </Canvas>
    </div>
  );
}
