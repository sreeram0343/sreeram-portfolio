import { 
  Github, 
  Linkedin, 
  Mail, 
  Shield, 
  Brain, 
  Cpu, 
  Database, 
  Terminal, 
  Code, 
  Award, 
  Zap, 
  Play, 
  FileText,
  Workflow,
  Sparkles,
  Server,
  Layers,
  Flame
} from 'lucide-react';

export const siteConfig = {
    name: "Sreeram M R",
    title: "AI/ML Engineer | Software Engineer | Builder",
    description: "Building production-grade autonomous systems, cognitive multi-agent workflows, scalable data lakehouses, and secure backend architectures.",
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
    { label: "Flagship Projects", href: "#flagships" },
    { label: "Pet Projects", href: "#projects" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
];

export const stats = [
    { label: "Agentic Deployments", value: "3+" },
    { label: "Model Verification", value: "92%" },
    { label: "Hackathons Secured", value: "1st" },
    { label: "Open Source", value: "Active" }
];

export interface FlagshipProject {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    status: "Building" | "Completed" | "Startup";
    statusLabel: string;
    techStack: string[];
    highlights: string[];
    links: {
        github: string;
        demo?: string;
    };
    icon: any;
    date: string;
    architecture: {
        nodes: { id: string; label: string; type: "input" | "process" | "storage" | "output" }[];
        connections: { from: string; to: string; label?: string }[];
    };
}

export const flagshipProjects: FlagshipProject[] = [
    {
        id: "thinklm",
        title: "ThinkLM",
        subtitle: "Cognitively Inspired Multi-Agent Reasoning System",
        description: "A next-generation multi-agent AI system capable of planning, reasoning, memory management, reflection, and intelligent tool orchestration.",
        longDescription: "Designed as my B.Tech capstone project, ThinkLM introduces a cognitive loop model into LLM agents. Rather than single-step prompt replies, it schedules reasoning cycles: creating structured plans, managing hierarchical memory (episodic vs. semantic), evaluating its own outputs via a reflection agent, and dynamically executing tools using the Model Context Protocol (MCP) to interact with external environments. It features a fully production-grade, asynchronous architecture designed to minimize latency and manage agent state transitions reliably.",
        status: "Building",
        statusLabel: "🚧 Building",
        techStack: ["Python", "LangGraph", "Google Gemini", "MCP", "Vector Database", "Git", "Docker"],
        highlights: [
            "Cognitive reasoning loop incorporating planning, short/long-term memory, and self-reflection.",
            "Dynamic tool orchestration powered by the Model Context Protocol (MCP) for extensible capabilities.",
            "Asynchronous state management using LangGraph to handle nested agent execution paths.",
            "Vector database integration for high-speed episodic memory retrieval and semantic context search."
        ],
        links: {
            github: "https://github.com/sreeram0343/ThinkLM",
            demo: "#"
        },
        icon: Brain,
        date: "2026",
        architecture: {
            nodes: [
                { id: "user", label: "User Input", type: "input" },
                { id: "planner", label: "Planner & Router Agent", type: "process" },
                { id: "memory", label: "Hierarchical Memory (LTM/STM)", type: "storage" },
                { id: "reflector", label: "Reflection & Eval Agent", type: "process" },
                { id: "mcp_hub", label: "MCP Tool Hub", type: "process" },
                { id: "gemini", label: "Gemini 1.5 Pro / Flash", type: "output" }
            ],
            connections: [
                { from: "user", to: "planner" },
                { from: "planner", to: "gemini", label: "Query" },
                { from: "gemini", to: "memory", label: "Store State" },
                { from: "planner", to: "memory", label: "Context Sync" },
                { from: "gemini", to: "reflector", label: "Validate Output" },
                { from: "reflector", to: "planner", label: "Feedback Loop" },
                { from: "planner", to: "mcp_hub", label: "Tool Call" },
                { from: "mcp_hub", to: "gemini", label: "Tool Response" }
            ]
        }
    },
    {
        id: "aetherai",
        title: "AetherAI",
        subtitle: "Intelligent AI Assistant Platform",
        description: "An advanced AI assistant platform focused on autonomous task execution, intelligent workflows, reasoning, memory, and productivity enhancement.",
        longDescription: "AetherAI is designed to bridge the gap between static LLM chats and autonomous task execution. By structuring workflows into directed acyclic graphs (DAGs), it enables users to configure complex chains of events—such as auto-summarizing incoming research papers, performing cross-web checks, and saving structured logs. Powered by LangGraph and FastAPI, the platform leverages Vector Databases to maintain persistent memory of user preferences, previous decisions, and custom documents, creating a deeply personalized AI workspace.",
        status: "Building",
        statusLabel: "🚧 Building",
        techStack: ["Python", "LLMs", "FastAPI", "LangGraph", "Vector Database", "Docker"],
        highlights: [
            "Autonomous agentic execution of long-horizon tasks via custom workflows.",
            "FastAPI microservices framework for sub-second API routing and response streaming.",
            "Stateful multi-agent graphs preventing memory fragmentation across conversation boundaries.",
            "Containerized deployment leveraging Docker for isolated environments and repeatable builds."
        ],
        links: {
            github: "https://github.com/sreeram0343/AetherAI",
            demo: "#"
        },
        icon: Workflow,
        date: "2026",
        architecture: {
            nodes: [
                { id: "api", label: "FastAPI Gateway", type: "input" },
                { id: "orchestrator", label: "LangGraph Orchestrator", type: "process" },
                { id: "vectors", label: "Vector DB (Memory)", type: "storage" },
                { id: "llm_agent", label: "LLM Agent Loop", type: "process" },
                { id: "docker_env", label: "Sandboxed Exec Env", type: "output" }
            ],
            connections: [
                { from: "api", to: "orchestrator" },
                { from: "orchestrator", to: "vectors", label: "Fetch Prefs" },
                { from: "orchestrator", to: "llm_agent", label: "Assign Task" },
                { from: "llm_agent", to: "docker_env", label: "Code Run" },
                { from: "docker_env", to: "orchestrator", label: "Output Sync" }
            ]
        }
    },
    {
        id: "veriface",
        title: "VeriFace",
        subtitle: "AI Face Verification & Deepfake Detection",
        description: "An AI-powered computer vision application that performs facial verification and detects manipulated or deepfake content.",
        longDescription: "VeriFace provides high-confidence biometric security. Combining classic computer vision techniques (OpenCV) with deep learning architectures (CNNs, Vision Transformers), it performs two critical tasks: verifying identity matches across photo inputs and detecting synthetic manipulations (deepfakes). The system features an optimized neural network inference pipeline running at 30+ FPS, offering real-time frame classification for video feeds or high-throughput batch checks.",
        status: "Completed",
        statusLabel: "✅ Completed",
        techStack: ["Python", "OpenCV", "Deep Learning", "TensorFlow/PyTorch"],
        highlights: [
            "Biometric verification engine matching facial structures with extreme precision.",
            "Synthetic media (deepfake) classification using pre-trained convolutional models.",
            "Real-time processing capability optimizing GPU tensor computations to reach 30+ FPS.",
            "Robust computer vision pipelines resilient against illumination, rotation, and compression noise."
        ],
        links: {
            github: "https://github.com/aswanims2808/Veriface",
            demo: "#"
        },
        icon: Shield,
        date: "2025",
        architecture: {
            nodes: [
                { id: "feed", label: "Camera Feed / Upload", type: "input" },
                { id: "opencv", label: "OpenCV Preprocessing", type: "process" },
                { id: "align", label: "Face Alignment & Crop", type: "process" },
                { id: "net", label: "Deep CNN / ViT Backbone", type: "process" },
                { id: "classify", label: "Verification & Deepfake Classify", type: "output" }
            ],
            connections: [
                { from: "feed", to: "opencv" },
                { from: "opencv", to: "align", label: "Frames" },
                { from: "align", to: "net", label: "Tensors" },
                { from: "net", to: "classify", label: "Features" }
            ]
        }
    },
    {
        id: "securock",
        title: "SecuRock Technologies",
        subtitle: "AI Powered Security Operations Center (SOCaaS)",
        description: "A cybersecurity SaaS platform that combines AI-powered threat detection, monitoring, and security analytics for small and medium businesses.",
        longDescription: "SecuRock was created to democratize enterprise-grade cybersecurity. It functions as an automated Security Operations Center (SOC), collecting security events across network interfaces and system logs using Suricata and Wazuh. A custom AI parser analyzes these telemetry streams, automatically categorizing risks, filtering benign anomalies, and prioritizing severe threats. The UI is built with React, pulling analytics from an OpenSearch index to provide security teams with rich, actionable insights.",
        status: "Startup",
        statusLabel: "🚀 Startup Initiative March 2025 - April 2026",
        techStack: ["Python", "Flask", "React", "Wazuh", "OpenSearch", "Suricata"],
        highlights: [
            "AI anomaly parser analyzing telemetry to decrease alert fatigue by 40%.",
            "Multi-source event correlation integrating Wazuh endpoint agents and Suricata NIDS.",
            "High-throughput analytics dashboard rendering live network events and risk distributions.",
            "Production-tested SOC architecture tailored for resource-constrained business environments."
        ],
        links: {
            github: "https://github.com/sreeram0343/SecuRock-SOCaaS-MVP",
            demo: "#"
        },
        icon: Server,
        date: "2025 - 2026",
        architecture: {
            nodes: [
                { id: "endpoints", label: "Endpoint Logs & Wazuh", type: "input" },
                { id: "network", label: "Network Traffic & Suricata", type: "input" },
                { id: "opensearch", label: "OpenSearch Indexer", type: "storage" },
                { id: "ai_parser", label: "AI Threat Parser & Flask", type: "process" },
                { id: "react_ui", label: "React Security Dashboard", type: "output" }
            ],
            connections: [
                { from: "endpoints", to: "opensearch", label: "Syslogs" },
                { from: "network", to: "opensearch", label: "Alerts" },
                { from: "opensearch", to: "ai_parser", label: "Raw Logs" },
                { from: "ai_parser", to: "react_ui", label: "Correlated Events" }
            ]
        }
    }
];

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    links: {
        github: string;
        demo?: string;
    };
    icon: any;
    featured: boolean;
    date: string;
    highlights: string[];
}

