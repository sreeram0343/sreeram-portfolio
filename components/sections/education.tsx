"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const EducationSection = () => {
    return (
        <Section id="education" className="relative">
            <SectionHeading>Education</SectionHeading>

            <div className="max-w-4xl mx-auto space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent md:-translate-x-1/2" />

                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_var(--primary)] md:-translate-x-1/2 z-20 group-hover:scale-125 transition-transform duration-300" />

                        {/* Content Card */}
                        <div className="w-full md:w-[calc(50%-2.5rem)] ml-12 md:ml-0">
                            <Card className="p-8 border-primary/20 bg-primary/5 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 shadow-xl relative overflow-hidden">
                                {/* Decorative background element */}
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 rounded-full blur-3xl" />
                                
                                <div className="flex flex-col gap-4 relative z-10">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                            <GraduationCap className="w-6 h-6" />
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20">
                                            <Calendar className="w-4 h-4" />
                                            {edu.year}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{edu.degree}</h3>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-foreground/90 font-medium">{edu.institution}</p>
                                            {edu.subInstitution && (
                                                <p className="text-foreground/60 text-sm flex items-center gap-2">
                                                    <MapPin className="w-3 h-3 text-primary/60" />
                                                    {edu.subInstitution}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-foreground/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                                        {edu.description}
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
