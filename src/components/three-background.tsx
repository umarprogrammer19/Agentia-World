"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function ThreeBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        containerRef.current.appendChild(renderer.domElement);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 700;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 5;
        }

        particlesGeometry.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: "#00ffff",
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthTest: false,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        camera.position.z = 2;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enableZoom = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.2;

        let animationFrameId: number;
        let isActive = true;

        const animate = () => {
            if (!isActive) return;
            particlesMesh.rotation.y += 0.0006;
            controls.update();
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        const handleVisibilityChange = () => {
            isActive = !document.hidden;
            if (isActive) animate();
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            cancelAnimationFrame(animationFrameId);
            controls.dispose();
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            renderer.dispose();
            containerRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} className="fixed inset-0 -z-10" />;
}
