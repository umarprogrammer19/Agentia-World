"use client"

import { motion } from "framer-motion"

const services = [
    {
        title: "AI Consulting",
        description: "Expert guidance on integrating AI into your business strategy",
        image:
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
    },
    {
        title: "Custom AI Development",
        description: "Tailored AI solutions designed for your specific needs",
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    },
    {
        title: "AI-Powered Analytics",
        description: "Unlock insights from your data with advanced AI algorithms",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5dGljc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        title: "AI Model Training",
        description: "Develop and refine AI models for improved performance",
        image:
            "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjB0cmFpbmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    },
]

function Card({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <div className="relative overflow-hidden rounded-xl group">
            <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    )
}

export function Services() {
    return (
        <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Our Services
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Empower your business with our cutting-edge AI solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card {...service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

