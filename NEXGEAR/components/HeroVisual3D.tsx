"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, MeshWobbleMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Crystal() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.5;
        meshRef.current.rotation.y = t * 0.3;
        meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <octahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#ffffff"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={1}
                    roughness={0.05}
                    emissive="#ffffff"
                    emissiveIntensity={0.2}
                />
            </mesh>
            {/* Wireframe overlay for technical look */}
            <mesh scale={1.02} ref={meshRef}>
                <octahedronGeometry args={[1, 0]} />
                <meshBasicMaterial wireframe color="#ffffff" transparent opacity={0.1} />
            </mesh>
        </group>
    );
}

export default function HeroVisual3D() {
    return (
        <div className="w-full h-full relative group">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Crystal />
                </Float>

                {/* Technical scanline reflection effect */}
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]}>
                    <planeGeometry args={[10, 10]} />
                    <meshBasicMaterial color="#ffffff" transparent opacity={0.01} />
                </mesh>
            </Canvas>
        </div>
    );
}
