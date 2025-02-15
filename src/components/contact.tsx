"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-black/50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have questions? We're here to help you get started with your AI journey
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <Mail className="w-6 h-6 text-purple-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                                <p className="text-gray-400">Our friendly team is here to help.</p>
                                <a href="mailto:hello@agentia.ai" className="text-purple-500 hover:text-purple-400">
                                    hello@agentia.ai
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MessageSquare className="w-6 h-6 text-purple-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                                <p className="text-gray-400">Available 24/7 for enterprise customers.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 text-purple-500 mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <p className="text-gray-400">Mon-Fri from 8am to 5pm.</p>
                                <a href="tel:+1234567890" className="text-purple-500 hover:text-purple-400">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-xl p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">First Name</label>
                                    <Input className="bg-black/50" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Last Name</label>
                                    <Input className="bg-black/50" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <Input type="email" className="bg-black/50" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">Message</label>
                                <Textarea className="bg-black/50 min-h-[120px]" />
                            </div>
                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