export const projects: Project[] = [
    {
        title: "Agentic RAG Orchestrator",
        description: "Production-ready multi-agent Retrieval-Augmented Generation system using LangGraph, Gemini, embeddings, and Qdrant. Implements dynamic query routing and evaluation loops.",
        techStack: ["LangGraph", "Google Gemini", "Qdrant", "Python", "RAG"],
        links: {
            github: "https://github.com/sreeram0343/agentic-rag"
        },
        icon: Cpu,
        featured: false,
        date: "2026",
        highlights: ["Multi-agent orchestration", "Gemini embeddings", "Qdrant vector search"]
    },
    {
        title: "Simple Transformer Chatbot",
        description: "A GPT-style transformer chatbot built from scratch to understand attention mechanisms, positional encoding, and transformer decoder architecture.",
        techStack: ["Python", "PyTorch", "Deep Learning", "NLP"],
        links: {
            github: "https://github.com/sreeram0343/projects"
        },
        icon: Play,
        featured: false,
        date: "2025",
        highlights: ["Transformer architecture from scratch", "Self-attention mechanisms", "PyTorch training loop"]
    },
    {
        title: "House Price Prediction",
        description: "Machine learning regression project using Scikit-learn with rigorous data preprocessing, feature engineering, model evaluation, and prediction pipeline.",
        techStack: ["Scikit-learn", "Python", "Pandas", "NumPy"],
        links: {
            github: "https://github.com/sreeram0343/projects"
        },
        icon: Code,
        featured: false,
        date: "2025",
        highlights: ["Feature engineering pipeline", "Scikit-learn regression models", "Model evaluation metrics"]
    },
    {
        title: "E-Commerce Data Lakehouse",
        description: "Modern data engineering pipeline designed for scale. Employs Apache Spark for ETL processing, Apache Iceberg for transaction management, and MinIO storage.",
        techStack: ["Apache Spark", "Apache Iceberg", "MinIO", "Docker Compose", "Python"],
        links: {
            github: "https://github.com/sreeram0343/lakehouse-pipeline"
        },
        icon: Database,
        featured: false,
        date: "2026",
        highlights: ["Apache Iceberg ACID transactions", "PySpark ETL processing", "Dockerized MinIO storage"]
    },
    {
        title: "Nammude Kerala",
        description: "Reddit-inspired civic discussion and issue reporting platform. Enables localized community engagement, civic reporting, and discussion channels focused on Kerala.",
        techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"],
        links: {
            github: "https://github.com/sreeram0343/projects"
        },
        icon: FileText,
        featured: false,
        date: "2025",
        highlights: ["Next.js app router", "PostgreSQL civic database", "Civic issue reporting flow"]
    }
];

