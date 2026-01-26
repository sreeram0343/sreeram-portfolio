"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <Section id="about">
            <SectionHeading>About Me</SectionHeading>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    {/* Use standard img if next/image config is tricky with local files during dev, but standard Image is best */}
                    <img
                        src="/sreeram-profile.png"
                        alt="Sreeram M R"
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                </motion.div>

                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-foreground/80 leading-relaxed text-lg"
                    >
                        <p>
                            I am an innovative B.Tech Computer Science student with a passion for developing AI-powered solutions that make a real impact. My expertise spans from building automated security platforms to creating deep learning models for real-world applications.
                        </p>
                        <p>
                            With hands-on experience in Python, Machine Learning, and Full-Stack Development, I transform complex problems into elegant, efficient solutions. Currently seeking opportunities to contribute to cutting-edge AI/ML projects.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-6 text-center border-primary/20 bg-primary/5">
                                <h3 className="text-4xl font-bold text-gradient mb-2">{stat.value}</h3>
                                <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
