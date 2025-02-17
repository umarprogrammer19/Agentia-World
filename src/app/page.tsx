"use client";

import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { LineAnimations } from "@/components/line-animation";
import { Navigation } from "@/components/navigation";
import { ParticlesBackground } from "@/components/particles-background";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { Showcase } from "@/components/showcase";
import { Testimonials } from "@/components/testimonials";
import { ThreeBackground } from "@/components/three-background";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";


export default function Page() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const [isClient, setIsClient] = useState(false); // Avoid SSR mismatches

    // Reduce animation intensity for low-end devices
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.7, 0.5]);

    useEffect(() => {
        setIsClient(true);

        const lenis = new Lenis({
            duration: 1,
            easing: (t) => 1 - Math.pow(1 - t, 3), // ✅ Smoother easing function
            syncTouch: true,
            touchMultiplier: 1.2, // ✅ Lower for better mobile experience
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <ParallaxProvider>
            <div ref={containerRef} className="relative min-h-screen bg-black text-white">
                {isClient && (
                    <motion.div style={{ y: backgroundY, opacity }} className="fixed inset-0 w-full h-full">
                        <ParticlesBackground />
                        <ThreeBackground />
                    </motion.div>
                )}

                <LineAnimations />

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
    );
}
