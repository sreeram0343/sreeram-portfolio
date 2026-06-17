import { Github, Linkedin, Mail, Twitter, Shield, Brain, Link, Play, Award, Code, Database, Terminal, Cpu, Zap, Globe, FileText, Smartphone } from 'lucide-react';

export const siteConfig = {
    name: "Sreeram M R",
    title: "AI/ML Engineer | Software Developer | Intelligent Systems Builder",
    description: "Building Intelligent Systems with AI, Automation & Scalable Software. Computer Science student focused on AI/ML, intelligent applications, automation systems, and real-world software solutions.",
    email: "sreeram4@zohomail.in",
    phone: "+91 70121 63651",
    location: "Thiruvananthapuram, Kerala, India",
    socials: [
        { name: "GitHub", href: "https://github.com/sreeram0343", icon: Github },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/sreeram4/", icon: Linkedin },
        { name: "Email", href: "mailto:sreeram4@zohomail.in", icon: Mail },
    ],
    resumeUrl: "/assets/resume.pdf"
};

export const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export const stats = [
    { label: "Projects Completed", value: "10+" },
    { label: "Model Accuracy", value: "92%" },
    { label: "Hackathons Won", value: "3" },
    { label: "Open Source", value: "Active" }
];

export const skills = [
    {
        category: "Programming Languages",
        icon: Code,
        items: ["Python", "Java", "C", "C++"]
    },
    {
        category: "AI & Machine Learning",
        icon: Brain,
        items: ["Deep Learning", "Computer Vision", "NLP", "Anomaly Detection"]
    },
    {
        category: "Software & Tools",
        icon: Smartphone,
        items: ["Flask", "MySQL", "MongoDB", "Tkinter"]
    },
    {
        category: "Data & Analytics",
        icon: Database,
        items: ["Pandas", "NumPy", "Data Visualization"]
    },
    {
        category: "Core Concepts",
        icon: Terminal,
        items: ["OOP", "Data Structures", "REST APIs", "System Design"]
    }
];

