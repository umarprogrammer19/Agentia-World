"use client";

import { useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";

export function ParticlesBackground() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadSlim(engine);
    }, []);
    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesInit}
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                particles: {
                    number: { value: 300, density: { enable: true, width: 800, height: 800 } },
                    color: { value: "#ffffff" },
                    shape: { type: "circle" },
                    opacity: {
                        value: 0.6,
                        animation: { enable: true, speed: 0.2 }
                    },
                    size: {
                        value: { min: 1, max: 3 },
                        animation: { enable: true }
                    },
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
