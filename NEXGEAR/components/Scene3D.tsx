"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function NeuralParticles() {
    const ref = useRef<THREE.Points>(null);

    // Generate high-density technical dust
    const points = useMemo(() => {
        const p = new Float32Array(2000 * 3);
        for (let i = 0; i < 2000; i++) {
            p[i * 3] = (Math.random() - 0.5) * 10;
            p[i * 3 + 1] = (Math.random() - 0.5) * 10;
            p[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return p;
    }, []);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta * 0.05;
        ref.current.rotation.y += delta * 0.075;

        // Gentle breathing effect
        const t = state.clock.getElapsedTime();
        ref.current.position.y = Math.sin(t * 0.5) * 0.1;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.15}
                />
            </Points>
        </group>
    );
}

function AmbientLight() {
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (!lightRef.current) return;
        const speed = 0.5;
        const time = state.clock.getElapsedTime() * speed;
        lightRef.current.position.x = Math.sin(time) * 3;
        lightRef.current.position.y = Math.cos(time * 1.3) * 3;
    });

    return (
        <pointLight
            ref={lightRef}
            intensity={2}
            distance={10}
            color="#ffffff"
        />
    );
}

export default function Scene3D() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <NeuralParticles />
                <AmbientLight />
                <gridHelper args={[20, 20, "#ffffff", "#ffffff"]} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshBasicMaterial transparent opacity={0.02} color="#ffffff" />
                </gridHelper>
            </Canvas>
        </div>
    );
}
