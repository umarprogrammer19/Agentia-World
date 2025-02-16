"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    { icon: Brain, title: "Neural Networks", description: "Advanced AI models with deep learning capabilities" },
    { icon: Shield, title: "Quantum Security", description: "Next-generation encryption for ultimate data protection" },
    { icon: Zap, title: "Real-time Processing", description: "Millisecond response times with edge computing" },
    { icon: Globe, title: "Global Infrastructure", description: "Distributed systems across 150+ data centers" },
    { icon: BarChart, title: "Predictive Analytics", description: "Future-proof insights powered by machine learning" },
    { icon: Cloud, title: "Cloud Integration", description: "Seamless connection with major cloud providers" },
    { icon: Cpu, title: "Edge Computing", description: "Processing at the source for minimal latency" },
    { icon: Lock, title: "Zero-Trust Security", description: "Military-grade protection protocols" },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

    return (
        <motion.div ref={ref} style={{ y, opacity }} className="group relative">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative p-6 bg-black rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-xl" />

                {/* Connecting lines */}
                <svg className="absolute -left-4 top-1/2 w-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="url(#line-gradient)" strokeWidth="1" />
                    <defs>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="100%" y2="0">
                            <stop offset="0%" stopColor="#00ffff" />
                            <stop offset="100%" stopColor="#bf00ff" />
                        </linearGradient>
                    </defs>
                </svg>

                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4"
                >
                    <feature.icon className={cn("w-12 h-12", index % 2 === 0 ? "text-cyan-400" : "text-purple-400")} />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>

                {/* Animated corner */}
                <div className="absolute bottom-0 right-0 w-8 h-8">
                    <svg
                        viewBox="0 0 32 32"
                        className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                        <path d="M32 32L0 32L0 0" fill="none" stroke="url(#corner-gradient)" strokeWidth="1" />
                        <defs>
                            <linearGradient id="corner-gradient" x1="0" y1="0" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00ffff" />
                                <stop offset="100%" stopColor="#bf00ff" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </motion.div>
    )
}

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            </div>

            {/* Floating elements */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
                    animate={{
                        x: ["0%", "100%", "0%"],
                        y: ["0%", "100%", "0%"],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 5,
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                />
            ))}

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Quantum-Powered Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Experience the next evolution of AI technology with our cutting-edge features
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

