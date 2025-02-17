"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 300, density: { enable: true, area: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.6, random: true, animation: { enable: true, speed: 0.2 } },
                    size: { value: 2, random: true },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: "out",
                    },
                },
                interactivity: {
                    events: { onHover: { enable: true, mode: "repulse" } },
                    modes: { repulse: { distance: 100 } },
                },
                background: { color: "black" },
            }}
        />
    );
}
