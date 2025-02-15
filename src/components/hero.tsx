"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export function Hero() {
    const textRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".gradient-text", {
                backgroundPosition: "200% center",
                duration: 10,
                repeat: -1,
                ease: "none",
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        POWERED BY PANAVERSITY
                    </span>
                </motion.div>

                <motion.h1
                    ref={textRef}
                    className="gradient-text text-5xl md:text-7xl font-bold mb-6"
                    style={{
                        backgroundImage: "linear-gradient(to right, #a855f7, #3b82f6, #a855f7)",
                        backgroundSize: "200% auto",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        // textFillColor: "transparent",
                        WebkitTextFillColor: "transparent",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Enterprise AI Agents
                    <br />
                    <span className="text-white">for the Future</span>
                </motion.h1>

                <motion.div
                    className="max-w-2xl mx-auto mb-12 bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                            <span className="text-purple-500">AI</span>
                        </div>
                        <Input
                            className="bg-transparent border-0 focus-visible:ring-0 text-gray-400"
                            placeholder="Hello! How can I assist you today?"
                            readOnly
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6"
                            size="lg"
                        >
                            Deploy Your AI Agent →
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white px-8 py-6" size="lg">
                            Watch Demo
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

