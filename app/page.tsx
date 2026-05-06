"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, FileText, ArrowRight, CheckCircle2, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks, projects, education, skills, certifications, achievements, stats } from "@/lib/data";

function SectionMarker({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-12 md:mb-20">
      <span className="font-mono text-xs text-accent tracking-widest">
        {num}
      </span>
      <span className="font-mono text-xs text-muted-foreground tracking-[0.22em] uppercase text-[10px] md:text-xs">
        {label}
      </span>
      <div className="flex-1 h-px bg-border ml-2" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-4 md:py-6 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-lg font-bold tracking-[0.25em] text-foreground uppercase hover:text-accent transition-colors duration-200"
        >
          4
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-[0.18em] border border-border px-5 py-2.5 text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-200 uppercase"
          >
            Resume ↗
          </a>
        </div>
        
        {/* Simple Mobile Resume Link */}
        <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden font-mono text-[10px] tracking-widest border border-border px-3 py-1.5 text-foreground uppercase"
          >
            CV ↗
          </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end pb-16 pt-36 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 md:gap-16 items-end">
        <div>
          <p className="font-mono text-[10px] md:text-xs text-accent tracking-[0.35em] uppercase mb-6 md:mb-10">
            {siteConfig.title.split('|')[0]} &nbsp;·&nbsp; {siteConfig.location.split(',')[0]}
          </p>
          <h1 className="font-serif font-light text-[clamp(48px,12vw,140px)] leading-[0.9] tracking-tight text-foreground">
            {siteConfig.name.split(' ')[0]}
            <br />
            {siteConfig.name.split(' ').slice(1).join(' ')}
            <span className="text-accent">.</span>
          </h1>
        </div>

        <div className="pb-1">
          <p className="font-sans font-light text-foreground/70 text-base md:text-lg leading-[1.85] mb-10">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#projects"
              className="group font-mono flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-3.5 text-xs tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-200"
            >
              View Work
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-5">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 h-px bg-border" />

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <span className="font-serif font-light text-2xl md:text-3xl text-foreground">
              {stat.value}
            </span>
            <span className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-wide leading-tight">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionMarker num="—" label="About" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <p className="font-serif font-light text-xl md:text-2xl leading-[1.8] text-foreground/85 mb-8 italic">
            I am a B.Tech Computer Science and Engineering student passionate about Artificial Intelligence and Machine Learning.
          </p>
          <div className="space-y-6">
            <p className="font-sans font-light text-foreground/55 leading-[1.95] text-base">
              Currently studying at APJ Abdul Kalam Technological University (KTU), I focus on building impactful real-world systems, AI products, and scalable applications. My interest extends to startup innovation and emerging technologies.
            </p>
            <p className="font-sans font-light text-foreground/55 leading-[1.95] text-base">
              I enjoy transforming complex problems into intelligent automation solutions, from AI-driven monitoring platforms to computer vision systems.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-12 overflow-hidden bg-muted rounded-lg border border-border group relative">
            <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-all duration-700 z-10" />
            <img
              src="/sreeram-profile.png"
              alt="Sreeram M R"
              className="w-full object-cover group-hover:scale-105 transition-all duration-700"
              style={{ aspectRatio: "4/3" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {skills.slice(0, 4).map((skill) => (
              <div key={skill.category}>
                <p className="font-mono text-xs text-accent tracking-[0.22em] uppercase mb-4">
                  {skill.category}
                </p>
                <ul className="space-y-1.5">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionMarker num="01" label="Selected Work" />

      <div>
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group border-t border-border cursor-pointer"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="py-10 md:py-12">
              <div className="grid grid-cols-1 lg:grid-cols-[48px_1fr_180px] gap-6 lg:gap-12 items-start">
                <span className="hidden md:block font-mono text-xs text-accent tracking-widest pt-2">
                  0{i + 1}
                </span>

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-4 mb-4">
                    <h3
                      className={`font-serif font-light text-3xl md:text-4xl lg:text-5xl transition-colors duration-300 ${
                        hovered === i ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {p.title}
                    </h3>
                    <span className="font-sans font-light text-xs md:text-sm text-muted-foreground">
                      {p.date}
                    </span>
                  </div>
                  <p className="font-sans font-light text-foreground/55 leading-relaxed text-base max-w-xl mb-6">
                    {p.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {p.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3 text-sm text-foreground/60 font-light">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                        </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6 lg:mb-0">
                    {p.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`font-mono text-[10px] uppercase tracking-wider border px-3 py-1 text-muted-foreground transition-colors duration-300 ${
                          hovered === i ? "border-accent/25 text-foreground/60" : "border-border"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-4 items-center lg:items-end">
                    <a href={p.links.github} target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all">
                        <Github className="w-5 h-5" />
                    </a>
                    {p.links.demo && p.links.demo !== "#" && (
                        <a href={p.links.demo} target="_blank" rel="noopener noreferrer" className="p-2 md:p-3 rounded-full border border-border hover:border-accent hover:text-accent transition-all">
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    )}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <SectionMarker num="02" label="Education" />

      <div>
        {education.map((edu, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-20 py-10 md:py-12 border-t border-border"
          >
            <div className="pt-0.5">
              <p className="font-mono text-xs text-muted-foreground tracking-wide">
                {edu.year}
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 md:gap-4 mb-3">
                <h3 className="font-serif font-normal text-xl md:text-2xl text-foreground">
                  {edu.degree}
                </h3>
                <span className="font-mono text-xs text-accent tracking-wide">
                  {edu.institution}
                </span>
              </div>
              {edu.subInstitution && (
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mb-4">{edu.subInstitution}</p>
              )}
              <p className="font-sans font-light text-foreground/55 text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}

function CertsAndAchievements() {
  return (
    <section id="certifications" className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
        <div>
          <SectionMarker num="03" label="Certifications" />
          <div className="space-y-8">
            {certifications.map((cert, i) => (
              <div key={i} className="flex justify-between items-center group cursor-default">
                <div className="pr-4">
                    <p className="font-serif text-lg md:text-xl text-foreground/80 group-hover:text-accent transition-colors leading-tight">{cert.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{cert.issuer} &nbsp;·&nbsp; {cert.year}</p>
                </div>
                <cert.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionMarker num="04" label="Achievements" />
          <div className="space-y-10 md:space-y-12">
            {achievements.map((ach, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-4 mb-4">
                    <ach.icon className="w-5 h-5 text-accent shrink-0" />
                    <h3 className="font-serif text-xl md:text-2xl text-foreground leading-tight">{ach.title}</h3>
                </div>
                <p className="font-sans font-light text-foreground/55 text-sm leading-relaxed pl-9">
                    {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="border-t border-border pt-20 md:pt-32">
        <p className="font-mono text-xs text-accent tracking-[0.35em] uppercase mb-10">
          05 — Contact
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div>
            <h2 className="font-serif font-light text-[clamp(42px,8vw,112px)] leading-[0.9] tracking-tight text-foreground mb-12 md:mb-16">
              {"Let's build"}
              <br />
              something
              <br />
              <em className="text-accent">together.</em>
            </h2>
            <p className="font-sans font-light text-foreground/55 text-lg leading-[1.85] max-w-md mb-12">
              Open to AI/ML, software engineering, internships, collaborations, and innovative technology opportunities. I respond to every thoughtful message.
            </p>
            <div className="flex flex-col gap-6">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Email</p>
                        <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">{siteConfig.email}</p>
                    </div>
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Phone</p>
                        <p className="font-mono text-sm text-foreground group-hover:text-accent transition-colors">{siteConfig.phone}</p>
                    </div>
                </a>
                <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Location</p>
                        <p className="font-mono text-sm text-foreground">{siteConfig.location}</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Connect</label>
                        <div className="flex flex-col gap-3">
                            {siteConfig.socials.map(social => (
                                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-light text-foreground/70 hover:text-accent transition-colors group">
                                    <social.icon className="w-4 h-4" />
                                    {social.name}
                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">Links</label>
                        <div className="flex flex-col gap-3">
                            <a href={siteConfig.resumeUrl} download className="flex items-center gap-3 text-sm font-light text-foreground/70 hover:text-accent transition-colors group">
                                <FileText className="w-4 h-4" />
                                Download Resume
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                            </a>
                        </div>
                    </div>
                </div>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group block w-full font-mono bg-primary text-primary-foreground p-8 text-center text-xs tracking-[0.3em] uppercase hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Send a Message
                </a>
            </div>
          </div>
        </div>

        <div className="mt-28 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
          <p className="font-mono text-[10px] md:text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 md:gap-8 flex-wrap">
            {siteConfig.socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] md:text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
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
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-accent selection:text-white">
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <CertsAndAchievements />
      <Contact />
    </div>
  );
}
