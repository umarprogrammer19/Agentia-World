"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function LineAnimations() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none">
            <svg className="w-full h-full">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#00ffff" stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {[100, 200].map((y, index) => (
                    <motion.path
                        key={index}
                        d={`M0,${y} Q250,${y - 100} 500,${y} T1000,${y}`}
                        fill="none"
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5" 
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity, 
                        }}
                        style={{ willChange: "transform, opacity" }} 
                    />
                ))}
            </svg>
        </div>
    );
}
