"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const SkillsSection = () => {
    return (
        <Section id="skills" className="relative">
            {/* Background decorative glowing elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10" />
            
            <SectionHeading>Technical Arsenal</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8">
                {skills.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-8 h-full bg-white/[0.02] border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between">
                            {/* Radial Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="flex flex-col h-full relative z-10">
                                {/* Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20 text-primary w-fit group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-500 shadow-[0_0_15px_rgba(139,92,246,0.15)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                                        <category.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-bold text-lg md:text-xl text-white group-hover:text-primary transition-colors duration-300">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-foreground/60 leading-relaxed font-light mb-6">
                                    {category.description}
                                </p>
                                
                                {/* Core Competencies */}
                                <div className="space-y-3 mb-8 flex-grow">
                                    {category.items.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-xs text-foreground/80 font-light">
                                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                                    {category.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[9px] font-bold uppercase tracking-wider text-foreground/50 group-hover:text-foreground/80 group-hover:border-white/20 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
