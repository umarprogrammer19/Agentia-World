"use client";

import { Button } from "@/components/ui/button";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useScroll, useTransform } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useMemo } from "react";
import { TypeAnimation } from "react-type-animation";
import * as THREE from "three";

// ✅ Optimize Model Loading (Preload)
function Model({ url }: { url: string }) {
    const { scene } = useGLTF(url);
    const scale = useMemo(() => (window.innerWidth < 768 ? [0.9, 0.9, 0.9] : [1.1, 1.1, 1.1]), []);
    return <primitive object={scene} scale={scale} />;
}

// ✅ Reduce Rotation Speed & Optimize Floating Effect
function FloatingModel() {
    const modelRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (modelRef.current) modelRef.current.rotation.y += 0.005; // ✅ Reduced for smoother animation
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
            <group ref={modelRef}>
                <Model url="/brain.glb" />
            </group>
        </Float>
    );
}

function AnimatedStars() {
    const starsRef = useRef<THREE.Points>(null);
    const starsCount = window.innerWidth < 768 ? 700 : 3500; 

    useEffect(() => {
        if (!starsRef.current) return;

        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < starsCount; i++) {
            vertices.push((Math.random() - 0.5) * 1500, (Math.random() - 0.5) * 1500, (Math.random() - 0.5) * 1500);
        }

        geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
        starsRef.current.geometry = geometry;
        starsRef.current.material = new THREE.PointsMaterial({ size: 1.5, color: 0xffffff, opacity: 0.8 }); 
    }, []);

    useFrame(() => {
        if (!starsRef.current) return;
        starsRef.current.rotation.x += 0.00005; 
        starsRef.current.rotation.y += 0.00005;
    });

    return <points ref={starsRef} />;
}

// ✅ Optimized Hero Section
export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); 
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    useGSAP(() => {
        gsap.fromTo(
            ".hero-title",
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
        );
        gsap.fromTo(".hero-subtitle", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.5 });
        gsap.fromTo(".hero-button", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.8 });
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            <motion.div style={{ y, opacity }} className="text-center z-10">
                <h1 className="hero-title text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    The Future of AI
                </h1>
                <h1 className="hero-title text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                    Is Here
                </h1>
                <div className="hero-subtitle max-w-2xl mx-auto text-xl text-gray-300 mb-12 h-20">
                    <TypeAnimation
                        sequence={[
                            "Experience the next generation of artificial intelligence",
                            1500,
                            "Powering innovations that shape tomorrow's world",
                            1500,
                            "Transforming industries with cutting-edge AI solutions",
                            1500,
                        ]}
                        wrapper="p"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.div className="hero-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg">
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </motion.div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas
                    camera={{ position: [0, 0, 5], fov: 75 }}
                    style={{ background: "black" }}
                    gl={{ powerPreference: "high-performance", antialias: true }}
                >
                    <ambientLight intensity={0.4} />
                    <pointLight position={[5, 5, 5]} />
                    <AnimatedStars />
                    <FloatingModel />
                    <Environment preset="dawn" /> 
                </Canvas>
            </div>
        </section>
    );
}
