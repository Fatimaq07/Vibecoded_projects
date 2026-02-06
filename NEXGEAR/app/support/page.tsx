"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Download, BookOpen, MessageSquare, Wrench, Search, Command, ArrowRight } from "lucide-react";

export default function SupportPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />

            <section className="pt-48 pb-20 px-6 md:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="max-w-2xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20 mb-6"
                        >
                            Control Center
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter"
                        >
                            How can we <br /> assist you?
                        </motion.h1>
                    </div>
                    <div className="w-full md:w-96 relative">
                        <div className="absolute inset-y-0 left-6 flex items-center text-white/20">
                            <Search size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search technical manual..."
                            className="w-full bg-white/[0.02] border border-white/5 rounded-full py-5 px-16 text-sm focus:outline-none focus:border-white/20 transition-all placeholder:text-white/20 text-white"
                        />
                        <div className="absolute inset-y-0 right-6 flex items-center text-white/20">
                            <Command size={16} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <Download />, title: "Drivers", desc: "NEXGEAR Engine & firmware updates." },
                        { icon: <BookOpen />, title: "Manuals", desc: "Detailed hardware schematics." },
                        { icon: <Wrench />, title: "Warranty", desc: "Claim your 2-year pro coverage." },
                        { icon: <MessageSquare />, title: "Community", desc: "Join our expert developer Discord." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-10 rounded-[2.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 group shadow-2xl shadow-black"
                        >
                            <div className="mb-10 text-white/20 group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight mb-4">{item.title}</h3>
                            <p className="text-white/30 text-sm leading-relaxed mb-10">{item.desc}</p>
                            <button className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                Explore <ArrowRight size={12} />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Firmware Update Banner */}
            <section className="py-32 px-6 md:px-24">
                <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent border border-white/5 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left overflow-hidden relative shadow-2xl shadow-black">
                    <div
                        className="absolute inset-0 opacity-10 bg-cover mix-blend-screen invert"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000')" }}
                    />

                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-4xl font-bold tracking-tighter mb-6 text-white">NEXGEAR Engine v4.2.0 is out.</h2>
                        <p className="text-white/40 mb-0">Experience improved spatial audio mapping and reduced latency for WpDev series.</p>
                    </div>
                    <button className="relative z-10 px-12 py-5 bg-white text-black font-bold rounded-full whitespace-nowrap hover:scale-105 transition-transform shadow-2xl shadow-white/5">
                        Download for Windows
                    </button>
                </div>
            </section>
        </main>
    );
}
