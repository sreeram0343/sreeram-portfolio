"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";

export const SkillsSection = () => {
    return (
        <Section id="skills" className="bg-secondary/5">
            <SectionHeading>Technical Arsenal</SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((category, index) => (
                    <Card key={index} className="p-6 h-full" hoverEffect>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <category.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg">{category.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-foreground/70 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};
