"use client"

import { useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Services } from "@/components/services"
import { Showcase } from "@/components/showcase"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParallaxProvider } from "react-scroll-parallax"
import Lenis from "@studio-freight/lenis"
import { Pricing } from "@/components/pricing"
import { ParticlesBackground } from "@/components/particles-background"

export default function Page() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      syncTouch: true,
      touchMultiplier: 1.5,
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
      <div
        ref={scrollRef}
        className="relative bg-gradient-to-b from-black via-purple-900/20 to-black text-white overflow-hidden"
      >
        <ParticlesBackground />
        <Navigation />
        <main>
          <Hero />
          <Features />
          <Services />
          <Showcase />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

