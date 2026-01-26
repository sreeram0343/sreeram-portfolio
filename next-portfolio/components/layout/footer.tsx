"use client";

import React from "react";
import { siteConfig } from "@/lib/data";

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 mt-20 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-sm text-foreground/60">
                    &copy; {new Date().getFullYear()} <span className="text-foreground font-bold">{siteConfig.name}</span>. All rights reserved.
                </div>

                <div className="flex items-center gap-6">
                    {siteConfig.socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 hover:text-primary transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};
