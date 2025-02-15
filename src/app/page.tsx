"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
// import { Services } from "@/components/services"
// import { Testimonials } from "@/components/testimonials"
// import { LocomotiveScrollProvider } from "@/components/locomotive-scroll"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ThreeBackground } from "@/components/three-background"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    // <LocomotiveScrollProvider>
      <div className="relative min-h-screen bg-black text-white overflow-hidden">
        <ThreeBackground />
        <Navigation />
        <main>
          <Hero />
          <Features />
          {/* <Services /> */}
          {/* <Testimonials /> */}
          <Pricing />
          <Contact />
        </main>
        <Footer />
      </div>
    // </LocomotiveScrollProvider>
  )
}

