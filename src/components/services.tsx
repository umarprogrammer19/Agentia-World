"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const services = [
    {
        icon: Brain,
        title: "Neural Networks",
        description: "Advanced AI models trained for complex problem-solving and pattern recognition.",
    },
    {
        icon: Cloud,
        title: "Cloud Integration",
        description: "Seamless integration with major cloud platforms for scalable AI solutions.",
    },
    {
        icon: Shield,
        title: "Secure Infrastructure",
        description: "Enterprise-grade security with end-to-end encryption and compliance.",
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Lightning-fast data processing and response times for critical applications.",
    },
    {
        icon: Globe,
        title: "Global Deployment",
        description: "Deploy AI agents across multiple regions with automatic scaling.",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description: "Comprehensive insights and metrics for performance optimization.",
    },
    {
        icon: Cpu,
        title: "Edge Computing",
        description: "Distributed computing power at the edge for faster response times.",
    },
    {
        icon: Lock,
        title: "Data Privacy",
        description: "Industry-leading privacy measures and data protection protocols.",
    },
]

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cards = document.querySelectorAll(".service-card")

        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                delay: index * 0.1,
            })
        })
    }, [])

    return (
        <section id="services" className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Our Services
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive AI solutions designed to transform your business and drive innovation
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card group relative p-6 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl" />

                            <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

