"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function NeuralBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        containerRef.current.appendChild(renderer.domElement)

        const nodesGeometry = new THREE.BufferGeometry()
        const nodeCount = 500
        const positions = new Float32Array(nodeCount * 3)
        const colors = new Float32Array(nodeCount * 3)

        for (let i = 0; i < nodeCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 10
            positions[i + 1] = (Math.random() - 0.5) * 10
            positions[i + 2] = (Math.random() - 0.5) * 10

            colors[i] = Math.random()
            colors[i + 1] = Math.random()
            colors[i + 2] = Math.random()
        }

        nodesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
        nodesGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

        const connectionsMaterial = new THREE.LineBasicMaterial({
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.5,
        })

        const connections = new THREE.Group()

        for (let i = 0; i < nodeCount; i++) {
            for (let j = i + 1; j < nodeCount; j++) {
                const distance = Math.sqrt(
                    Math.pow(positions[i * 3] - positions[j * 3], 2) +
                    Math.pow(positions[i * 3 + 1] - positions[j * 3 + 1], 2) +
                    Math.pow(positions[i * 3 + 2] - positions[j * 3 + 2], 2),
                )

                if (distance < 2) {
                    const geometry = new THREE.BufferGeometry()
                    const vertices = new Float32Array([
                        positions[i * 3],
                        positions[i * 3 + 1],
                        positions[i * 3 + 2],
                        positions[j * 3],
                        positions[j * 3 + 1],
                        positions[j * 3 + 2],
                    ])
                    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))

                    const line = new THREE.Line(geometry, connectionsMaterial)
                    connections.add(line)
                }
            }
        }

        scene.add(connections)

        const nodesMaterial = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
        })

        const nodes = new THREE.Points(nodesGeometry, nodesMaterial)
        scene.add(nodes)

        camera.position.z = 5

        function animate() {
            requestAnimationFrame(animate)

            nodes.rotation.x += 0.001
            nodes.rotation.y += 0.001
            connections.rotation.x += 0.001
            connections.rotation.y += 0.001

            renderer.render(scene, camera)
        }

        animate()

        function handleResize() {
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

