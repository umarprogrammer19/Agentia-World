"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Float, Environment } from "@react-three/drei"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { TypeAnimation } from "react-type-animation"

function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url)
    return <primitive object={scene} />
}

function FloatingModel() {
    return (
        <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
            <Model url="/brain.glb" />
        </Float>
    )
}

function AnimatedStars() {
    const { camera } = useThree()
    const starsRef = useRef<THREE.Points>(null)

    useEffect(() => {
        if (!starsRef.current) return

        const geometry = new THREE.BufferGeometry()
        const vertices = []

        for (let i = 0; i < 5000; i++) {
            const x = (Math.random() - 0.5) * 2000
            const y = (Math.random() - 0.5) * 2000
            const z = (Math.random() - 0.5) * 2000
            vertices.push(x, y, z)
        }

        geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))

        const material = new THREE.PointsMaterial({
            size: 2,
            color: 0xffffff,
        })

        starsRef.current.geometry = geometry
        starsRef.current.material = material
    }, [])

    useFrame(() => {
        if (!starsRef.current) return
        starsRef.current.rotation.x += 0.0002
        starsRef.current.rotation.y += 0.0002
    })

    return <points ref={starsRef} />
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
            })
            gsap.from(".hero-subtitle", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
            })
            gsap.from(".hero-button", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                ease: "power3.out",
                stagger: 0.2,
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
        >
            <motion.div style={{ y, opacity }} className="container mx-auto px-4 text-center z-10">
                <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    The Future of AI
                </h1>
                <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Is Here
                </h1>
                <div className="hero-subtitle max-w-2xl mx-auto text-xl text-gray-300 mb-12 h-20">
                    <TypeAnimation
                        sequence={[
                            "Experience the next generation of artificial intelligence",
                            1000,
                            "Powering innovations that shape tomorrow's world",
                            1000,
                            "Transforming industries with cutting-edge AI solutions",
                            1000,
                        ]}
                        wrapper="p"
                        speed={50}
                        repeat={Number.POSITIVE_INFINITY}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.div className="hero-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg">
                            Get Started
                        </Button>
                    </motion.div>
                    <motion.div className="hero-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" className="px-8 py-4 border-blue-500 hover:bg-blue-500/10 text-lg">
                            Learn More
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <AnimatedStars />
                    <FloatingModel />
                    <Environment preset="city" />
                </Canvas>
            </div>
        </section>
    )
}

