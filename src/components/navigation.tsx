"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor } from "lucide-react"

export function Navigation() {
    const menuItems = ["Features", "Technology", "Agents", "Pricing", "Contact"]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Monitor className="w-8 h-8 text-purple-500" />
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                        Agentia World
                    </span>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    {menuItems.map((item) => (
                        <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Link
                                href={`#${item.toLowerCase()}`}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                        Launch Console
                    </Button>
                </motion.div>
            </div>
        </motion.header>
    )
}

