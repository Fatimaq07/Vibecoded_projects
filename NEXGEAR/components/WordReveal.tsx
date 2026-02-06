"use client";

import { motion } from "framer-motion";

export const WordReveal = ({ text, className }: { text: string; className?: string }) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: 45,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.h2
            style={{ perspective: "1000px" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-wrap overflow-hidden ${className}`}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="mr-[0.2em] inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.h2>
    );
};
