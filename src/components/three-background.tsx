"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export function ThreeBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        // Scene setup
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        // Create particles
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCount = 5000
        const posArray = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3))

        // Create material
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.005,
            color: "#00ffff",
            blending: THREE.AdditiveBlending,
        })

        // Create mesh
        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particlesMesh)

        // Camera position
        camera.position.z = 2

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.enableZoom = false
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.5

        // Animation
        const animate = () => {
            requestAnimationFrame(animate)
            particlesMesh.rotation.y += 0.001
            controls.update()
            renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            containerRef.current?.removeChild(renderer.domElement)
        }
    }, [])

    return <div ref={containerRef} className="fixed inset-0 -z-10" />
}

