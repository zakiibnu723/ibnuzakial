export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'web' | 'mobile' | 'ai-integration';
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  icon: string;
  badge?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Ibnu Zaki Al",
    title: "Fullstack Web & Android Developer",
    subtitle: "Fresh Graduate • Software Engineering",
    shortBio: "Passionate Fresh Graduate Developer specializing in modern Fullstack Web (React / TypeScript / Node.js) and Native Android (Kotlin / Jetpack Compose). Experienced in integrating open-source Hugging Face AI models into practical web & mobile applications.",
    location: "Indonesia (Open to On-site, Hybrid & Remote)",
    status: "Available for Hire",
    email: "ibnuzakial.dev@gmail.com",
    whatsapp: "+62 812-3456-7890",
    github: "https://github.com/zakiibnu723",
    linkedin: "https://linkedin.com/in/ibnuzakial",
    stats: [
      { label: "Completed Projects", value: "12+" },
      { label: "Core Technologies", value: "8+" },
      { label: "Android & Web Apps", value: "4+" },
    ]
  },

  projects: [
    {
      id: "xray-chest-ai",
      title: "ChestPulse AI",
      subtitle: "Chest X-Ray Disease Classifier & Medical Viewer",
      category: "ai-integration",
      categoryLabel: "AI Integration & Fullstack",
      description: "Web application that allows doctors and students to upload chest X-ray scans and receive instant abnormality classification powered by an open-source Hugging Face vision model.",
      longDescription: "Built an end-to-end fullstack diagnostic assistance tool. Deployed an open-source PyTorch/Torchvision model from Hugging Face behind a fast Python FastAPI backend. The React web client provides DICOM/PNG image dropzone, bounding box abnormality markers, confidence scores, and PDF summary export.",
      tags: ["Python", "FastAPI", "Hugging Face", "PyTorch", "React", "TypeScript", "Tailwind CSS"],
      metrics: [
        { label: "Inference Time", value: "< 450ms" },
        { label: "Classes Detected", value: "14 Conditions" },
        { label: "API Protocol", value: "RESTful JSON" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/ibnuzakial/chest-xray-detection",
      liveUrl: "https://chestpulse-demo.web.app",
      featured: true,
      highlights: [
        "Packaged Hugging Face vision model with PyTorch & Torchvision",
        "FastAPI asynchronous REST endpoint with image preprocessing & resizing",
        "Interactive React canvas preview with probability heatmap overlay",
        "Exportable patient diagnostic report generator (PDF)"
      ]
    },
    {
      id: "voice-clone-app",
      title: "VoxMorph Studio",
      subtitle: "AI Voice Transformation & Cloning Platform",
      category: "ai-integration",
      categoryLabel: "AI Integration & Fullstack",
      description: "Audio processing web application wrapping open-source Hugging Face TTS and voice conversion models with interactive waveform visualization.",
      longDescription: "Developed a creative audio workbench enabling users to record voice clips and convert them into customized vocal profiles. Uses an open-source Hugging Face voice conversion model served via FastAPI, with real-time waveform scrubbing on the React frontend using Web Audio API.",
      tags: ["Python", "FastAPI", "Hugging Face Models", "React", "Web Audio API", "Node.js"],
      metrics: [
        { label: "Audio Processing", value: "~1.2s Latency" },
        { label: "Voice Presets", value: "8+ Profiles" },
        { label: "Audio Format", value: "WAV / MP3" }
      ],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/ibnuzakial/voxmorph-voice-changer",
      liveUrl: "https://voxmorph.web.app",
      featured: true,
      highlights: [
        "Inference server utilizing open-source audio models from Hugging Face",
        "Client-side mic audio recorder with real-time spectrum visualizer",
        "FastAPI streaming endpoint returning converted audio buffer",
        "User library to save and export generated audio clips"
      ]
    },
    {
      id: "taskflow-android",
      title: "TaskFlow Mobile",
      subtitle: "Modern Offline-First Native Android Task & Habit Tracker",
      category: "mobile",
      categoryLabel: "Android Kotlin",
      description: "Native Android application built with 100% Kotlin & Jetpack Compose, featuring offline-first Room SQLite caching and smooth Material 3 animations.",
      longDescription: "A polished native mobile application designed with modern Android best practices. Uses unidirectional data flow (MVVM/MVI), Kotlin Coroutines and StateFlow for reactive UI, Room database for instant offline access, and WorkManager for scheduled reminders.",
      tags: ["Kotlin", "Jetpack Compose", "Coroutines & Flow", "Room DB", "Material 3", "Retrofit"],
      metrics: [
        { label: "Architecture", value: "Clean MVVM" },
        { label: "Offline Mode", value: "100% Functional" },
        { label: "UI Framework", value: "Jetpack Compose" }
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/ibnuzakial/taskflow-android",
      featured: true,
      highlights: [
        "Built purely with Jetpack Compose & Material 3 dynamic color theming",
        "Offline-first architecture with Room SQLite database & DAO pattern",
        "Coroutines & StateFlow for non-blocking asynchronous operations",
        "Retrofit REST client with OkHttp interceptors and error handling"
      ]
    },
    {
      id: "dev-hub-platform",
      title: "OmniCart Commerce",
      subtitle: "Fullstack E-Commerce & Inventory Management Portal",
      category: "web",
      categoryLabel: "Fullstack Web",
      description: "End-to-end web store and dashboard featuring product catalog, cart persistence, order processing, and administrative inventory controls.",
      longDescription: "A complete fullstack web application crafted to solve real store management problems. Features JWT authentication, role-based access control (Admin & Customer), PostgreSQL database with Prisma ORM, and a responsive React frontend with instant search filtering.",
      tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
      metrics: [
        { label: "Database", value: "PostgreSQL" },
        { label: "Auth Flow", value: "JWT + Cookies" },
        { label: "Page Speed", value: "Sub-second" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/ibnuzakial/omnicart-fullstack",
      liveUrl: "https://omnicart-demo.web.app",
      featured: false,
      highlights: [
        "REST API built with Node.js, Express, and structured TypeScript controllers",
        "Relational database schema with PostgreSQL, Prisma ORM, and seeders",
        "Secure password hashing with bcrypt and JWT authorization middleware",
        "Responsive administrative dashboard with charts and product inventory CRUD"
      ]
    }
  ] as Project[],

  techStack: [
    // Frontend
    { name: "React", category: "frontend", icon: "Code2", badge: "Core" },
    { name: "TypeScript", category: "frontend", icon: "FileCode2", badge: "Primary" },
    { name: "JavaScript (ES6+)", category: "frontend", icon: "Code", badge: "Core" },
    { name: "Next.js", category: "frontend", icon: "Globe", badge: "Framework" },
    { name: "Tailwind CSS", category: "frontend", icon: "Palette", badge: "Styling" },
    { name: "HTML5 & CSS3", category: "frontend", icon: "Layout", badge: "Fundamental" },

    // Backend & DB
    { name: "Node.js", category: "backend", icon: "Server", badge: "Runtime" },
    { name: "Express.js", category: "backend", icon: "Cpu", badge: "Backend" },
    { name: "Python", category: "backend", icon: "Terminal", badge: "Backend & AI" },
    { name: "FastAPI", category: "backend", icon: "Zap", badge: "API Server" },
    { name: "PostgreSQL", category: "backend", icon: "Database", badge: "Database" },
    { name: "MySQL", category: "backend", icon: "Database", badge: "Database" },
    { name: "Prisma ORM", category: "backend", icon: "Layers", badge: "ORM" },
    { name: "RESTful APIs", category: "backend", icon: "Network", badge: "Architecture" },

    // Mobile
    { name: "Kotlin", category: "mobile", icon: "Smartphone", badge: "Android Core" },
    { name: "Jetpack Compose", category: "mobile", icon: "Layers", badge: "Modern UI" },
    { name: "Android Studio", category: "mobile", icon: "Cpu", badge: "IDE" },
    { name: "Room SQLite", category: "mobile", icon: "Database", badge: "Local DB" },
    { name: "Coroutines & Flow", category: "mobile", icon: "Activity", badge: "Async" },
    { name: "Retrofit / OkHttp", category: "mobile", icon: "Network", badge: "Networking" },

    // Tools & AI Integration
    { name: "Hugging Face Models", category: "tools", icon: "Sparkles", badge: "AI Integration" },
    { name: "Git & GitHub", category: "tools", icon: "GitBranch", badge: "VCS" },
    { name: "Postman", category: "tools", icon: "Send", badge: "API Testing" },
    { name: "Docker (Basic)", category: "tools", icon: "Box", badge: "DevOps" },
    { name: "VS Code", category: "tools", icon: "Terminal", badge: "Editor" },
    { name: "Figma (UI Slice)", category: "tools", icon: "Figma", badge: "Design" },
  ] as TechItem[],

  experiences: [
    {
      period: "2024 — PRESENT",
      role: "Junior Fullstack & Mobile Developer (Freelance / Projects)",
      company: "Independent Developer",
      location: "Indonesia",
      description: "Developing custom web applications and native Android apps for clients and independent portfolio showcase. Integrating open-source Hugging Face models into practical client workflows.",
      achievements: [
        "Shipped 4+ complete web and mobile projects with clean architectures and zero critical bugs.",
        "Engineered RESTful API backends with FastAPI and Express connected to relational databases.",
        "Built responsive user interfaces with React, Tailwind CSS, and Jetpack Compose."
      ],
      skills: ["React", "TypeScript", "Kotlin", "Compose", "FastAPI", "PostgreSQL", "Tailwind"]
    },
    {
      period: "2023 — 2024",
      role: "Software Engineering Intern / Capstone Lead",
      company: "Tech Project Lab / Academic Capstone",
      location: "Indonesia",
      description: "Led a team of students in developing fullstack applications and native mobile prototypes. Implemented state management, database schema design, and API integrations.",
      achievements: [
        "Spearheaded database modeling and endpoint architecture for student management and medical vision capstone.",
        "Implemented clean Git branching workflows, code reviews, and API documentation with Swagger/Postman.",
        "Awarded Outstanding Capstone Project distinction for clean execution."
      ],
      skills: ["Kotlin", "Android", "React", "Node.js", "MySQL", "Git"]
    }
  ],

  cvDetails: {
    summary: "Motivated Fresh Graduate in Computer Science / Software Engineering with a strong focus on modern Fullstack Web Development (React, TypeScript, Node.js) and Native Android Development (Kotlin, Jetpack Compose). Practical experience in integrating open-source Hugging Face AI models into production-ready web and mobile backends. Fast learner, detail-oriented, and ready to contribute directly to team engineering goals.",
    education: [
      {
        degree: "Bachelor of Science in Computer Science / Informatics",
        institution: "Universitas / Institute of Technology",
        year: "2020 — 2024",
        gpa: "GPA: 3.75 / 4.00"
      }
    ],
    certifications: [
      "Android Development with Kotlin & Jetpack Compose",
      "Fullstack Web Development (React & Node.js)",
      "RESTful API Development with Python FastAPI",
      "Database Design with PostgreSQL & MySQL"
    ]
  }
};
