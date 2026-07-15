"use client";

import { useState, useEffect } from "react";
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  Terminal as TerminalIcon, 
  ExternalLink,
  ChevronRight,
  Code as CodeIcon,
  Layers,
  Sparkles,
  Cpu,
  Brain,
  Shield,
  Workflow,
  Database
} from "lucide-react";
import { 
  siteConfig, 
  navLinks, 
  flagshipProjects, 
  projects, 
  education, 
  skills, 
  certifications, 
  achievements, 
  stats, 
  techStack,
  FlagshipProject
} from "@/lib/data";
import { PortfolioHero } from "@/components/ui/portfolio-hero";
import { ShaderBackground } from "@/components/ui/shader-background";
import { motion } from "framer-motion";

function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12 md:mb-16">
      <span className="font-mono text-xs text-accent/80 tracking-widest font-semibold">
        {num}
      </span>
      <span className="font-mono text-xs text-muted-foreground/80 tracking-[0.22em] uppercase text-[10px] md:text-xs">
        {label}
      </span>
      <div className="flex-1 h-px bg-border/40 ml-2" />
    </div>
  );
}

// Node coordinates lookup for SVG drawing
const nodeCoordinates: Record<string, Record<string, { x: number; y: number }>> = {
  thinklm: {
    user: { x: 40, y: 150 },
    planner: { x: 165, y: 150 },
    gemini: { x: 290, y: 150 },
    memory: { x: 165, y: 250 },
    mcp_hub: { x: 165, y: 50 },
    reflector: { x: 290, y: 50 }
  },
  aetherai: {
    api: { x: 40, y: 150 },
    orchestrator: { x: 165, y: 150 },
    vectors: { x: 165, y: 250 },
    llm_agent: { x: 290, y: 150 },
    docker_env: { x: 290, y: 50 }
  },
  veriface: {
    feed: { x: 40, y: 150 },
    opencv: { x: 125, y: 150 },
    align: { x: 210, y: 150 },
    net: { x: 295, y: 150 },
    classify: { x: 380, y: 150 }
  },
  securock: {
    endpoints: { x: 40, y: 70 },
    network: { x: 40, y: 230 },
    opensearch: { x: 165, y: 150 },
    ai_parser: { x: 290, y: 150 },
    react_ui: { x: 400, y: 150 }
  }
};