export const techStack = [
    {
        category: "Languages",
        items: ["Python", "Java", "C", "C++"],
        color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20"
    },
    {
        category: "AI / ML",
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"],
        color: "from-purple-500/10 to-indigo-500/10 border-purple-500/20"
    },
    {
        category: "LLM & Agentic AI",
        items: ["LangGraph", "MCP", "Google Gemini", "RAG", "Vector Databases"],
        color: "from-pink-500/10 to-rose-500/10 border-pink-500/20"
    },
    {
        category: "Backend",
        items: ["FastAPI", "Flask"],
        color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/20"
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS"],
        color: "from-amber-500/10 to-orange-500/10 border-amber-500/20"
    },
    {
        category: "Database",
        items: ["MySQL", "SQLite", "Qdrant"],
        color: "from-violet-500/10 to-fuchsia-500/10 border-violet-500/20"
    },
    {
        category: "DevOps",
        items: ["Docker", "Git", "GitHub"],
        color: "from-red-500/10 to-rose-500/10 border-red-500/20"
    }
];

export const skills = [
    {
        category: "AI Engineering & Autonomous Systems",
        description: "Designing autonomous agentic systems and cognitive RAG pipelines with self-correcting reasoning loops and MCP integrations.",
        icon: Brain,
        items: ["Agentic RAG Workflows", "Multi-Agent Orchestration", "Dynamic Context Routing", "Model Context Protocol (MCP)", "Vector DBs (OpenSearch, Chroma)", "Prompt Engineering & Eval"],
        techStack: ["LangGraph", "Python", "OpenSearch", "ChromaDB", "LLMs"]
    },
    {
        category: "Data Engineering & Cloud Architecture",
        description: "Architecting high-throughput, AI-ready data lakehouses and ETL pipelines running on scalable cloud infrastructure.",
        icon: Database,
        items: ["Lakehouse Architectures", "Big Data Processing (PySpark)", "GCP Analytics Architecture", "Analytics Engineering (dbt)", "ETL/ELT Orchestration", "Schema Evolution & Modeling"],
        techStack: ["Apache Iceberg", "PySpark", "dbt", "GCP", "BigQuery", "SQL"]
    },
    {
        category: "MLOps & Automated Infrastructure",
        description: "Building production-grade CI/CD and MLOps pipelines to ensure rigorous testing, reproducibility, and security of intelligent systems.",
        icon: Terminal,
        items: ["Microservice Containerization", "Automated CI/CD Workflows", "Model Drift & Validation Checks", "Static Code Quality Pipelines", "Model Registries (MLflow)", "Automated Testing (PyTest)"],
        techStack: ["Docker", "GitHub Actions", "FastAPI", "PyTest", "MLflow", "Ruff"]
    },
    {
        category: "Core Engineering & Secure Deployments",
        description: "Implementing scalable backend systems and secure user authentication integrated into continuously deployed full-stack web applications.",
        icon: Code,
        items: ["Backend Architecture (OOP)", "OAuth 2.0 Secure Identity", "Relational & NoSQL DBs", "Modern Frontend Frameworks", "Continuous Deployment", "Secure API Gateway Design"],
        techStack: ["Next.js", "React", "PostgreSQL", "MongoDB", "OAuth 2.0", "Vercel / Render"]
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
        description: "Built an AI-powered SOC MVP in under 6 hours. Secured 1st place.",
        icon: Award
    },
    {
        title: "AI/ML Projects",
        description: "Developed and shipped state-of-the-art agentic RAG structures and custom transformer implementations.",
        icon: Cpu
    },
    {
        title: "Open Source Contributions",
        description: "Actively contributing to open-source repository toolings and Model Context Protocol (MCP) servers.",
        icon: Workflow
    },
    {
        title: "Research-Oriented Development",
        description: "Exploring cognitive loops, long-term memory retrieval systems, and multi-agent reasoning topologies.",
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
