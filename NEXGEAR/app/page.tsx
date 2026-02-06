"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import KeyboardScroll from "@/components/KeyboardScroll";
import Navbar from "@/components/Navbar";
import FeatureBento from "@/components/FeatureBento";
import { WordReveal } from "@/components/WordReveal";
import Magnetic from "@/components/Magnetic";
import TextScramble from "@/components/TextScramble";
import ParallaxImage from "@/components/ParallaxImage";
import HeroVisual3D from "@/components/HeroVisual3D";

export default function Home() {
    return (
        <main className="bg-black min-h-screen selection:bg-white selection:text-black text-white">
            <Navbar />

            {/* 3D Entry Portal */}
            <section className="h-[80vh] w-full flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <HeroVisual3D />
                </div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    >
                        <TextScramble
                            text="ENGINE: ACTIVE"
                            className="text-[10px] font-bold tracking-[1em] text-white/40 mb-4 block"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Cinematic Scrollytelling Hero */}
            <KeyboardScroll />

            {/* Narrative Section - The Connection */}
            <section className="py-40 bg-black px-10 md:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-8"
                        >
                            <TextScramble text="THE VISION" />
                        </motion.p>
                        <WordReveal
                            text="Precision is a Language."
                            className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-12"
                        />
                        <Link href="/product/wpdev">
                            <Magnetic>
                                <motion.button
                                    whileHover={{ x: 10 }}
                                    className="flex items-center gap-4 text-white font-bold tracking-tight group py-4 pr-10"
                                >
                                    Study the Engineering <div className="w-12 h-[1px] bg-white/10 group-hover:w-20 group-hover:bg-white transition-all" />
                                </motion.button>
                            </Magnetic>
                        </Link>
                    </div>
                    <ParallaxImage
                        src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200"
                        alt="Hardware Close-up"
                        className="flex-1 rounded-[4rem] aspect-video"
                    />
                </div>
            </section>

            {/* Feature Bento Hub */}
            <FeatureBento />

            {/* Final Call to Action */}
            <section className="min-h-screen flex flex-col items-center justify-center bg-black px-10 py-32 relative overflow-hidden">
                {/* Soft background ambient glow */}
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-4xl text-center relative z-10">
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 1.5 }}
                        className="text-white/20 text-[10px] font-bold uppercase mb-12"
                    >
                        <TextScramble text="JOIN THE NEXGEAR ARCHIVE" />
                    </motion.p>
                    <WordReveal
                        text="Beyond the Surface."
                        className="text-6xl md:text-9xl text-white font-bold tracking-tighter mb-12 leading-[0.85] justify-center"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-white/30 text-xl md:text-2xl leading-relaxed mb-20 max-w-2xl mx-auto tracking-tight font-light italic"
                    >
                        "The perfect setup doesn't exist. You forge it."
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="flex flex-col md:flex-row gap-6 justify-center"
                    >
                        <Link href="/collection">
                            <Magnetic>
                                <button className="group relative px-16 py-6 bg-white text-black rounded-full font-bold tracking-tight hover:scale-105 transition-all duration-500 overflow-hidden text-lg">
                                    <span className="relative z-10">Shop the Collection</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)]" />
                                </button>
                            </Magnetic>
                        </Link>
                        <Link href="/support">
                            <Magnetic>
                                <button className="px-16 py-6 border border-white/10 text-white rounded-full font-bold tracking-tight hover:bg-white/5 transition-all duration-500 hover:border-white/20 text-lg">
                                    Get Support
                                </button>
                            </Magnetic>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Unified Footer */}
            <footer className="py-32 px-10 md:px-24 bg-black border-t border-white/[0.05]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-20">
                    <div className="flex flex-col gap-8">
                        <Link href="/" className="text-4xl font-bold tracking-tighter text-white">NEXGEAR</Link>
                        <p className="text-white/20 text-sm max-w-[280px] leading-relaxed">
                            Designed for the elite. Engineered for the absolute. The new standard in digital mastery.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32">
                        <div className="flex flex-col gap-6">
                            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-white/10">Discovery</p>
                            <Link href="/collection" className="text-white/40 hover:text-white transition-colors text-sm">Collection</Link>
                            <Link href="/product/wpdev" className="text-white/40 hover:text-white transition-colors text-sm">WpDev Series</Link>
                            <Link href="/" className="text-white/40 hover:text-white transition-colors text-sm">Our Story</Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-white/10">Resources</p>
                            <Link href="/support" className="text-white/40 hover:text-white transition-colors text-sm">Drivers</Link>
                            <Link href="/support" className="text-white/40 hover:text-white transition-colors text-sm">Warranties</Link>
                            <Link href="/support" className="text-white/40 hover:text-white transition-colors text-sm">Knowledge Base</Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            <p className="text-[10px] font-bold uppercase tracking-[.3em] text-white/10">Connected</p>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Instagram</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Developer Discord</a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">Twitter (X)</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/10">
                    <div>&copy; 2026 NEXGEAR ARCHIVE &mdash; FORGED IN SILENCE.</div>
                    <div className="flex gap-12">
                        <Link href="#" className="hover:text-white/20 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white/20 transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white/20 transition-colors">Accessibility</Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}
