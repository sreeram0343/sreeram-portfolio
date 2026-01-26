"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export const ExperienceSection = () => {
    return (
        <Section id="experience" className="relative">
            <SectionHeading>Experience & Education</SectionHeading>

            <div className="max-w-3xl mx-auto space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-1/2" />

                {education.map((edu, index) => (
                    <div key={index} className="relative z-10">
                        <Card className="md:w-[calc(50%-2rem)] ml-auto md:ml-0 md:mr-auto p-6 relative">
                            <div className="absolute top-6 -left-10 md:-right-10 md:left-auto w-4 h-4 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_var(--primary)]" />

                            <div className="flex items-center gap-2 text-primary text-sm font-bold mb-2">
                                <GraduationCap className="w-4 h-4" />
                                <span>Education</span>
                            </div>
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-foreground/70 mb-4">{edu.institution}</p>

                            <div className="flex items-center gap-2 text-sm text-secondary">
                                <Calendar className="w-4 h-4" />
                                {edu.year}
                            </div>
                            <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
                                {edu.description}
                            </p>
                        </Card>
                    </div>
                ))}

                {/* Placeholder for future experience */}
                <div className="relative z-10 md:text-right">
                    <Card className="md:w-[calc(50%-2rem)] ml-auto p-6 relative">
                        <div className="absolute top-6 -left-10 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-[0_0_10px_var(--secondary)]" />
                        <h3 className="text-xl font-bold text-foreground/50">Next Chapter...</h3>
                        <p className="text-sm text-foreground/40">Open to Internship Opportunities</p>
                    </Card>
                </div>
            </div>
        </Section>
    );
};
