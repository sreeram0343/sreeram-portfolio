"use client";

import React from "react";
import SyntheticHero from "@/components/ui/synthetic-hero";
import { siteConfig } from "@/lib/data";

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen">
            <SyntheticHero
                title="Building Intelligent Systems with AI, Automation & Scalable Software"
                description="Computer Science student focused on AI/ML, intelligent applications, automation systems, and real-world software engineering."
                badgeText="Sreeram M R"
                badgeLabel="Engineer"
                ctaButtons={[
                    { text: "View Projects", href: "#projects", primary: true },
                    { text: "Download Resume", href: siteConfig.resumeUrl, primary: false, download: true },
                    { text: "Contact Me", href: "#contact", primary: false }
                ]}
                microDetails={[
                    "AI/ML Engineer",
                    "Software Developer",
                    "Intelligent Systems Builder"
                ]}
            />
        </section>
    );
};
