"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const CertificationsSection = () => {
    return (
        <Section id="certifications">
            <SectionHeading>Certifications</SectionHeading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="p-8 group h-full bg-white/[0.02] border-white/5 hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                            {/* Decorative background circle */}
                            <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
                            
                            <div className="flex flex-col h-full relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <cert.icon className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold text-foreground/40 bg-white/5 px-2 py-1 rounded border border-white/5 uppercase tracking-widest">
                                        {cert.year}
                                    </span>
                                </div>
                                
                                <div className="mt-auto">
                                    <h4 className="font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                                        {cert.name}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-foreground/50">
                                        <Award className="w-4 h-4 text-secondary/60" />
                                        <span>{cert.issuer}</span>
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
