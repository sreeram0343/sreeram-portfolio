"use client";

import React from "react";
import { siteConfig } from "@/lib/data";
import { Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 mt-20 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />
            
            <div className="container mx-auto px-6 flex flex-col items-center gap-8">
                <div className="flex items-center gap-6">
                    {siteConfig.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground/40 hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-foreground/40 font-light tracking-wide flex items-center gap-2">
                        Designed & Developed with <Heart className="w-3 h-3 text-primary animate-pulse fill-primary" /> by <span className="text-white font-medium">{siteConfig.name}</span>
                    </p>
                    <div className="text-[10px] text-foreground/20 font-black uppercase tracking-[0.3em]">
                        &copy; {new Date().getFullYear()} All Systems Operational
                    </div>
                </div>
                
                {/* Minimalist Logo/Initial */}
                <div className="text-3xl font-black text-white/5 select-none tracking-tighter">
                    SREERAM
                </div>
            </div>
        </footer>
    );
};
