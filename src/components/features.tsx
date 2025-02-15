"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
    { icon: Brain, title: "Advanced AI", description: "Cutting-edge neural networks for complex problem-solving" },
    { icon: Shield, title: "Robust Security", description: "Enterprise-grade protection for your sensitive data" },
    { icon: Zap, title: "Real-time Processing", description: "Lightning-fast computations for immediate results" },
    { icon: Globe, title: "Global Scale", description: "Seamless deployment across multiple regions" },
    { icon: BarChart, title: "Deep Analytics", description: "Comprehensive insights to drive informed decisions" },
    { icon: Cloud, title: "Cloud Integration", description: "Effortless integration with major cloud platforms" },
    { icon: Cpu, title: "Edge Computing", description: "Distributed processing for reduced latency" },
    { icon: Lock, title: "Data Privacy", description: "Stringent measures to ensure data confidentiality" },
];

export function Features() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ✅ Explicitly cast to HTMLElement[]
        const cards = gsap.utils.toArray(".feature-card") as HTMLElement[];

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    end: "bottom center",
                    scrub: true,
                },
                opacity: 0,
                y: 50,
                rotation: 5,
                scale: 0.9,
                duration: 1,
            });
        });
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-black to-purple-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
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
                            className="feature-card group relative p-6 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/10 hover:border-blue-500/50 transition-all duration-300"
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(66, 153, 225, 0.5)" }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />

                            <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-300">{feature.description}</p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
