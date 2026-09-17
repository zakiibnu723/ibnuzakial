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
    subtitle: "Informatics • UIN Sunan Kalijaga Yogyakarta (2022 — 2026 Expected)",
    shortBio: "Fullstack Web & Mobile Developer focused on engineering production-ready applications and scalable digital solutions. I transform real-world problems into high-performance web platforms and intuitive mobile apps that prioritize smooth user experiences, solid architecture, and measurable impact.",
    location: "Indonesia (Open to On-site, Hybrid & Remote)",
    status: "Available for Hire",
    email: "zakiibnu723@gmail.com",
    whatsapp: "+62 858-6217-4003",
    whatsappRaw: "6285862174003",
    github: "https://github.com/zakiibnu723",
    linkedin: "https://linkedin.com/in/ibnuzakial",
    stats: [
      { label: "Completed Projects", value: "12+" },
      { label: "National Awards", value: "3" },
      { label: "Web & Mobile Apps", value: "6+" },
    ]
  },

  projects: [
    {
      id: "lively-weather",
      title: "Lively Weather ⛅",
      subtitle: "Real-Time Global Weather Forecast & Atmospheric Dashboard",
      category: "web",
      categoryLabel: "Fullstack Web & Data Viz",
      description: "A modern real-time weather platform capable of tracking global climate conditions. Enables users to monitor current weather, dynamic 24-hour hourly trends, and comprehensive 7-day forecasts for any city worldwide with immersive atmospheric visuals.",
      longDescription: "Lively Weather delivers accurate, real-time meteorological forecasts wrapped in an intuitive and visually engaging interface. Designed to give users instant clarity on atmospheric conditions, the app features interactive location searching, animated background environments that adapt to live weather states, synchronized hourly temperature curves, and extended weekly outlooks with offline-resilient caching.",
      tags: ["Next.js 14", "React 18", "TypeScript", "Prisma ORM", "Chart.js", "SQLite", "Glassmorphism", "Visual Crossing API"],
      metrics: [
        { label: "Coverage", value: "Global Forecast" },
        { label: "Frequency", value: "Hourly & 7-Day" },
        { label: "Experience", value: "Adaptive Visuals" }
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
        "Worldwide instant city & coordinate weather lookup with responsive search",
        "Adaptive ambient weather themes dynamically matching live conditions (Rain, Clear, Clouds, Storm)",
        "Synchronized 24-hour hourly trend visualizer for temperature and precipitation curve",
        "7-day daily forecast breakdown with UV index, wind speed, humidity, and atmospheric metrics",
        "Smart fast-caching system ensuring instant page reloads and smooth user flow"
      ]
    },
    {
      id: "solar-energy-map",
      title: "Indonesia Solar Energy Map 🗺️",
      subtitle: "Interactive National Solar Potential & Geospatial Analytics Platform",
      category: "web",
      categoryLabel: "Geospatial & Fullstack Web",
      description: "An interactive geospatial visualization tool mapping renewable solar energy potential across Indonesia. Features hierarchical navigation from national down to district levels, regional irradiation statistics, and clean energy feasibility analysis.",
      longDescription: "Indonesia Solar Energy Map transforms complex solar irradiance datasets into an accessible, interactive geospatial platform. Built to support renewable energy exploration, researchers, and project planners, the tool allows users to seamlessly explore Global Horizontal Irradiance (GHI) benchmarks across 37 provinces and 500+ districts with detailed temporal analytics and estimation metrics.",
      tags: ["Next.js 16+", "Leaflet", "React-Leaflet", "Prisma ORM", "TypeScript", "Chart.js", "GeoJSON", "Open-Meteo API"],
      metrics: [
        { label: "Provinces & Districts", value: "37 & 514" },
        { label: "Analytics", value: "GHI, DHI, DNI" },
        { label: "Scope", value: "National Scale" }
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
        "Interactive choropleth map with smooth hierarchical zoom across Indonesia's archipelago",
        "Comprehensive solar irradiance metrics breakdown (GHI, DHI, and DNI metrics)",
        "Temporal energy analytics with daily, monthly, and annual radiation comparison charts",
        "Regional benchmark summary and clean energy feasibility insights per district",
        "Lightweight, fast-loading geospatial delivery optimized for desktop and mobile devices"
      ]
    },
    {
      id: "voiz-ai",
      title: "Voiz.AI 🎙️",
      subtitle: "Smart Mobile Voice Transformation & Custom Audio Studio",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Audio",
      description: "An intuitive mobile audio application enabling users to transform speech and create custom voice clones in seconds. Features dual-input audio capture, live tempo & pitch adjustments, and seamless export to social platforms.",
      longDescription: "Voiz.AI provides a seamless mobile studio experience for voice synthesis and creative audio morphing. Designed with modern aesthetics and fluid controls, users can easily speak into the microphone or import existing audio files to generate realistic character voices. The app features built-in fine-tuning controls to adjust pitch and pacing in real time, alongside a personal voice library for saving, managing, and sharing creations directly with friends and team members.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "FastAPI", "Supabase", "Cloudflare R2", "Hugging Face", "Neural Audio"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "Audio Capture", value: "Mic & File Upload" },
        { label: "Controls", value: "Real-Time Tuning" }
      ],
      image: "/voiz-ai.png",
      images: [
        "/voiz-ai.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "Instant speech morphing into diverse character and neural voice profiles",
        "Dual-input studio supporting direct microphone recording and multi-format audio uploads",
        "Real-time tuning console to calibrate speech tempo, tone depth, and playback pacing",
        "Personal audio collection to bookmark favorite voices and organize custom creations",
        "One-tap direct export and sharing to WhatsApp, Telegram, and social media platforms"
      ]
    },
    {
      id: "jsonflow",
      title: "JSONFlow ⚡",
      subtitle: "High-Performance Mobile JSON Inspector & API Data Viewer",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "A developer-centric mobile utility designed to inspect, parse, and navigate complex JSON data and API responses directly on your phone. Engineered for smooth handling of large payloads with zero lag.",
      longDescription: "JSONFlow empowers developers, QA engineers, and tech teams to debug, validate, and analyze structured JSON datasets on the go. Built to eliminate lag and crashes when handling heavy API responses, the app features an intuitive collapsible tree view, instant key-value search, automated syntax error detection, and flexible formatting tools to turn raw data into clean, readable structures anywhere.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "JSON Parser", "DevTools", "Performance Engine", "Mobile"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "File Handling", value: "Heavy Payloads" },
        { label: "Visualization", value: "Collapsible Tree" }
      ],
      image: "/jsonflow.png",
      images: [
        "/jsonflow.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "High-speed data processing engine capable of rendering large files smoothly without lag",
        "Interactive collapsible tree view with syntax color-coding for effortless hierarchy exploration",
        "Instant smart search to quickly locate specific keys, values, or deeply nested objects",
        "Real-time JSON validation with precise error indicators and line pinpointing",
        "One-click formatting, beautification, clipboard copying, and file export for rapid testing"
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
    { name: "Flutter", category: "mobile", icon: "Layers", badge: "Cross-Platform" },
    { name: "Dart", category: "mobile", icon: "Code", badge: "Language" },
    { name: "Kotlin", category: "mobile", icon: "Smartphone", badge: "Android Core" },
    { name: "Jetpack Compose", category: "mobile", icon: "Layers", badge: "Modern UI" },

    // Tools & Engineering
    { name: "Git & GitHub", category: "tools", icon: "GitBranch", badge: "VCS" },
    { name: "Leaflet / Geospatial", category: "tools", icon: "Globe", badge: "Mapping" },
    { name: "Chart.js", category: "tools", icon: "Activity", badge: "Analytics" },
    { name: "VS Code", category: "tools", icon: "Terminal", badge: "Editor" },
  ] as TechItem[],

  experiences: [
    {
      period: "September 29, 2025",
      role: "2nd Place Winner (Silver) — Web Design Competition",
      institution: "INTECH FEST 2025",
      location: "Politeknik Negeri Bali (Bali, Indonesia)",
      awardBadge: "2nd Place (Juara 2)",
      description: "Engineered and designed a production-ready interactive web application showcasing Indonesia's prime tourist destinations, local culture, and travel attractions to elevate national tourism engagement.",
      skills: ["Web Design", "UI/UX", "Frontend Engineering", "Tourism Platform"]
    },
    {
      period: "August 8, 2025",
      role: "3rd Place Winner (Bronze) — Web Development Competition",
      institution: "I/O FEST 2025",
      location: "Universitas Tarumanagara (Jakarta, Indonesia)",
      awardBadge: "3rd Place (Juara 3)",
      description: "Developed a ready-to-deploy web application engineered to solve real-world educational challenges in Indonesia, directly supporting UN Sustainable Development Goals (SDG 4: Quality Education).",
      skills: ["Web Development", "SDGs Quality Education", "React", "Fullstack Architecture"]
    },
    {
      period: "January 12, 2025",
      role: "National Finalist — National Innovation Week 3.0",
      institution: "National Innovation Week Competition 3.0",
      location: "Universitas Darussalam (UNIDA) Gontor",
      awardBadge: "National Finalist",
      description: "Formulated and presented an innovative technological platform addressing critical problems in the economic and business sectors through scalable, real-world software architecture.",
      skills: ["Technology Innovation", "Business & Economy", "System Architecture", "Software Solution"]
    }
  ],

  cvDetails: {
    summary: "Dedicated Informatics student at UIN Sunan Kalijaga Yogyakarta specializing in modern Fullstack Web Development (React, TypeScript, Next.js, Node.js) and Native & Cross-Platform Mobile Engineering (Flutter, Kotlin, Jetpack Compose). Winner of multiple national web development and innovation competitions (INTECH FEST 2025, I/O FEST 2025, NIW 3.0). Experienced in architecting production-grade platforms, interactive data visualization, and scalable monitoring systems.",
    education: [
      {
        degree: "Bachelor of Science in Informatics / Computer Science (S1)",
        institution: "UIN Sunan Kalijaga Yogyakarta",
        year: "2022 — 2026 (Expected)",
        gpa: "Informatics Engineering"
      }
    ],
    certifications: [
      "2nd Place Winner (Juara 2) — Web Design Competition, INTECH FEST 2025 (Politeknik Negeri Bali)",
      "3rd Place Winner (Juara 3) — Web Development Competition, I/O FEST 2025 (Universitas Tarumanagara Jakarta)",
      "National Finalist — National Innovation Week 3.0 (Universitas Darussalam Gontor)",
      "Mobile Application Development with Flutter & Native Kotlin",
      "Fullstack Web Engineering with Next.js, React, Node.js & TypeScript",
      "Interactive Data Visualization & Real-Time Monitoring Systems"
    ]
  }
};
