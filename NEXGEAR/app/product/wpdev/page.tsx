"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Cpu, Layers, Microscope, ShieldCheck, Zap } from "lucide-react";

export default function ProductDetailPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-black">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 opacity-10 grayscale invert"
                >
                    <img
                        src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Hardware Detail"
                    />
                </motion.div>

                <div className="relative z-10 text-center max-w-4xl">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 mb-8"
                    >
                        Series: WpDev
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-9xl font-bold tracking-tighter mb-12"
                    >
                        Engineered <br /> Clarity.
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex gap-4 justify-center"
                    >
                        <button className="px-10 py-4 bg-white text-black font-bold rounded-full group hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all">
                            Buy Now
                        </button>
                        <button className="px-10 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">
                            Configure
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive Section */}
            <section className="py-32 px-6 md:px-24 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 italic">
                            "The most transparent keypress in gaming."
                        </h2>
                        <p className="text-white/40 text-xl leading-relaxed font-light tracking-tight max-w-xl">
                            We stripped away the noise. Every layer of the NEXGEAR WpDev is optimized for one thing: the precise delivery of tactile information. From the light-speed optical actuators to the aerospace-grade PBT housing.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4">
                        {[
                            { icon: <Zap size={24} />, label: "0.2ms Actuation" },
                            { icon: <ShieldCheck size={24} />, label: "80M Clicks" },
                            { icon: <Cpu size={24} />, label: "Neural Mapping" },
                            { icon: <Layers size={24} />, label: "Gasket Mount" }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center text-center group shadow-2xl shadow-black"
                            >
                                <div className="p-4 rounded-2xl bg-white/5 mb-6 group-hover:bg-white/10 transition-colors">
                                    {feature.icon}
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-white/30">{feature.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engineering Blueprint Section */}
            <section className="py-32 px-6 md:px-24 bg-[#C1C0C9] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-4">Internal Layout</p>
                            <h2 className="text-5xl font-bold tracking-tighter">Physics of Control.</h2>
                        </div>
                    </div>

                    <div className="relative h-[600px] border border-white/5 rounded-[4rem] overflow-hidden bg-white/[0.01]">
                        <div
                            className="absolute inset-0 opacity-5 bg-cover bg-center invert"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                        <div className="absolute bottom-12 left-12 max-w-md">
                            <div className="p-3 bg-white text-black inline-block rounded-lg mb-6"><Microscope size={20} /></div>
                            <h4 className="text-2xl font-bold tracking-tight mb-4">Micro-Textured PBT.</h4>
                            <p className="text-white/40 leading-relaxed text-sm">
                                Every keycap features a sandblasted finish at the molecular level to ensure consistent grip, even in the most intense tournament conditions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
