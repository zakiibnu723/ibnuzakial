export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'all' | 'web' | 'mobile';
  categoryLabel: string;
  description: string;
  longDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
  images?: string[];
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
    title: "Fullstack Web & Mobile Developer",
    subtitle: "Fresh Graduate • Software Engineering",
    shortBio: "Passionate Fresh Graduate Developer specializing in modern Fullstack Web (React / TypeScript / Next.js / Node.js) and Native & Cross-Platform Mobile Application Development (Kotlin / Flutter / Jetpack Compose). Dedicated to engineering high-performance software with clean architectures and intuitive user experiences.",
    location: "Indonesia (Open to On-site, Hybrid & Remote)",
    status: "Available for Hire",
    email: "zakiibnu723@gmail.com",
    whatsapp: "+62 858-6217-4003",
    whatsappRaw: "6285862174003",
    github: "https://github.com/zakiibnu723",
    linkedin: "https://linkedin.com/in/ibnuzakial",
    stats: [
      { label: "Completed Projects", value: "12+" },
      { label: "Core Technologies", value: "8+" },
      { label: "Web & Mobile Apps", value: "6+" },
    ]
  },

  projects: [
    {
      id: "lively-weather",
      title: "Lively Weather ⛅",
      subtitle: "Next.js 14 Fullstack Atmospheric Forecast App",
      category: "web",
      categoryLabel: "Fullstack Web & Data Viz",
      description: "Atmospheric weather forecast application featuring dynamic reactive video/image background themes, interactive 7-day weather predictions, and a synchronized 24-hour hourly forecast chart.",
      longDescription: "Upgraded from a vanilla JS project into a modern, production-grade Fullstack Next.js (App Router + TypeScript + Prisma ORM) platform. Preserves 100% pixel-perfect glassmorphism layout while introducing server-side API proxy protection, smart 30-minute in-memory caching, rate-limit resilience, and SQLite search history persistence.",
      tags: ["Next.js 14", "React 18", "TypeScript", "Prisma ORM", "Chart.js", "SQLite", "Glassmorphism", "Visual Crossing API"],
      metrics: [
        { label: "Framework", value: "Next.js 14" },
        { label: "API Caching", value: "30-min TTL" },
        { label: "Database", value: "Prisma SQLite" }
      ],
      image: "/lively-weather-1.png",
      images: [
        "/lively-weather-1.png",
        "/lively-weather-2.png",
        "/lively-weather-3.png"
      ],
      githubUrl: "https://github.com/zakiibnu723/Lively-Weather",
      liveUrl: "https://lively-weather.vercel.app/",
      featured: true,
      highlights: [
        "100% Pixel-Perfect Glassmorphism Layout with dynamic video background atmospheric engine",
        "Backend API Proxy protecting Visual Crossing API key securely on the server-side",
        "Smart In-Memory & Server Caching with automatic fallback offline dataset on rate-limits",
        "Prisma ORM with SQLite database storing location search history and favorites",
        "Interactive Chart.js 24-hour hourly temperature and weather curve visualizer"
      ]
    },
    {
      id: "solar-energy-map",
      title: "Indonesia Solar Energy Map 🗺️",
      subtitle: "Interactive Geospatial Solar Irradiance Analytics Platform",
      category: "web",
      categoryLabel: "Geospatial & Fullstack Web",
      description: "Interactive full-stack geospatial platform that visualizes renewable solar irradiance potential data (GHI, DHI, DNI) across 37 provinces and 514 districts/cities throughout Indonesia.",
      longDescription: "Engineered an end-to-end geospatial platform powered by Next.js 16+, Prisma ORM, and dynamic Leaflet choropleth maps with CartoDB Dark basemaps and custom neon GHI gradient scales. Eliminates client request waterfalls with server-side aggregation and on-demand GeoJSON boundaries.",
      tags: ["Next.js 16+", "Leaflet", "React-Leaflet", "Prisma ORM", "TypeScript", "Chart.js", "GeoJSON", "Open-Meteo API"],
      metrics: [
        { label: "Provinces & Districts", value: "37 & 514" },
        { label: "Irradiance Metrics", value: "GHI, DHI, DNI" },
        { label: "Mapping Engine", value: "Leaflet Choropleth" }
      ],
      image: "/solarmap-1.png",
      images: [
        "/solarmap-1.png",
        "/solarmap-2.png",
        "/solarmap-3.png"
      ],
      githubUrl: "https://github.com/zakiibnu723/solar-energy-map/",
      liveUrl: "https://solar-energy-map.vercel.app/",
      featured: true,
      highlights: [
        "High-Performance Geospatial Choropleth Map with CartoDB Dark basemap and GHI neon gradients",
        "Zero Request Waterfalls: Server-side summary endpoints replacing 38+ client waterfalls",
        "On-Demand GeoJSON Delivery filtering 8.7MB boundary payloads dynamically",
        "Dynamic Time-Series Visualizer with GHI, DHI, and DNI irradiance metrics via Chart.js",
        "Interactive Temporal Filters with Daily, Monthly, and Yearly frequency views",
        "Adaptive Responsive Design: Desktop HUD side-drawer converting into mobile bottom-sheet"
      ]
    },
    {
      id: "taskflow-mobile",
      title: "TaskFlow Mobile",
      subtitle: "Modern Offline-First Native Android & Mobile Task Suite",
      category: "mobile",
      categoryLabel: "Mobile Engineering",
      description: "Native mobile application built with 100% Kotlin & Jetpack Compose, featuring offline-first Room SQLite caching, smooth Material 3 animations, and companion Flutter architecture.",
      longDescription: "A polished native mobile application designed with modern mobile best practices. Uses unidirectional data flow (MVVM/MVI), Kotlin Coroutines and StateFlow for reactive UI, Room database for instant offline access, and WorkManager for scheduled reminders.",
      tags: ["Kotlin", "Jetpack Compose", "Flutter", "Coroutines & Flow", "Room DB", "Material 3", "Retrofit"],
      metrics: [
        { label: "Architecture", value: "Clean MVVM" },
        { label: "Offline Mode", value: "100% Functional" },
        { label: "UI Framework", value: "Jetpack Compose" }
      ],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
      githubUrl: "https://github.com/zakiibnu723/taskflow-android",
      featured: false,
      highlights: [
        "Built purely with Jetpack Compose & Material 3 dynamic color theming",
        "Offline-first architecture with Room SQLite database & DAO pattern",
        "Coroutines & StateFlow for non-blocking asynchronous operations",
        "Cross-platform architecture exploration using Flutter for shared business logic"
      ]
    },
    {
      id: "omnicart-commerce",
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
      githubUrl: "https://github.com/zakiibnu723/omnicart-fullstack",
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
    { name: "Next.js", category: "frontend", icon: "Globe", badge: "Framework" },
    { name: "TypeScript", category: "frontend", icon: "FileCode2", badge: "Primary" },
    { name: "JavaScript (ES6+)", category: "frontend", icon: "Code", badge: "Core" },
    { name: "Tailwind CSS", category: "frontend", icon: "Palette", badge: "Styling" },
    { name: "HTML5 & CSS3", category: "frontend", icon: "Layout", badge: "Fundamental" },

    // Backend & DB
    { name: "Node.js", category: "backend", icon: "Server", badge: "Runtime" },
    { name: "Express.js", category: "backend", icon: "Cpu", badge: "Backend" },
    { name: "Python", category: "backend", icon: "Terminal", badge: "Backend" },
    { name: "FastAPI", category: "backend", icon: "Zap", badge: "API Server" },
    { name: "PostgreSQL", category: "backend", icon: "Database", badge: "Database" },
    { name: "SQLite", category: "backend", icon: "Database", badge: "Local DB" },
    { name: "Prisma ORM", category: "backend", icon: "Layers", badge: "ORM" },
    { name: "RESTful APIs", category: "backend", icon: "Network", badge: "Architecture" },

    // Mobile
    { name: "Kotlin", category: "mobile", icon: "Smartphone", badge: "Android Core" },
    { name: "Flutter", category: "mobile", icon: "Layers", badge: "Cross-Platform" },
    { name: "Dart", category: "mobile", icon: "Code", badge: "Language" },
    { name: "Jetpack Compose", category: "mobile", icon: "Layers", badge: "Modern UI" },
    { name: "Android Studio", category: "mobile", icon: "Cpu", badge: "IDE" },
    { name: "Room SQLite", category: "mobile", icon: "Database", badge: "Local DB" },
    { name: "Coroutines & Flow", category: "mobile", icon: "Activity", badge: "Async" },
    { name: "Retrofit / OkHttp", category: "mobile", icon: "Network", badge: "Networking" },

    // Tools & Engineering
    { name: "Git & GitHub", category: "tools", icon: "GitBranch", badge: "VCS" },
    { name: "Postman", category: "tools", icon: "Send", badge: "API Testing" },
    { name: "Leaflet / Geospatial", category: "tools", icon: "Globe", badge: "Mapping" },
    { name: "Chart.js", category: "tools", icon: "Activity", badge: "Analytics" },
    { name: "Docker (Basic)", category: "tools", icon: "Box", badge: "DevOps" },
    { name: "VS Code", category: "tools", icon: "Terminal", badge: "Editor" },
    { name: "Figma (UI Slice)", category: "tools", icon: "PenTool", badge: "Design" },
  ] as TechItem[],

  experiences: [
    {
      period: "2024 — PRESENT",
      role: "Junior Fullstack & Mobile Developer (Freelance / Projects)",
      company: "Independent Developer",
      location: "Indonesia",
      description: "Developing fullstack web applications and native & cross-platform mobile apps (Kotlin & Flutter). Architecting clean RESTful backends with Next.js, Express, and FastAPI connected to SQLite and PostgreSQL.",
      achievements: [
        "Architected and deployed fullstack geospatial platform 'Indonesia Solar Energy Map' using Next.js, Leaflet, and Prisma.",
        "Built and scaled 'Lively Weather' with server-side Visual Crossing API proxy and Chart.js forecast analytics.",
        "Shipped native Android applications with Jetpack Compose, Room SQLite offline-first sync, and clean MVVM architecture."
      ],
      skills: ["Next.js", "React", "TypeScript", "Kotlin", "Flutter", "Prisma", "Leaflet", "Chart.js", "Tailwind"]
    },
    {
      period: "2023 — 2024",
      role: "Software Engineering Intern / Academic Capstone Lead",
      company: "Tech Project Lab / Academic Capstone",
      location: "Indonesia",
      description: "Led a team of students in developing fullstack applications and native mobile prototypes. Implemented state management, database schema design, and API integrations.",
      achievements: [
        "Spearheaded database modeling and endpoint architecture for student management and geospatial data visualization capstone.",
        "Implemented clean Git branching workflows, code reviews, and API documentation with Swagger/Postman.",
        "Awarded Outstanding Capstone Project distinction for clean execution."
      ],
      skills: ["Kotlin", "Android", "React", "Node.js", "MySQL", "Git"]
    }
  ],

  cvDetails: {
    summary: "Motivated Fresh Graduate in Computer Science / Software Engineering with a strong focus on modern Fullstack Web Development (Next.js, React, TypeScript, Node.js) and Native & Cross-Platform Mobile Development (Kotlin, Flutter, Jetpack Compose). Proven capability building production-grade web systems like interactive geospatial mapping and dynamic fullstack weather engines. Fast learner, detail-oriented, and ready to contribute directly to team engineering goals.",
    education: [
      {
        degree: "Bachelor of Science in Computer Science / Informatics",
        institution: "Universitas / Institute of Technology",
        year: "2020 — 2024",
        gpa: "GPA: 3.75 / 4.00"
      }
    ],
    certifications: [
      "Modern Android Development with Kotlin & Jetpack Compose",
      "Cross-Platform Mobile Application Development with Flutter",
      "Fullstack Web Development with Next.js, React & Node.js",
      "Database Design & ORM Integration with Prisma & PostgreSQL"
    ]
  }
};
