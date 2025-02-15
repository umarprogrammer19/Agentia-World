"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Contact } from "@/components/contact"
import { ParticlesBackground } from "@/components/particles-background"
import { Pricing } from "@/components/pricing"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </div>
  )
}

