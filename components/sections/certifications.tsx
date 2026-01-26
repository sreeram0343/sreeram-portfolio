"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { certifications } from "@/lib/data";

export const CertificationsSection = () => {
    return (
        <Section id="certifications">
            <SectionHeading>Certifications</SectionHeading>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <Card key={index} className="p-6 text-center group h-full flex flex-col items-center justify-center bg-white/5 border-white/10" hoverEffect>
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <cert.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                        <p className="text-sm text-foreground/60">{cert.issuer}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
