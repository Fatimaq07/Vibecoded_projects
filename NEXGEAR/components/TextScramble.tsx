"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%0123456789";

export default function TextScramble({ text, className }: { text: string; className?: string }) {
    const [displayText, setDisplayText] = useState(text);
    const [isAnimating, setIsAnimating] = useState(false);

    const scramble = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev =>
                text.split("").map((letter, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsAnimating(false);
            }
            iteration += 1 / 3;
        }, 30);
    }, [text, isAnimating]);

    useEffect(() => {
        scramble();
    }, [text]); // Scramble whenever text changes (e.g. in the scrollytelling)

    return (
        <motion.span
            onMouseOver={scramble}
            className={className}
        >
            {displayText}
        </motion.span>
    );
}
