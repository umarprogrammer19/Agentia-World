"use client"

import { motion } from "framer-motion"
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react"

const features = [
    { icon: Brain, title: "Advanced AI", description: "Cutting-edge neural networks for complex problem-solving" },
    { icon: Shield, title: "Robust Security", description: "Enterprise-grade protection for your sensitive data" },
    { icon: Zap, title: "Real-time Processing", description: "Lightning-fast computations for immediate results" },
    { icon: Globe, title: "Global Scale", description: "Seamless deployment across multiple regions" },
    { icon: BarChart, title: "Deep Analytics", description: "Comprehensive insights to drive informed decisions" },
    { icon: Cloud, title: "Cloud Integration", description: "Effortless integration with major cloud platforms" },
    { icon: Cpu, title: "Edge Computing", description: "Distributed processing for reduced latency" },
    { icon: Lock, title: "Data Privacy", description: "Stringent measures to ensure data confidentiality" },
]

export function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Cutting-Edge Features
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">Discover the power of next-generation AI technology</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />

                            <motion.div
                                initial={{ scale: 1 }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                                className="mb-4"
                            >
                                <feature.icon className="w-12 h-12 text-blue-400" />
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

