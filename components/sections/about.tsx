"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { stats } from "@/lib/data";
import { motion } from "framer-motion";

const Counter = ({ value }: { value: string }) => {
    const [count, setCount] = React.useState(0);
    const target = parseInt(value.replace(/\D/g, ""));
    const suffix = value.replace(/\d/g, "");

    React.useEffect(() => {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        
        return () => clearInterval(timer);
    }, [target]);

    return <span>{count}{suffix}</span>;
};

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
                    className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
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
                        className="space-y-6 text-foreground/70 leading-relaxed text-lg font-light"
                    >
                        <p>
                            I am a <span className="text-white font-medium">B.Tech Computer Science and Engineering</span> student at <span className="text-primary font-medium underline underline-offset-4 decoration-primary/30">APJ Abdul Kalam Technological University (KTU)</span>, studying at Lourdes Matha College.
                        </p>
                        <p>
                            My passion lies in <span className="text-white font-medium">Artificial Intelligence, Machine Learning</span>, and building <span className="text-white font-medium">intelligent automation systems</span>. I thrive on creating impactful real-world software that solves complex problems through data-driven approaches.
                        </p>
                        <p>
                            Whether it's developing AI products, analytics platforms, or scalable applications, I am always excited about <span className="text-white font-medium">startup innovation</span> and the potential of emerging technologies to transform industries.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="p-6 text-center border-primary/20 bg-primary/5 backdrop-blur-sm group hover:border-primary/50 transition-colors duration-300">
                                    <h3 className="text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                                        <Counter value={stat.value} />
                                    </h3>
                                    <p className="text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em]">{stat.label}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
