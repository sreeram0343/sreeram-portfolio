"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/data";
import { motion } from "framer-motion";
import { Trophy, Star, Zap } from "lucide-react";

export const AchievementsSection = () => {
    return (
        <Section id="achievements">
            <SectionHeading>Key Achievements</SectionHeading>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {achievements.map((achievement, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Card className="p-10 group bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 border-primary/10 hover:border-primary/40 transition-all duration-500 relative overflow-hidden">
                            {/* Spotlight effect */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(139,92,246,0.1),transparent_40%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="flex flex-col gap-6 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 rounded-2xl bg-primary/20 border border-primary/30 text-primary shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <achievement.icon className="w-8 h-8" />
                                    </div>
                                    <div className="h-px flex-grow bg-gradient-to-r from-primary/30 to-transparent" />
                                </div>
                                
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed font-light text-lg">
                                        {achievement.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors duration-300">
                                    <Star className="w-3 h-3 fill-current" />
                                    <span>Verified Accomplishment</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
