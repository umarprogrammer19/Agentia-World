"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Showcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ✅ Explicitly cast to HTMLElement[]
        const images = gsap.utils.toArray(".showcase-image") as HTMLElement[];

        images.forEach((image, index) => {
            gsap.from(image, {
                scrollTrigger: {
                    trigger: image,
                    start: "top bottom-=100",
                    end: "bottom center",
                    scrub: true,
                },
                opacity: 0,
                y: 50,
                duration: 1,
            });
        });
    }, []);

    return (
        <section id="showcase" className="py-24 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Showcase
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">See Agentia in action</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div className="showcase-image relative rounded-xl overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Showcase 1" className="w-full h-64 object-cover" />
                    </motion.div>
                    <motion.div className="showcase-image relative rounded-xl overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Showcase 2" className="w-full h-64 object-cover" />
                    </motion.div>
                    <motion.div className="showcase-image relative rounded-xl overflow-hidden">
                        <img src="/placeholder.svg?height=400&width=600" alt="Showcase 3" className="w-full h-64 object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
