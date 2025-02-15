"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { Parallax } from "react-scroll-parallax";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
    {
        title: "AI Consulting",
        description: "Expert guidance on integrating AI into your business strategy",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        title: "Custom AI Development",
        description: "Tailored AI solutions designed for your specific needs",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        title: "AI-Powered Analytics",
        description: "Unlock insights from your data with advanced AI algorithms",
        image: "/placeholder.svg?height=400&width=600",
    },
    {
        title: "AI Model Training",
        description: "Develop and refine AI models for improved performance",
        image: "/placeholder.svg?height=400&width=600",
    },
];

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Card({ title, description, image }: { title: string; description: string; image: string }) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    return (
        <animated.div
            className="card relative overflow-hidden rounded-xl"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{
                transform: props.xys.to(trans),
            }}
        >
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300">{description}</p>
            </div>
        </animated.div>
    );
}

export function Services() {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // ✅ Explicitly cast to HTMLElement[]
        const cards = gsap.utils.toArray(".card") as HTMLElement[];

        cards.forEach((card) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom-=100",
                    end: "bottom center",
                    scrub: true,
                },
                opacity: 0,
                y: 100,
                rotation: 5,
                duration: 1,
            });
        });
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Our Services
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Empower your business with our cutting-edge AI solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Parallax key={index} translateY={[-20, 20]}>
                            <Card {...service} />
                        </Parallax>
                    ))}
                </div>
            </div>
        </section>
    );
}
