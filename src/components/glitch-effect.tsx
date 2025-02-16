"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function GlitchEffect() {
    const [isGlitching, setIsGlitching] = useState(false)

    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setIsGlitching(true)
            setTimeout(() => setIsGlitching(false), 150)
        }, 5000)

        return () => clearInterval(glitchInterval)
    }, [])

    return (
        <AnimatePresence>
            {isGlitching && (
                <>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: [0, 1, 0], x: [-10, 0, 10] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-cyan-500/20 mix-blend-screen pointer-events-none z-50"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: [0, 1, 0], x: [10, 0, -10] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="fixed inset-0 bg-purple-500/20 mix-blend-screen pointer-events-none z-50"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    />
                </>
            )}
        </AnimatePresence>
    )
}

