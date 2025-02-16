"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function GlitchEffect() {
    const [isGlitching, setIsGlitching] = useState(false)

    useEffect(() => {
        let animationFrame: number;

        const glitchEffect = () => {
            setIsGlitching(true);
            animationFrame = requestAnimationFrame(() => setIsGlitching(false));
        };

        const interval = setInterval(glitchEffect, 5000);

        return () => {
            clearInterval(interval);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <AnimatePresence>
            {isGlitching && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 1, 0], x: [-10, 0, 10] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-cyan-500/20 mix-blend-overlay pointer-events-none z-50"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            willChange: "transform, opacity"
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: [0, 1, 0], x: [10, 0, -10] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-purple-500/20 mix-blend-overlay pointer-events-none z-50"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                            willChange: "transform, opacity"
                        }}
                    />
                </>
            )}
        </AnimatePresence>
    )
}
