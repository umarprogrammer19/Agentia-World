"use client"

import { motion } from "framer-motion"
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" },
    ]

    return (
        <footer className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Agentia World
                        </h3>
                        <p className="text-gray-400">Empowering the future through artificial intelligence and innovation.</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-cyan-400">Company</h4>
                        <ul className="space-y-2">
                            {["About", "Careers", "Blog", "Press"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Link href="#">{item}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-cyan-400">Resources</h4>
                        <ul className="space-y-2">
                            {["Documentation", "API", "Support", "Community"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Link href="#">{item}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-cyan-400">Legal</h4>
                        <ul className="space-y-2">
                            {["Privacy", "Terms", "Security", "Cookies"].map((item) => (
                                <motion.li
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    className="text-gray-400 hover:text-white transition-colors"
                                >
                                    <Link href="#">{item}</Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Agentia World. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        {socialLinks.map(({ icon: Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                whileHover={{ y: -3 }}
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-t from-cyan-500 to-transparent" />
        </footer>
    )
}

