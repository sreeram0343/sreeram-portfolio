"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface PortfolioHeroProps {
    logoText?: string;
    navLinks?: { label: string; href: string }[];
    tagline?: string;
    description?: string;
    profileImage?: string;
    socialLinks?: { icon: React.ComponentType<any>; href: string }[];
}

export const PortfolioHero = ({
    logoText = "4",
    navLinks = [
        { label: "About", href: "#about" },
        { label: "Education", href: "#education" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
    ],
    tagline = "AI Engineering & Data Infrastructure",
    description = "Building autonomous systems with multi-agent workflows, scalable lakehouse pipelines, and automated MLOps infrastructure.",
    profileImage = "/sreeram-profile.jpg",
    socialLinks = [
        { icon: Github, href: "https://github.com/sreeram0343" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/sreeram4/" },
        { icon: Mail, href: "mailto:sreeram4@zohomail.in" }
    ]
}: PortfolioHeroProps) => {
    const [theme, setTheme] = useState<"light" | "dark">("dark");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Track scroll to apply floating styling on navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sync theme with document class list
    useEffect(() => {
        const storedTheme = localStorage.getItem("portfolio-theme");
        if (storedTheme === "light") {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        } else {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("portfolio-theme", "dark");
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
                staggerChildren: 0.1
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 40 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0, 
            transition: { type: "spring" as const, stiffness: 80, damping: 16, delay: 0.15 } 
        }
    };

    const revealVariants = {
        hidden: { y: "110%", opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

    return (
        <div className="relative min-h-screen w-full flex flex-col bg-background text-foreground transition-colors duration-500 overflow-hidden font-sans pt-24 lg:pt-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/5 blur-[120px] pointer-events-none -z-10" />

            {/* Fixed Floating Header */}
            <header 
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-6 md:px-16 flex items-center justify-between",
                    scrolled 
                        ? "bg-background/80 backdrop-blur-md border-b border-border py-4 shadow-sm" 
                        : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                    <a href="#" className="font-mono text-lg font-bold tracking-[0.25em] text-foreground uppercase hover:text-accent transition-colors">
                        {logoText}
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground hover:text-foreground uppercase transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full border border-border bg-card/20 hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {theme === "light" ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                        </button>
                    </div>

                    {/* Mobile Menu Icons */}
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
                </div>
            </header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-40 px-6 py-8 md:hidden flex flex-col gap-6 shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="font-mono text-xs tracking-widest text-foreground hover:text-accent uppercase transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content Asymmetric Grid */}
            <motion.main 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-grow flex items-center justify-center px-6 md:px-16 max-w-7xl mx-auto w-full relative z-10 py-12 md:py-24"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center justify-between w-full">
                    
                    {/* Left Column (Content, spans 7 cols on desktop) */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
                        
                        {/* Status Badge */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-[10px] font-mono uppercase tracking-widest mb-6 w-fit mx-auto lg:mx-0"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_var(--accent)]" />
                            Available for Internships & AI/ML Collaborations
                        </motion.div>

                        {/* Name Heading Reveal */}
                        <h1 className="font-serif font-light text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-foreground uppercase relative select-none mb-6">
                            <div className="overflow-hidden py-1 block">
                                <motion.span variants={revealVariants} className="block">
                                    SREERAM
                                </motion.span>
                            </div>
                            <div className="overflow-hidden py-1 block">
                                <motion.span variants={revealVariants} className="block text-accent font-semibold">
                                    M R<span className="text-foreground font-light">.</span>
                                </motion.span>
                            </div>
                        </h1>

                        {/* Subtitle / Pillars */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-[0.25em] mb-8"
                        >
                            AI Engineering &bull; Data Infrastructure &bull; MLOps
                        </motion.div>

                        {/* Tagline Description */}
                        <div className="overflow-hidden max-w-xl mx-auto lg:mx-0">
                            <motion.p 
                                variants={fadeUpVariants}
                                className="font-sans font-light text-foreground/80 text-base md:text-lg leading-[1.8] mb-10"
                            >
                                {description}
                            </motion.p>
                        </div>

                        {/* CTAs & Social Links */}
                        <motion.div 
                            variants={fadeUpVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                        >
                            {/* Buttons */}
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <a
                                    href="#projects"
                                    className="px-8 py-3.5 bg-primary text-primary-foreground text-[10px] font-mono tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-300 rounded-full shadow-[0_4px_12px_rgba(3,2,19,0.15)] hover:shadow-[0_4px_20px_rgba(139,92,246,0.35)] hover:scale-105"
                                >
                                    View Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="px-8 py-3.5 border border-border bg-card/25 text-foreground text-[10px] font-mono tracking-widest uppercase hover:border-accent hover:text-accent hover:bg-background transition-all duration-300 rounded-full hover:scale-105"
                                >
                                    Get In Touch
                                </a>
                            </div>

                            {/* Separator Line */}
                            <div className="hidden sm:block h-6 w-px bg-border" />

                            {/* Social Icons */}
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 rounded-full border border-border bg-card/10 text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300 hover:scale-110"
                                            aria-label="Social Link"
                                        >
                                            <Icon className="w-4 h-4" />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Visual Image Card, spans 5 cols on desktop) */}
                    <div className="col-span-12 lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
                        <motion.div 
                            variants={imageVariants}
                            className="relative group"
                        >
                            {/* Decorative Radial glow background behind image */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-accent to-primary rounded-[2.2rem] opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
                            
                            {/* Card Frame */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2rem] overflow-hidden border border-border p-1 bg-background/50 backdrop-blur-sm shadow-2xl flex items-center justify-center">
                                <img
                                    src={profileImage}
                                    alt="Sreeram M R"
                                    className="w-full h-full object-cover rounded-[1.8rem] filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                
                                {/* Photo overlay location badge */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full border border-border/40 bg-background/80 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-foreground/80 shadow-md">
                                    📍 Kerala, India
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.main>

            {/* Footer / Location bar */}
            <motion.footer 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="w-full max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-muted-foreground border-t border-border/10 mt-auto"
            >
                <div>Thiruvananthapuram, Kerala, India</div>
                <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Work
                </div>
            </motion.footer>
        </div>
    );
};

export default PortfolioHero;
