"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-black to-purple-900/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Have questions? We're here to help you get started with your AI journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-cyan-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
                                <p className="text-gray-400">Our friendly team is here to help.</p>
                                <a href="mailto:hello@agentia.ai" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                                    hello@agentia.ai
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MessageSquare className="w-6 h-6 text-cyan-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">Live Chat</h3>
                                <p className="text-gray-400">Available 24/7 for enterprise customers.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-cyan-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">Phone</h3>
                                <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+1234567890" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-xl p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white">First Name</label>
                                    <Input className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-white">Last Name</label>
                                    <Input className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Email</label>
                                <Input type="email" className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2 text-white">Message</label>
                                <Textarea className="bg-black/50 border-cyan-500/50 focus:border-cyan-500 text-white min-h-[120px]" />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

