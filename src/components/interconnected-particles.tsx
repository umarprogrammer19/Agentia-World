"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function InterconnectedParticles() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        const geometry = new THREE.BufferGeometry()
        const particlesCount = 300
        const positions = new Float32Array(particlesCount * 3)
        const colors = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            colors[i] = Math.random()
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
        })

        const particles = new THREE.Points(geometry, material)
        scene.add(particles)

        camera.position.z = 5

        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.2,
        })

        const lines: THREE.Line[] = []

        function connectParticles() {
            const positions = particles.geometry.attributes.position.array
            for (let i = 0; i < positions.length; i += 3) {
                for (let j = i + 3; j < positions.length; j += 3) {
                    const distance = Math.sqrt(
                        Math.pow(positions[i] - positions[j], 2) +
                        Math.pow(positions[i + 1] - positions[j + 1], 2) +
                        Math.pow(positions[i + 2] - positions[j + 2], 2),
                    )
                    if (distance < 1) {
                        const geometry = new THREE.BufferGeometry().setFromPoints([
                            new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
                            new THREE.Vector3(positions[j], positions[j + 1], positions[j + 2]),
                        ])
                        const line = new THREE.Line(geometry, lineMaterial)
                        scene.add(line)
                        lines.push(line)
                    }
                }
            }
        }

        connectParticles()

        function animate() {
            requestAnimationFrame(animate)

            particles.rotation.x += 0.001
            particles.rotation.y += 0.001

            lines.forEach((line) => {
                line.rotation.x += 0.001
                line.rotation.y += 0.001
            })

            renderer.render(scene, camera)
        }

        animate()

        const handleResize = () => {
            if (!containerRef.current) return;
            const { clientWidth, clientHeight } = containerRef.current;
            camera.aspect = clientWidth / clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(clientWidth, clientHeight);
        };

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            containerRef.current?.removeChild(renderer.domElement)
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

