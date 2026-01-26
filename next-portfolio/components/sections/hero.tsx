"use client";

import React from "react";
import SyntheticHero from "@/components/ui/synthetic-hero";
import { siteConfig } from "@/lib/data";

export const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen">
            <SyntheticHero
                title="Sreeram M R"
                description={siteConfig.description}
                badgeText="AI / ML Innovator"
                badgeLabel="Role"
                ctaButtons={[
                    { text: "Featured Projects", href: "#projects", primary: true },
                    { text: "Contact Me", href: "#contact", primary: false }
                ]}
                microDetails={[
                    "Deep Learning",
                    "Automated Security",
                    "Data Science"
                ]}
            />
        </section>
    );
};
