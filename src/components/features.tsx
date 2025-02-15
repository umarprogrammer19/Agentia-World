"use client"

import { motion } from "framer-motion"
import { Cpu, Shield, Zap, Globe, BarChart, Lock, Brain, Cloud } from "lucide-react"

const features = [
    {
        icon: Brain,
        title: "Advanced AI",
        description: "Cutting-edge neural networks for complex problem-solving",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2YW5jZWQlMjBhaXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        icon: Shield,
        title: "Robust Security",
        description: "Enterprise-grade protection for your sensitive data",
        image:
            "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3liZXIlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        icon: Zap,
        title: "Real-time Processing",
        description: "Lightning-fast computations for immediate results",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHByb2Nlc3Npbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        icon: Globe,
        title: "Global Scale",
        description: "Seamless deployment across multiple regions",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2xvYmFsJTIwbmV0d29ya3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        icon: BarChart,
        title: "Deep Analytics",
        description: "Comprehensive insights to drive informed decisions",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        icon: Cloud,
        title: "Cloud Integration",
        description: "Effortless integration with major cloud platforms",
        image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
        icon: Cpu,
        title: "Edge Computing",
        description: "Distributed processing for reduced latency",
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWRnZSUyMGNvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        icon: Lock,
        title: "Data Privacy",
        description: "Stringent measures to ensure data confidentiality",
        image:
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YSUyMHByaXZhY3l8ZW58MHx8MHx8fDA%3D",
    },
]

export function Features() {
    return (
        <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
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

                            <img
                                src={feature.image || "/placeholder.svg"}
                                alt={feature.title}
                                className="w-full h-40 object-cover rounded-lg mb-4"
                            />
                            <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
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

