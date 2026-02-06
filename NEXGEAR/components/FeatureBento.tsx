"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Optical Resonance",
        desc: "Light-speed actuation for zero-latency response.",
        icon: <Zap className="text-white/60" />,
        className: "md:col-span-2 md:row-span-1 border-white/5 overflow-hidden",
        visual: "bg-gradient-to-br from-[#1a1a1c] to-[#0d0d0e]",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=800",
        href: "/product/wpdev"
    },
    {
        title: "Modular PCB",
        desc: "Hotswappable switches with pure tactile feedback.",
        icon: <Layers className="text-white/60" />,
        className: "md:col-span-1 md:row-span-2 border-white/5 overflow-hidden bg-[#121214]",
        visual: "bg-gradient-to-t from-[#0d0d0e] via-[#121214] to-[#0d0d0e]",
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
        href: "/collection"
    },
    {
        title: "Neural Engine",
        desc: "Intelligent macro mapping and adaptive lighting.",
        icon: <Cpu className="text-white/60" />,
        className: "md:col-span-1 md:row-span-1 border-white/5 overflow-hidden",
        visual: "bg-[#0d0d0e]",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        href: "/support"
    },
    {
        title: "Aerospace Alloy",
        desc: "Forged in double-shot PBT housing for the elite.",
        icon: <ShieldCheck className="text-white/60" />,
        className: "md:col-span-2 md:row-span-1 border-white/5 overflow-hidden bg-white/[0.01]",
        visual: "bg-gradient-to-r from-[#1a1a1c] to-[#0d0d0e]",
        image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&q=80&w=800",
        href: "/product/wpdev"
    },
];

export default function FeatureBento() {
    return (
        <section className="py-32 px-6 md:px-24 bg-black relative overflow-hidden border-t border-white/[0.05]">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.01] blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto relative z-10 text-white">
                <div className="mb-20 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-6"
                    >
                        Engineering Excellence
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter text-white"
                    >
                        Tactile Supremacy.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {features.map((feature, i) => (
                        <Link key={i} href={feature.href}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className={`h-full relative rounded-[2.5rem] flex flex-col justify-between border ${feature.className} p-10 group backdrop-blur-3xl cursor-pointer bg-white/[0.02] transition-all hover:bg-white/[0.04] hover:border-white/10 overflow-hidden shadow-2xl shadow-black`}
                            >
                                <div
                                    className="absolute inset-0 z-0 opacity-5 group-hover:scale-110 transition-transform duration-1000 bg-cover bg-center grayscale invert"
                                    style={{ backgroundImage: `url('${feature.image}')` }}
                                />
                                <div className={`absolute inset-0 z-0 opacity-40 ${feature.visual}`} />

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <ArrowRight className="text-white/0 group-hover:text-white/40 transition-all group-hover:translate-x-1" size={20} />
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold tracking-tight text-white mb-3">{feature.title}</h4>
                                    <p className="text-sm tracking-tight text-white/40 max-w-[240px]">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <Link href="/collection">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-10 py-5 border border-white/10 rounded-full text-white font-bold tracking-tight hover:bg-white/5 transition-all shadow-lg shadow-white/5"
                        >
                            Explore the Collection
                        </motion.button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
