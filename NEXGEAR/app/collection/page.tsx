"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const items = [
    {
        category: "Keyboards",
        name: "FAV WpDev",
        tags: ["Optical", "60%", "Tactile"],
        image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800",
        color: "from-blue-500/10"
    },
    {
        category: "Mice",
        name: "NEXGEAR Swift",
        tags: ["Lightweight", "8K Polling", "PTFE"],
        image: "https://images.unsplash.com/photo-1527864509244-433d22a56a8f?auto=format&fit=crop&q=80&w=800",
        color: "from-purple-500/10"
    },
    {
        category: "Audio",
        name: "Aether Pro",
        tags: ["Planar", "Spatial", "Closed-back"],
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
        color: "from-red-500/10"
    },
    {
        category: "Surface",
        name: "Void Mat",
        tags: ["Glass", "Zero-friction", "Large"],
        image: "https://images.unsplash.com/photo-1629429464245-4de4b6f1e8e8?auto=format&fit=crop&q=80&w=800",
        color: "from-emerald-500/10"
    }
];

export default function CollectionPage() {
    return (
        <main className="bg-[#C1C0C9] min-h-screen text-black pt-40 px-6 md:px-24">
            <Navbar />

            <header className="mb-24">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-black/30 text-[10px] font-bold uppercase tracking-[0.5em] mb-4"
                >
                    Archive 2026
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter"
                >
                    Gaming Collection.
                </motion.h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-32">
                {items.map((item, i) => (
                    <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group relative h-[500px] rounded-[3rem] border border-black/[0.05] overflow-hidden bg-gradient-to-b from-black/[0.02] to-transparent hover:border-black/10 transition-all duration-500"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-tr ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                        <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{item.category}</span>
                                <h3 className="text-4xl font-bold tracking-tight mt-2">{item.name}</h3>
                                <div className="flex gap-2 mt-4">
                                    {item.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-black/5 border border-black/5 text-[10px] font-medium tracking-wide text-black/60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-between items-end">
                                <button className="flex items-center gap-2 text-sm font-bold tracking-tight text-black/40 group-hover:text-black transition-colors">
                                    Explore Details <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}
