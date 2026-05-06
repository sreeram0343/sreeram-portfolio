"use client";

import React from "react";
import { Section, SectionHeading } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ProjectsSection = () => {
    const [filter, setFilter] = React.useState("All");
    
    const categories = ["All", "AI/ML", "Automation", "Analytics"];
    
    const filteredProjects = projects.filter(project => {
        if (filter === "All") return true;
        if (filter === "AI/ML") return project.title.includes("AI") || project.techStack.includes("Deep Learning");
        if (filter === "Automation") return project.description.toLowerCase().includes("automation");
        if (filter === "Analytics") return project.description.toLowerCase().includes("analytics");
        return true;
    });

    return (
        <Section id="projects">
            <SectionHeading>Featured Projects</SectionHeading>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-300 ${
                            filter === cat 
                                ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]" 
                                : "bg-white/5 border-white/10 text-foreground/40 hover:border-primary/30 hover:text-primary"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                        >
                            <Card className="flex flex-col h-full group border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden">
                                {/* Visual Header */}
                                <div className="h-48 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden flex items-center justify-center border-b border-white/5">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent)] group-hover:scale-150 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-grid-white/[0.02]" />
                                    <project.icon className="w-16 h-16 text-primary/30 group-hover:text-primary/60 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3" />
                                    
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-full border border-primary/30 backdrop-blur-md uppercase tracking-widest">
                                            Featured
                                        </div>
                                    )}
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-secondary text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">{project.date}</span>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-foreground/60 mb-6 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    {/* Highlights/Metrics */}
                                    <div className="space-y-2 mb-8">
                                        {project.highlights.map((highlight, hIndex) => (
                                            <div key={hIndex} className="flex items-start gap-3 text-sm text-foreground/80">
                                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto">
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-foreground/70 border border-white/10 hover:border-primary/30 hover:text-primary transition-all duration-300">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4">
                                            <Button 
                                                variant="outline" 
                                                size="sm" 
                                                icon={<Github className="w-4 h-4" />} 
                                                as="a" 
                                                href={project.links.github}
                                                className="bg-white/5 border-white/10 hover:bg-primary hover:border-primary text-white transition-all duration-300"
                                            >
                                                Source
                                            </Button>
                                            {project.links.demo && project.links.demo !== "#" && (
                                                <Button 
                                                    variant="ghost" 
                                                    size="sm" 
                                                    icon={<ExternalLink className="w-4 h-4" />} 
                                                    as="a" 
                                                    href={project.links.demo}
                                                    className="hover:text-primary transition-colors duration-300"
                                                >
                                                    Live Demo
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="text-center mt-16">
                <Button 
                    variant="primary" 
                    icon={<ArrowRight className="w-4 h-4" />} 
                    as="a" 
                    href="https://github.com/sreeram0343"
                    className="shadow-[0_0_20px_-5px_var(--primary)]"
                >
                    View More on GitHub
                </Button>
            </div>
        </Section>
    );
};
