"use client";

import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    { icon: Brain, title: "Neural Networks", description: "Advanced AI models with deep learning capabilities" },
    { icon: Shield, title: "Quantum Security", description: "Next-generation encryption for ultimate data protection" },
    { icon: Zap, title: "Real-time Processing", description: "Millisecond response times with edge computing" },
    { icon: Globe, title: "Seamless Integration", description: "Our platform enables effortless incorporation of AI agents." },
    { icon: BarChart, title: "Predictive Analytics", description: "Future-proof insights powered by machine learning" },
    { icon: Cloud, title: "Cloud Integration", description: "Seamless connection with major cloud providers" },
    { icon: Cpu, title: "Autonomous Collaboration", description: "Experience AI agents that communicate autonomously." },
    { icon: Lock, title: "Scalable Solutions", description: "our technology scales to meet diverse needs." },
];

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const MemoizedIcon = useMemo(() => feature.icon, [feature.icon]); // ✅ Prevents unnecessary re-renders

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
            whileHover={{ scale: 1.05 }} // ✅ Lowered scale for better responsiveness
            style={{ willChange: "transform, opacity" }} // ✅ Optimized for GPU rendering
        >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

            <div className="relative p-6 bg-black rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 rounded-xl" />

                <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="mb-4"
                >
                    <MemoizedIcon className={cn("w-12 h-12", index % 2 === 0 ? "text-cyan-400" : "text-purple-400")} />
                </motion.div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.description}</p>
            </div>
        </motion.div>
    );
}

export function Features() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/20 md:bg-transparent">
            {/* <div className="absolute inset-0 bg-grid-pattern opacity-5">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black" />
            </div> */}

            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/20 to-black" />
            </div>
            {/* ✅ Reduced Floating Particles Count from 20 → 10 for Performance */}
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-500/20 rounded-full"
                    animate={{
                        x: ["0%", "100%", "0%"],
                        y: ["0%", "100%", "0%"],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 8, // ✅ Adjusted for better flow
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
    );
}
