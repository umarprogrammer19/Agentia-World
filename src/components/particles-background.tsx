"use client";

import type { Container } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { useCallback } from "react";

export function ParticlesBackground() {
    const particlesLoaded = useCallback(async (container?: Container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            className="absolute inset-0"
            id="tsparticles"
            particlesLoaded={particlesLoaded} 
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: {
                            enable: true,
                        },
                    },
                    modes: {
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#a855f7",
                    },
                    links: {
                        color: "#a855f7",
                        distance: 150,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
}
