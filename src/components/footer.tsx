"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100082268683063" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/itx_umar_official01/" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/umar-farooq-42a8702b5/" },
    { icon: Github, href: "https://github.com/umarprogrammer19" },
]

const techStack = ["React", "Next.js", "TypeScript", "TensorFlow", "PyTorch", "Quantum Computing", "CUDA", "OpenAI API"]

const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 5000 },
    { name: "Apr", value: 4500 },
    { name: "May", value: 6000 },
    { name: "Jun", value: 5500 },
]

export function Footer() {
    return (
        <footer className="relative py-20 overflow-hidden bg-black">
            <div className="absolute inset-0 md:bg-gradient-to-t md:from-purple-900/20 md:to-black" />

            <div className="md:block hidden absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#3B0764,transparent)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center mb-12"
                >
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
                        Agentia World
                    </h3>
                    <p className="text-gray-400 mb-8 text-lg">
                        Empowering the future through artificial intelligence and innovation.
                    </p>
                    <div className="flex justify-center space-x-6 mb-8">
                        {socialLinks.map(({ icon: Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                whileHover={{ y: -5, color: "#00ffff" }}
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <Icon size={28} />
                            </motion.a>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {["Company", "Resources", "Legal", "Support"].map((category, index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h4 className="text-lg font-semibold mb-4 text-cyan-400">{category}</h4>
                                <ul className="space-y-2">
                                    {["About", "Careers", "Contact", "Blog"].map((item) => (
                                        <motion.li
                                            key={item}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Link href="#">{item}</Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="border-t border-white/10 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {new Date().getFullYear()} Hafiz Muhammad Umar Farooq. All rights reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {techStack.map((tech, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 255, 255, 0.1)" }}
                                    className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full text-sm text-cyan-300 border border-cyan-500/30"
                                >
                                    {tech}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-12"
                    >
                        <h4 className="text-lg font-semibold mb-4 text-cyan-400 text-center">AI Performance Metrics</h4>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name" stroke="#4fd1c5" />
                                    <YAxis stroke="#4fd1c5" />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                                            border: "1px solid #4fd1c5",
                                        }}
                                        labelStyle={{ color: "#4fd1c5" }}
                                    />
                                    <Line type="monotone" dataKey="value" stroke="#4fd1c5" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-cyan-500 to-transparent" />
        </footer>
    )
}

