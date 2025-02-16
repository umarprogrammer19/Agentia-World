"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief AI Researcher, TechCorp",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    quote:
      "Agentia World's quantum AI solutions have revolutionized our research capabilities. The results are beyond anything we've seen before.",
  },
  {
    name: "Michael Chen",
    role: "CTO, FutureTech Industries",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    quote:
      "The integration of Agentia's AI has transformed our entire operation. We've seen a 500% increase in efficiency and innovation.",
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Lead Quantum Researcher, Q-Labs",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    quote:
      "As a quantum computing expert, I'm astounded by the advancements Agentia World has made. They're years ahead of the competition.",
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className="relative group">
      <div className="absolute inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-20 group-hover:opacity-100 transition-all duration-500 blur" />

      <div className="relative p-8 bg-black rounded-xl border border-white/10">
        <Quote className="w-12 h-12 text-cyan-400 mb-6 opacity-50" />

        <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>

        <div className="flex items-center gap-4">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={50}
            height={50}
            className="rounded-full w-16 h-16"
          />
          <div>
            <h4 className="font-bold text-white">{testimonial.name}</h4>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Animated border */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke="url(#testimonial-gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: 100 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <defs>
            <linearGradient id="testimonial-gradient" x1="0" y1="0" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="0%" stopColor="#00ffff" />
              <stop offset="100%" stopColor="#bf00ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_50%,#3B0764,transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
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
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Hear from industry leaders who have experienced the power of Agentia World's AI solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