export const projects = [
    {
        title: "SecuRock – AI-Powered SOC-as-a-Service",
        description: "AI-driven monitoring platform with intelligent log analysis and threat pattern detection. Features an automated monitoring pipeline that reduced alert fatigue by 40%.",
        techStack: ["Python", "Wazuh", "Suricata", "OpenSearch"],
        highlights: [
            "AI-driven monitoring platform",
            "Intelligent log analysis",
            "Threat pattern detection",
            "Automated monitoring pipeline",
            "Reduced alert fatigue by 40%"
        ],
        links: {
            github: "https://github.com/sreeram0343/SecuRock-SOCaaS-MVP",
            demo: "#"
        },
        icon: Shield,
        date: "2026",
        featured: true
    },
    {
        title: "Agentic RAG – Autonomous Multi-Agent AI System",
        description: "An autonomous knowledge retrieval system built with the Model Context Protocol (MCP) and multi-agent orchestration. Utilizes dynamic context routing to determine query intent and execute parallel tool-calling workflows for high-fidelity, self-correcting responses.",
        techStack: ["Python", "MCP", "LangGraph", "Vector DB", "LLMs"],
        highlights: [
            "Built autonomous workflows with multi-agent coordination via MCP",
            "Implemented dynamic context routing for intent-based query navigation",
            "Designed self-correcting agent loops that validate search results",
            "Optimized system response latency for complex multi-source queries"
        ],
        links: {
            github: "https://github.com/sreeram0343/agentic-rag",
            demo: "#"
        },
        icon: Cpu,
        date: "2026",
        featured: true
    },
    {
        title: "Lakehouse Pipeline – Scalable Data Engineering for AI",
        description: "A modern data lakehouse platform designed for scalable AI workflows. Features high-throughput data ingestion, transformation, and storage utilizing Apache Iceberg and integrated with Google Cloud Services (GCS, BigQuery, Vertex AI) for unified data-to-model pipelines.",
        techStack: ["Apache Iceberg", "Google Cloud (GCP)", "PySpark", "dbt", "BigQuery"],
        highlights: [
            "Architected robust data pipelines with Apache Iceberg table format",
            "Integrated GCP storage (GCS) and BigQuery for scalable query execution",
            "Optimized transformations and partition layout to support AI/ML workloads",
            "Established schema evolution and time-travel capabilities for auditability"
        ],
        links: {
            github: "https://github.com/sreeram0343/lakehouse-pipeline",
            demo: "#"
        },
        icon: Database,
        date: "2026",
        featured: true
    },
    {
        title: "VeriFace – AI Authenticity & Deepfake Detection",
        description: "Deepfake detection system with 92% accuracy. Features real-time image verification and an optimized inference pipeline for AI-powered identity analysis.",
        techStack: ["Deep Learning", "Python", "Flask"],
        highlights: [
            "Deepfake detection system",
            "92% accuracy",
            "Real-time image verification",
            "Optimized inference pipeline",
            "AI-powered identity analysis"
        ],
        links: {
            github: "https://github.com/aswanims2808/Veriface",
            demo: "#"
        },
        icon: Brain,
        date: "2025",
        featured: true
    },
    {
        title: "Arthadhan – AI Financial Intelligence Platform",
        description: "Financial analytics engine and transaction processing system with ML-powered expense categorization and interactive dashboards for data-driven insights.",
        techStack: ["Machine Learning", "SQL", "Dashboards"],
        highlights: [
            "Financial analytics engine",
            "Transaction processing system",
            "ML-powered expense categorization",
            "Interactive dashboards",
            "Data-driven financial insights"
        ],
        links: {
            github: "https://github.com/sreeram0343/Arthadhan",
            demo: "#"
        },
        icon: Database,
        date: "2025",
        featured: true
    },
    {
        title: "AskDocs-RAG – Containerized Document Q&A",
        description: "A production-ready Retrieval-Augmented Generation application for interactive document querying. Features a rigorous DevOps foundation with fully containerized microservices and automated CI/CD pipelines to ensure code and model reliability.",
        techStack: ["Docker", "GitHub Actions", "Python", "RAG", "PyTest"],
        highlights: [
            "Containerized application components using multi-stage Docker builds",
            "Designed comprehensive automated testing suites using PyTest",
            "Built GitHub Actions CI/CD workflows for automated build, test, and lint checks",
            "Ensured high reliability with test coverage tracking and container security scanning"
        ],
        links: {
            github: "https://github.com/sreeram0343/AskDocs-RAG",
            demo: "#"
        },
        icon: FileText,
        date: "2025",
        featured: false
    },
    {
        title: "resume-score-ml – Automated Resume Ranking Service",
        description: "An automated candidate matching and scoring system powered by Machine Learning. Utilizes semantic analysis to align resumes with job descriptions, supported by a containerized deployment and continuous testing pipeline.",
        techStack: ["Python", "Scikit-Learn", "Docker", "CI/CD", "FastAPI"],
        highlights: [
            "Implemented ML models for candidate semantic matching and scoring",
            "Built automated validation pipelines in CI/CD to prevent model drift",
            "Deployed as a lightweight containerized REST API with FastAPI and Docker",
            "Integrated testing checks to validate prediction accuracy before releases"
        ],
        links: {
            github: "https://github.com/sreeram0343/resume-score-ml",
            demo: "#"
        },
        icon: Code,
        date: "2025",
        featured: false
    },
    {
        title: "Netflix Content Analytics",
        description: "Exploratory Data Analysis discovering trends, genre popularity, and regional viewing insights using Python's data science stack with visualization dashboards.",
        techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
        highlights: [
            "Exploratory Data Analysis",
            "Trend discovery",
            "Genre popularity analysis",
            "Regional viewing insights",
            "Visualization dashboards"
        ],
        links: {
            github: "https://github.com/sreeram0343/projects/tree/main/Netflix_EDA",
            demo: "#"
        },
        icon: Play,
        date: "2025",
        featured: false
    }
];

export const education = [
    {
        degree: "B.Tech in Computer Science and Engineering",
        institution: "APJ Abdul Kalam Technological University (KTU)",
        subInstitution: "Lourdes Matha College",
        year: "2023 – 2027",
        description: "Focusing on Artificial Intelligence, Machine Learning, and software engineering."
    },
    {
        degree: "Higher Secondary Education",
        institution: "Government Higher Secondary School, Neyyattinkara",
        year: "2021 – 2023",
        description: "Completed with a focus on science and mathematics."
    }
];

export const certifications = [
    {
        name: "Artificial Intelligence and Machine Learning",
        issuer: "Infosys Springboard",
        year: "2025",
        icon: Brain
    },
    {
        name: "SQL Advanced Certification",
        issuer: "HackerRank",
        year: "2025",
        icon: Database
    },
    {
        name: "Python Programming Certification",
        issuer: "Udemy",
        year: "2024",
        icon: Terminal
    },
    {
        name: "Google Cybersecurity Certification",
        issuer: "Google",
        year: "2023",
        icon: Shield
    }
];

export const achievements = [
    {
        title: "Google Vortexa Hackathon Winner",
        description: "Built AI-powered SOC MVP in under 6 hours. Secured 1st place.",
        icon: Award
    },
    {
        title: "Placement Operations Lead",
        description: "Lourdes Matha College 2026. Leading efforts to connect students with industry leaders.",
        icon: Zap
    }
];

export const experience = [
    {
        role: "AI/ML Enthusiast & Student Researcher",
        company: "Self-Project / Academic",
        period: "2023 - Present",
        description: "Developing intelligent systems and exploring real-world applications of AI and automation."
    }
];
