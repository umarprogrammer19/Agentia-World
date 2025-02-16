"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Float, Environment } from "@react-three/drei"
import { TypeAnimation } from "react-type-animation"
import { Button } from "@/components/ui/button"
import * as THREE from "three"

function BrainModel() {
    return (
        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
            <primitive
                object={
                    new THREE.Mesh(
                        new THREE.TorusKnotGeometry(1, 0.3, 100, 16),
                        new THREE.MeshStandardMaterial({
                            color: "#00ffff",
                            metalness: 0.7,
                            roughness: 0.2,
                            emissive: "#00ffff",
                            emissiveIntensity: 0.5,
                        }),
                    )
                }
            />
        </Float>
    )
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
            <motion.div style={{ y, opacity }} className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-block mb-6"
                >
                    <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Welcome to
                    </h1>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-xl opacity-20" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-8 text-white"
                >
                    Agentia World
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto mb-12 h-20 text-xl md:text-2xl text-cyan-300"
                >
                    <TypeAnimation
                        sequence={[
                            "Step into the future of digital experiences",
                            1000,
                            "Where innovation meets imagination",
                            1000,
                            "Powered by advanced artificial intelligence",
                            1000,
                        ]}
                        wrapper="p"
                        speed={50}
                        repeat={Number.POSITIVE_INFINITY}
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-lg px-8 py-6"
                    >
                        Explore Now
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8 py-6"
                    >
                        Learn More
                    </Button>
                </motion.div>
            </motion.div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <BrainModel />
                    <Environment preset="city" />
                </Canvas>
            </div>
        </section>
    )
}

