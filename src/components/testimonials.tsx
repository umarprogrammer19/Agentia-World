"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CTO at TechCorp",
        image: "/placeholder.svg?height=100&width=100",
        quote:
            "Agentia's AI solutions have transformed our business operations. The results have been nothing short of extraordinary.",
    },
    {
        name: "Michael Chen",
        role: "Lead Developer",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The integration was seamless, and the AI capabilities exceeded our expectations. Highly recommended!",
    },
    {
        name: "Emily Rodriguez",
        role: "AI Research Lead",
        image: "/placeholder.svg?height=100&width=100",
        quote: "As a researcher in AI, I'm impressed by the sophistication and reliability of Agentia's neural networks.",
    },
]

export function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cards = document.querySelectorAll(".testimonial-card")

        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                duration: 0.8,
                delay: index * 0.2,
            })
        })
    }, [])

    return (
        <section className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Hear from industry leaders who have transformed their businesses with our AI solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card relative p-8 rounded-xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-white/10"
                            whileHover={{ y: -5 }}
                        >
                            <Quote className="w-12 h-12 text-cyan-400 mb-6 opacity-50" />

                            <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>

                            <div className="flex items-center gap-4">
                                <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.name}
                                    width={50}
                                    height={50}
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-px left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        </section>
    )
}

