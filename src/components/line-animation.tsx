"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

export function LineAnimations() {
    const containerRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()

    useEffect(() => {
        const animateLines = async () => {
            await controls.start({ pathLength: 1, opacity: 1, transition: { duration: 2, ease: "easeInOut" } })
            await controls.start({ pathLength: 0, opacity: 0, transition: { duration: 2, ease: "easeInOut" } })
            animateLines()
        }

        animateLines()
    }, [controls])

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none">
            <svg className="w-full h-full">
                <motion.path
                    d="M0,100 Q250,0 500,100 T1000,100"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={controls}
                />
                <motion.path
                    d="M0,200 Q250,100 500,200 T1000,200"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={controls}
                />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#00ffff" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

