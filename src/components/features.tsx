"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Brain, Shield, Zap, Globe, BarChart, Lock } from "lucide-react"
import AOS from "aos"
import "aos/dist/aos.css"

const features = [
    {
        icon: Brain,
        title: "Advanced AI Processing",
        description: "State-of-the-art language models with deep learning capabilities",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade encryption and security protocols for your data",
    },
    {
        icon: Zap,
        title: "Real-time Responses",
        description: "Lightning-fast processing for immediate AI interactions",
    },
    {
        icon: Globe,
        title: "Global Scalability",
        description: "Deploy AI agents across multiple regions seamlessly",
    },
    {
        icon: BarChart,
        title: "Analytics Dashboard",
        description: "Comprehensive insights into your AI agents' performance",
    },
    {
        icon: Lock,
        title: "Data Privacy",
        description: "Complete control over your data with privacy-first approach",
    },
]

export function Features() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
    }, [])

    return (
        <section id="features" className="py-24 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Powerful Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience the next generation of AI capabilities with our comprehensive feature set
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                        >
                            <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

