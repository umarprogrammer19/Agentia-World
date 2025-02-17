"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuItems = ["Home", "Services", "Features", "Pricing", "Contact"];

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 50);
            }, 100); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = useCallback(() => {
        setIsMobileMenuOpen((prev) => !prev);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}  

                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16"> 

                        <Link href="/" className="text-xl font-bold">
                            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                                Agentia
                            </span>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6">
                            {menuItems.map((item) => (
                                <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        <div className="hidden md:block">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                                    Launch App
                                </Button>
                            </motion.div>
                        </div>

                        <button className="md:hidden text-white" onClick={toggleMenu}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden flex items-center justify-center"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            {menuItems.map((item) => (
                                <motion.div key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-xl text-gray-300 hover:text-cyan-400 transition-colors"
                                        onClick={toggleMenu} 
                                    >
                                        {item}
                                    </Link>
                                </motion.div>
                            ))}
                            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                                Launch App
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
