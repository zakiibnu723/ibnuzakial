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
    shortBio: "Informatics student at UIN Sunan Kalijaga Yogyakarta specializing in modern Fullstack Web Development (React / TypeScript / Next.js / Node.js) and Mobile Application Development (Flutter / Kotlin / Jetpack Compose). Winner of multiple national awards in web development and technological innovation competitions.",
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
      id: "voiz-ai",
      title: "Voiz.AI 🎙️",
      subtitle: "Native Android Voice Morphing & Zero-Shot Clone Studio",
      category: "mobile",
      categoryLabel: "Mobile Engineering & Audio",
      description: "High-fidelity native Android application for voice cloning and neural speech transformation, featuring a dual-input Clone Studio, real-time voice tuning, and low-latency Cloudflare R2 streaming.",
      longDescription: "Architected and engineered a native Android application built with Jetpack Compose, connecting to zero-shot voice synthesis backends and Cloudflare R2 audio pipelines. Features Obsidian glassmorphic design, dual-input audio cloning (live microphone recording & file picker), live speed/pitch tuning sliders, persistent local gallery with native system sharing, and a signed production release bundle for Google Play.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "FastAPI", "Supabase", "Cloudflare R2", "Hugging Face", "Neural Audio"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "Target SDK", value: "Android 15 (SDK 36)" },
        { label: "Audio Engine", value: "Cloudflare R2 CDN" }
      ],
      image: "/voiz-ai.png",
      images: [
        "/voiz-ai.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "Native Android Jetpack Compose UI with Obsidian glassmorphism and neon gradients",
        "Dual-Input Clone Studio supporting live microphone recording and audio file picker",
        "Real-time Voice Tuning Modal with live playback speed (0.7x–1.35x) and pitch depth sliders",
        "Zero-shot neural voice profile resolution with Cloudflare R2 audio streaming pipeline",
        "Persistent Local Gallery with native Android Intent sharing (WhatsApp, TikTok, Telegram)",
        "Production-ready signed release bundle (v1.0, 11.4MB AAB) prepared for Google Play Console"
      ]
    },
    {
      id: "jsonflow",
      title: "JSONFlow ⚡",
      subtitle: "High-Performance Native Android JSON & API Tree Editor",
      category: "mobile",
      categoryLabel: "Mobile Engineering & DevTools",
      description: "Engineered to solve severe usability bottlenecks in mobile developer tools: lag-free parsing of large JSON files (>50MB), interactive collapsible node hierarchy, and an ad-free experience.",
      longDescription: "A developer-first Android utility built natively in Kotlin and Jetpack Compose to inspect, parse, validate, and format complex JSON and API responses on mobile devices. Eliminates annoying full-screen ads, laggy UI thread locks, and paywalls seen in legacy Play Store tools through virtualized tree rendering and blazing-fast streaming parsers.",
      tags: ["Android", "Kotlin", "Jetpack Compose", "JSON Parser", "DevTools", "Performance Engine", "Mobile"],
      metrics: [
        { label: "Platform", value: "Native Android" },
        { label: "File Handling", value: "Up to 50MB+ No Lag" },
        { label: "UX Philosophy", value: "100% Ad-Free DevTool" }
      ],
      image: "/jsonflow.png",
      images: [
        "/jsonflow.png"
      ],
      githubUrl: "",
      liveUrl: "",
      featured: true,
      highlights: [
        "High-throughput streaming parser handling heavy JSON datasets (>50MB) without UI thread freeze",
        "Interactive collapsible tree hierarchy with syntax color tokens and deep node searching",
        "Instant JSON syntax validation with precise error line highlighting",
        "Zero obtrusive ads, tracking, or paywalls—pure developer-centric productivity workflow",
        "Native file opener integration, clipboard formatting, and instant export/share utilities"
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
    summary: "Dedicated Informatics student at UIN Sunan Kalijaga Yogyakarta specializing in modern Fullstack Web Development (React, TypeScript, Next.js, Node.js) and Native & Cross-Platform Mobile Engineering (Flutter, Kotlin, Jetpack Compose). Winner of multiple national web development and innovation competitions (INTECH FEST 2025, I/O FEST 2025, NIW 3.0). Experienced in architecting production-grade platforms with clean code, responsive UI, and optimal performance.",
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
      "Geospatial Data Visualization & Leaflet Interactive Mapping"
    ]
  }
};