function ArchitectureDiagram({ project }: { project: FlagshipProject }) {
  const coords = nodeCoordinates[project.id];
  if (!coords) return null;

  // Horizontal S-curve Bezier generator
  const getBezierPath = (x1: number, y1: number, x2: number, y2: number) => {
    const dx = x2 - x1;
    const cx1 = x1 + dx * 0.45;
    const cy1 = y1;
    const cx2 = x1 + dx * 0.55;
    const cy2 = y2;
    return `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;
  };

  const getThemeColorClass = (status: string) => {
    if (status === "Building") return "stroke-amber-400/30";
    if (status === "Completed") return "stroke-emerald-400/30";
    return "stroke-cyan-400/30";
  };

  const getThemePulseClass = (status: string) => {
    if (status === "Building") return "stroke-amber-400";
    if (status === "Completed") return "stroke-emerald-400";
    return "stroke-cyan-400";
  };

  return (
    <div className="relative w-full aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-white/[0.02]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase flex items-center gap-1.5">
          <TerminalIcon className="w-3 h-3 text-accent" /> system_architecture.json
        </span>
      </div>

      <div className="relative w-full h-[calc(100%-38px)]">
        {/* SVG Drawing Canvas for Connections */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 450 300"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid Background Pattern */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" className="text-foreground/[0.03]" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Connection Lines */}
          {project.architecture.connections.map((conn, idx) => {
            const start = coords[conn.from];
            const end = coords[conn.to];
            if (!start || !end) return null;

            const pathData = getBezierPath(start.x, start.y, end.x, end.y);
            return (
              <g key={idx}>
                {/* Background Shadow Line */}
                <path 
                  d={pathData} 
                  fill="none" 
                  className={getThemeColorClass(project.status)}
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
                {/* Animated Pulsing Packet Line */}
                <path 
                  d={pathData} 
                  fill="none" 
                  className={getThemePulseClass(project.status)} 
                  strokeWidth="2" 
                  strokeDasharray="8 20"
                  style={{
                    animation: `flow 4s linear infinite`,
                    filter: `drop-shadow(0 0 4px currentColor)`
                  }}
                />
              </g>
            );
          })}
        </svg>

        {/* HTML Rendered Nodes */}
        {project.architecture.nodes.map((node) => {
          const coord = coords[node.id];
          if (!coord) return null;

          const percentX = (coord.x / 450) * 100;
          const percentY = (coord.y / 300) * 100;

          const getNodeIcon = (type: string) => {
            if (type === "input") return <ChevronRight className="w-3.5 h-3.5 text-blue-400" />;
            if (type === "storage") return <Database className="w-3.5 h-3.5 text-pink-400" />;
            if (type === "output") return <Sparkles className="w-3.5 h-3.5 text-emerald-400" />;
            return <Cpu className="w-3.5 h-3.5 text-amber-400" />;
          };

          return (
            <div
              key={node.id}
              className="absolute group/node flex flex-col items-center justify-center p-2 rounded-xl bg-card border border-border hover:border-accent/40 shadow-lg cursor-default backdrop-blur-sm transition-all duration-300 hover:scale-105"
              style={{
                left: `${percentX}%`,
                top: `${percentY}%`,
                transform: "translate(-50%, -50%)",
                width: "95px",
                height: "64px"
              }}
            >
              <div className="mb-0.5">{getNodeIcon(node.type)}</div>
              <span className="text-[9px] font-mono tracking-tight text-center text-foreground leading-tight font-semibold">
                {node.label}
              </span>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-accent/40 opacity-0 group-hover/node:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes flow {
          to {
            stroke-dashoffset: -100;
          }
        }
      `}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <SectionMarker num="—" label="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <p className="font-serif font-light text-2xl md:text-3xl leading-[1.5] text-foreground mb-8 italic">
            I architect pipelines where <span className="text-accent font-normal">models behave autonomously</span> and data streams at scale.
          </p>
          <div className="space-y-6 text-foreground/80 leading-[1.8] font-light text-sm md:text-base">
            <p>
              Pursuing my B.Tech in Computer Science and Engineering at APJ Abdul Kalam Technological University (KTU), my focal point is transition: transforming static models from research papers into interactive, production-grade agentic frameworks.
            </p>
            <p>
              I build custom systems utilizing the **Model Context Protocol (MCP)**, stateful graphs via **LangGraph**, and specialized context routers. I believe AI should perform autonomous reflection, memory indexing, and validation before yielding responses.
            </p>
            <p>
              To back these systems, I leverage distributed data engineering pipelines including **Apache Iceberg**, Google Cloud Platform environments, and containerized microservices to guarantee reliability, low-latency execution, and structural durability.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Dashboard Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="p-6 rounded-2xl bg-card border border-border backdrop-blur-md hover:border-accent/20 transition-all duration-300"
              >
                <span className="font-mono text-2xl md:text-3xl font-bold text-accent block mb-1">
                  {stat.value}
                </span>
                <span className="font-sans text-[10px] md:text-xs text-muted-foreground uppercase tracking-widest font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border backdrop-blur-sm">
            <h4 className="font-serif text-lg text-foreground mb-3 font-semibold">Core Philosophy</h4>
            <p className="font-sans font-light text-foreground/75 text-xs md:text-sm leading-relaxed">
              AI shouldn't just respond, it should reason. By designing recursive reflection loops and integrating tool-orchestration protocols, I create agents that proactively plan, query databases securely, and self-correct on failures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Flagships() {
  const getStatusColor = (status: string) => {
    if (status === "Building") return "border-amber-500/30 bg-amber-500/5 text-amber-500 dark:text-amber-400";
    if (status === "Completed") return "border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400";
    return "border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400";
  };

  const getStatusPulseColor = (status: string) => {
    if (status === "Building") return "bg-amber-500 dark:bg-amber-400";
    if (status === "Completed") return "bg-emerald-500 dark:bg-emerald-400";
    return "bg-cyan-500 dark:bg-cyan-400";
  };

  return (
    <section id="flagships" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <SectionMarker num="01" label="Flagship Projects" />
      
      <div className="mb-8 max-w-2xl">
        <h2 className="font-serif font-light text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 font-semibold">
          Flagship Projects
        </h2>
        <p className="font-sans font-light text-muted-foreground text-sm md:text-base">
          These Capstone and Startup architectures highlight my expertise in building resilient multi-agent execution, secure identity validation, and high-throughput security intelligence.
        </p>
      </div>

      <div className="space-y-16 md:space-y-24">
        {flagshipProjects.map((p) => (
          <div 
            key={p.id}
            className="group relative rounded-3xl bg-card border border-border p-6 md:p-10 transition-all duration-500 backdrop-blur-md shadow-xl"
          >
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Info Column */}
              <div className="lg:col-span-7 flex flex-col justify-between h-full">
                <div>
                  {/* Status Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest font-semibold ${getStatusColor(p.status)}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${getStatusPulseColor(p.status)} animate-pulse`} />
                      {p.statusLabel}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/60 font-medium">{p.date}</span>
                  </div>

                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground font-light mb-2 group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="font-mono text-xs text-accent tracking-wide mb-6 uppercase font-semibold">
                    {p.subtitle}
                  </p>

                  <p className="font-sans font-light text-foreground/80 text-sm md:text-base leading-relaxed mb-8">
                    {p.longDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-3 mb-8">
                    {p.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-foreground/70 font-light">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-md bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4">
                    <a 
                      href={p.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-foreground bg-card border border-border hover:border-accent hover:bg-accent hover:text-white px-5 py-3 rounded-full tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-sm font-semibold"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                    {p.links.demo && p.links.demo !== "#" && (
                      <a 
                        href={p.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-accent px-4 py-2 transition-colors font-semibold"
                      >
                        Live Demo <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Visualization Column */}
              <div className="lg:col-span-5 w-full flex flex-col gap-6">
                {p.id === "thinklm" && (
                  <div className="relative w-full aspect-[4/3] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/thinklm-logo.png" 
                      alt="ThinkLM Logo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <ArchitectureDiagram project={p} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SecondaryProjects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <SectionMarker num="02" label="Pet Projects" />
      
      <div className="mb-12">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground mb-4 font-semibold">
          Pet Projects
        </h2>
        <p className="font-sans font-light text-muted-foreground text-sm md:text-base">
          A selection of secondary engineering initiatives focused on regression models, data pipelines, chatbot runtimes, and local civic discussion portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="group/card flex flex-col justify-between h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/30 backdrop-blur-md transition-all duration-300 shadow-xl"
          >
            <div>
              {/* Header Icon */}
              <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-accent/70 group-hover/card:text-accent group-hover/card:border-accent/20 transition-colors mb-6 shadow-sm">
                <p.icon className="w-5 h-5" />
              </div>

              <h3 className="font-serif text-xl text-foreground mb-3 group-hover/card:text-accent transition-colors duration-300 font-semibold">
                {p.title}
              </h3>
              
              <p className="font-sans font-light text-foreground/70 text-xs md:text-sm leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[8px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-card border border-border text-muted-foreground/80 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <a 
                href={p.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground hover:text-accent uppercase tracking-widest transition-colors font-semibold"
              >
                GitHub Link <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="tech-stack" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <SectionMarker num="03" label="Expertise Stack" />

      <div className="mb-12 max-w-xl">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground mb-4 font-semibold">
          Languages & Technologies
        </h2>
        <p className="font-sans font-light text-muted-foreground text-sm md:text-base">
          Categorized listing of language capabilities, core neural libraries, and integration architectures I leverage on daily builds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {techStack.map((group, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-gradient-to-br ${group.color} p-6 border backdrop-blur-md hover:scale-[1.02] transition-transform duration-300`}
          >
            <h3 className="font-mono text-xs font-semibold text-foreground uppercase tracking-widest mb-4 pb-2 border-b border-border">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-sans font-light text-xs text-foreground px-2.5 py-1 rounded-md bg-card border border-border shadow-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <SectionMarker num="04" label="Achievements" />

      <div className="mb-12">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-foreground mb-4 font-semibold">
          Milestones & Contributions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((ach, i) => (
          <div 
            key={i}
            className="group flex gap-5 p-6 rounded-2xl bg-card border border-border backdrop-blur-sm transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
              <ach.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors duration-300 font-semibold">
                {ach.title}
              </h3>
              <p className="font-sans font-light text-foreground/75 text-xs md:text-sm leading-relaxed">
                {ach.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-16 max-w-7xl mx-auto relative z-10">
      <div className="border-t border-white/10 pt-24">
        <p className="font-mono text-xs text-accent tracking-[0.35em] uppercase mb-8">
          05 — Contact
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h2 className="font-serif font-light text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.0] tracking-tight text-foreground mb-8">
              Let's create
              <br />
              intelligent
              <br />
              <span className="text-accent italic font-light">systems.</span>
            </h2>
            <p className="font-sans font-light text-foreground/80 text-base md:text-lg leading-[1.8] max-w-md mb-12">
              Seeking AI/ML developer roles, backend engineering contracts, and research opportunities. Drop a note to discuss codebases, agents, or systems.
            </p>
            <div className="flex flex-col gap-6">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-5 group w-fit">
                <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Email</p>
                  <p className="font-mono text-xs md:text-sm text-foreground group-hover:text-accent transition-colors">{siteConfig.email}</p>
                </div>
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-5 group w-fit">
                <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Phone</p>
                  <p className="font-mono text-xs md:text-sm text-foreground group-hover:text-accent transition-colors">{siteConfig.phone}</p>
                </div>
              </a>
              <div className="flex items-center gap-5 w-fit">
                <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center text-muted-foreground shadow-sm">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">Location</p>
                  <p className="font-mono text-xs md:text-sm text-foreground">{siteConfig.location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="space-y-10 bg-card border border-border p-8 rounded-3xl backdrop-blur-md shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Connect</label>
                  <div className="flex flex-col gap-3">
                    {siteConfig.socials.map(social => (
                      <a 
                        key={social.name} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-xs md:text-sm font-light text-foreground hover:text-accent transition-colors group"
                      >
                        <social.icon className="w-4 h-4 shrink-0 text-muted-foreground group-hover:text-accent transition-colors" />
                        {social.name}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-accent" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Resources</label>
                  <div className="flex flex-col gap-3">
                    <a 
                      href={siteConfig.resumeUrl} 
                      download 
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-light text-foreground hover:text-accent transition-colors group"
                    >
                      <FileText className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                      Download Resume
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-accent" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="relative group overflow-hidden block w-full rounded-2xl bg-accent p-6 text-center text-xs font-mono font-bold tracking-[0.25em] text-white uppercase shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Mail Query <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-violet-600 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 items-center">
          <p className="font-mono text-[10px] text-muted-foreground/60 text-center">
            © {new Date().getFullYear()} {siteConfig.name}. Handcrafted using Next.js & React Three Fiber.
          </p>
          <div className="flex items-center gap-6">
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-muted-foreground/60 hover:text-accent transition-colors tracking-widest uppercase"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden selection:bg-accent selection:text-white bg-background">
      {/* Client-only dynamic background to avoid SSR hydration mismatch, hidden in light mode */}
      <div className="hidden dark:block">
        {mounted && <ShaderBackground />}
      </div>

      <PortfolioHero
        logoText="SREERAM"
        navLinks={navLinks}
        tagline={siteConfig.title.split("|")[0].trim()}
        description={siteConfig.description}
      />
      
      <About />
      <Flagships />
      <SecondaryProjects />
      <TechStackSection />
      <AchievementsSection />
      <Contact />
    </div>
  );
}
