"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import SplitType from "split-type"
import { Button } from "@/components/ui/button"

export function Hero() {
    const headingRef = useRef<HTMLHeadingElement>(null)
    const subheadingRef = useRef<HTMLParagraphElement>(null)

    useEffect(() => {
        if (!headingRef.current || !subheadingRef.current) return

        const heading = new SplitType(headingRef.current, { types: "chars" })
        const subheading = new SplitType(subheadingRef.current, { types: "words" })

        gsap.from(heading.chars, {
            opacity: 0,
            y: 100,
            rotateX: -90,
            stagger: 0.02,
            duration: 1,
            ease: "back.out(1.7)",
        })

        gsap.from(subheading.words, {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: 0.5,
            ease: "back.out(1.7)",
            delay: 0.5,
        })
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        NEXT GENERATION AI
                    </span>
                </motion.div>

                <h1
                    ref={headingRef}
                    className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                >
                    Welcome to the Future of AI
                </h1>

                <p ref={subheadingRef} className="max-w-2xl mx-auto text-xl text-gray-400 mb-12">
                    Step into a world where artificial intelligence meets human creativity, powering the next generation of
                    digital experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="relative px-8 py-6 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg group overflow-hidden">
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="px-8 py-6 border-cyan-500/50 hover:bg-cyan-500/10 text-lg">
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
                </div>
            </div>
        </section>
    )
}

