import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function AnimatedShape() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="#C25E3E"
        attach="material"
        distort={0.42}
        speed={2.2}
        roughness={0.28}
        metalness={0.2}
        clearcoat={0.3}
        clearcoatRoughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      {/* Soft warm aura glow behind canvas */}
      <div
        aria-hidden="true"
        className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#C25E3E]/20 via-[#E08F62]/15 to-[#557A66]/15 blur-3xl pointer-events-none -z-10"
      />

      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        className="w-full h-full"
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1.4} />
          <directionalLight position={[4, 5, 4]} intensity={2.2} />
          <directionalLight position={[-4, -3, -2]} intensity={1.0} color="#E08F62" />
          <pointLight position={[0, -2, 2]} intensity={0.6} color="#557A66" />
          
          <AnimatedShape />
          
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
