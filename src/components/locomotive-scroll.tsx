"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/dist/locomotive-scroll.css"

interface LocomotiveScrollProviderProps {
    children: React.ReactNode
}

export function LocomotiveScrollProvider({ children }: LocomotiveScrollProviderProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) return

        const scroll = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 0.8,
            lerp: 0.1,
            tablet: {
                smooth: true,
                breakpoint: 768,
            },
            smartphone: {
                smooth: true,
            },
        })

        // Clean up
        return () => {
            scroll.destroy()
        }
    }, [])

    return (
        <div data-scroll-container ref={containerRef}>
            {children}
        </div>
    )
}

