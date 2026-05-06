"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

export const SkillsSection = () => {
    return (
        <Section id="skills" className="relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
            
            <SectionHeading>Technical Arsenal</SectionHeading>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {skills.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                        <Card className="p-8 h-full bg-white/[0.02] border-white/5 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden">
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 text-primary w-fit group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                                    <category.icon className="w-6 h-6" />
                                </div>
                                
                                <div>
                                    <h3 className="font-bold text-lg text-white mb-4 group-hover:text-primary transition-colors duration-300">{category.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.items.map((item) => (
                                            <span
                                                key={item}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground/50 group-hover:text-foreground/80 group-hover:border-white/20 transition-all duration-300"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
