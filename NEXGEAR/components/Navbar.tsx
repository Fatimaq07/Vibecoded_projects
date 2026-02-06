"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { X as XIcon, Menu as MenuIcon, ShoppingBag as ShoppingBagIcon } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-black/40 backdrop-blur-xl border-b border-white/[0.05]"
        >
            <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                NEXGEAR
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-10">
                {[
                    { name: "Collection", href: "/collection" },
                    { name: "Product", href: "/product/wpdev" },
                    { name: "Support", href: "/support" },
                    { name: "Story", href: "/" }
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="text-white/40 hover:text-white text-sm font-bold tracking-tight transition-colors"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-6">
                <button className="text-white/60 hover:text-white transition-colors">
                    <ShoppingBagIcon size={20} />
                </button>
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
                <button className="hidden md:block px-8 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/5">
                    Join Archive
                </button>
            </div>
        </motion.nav>
    );
}
