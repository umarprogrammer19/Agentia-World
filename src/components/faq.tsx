"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
    {
        question: "What is Agentia World's core technology?",
        answer:
            "Agentia World leverages cutting-edge artificial intelligence, quantum computing, and neural network architectures to deliver unprecedented solutions across various industries.",
    },
    {
        question: "How does your AI differ from traditional machine learning?",
        answer:
            "Our AI utilizes advanced neural networks and quantum-inspired algorithms, allowing for more complex problem-solving, faster learning, and adaptability to new scenarios without extensive retraining.",
    },
    {
        question: "Can Agentia World's solutions be customized for specific industries?",
        answer:
            "Absolutely. We specialize in tailoring our AI and quantum computing solutions to meet the unique challenges and requirements of diverse industries, from healthcare to finance and beyond.",
    },
    {
        question: "What security measures do you implement to protect sensitive data?",
        answer:
            "We employ state-of-the-art encryption, including quantum-resistant algorithms, zero-trust architecture, and continuous monitoring to ensure the highest level of data protection and privacy.",
    },
    {
        question: "How do you ensure ethical AI development and deployment?",
        answer:
            "Ethical considerations are at the core of our development process. We adhere to strict guidelines, conduct regular audits, and collaborate with ethics boards to ensure responsible AI practices.",
    },
]

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
        >
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left p-4 rounded-lg bg-gradient-to-r from-cyan-900/30 to-purple-900/30 hover:from-cyan-900/50 hover:to-purple-900/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <span className="text-lg font-semibold text-cyan-300">{faq.question}</span>
                <ChevronDown
                    className={cn("w-5 h-5 text-cyan-300 transition-transform duration-300", isOpen && "transform rotate-180")}
                />
            </motion.button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="p-4 text-gray-300">{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export function FAQ() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-r from-black via-purple-900/20 to-black md:bg-transparent">
            {/* Animated background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3B0764,transparent)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
            </div>

            {/* Particle effects */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-500 rounded-full"
                        animate={{
                            x: ["0%", "100%", "0%"],
                            y: ["0%", "100%", "0%"],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our most common inquiries about Agentia World&apos;s revolutionary AI technology
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>

            {/* Line animations */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d="M0,100 Q50,0 100,100 T200,100"
                    fill="none"
                    stroke="url(#line-gradient)"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffff" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#ff00ff" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#00ffff" stopOpacity="0.2" />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    )
}

