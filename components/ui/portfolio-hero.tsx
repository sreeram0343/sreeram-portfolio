"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from "lucide-react";

interface PortfolioHeroProps {
    logoText?: string;
    navLinks?: { label: string; href: string }[];
    tagline?: string;
    description?: string;
    profileImage?: string;
    socialLinks?: { icon: React.ComponentType<any>; href: string }[];
}

export const PortfolioHero = ({
    logoText = "SREERAM",
    navLinks = [
        { label: "About", href: "#about" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
    ],
    tagline = "AI Engineering & Data Infrastructure",
    description = "Building autonomous systems with multi-agent workflows, scalable lakehouse pipelines, and automated MLOps infrastructure.",
    profileImage = "/sreeram-profile.png",
    socialLinks = [
        { icon: Github, href: "https://github.com/sreeram0343" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sreeram4/" },
        { icon: Mail, href: "mailto:sreeram4@zohomail.in" }
    ]
}: PortfolioHeroProps) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Sync theme with document class list
    useEffect(() => {
        const storedTheme = localStorage.getItem("portfolio-theme");
        if (storedTheme === "dark" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("portfolio-theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("portfolio-theme", "light");
        }
    };

    // Animation variants
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.85, rotate: -2, y: 30 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotate: 0,
            y: 0, 
            transition: { type: "spring" as const, stiffness: 90, damping: 18, delay: 0.1 } 
        }
    };

    const revealVariants = {
        hidden: { y: "110%" },
        visible: {
            y: 0,
            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col justify-between bg-background text-foreground transition-colors duration-500 overflow-hidden font-sans">
            {/* Ambient Background Lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            {/* Header Navigation */}
            <motion.header 
                variants={headerVariants}
                initial="hidden"
                animate="visible"
                className="z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between"
            >
                <a href="#" className="font-mono text-lg font-bold tracking-[0.25em] text-foreground uppercase hover:text-accent transition-colors">
                    {logoText}
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground uppercase transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full border border-border bg-card/20 hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                </div>

                {/* Mobile Icons */}
                <div className="flex md:hidden items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full border border-border bg-card/20"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                    </button>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 rounded-full border border-border bg-card/20 text-foreground"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-40 px-6 py-8 md:hidden flex flex-col gap-6 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-mono text-sm tracking-widest text-foreground hover:text-accent uppercase transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <motion.main 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-grow flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 py-12"
            >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center justify-center w-full">
                    
                    {/* Name & Tagline Text */}
                    <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                        <div className="font-mono text-xs text-accent tracking-[0.35em] uppercase mb-4 overflow-hidden">
                            <motion.div variants={revealVariants} className="inline-block">
                                {tagline}
                            </motion.div>
                        </div>

                        {/* Title Name Reveal with Clip-path/Mask effect */}
                        <h1 className="font-serif font-light text-[clamp(2rem,7.5vw,9.5rem)] leading-[0.9] tracking-tight text-foreground uppercase relative select-none mb-8">
                            <div className="overflow-hidden py-1 block">
                                <motion.span 
                                    variants={revealVariants}
                                    className="block"
                                >
                                    SREERAM
                                </motion.span>
                            </div>
                            <div className="overflow-hidden py-1 block">
                                <motion.span 
                                    variants={revealVariants}
                                    className="block text-accent font-semibold"
                                >
                                    M R
                                </motion.span>
                            </div>
                        </h1>

                        {/* Tagline Description */}
                        <div className="overflow-hidden max-w-xl mx-auto lg:mx-0">
                            <motion.p 
                                variants={fadeUpVariants}
                                className="font-sans font-light text-muted-foreground text-base md:text-lg leading-[1.8] mb-8"
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* Social Buttons */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="flex justify-center lg:justify-start gap-4"
                        >
                            {socialLinks.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full border border-border hover:border-accent hover:text-accent bg-card/10 transition-all duration-300 hover:scale-110"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Profile Image container */}
                    <div className="flex justify-center items-center order-1 lg:order-2">
                        <motion.div 
                            variants={imageVariants}
                            className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-border shadow-2xl p-1 bg-gradient-to-tr from-accent/20 to-primary/20"
                        >
                            <img
                                src={profileImage}
                                alt="Sreeram Murali Profile"
                                className="w-full h-full object-cover rounded-full filter grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.main>

            {/* Footer / Location bar */}
            <motion.footer 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground border-t border-border/10"
            >
                <div>Thiruvananthapuram, Kerala, India</div>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Work
                </div>
            </motion.footer>
        </div>
    );
};

export default PortfolioHero;
