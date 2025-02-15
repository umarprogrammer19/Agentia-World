"use client"

import { motion } from "framer-motion"

const showcaseItems = [
    {
        title: "AI-Powered Customer Service",
        description: "Revolutionizing customer support with intelligent chatbots",
        image:
            "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww",
    },
    {
        title: "Predictive Maintenance",
        description: "Optimizing industrial operations with AI-driven predictions",
        image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJlZGljdGl2ZSUyMG1haW50ZW5hbmNlfGVufDB8fDB8fHww",
    },
    {
        title: "AI in Healthcare",
        description: "Enhancing medical diagnoses with advanced AI algorithms",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjBpbiUyMGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
    },
]

export function Showcase() {
    return (
        <section id="showcase" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Showcase
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">See Agentia in action</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative rounded-xl overflow-hidden group"
                        >
                            <img
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                                <p className="text-gray-300">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

