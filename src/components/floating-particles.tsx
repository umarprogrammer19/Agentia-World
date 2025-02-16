"use client"

import { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export function FloatingParticles() {
    const particlesInit = useCallback(async (engine: any) => {
        await loadFull(engine)
    }, [])

    return (
        <Particles
            className="fixed inset-0 -z-5 pointer-events-none"
            init={particlesInit}
            options={{
                fullScreen: false,
                fpsLimit: 120,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: {
                        value: ["#00ffff", "#ff00ff", "#00ff00"],
                    },
                    shape: {
                        type: "circle",
                    },
                    opacity: {
                        value: 0.5,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 1,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    size: {
                        value: 3,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 2,
                            minimumValue: 0.1,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#00ffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: false,
                        straight: false,
                        outModes: {
                            default: "bounce",
                        },
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detectsOn: "window",
                    events: {
                        onHover: {
                            enable: true,
                            mode: ["grab", "bubble"],
                        },
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: {
                                opacity: 0.8,
                            },
                        },
                        bubble: {
                            distance: 200,
                            size: 6,
                            duration: 0.3,
                            opacity: 0.8,
                        },
                        push: {
                            quantity: 4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

