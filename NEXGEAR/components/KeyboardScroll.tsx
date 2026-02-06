"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useSpring, motion, AnimatePresence, MotionValue, useTransform, useMotionValue } from "framer-motion";
import TextScramble from "./TextScramble";

const FRAME_COUNT = 192;

interface TextBeat {
    id: string;
    title: string;
    subtext: string;
    start: number;
    end: number;
    align: "center" | "left" | "right";
}

const BEATS: TextBeat[] = [
    { id: "hero", title: "NEXGEAR.", subtext: "Precision defined.", start: 0, end: 0.15, align: "center" },
    { id: "precision", title: "Unrivaled Performance.", subtext: "Zero latency. Absolute control.", start: 0.2, end: 0.45, align: "left" },
    { id: "layers", title: "Level Up Your Setup.", subtext: "Engineered for the elite.", start: 0.55, end: 0.8, align: "right" },
    { id: "cta", title: "Ascend to Greatness.", subtext: "Scroll back to explore again.", start: 0.85, end: 1, align: "center" },
];

export default function KeyboardScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-500, 500], [5, -5]), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set(clientX - (left + width / 2));
        mouseY.set(clientY - (top + height / 2));
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext("2d");
        const img = images[index];

        if (canvas && context && img) {
            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            // Enable High Fidelity Smoothing
            context.imageSmoothingEnabled = true;
            context.imageSmoothingQuality = "high";

            // Clear and fill Obsidian base
            context.fillStyle = "#000000";
            context.fillRect(0, 0, rect.width, rect.height);

            if (img.complete && img.naturalWidth !== 0) {
                // Centered source cropping
                const horizontalCrop = img.width * 0.08;
                const topCrop = img.height * 0.05;
                const bottomCrop = img.height * 0.15;

                const sourceX = horizontalCrop;
                const sourceY = topCrop;
                const sourceWidth = img.width - (horizontalCrop * 2);
                const sourceHeight = img.height - topCrop - bottomCrop;

                const croppedAspectRatio = sourceWidth / sourceHeight;
                const canvasAspectRatio = rect.width / rect.height;

                let drawWidth, drawHeight;
                const zoomFactor = 1.0;

                if (croppedAspectRatio > canvasAspectRatio) {
                    drawWidth = rect.width * zoomFactor;
                    drawHeight = (rect.width * zoomFactor) / croppedAspectRatio;
                } else {
                    drawHeight = rect.height * zoomFactor;
                    drawWidth = (rect.height * zoomFactor) * croppedAspectRatio;
                }

                const offsetX = (rect.width - drawWidth) / 2;
                const offsetY = (rect.height - drawHeight) / 2;

                context.drawImage(
                    img,
                    sourceX, sourceY, sourceWidth, sourceHeight,
                    offsetX, offsetY, drawWidth, drawHeight
                );

                // --- Cinematic Post-Processing Pass ---

                // 1. Soft Vignette to focus the hardware
                const vignette = context.createRadialGradient(
                    rect.width / 2, rect.height / 2, 0,
                    rect.width / 2, rect.height / 2, rect.width * 0.8
                );
                vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
                vignette.addColorStop(0.6, "rgba(0, 0, 0, 0)");
                vignette.addColorStop(1, "rgba(0, 0, 0, 0.08)");
                context.fillStyle = vignette;
                context.fillRect(0, 0, rect.width, rect.height);

                // 2. Subtle Global Atmosphere (Dark Room Light)
                const wash = context.createLinearGradient(0, 0, 0, rect.height);
                wash.addColorStop(0, "rgba(255, 255, 255, 0.02)");
                wash.addColorStop(0.5, "rgba(0, 0, 0, 0)");
                wash.addColorStop(1, "rgba(0, 0, 0, 0.05)");
                context.fillStyle = wash;
                context.fillRect(0, 0, rect.width, rect.height);
            }
        }
    }, [images]);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/frames/frame_${i}_delay-0.04s.webp`;
            img.onload = () => {
                loadedCount++;
                setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) setLoading(false);
            };
            img.onerror = () => {
                const fallbackImg = new Image();
                fallbackImg.src = `/frames/${(i + 1).toString().padStart(5, '0')}.jpg`;
                fallbackImg.onload = () => {
                    loadedCount++;
                    setProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                    if (loadedCount === FRAME_COUNT) setLoading(false);
                };
                fallbackImg.onerror = () => {
                    loadedCount++;
                    if (loadedCount === FRAME_COUNT) setLoading(false);
                };
                loadedImages[i] = fallbackImg;
            };
            loadedImages[i] = img;
        }
        setImages(loadedImages);
    }, []);

    // Canvas Resizing & Initial Frame
    useEffect(() => {
        const handleResize = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            const targetWidth = Math.round(rect.width * dpr);
            const targetHeight = Math.round(rect.height * dpr);

            if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
                canvas.width = targetWidth;
                canvas.height = targetHeight;
                const context = canvas.getContext("2d");
                context?.scale(dpr, dpr);
            }
            drawFrame(Math.min(FRAME_COUNT - 1, Math.floor(smoothProgress.get() * FRAME_COUNT)));
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        const unsubscribe = smoothProgress.on("change", (latest) => {
            const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
            requestAnimationFrame(() => drawFrame(frameIndex));
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [images, smoothProgress, drawFrame]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            {/* High-End Grain Overlay */}
            <svg className="fixed inset-0 pointer-events-none z-[60] opacity-[0.05] contrast-125 saturate-0">
                <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            <div className="sticky top-0 left-0 h-screen w-full flex flex-col md:flex-row items-center justify-center overflow-hidden px-10 md:px-24 gap-20">
                {/* Left Side: Immersive Narrative */}
                <div className="flex-1 h-full flex items-center justify-start relative order-2 md:order-1 pt-20">
                    <AnimatePresence mode="wait">
                        {BEATS.map((beat) => (
                            <ActiveBeat
                                key={beat.id}
                                beat={beat}
                                scrollProgress={scrollYProgress}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* Right Side: Contained Engineering Study */}
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="flex-1 h-[40vh] md:h-[50vh] w-full max-w-2xl flex items-center justify-center order-1 md:order-2 group"
                >
                    <div className="w-full aspect-video relative rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02] shadow-[0_0_100px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]">
                        <canvas
                            ref={canvasRef}
                            className="w-full h-full"
                        />
                        {/* Diagnostic Scanlines */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(255,255,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(255,255,255,0.02)]" />
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
                    >
                        <div className="w-12 h-12 border-2 border-white/10 border-t-white rounded-full animate-spin mb-4" />
                        <p className="text-white/60 font-mono text-[10px] uppercase tracking-[0.3em]">
                            <TextScramble text={`SYNCHRONIZING SEQUENCE... ${progress}%`} />
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ActiveBeat({ beat, scrollProgress }: { beat: TextBeat; scrollProgress: MotionValue<number> }) {
    const isVisible = useTransform(scrollProgress, [beat.start - 0.05, beat.start, beat.end, beat.end + 0.05], [0, 1, 1, 0]);
    const yOffset = useTransform(scrollProgress, [beat.start - 0.05, beat.start, beat.end, beat.end + 0.05], [10, 0, 0, -10]);

    // Internal state to avoid unnecessary absolute overlaps if multiple are active
    const transparency = useSpring(isVisible, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            style={{ opacity: transparency, y: yOffset }}
            className="absolute flex flex-col drop-shadow-2xl text-left items-start"
        >
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 leading-none">
                <TextScramble text={beat.title} />
            </h2>
            <p className="text-xl md:text-3xl text-white/30 font-semibold tracking-tight uppercase">
                {beat.subtext}
            </p>
        </motion.div>
    );
}
