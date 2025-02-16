"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Lenis from "@studio-freight/lenis"
import { ParallaxProvider } from "react-scroll-parallax"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Showcase } from "@/components/showcase"
import { Pricing } from "@/components/pricing"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { NeuralBackground } from "@/components/neural-background"
import { InterconnectedParticles } from "@/components/interconnected-particles"
import { LineAnimations } from "@/components/line-animation"
import { GlitchEffect } from "@/components/glitch-effect"

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <ParallaxProvider>
      <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
        <motion.div style={{ y: backgroundY, opacity }} className="fixed inset-0 w-full h-full">
          <NeuralBackground />
        </motion.div>

        <InterconnectedParticles />
        <LineAnimations />
        <GlitchEffect />

        <div className="relative z-10">
          <Navigation />
          <main>
            <Hero />
            <Features />
            <Services />
            <Showcase />
            <Pricing />
            <FAQ />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ParallaxProvider>
  )
}

