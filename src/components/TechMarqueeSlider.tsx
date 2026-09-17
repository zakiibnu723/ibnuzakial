import React from 'react';
import { 
  Zap, 
  Smartphone, 
  Cpu, 
  Globe, 
  MapPin, 
  CloudSun, 
  Trophy, 
  Rocket, 
  Database, 
  Sparkles 
} from 'lucide-react';

interface MarqueeItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  color: string;
}

export const TechMarqueeSlider: React.FC = () => {
  const items: MarqueeItem[] = [
    {
      icon: <Zap size={14} style={{ color: '#38bdf8' }} />,
      label: "Fullstack Web Systems",
      badge: "React • Next.js • TS",
      color: "rgba(56, 189, 248, 0.15)"
    },
    {
      icon: <Smartphone size={14} style={{ color: '#a78bfa' }} />,
      label: "Mobile Engineering",
      badge: "Kotlin • Compose • Flutter",
      color: "rgba(167, 139, 250, 0.15)"
    },
    {
      icon: <Cpu size={14} style={{ color: '#34d399' }} />,
      label: "IoT & Telemetry Systems",
      badge: "ESP32 • Multi-Sensor",
      color: "rgba(52, 211, 153, 0.15)"
    },
    {
      icon: <Globe size={14} style={{ color: '#fbbf24' }} />,
      label: "RESTful API Architectures",
      badge: "FastAPI • Node • Prisma",
      color: "rgba(251, 191, 36, 0.15)"
    },
    {
      icon: <Trophy size={14} style={{ color: '#facc15' }} />,
      label: "National Competition Winner",
      badge: "3x Awards (Silver & Bronze)",
      color: "rgba(250, 204, 21, 0.18)"
    },
    {
      icon: <MapPin size={14} style={{ color: '#f43f5e' }} />,
      label: "Geospatial Data Visualization",
      badge: "Leaflet • GeoJSON",
      color: "rgba(244, 63, 94, 0.15)"
    },
    {
      icon: <CloudSun size={14} style={{ color: '#38bdf8' }} />,
      label: "Real-Time Atmospheric Analytics",
      badge: "Live Forecast Engines",
      color: "rgba(56, 189, 248, 0.15)"
    },
    {
      icon: <Database size={14} style={{ color: '#818cf8' }} />,
      label: "Enterprise Data Ingestion",
      badge: "SQL Server • PostgreSQL",
      color: "rgba(129, 140, 248, 0.15)"
    },
    {
      icon: <Rocket size={14} style={{ color: '#fb923c' }} />,
      label: "Production-Ready Delivery",
      badge: "Zero-Lag Architectures",
      color: "rgba(251, 146, 60, 0.15)"
    },
    {
      icon: <Sparkles size={14} style={{ color: '#06b6d4' }} />,
      label: "Awwwards-Grade UI/UX",
      badge: "Fluid Micro-Interactions",
      color: "rgba(6, 182, 212, 0.15)"
    }
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        padding: '1.25rem 0',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        background: 'linear-gradient(90deg, rgba(6, 7, 10, 0.95) 0%, rgba(12, 15, 23, 0.8) 50%, rgba(6, 7, 10, 0.95) 100%)',
        zIndex: 5,
      }}
      className="marquee-container"
    >
      {/* Side Fade Gradients for smooth overflow fade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to right, #06070a 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, #06070a 0%, transparent 100%)',
          zIndex: 4,
          pointerEvents: 'none',
        }}
      />

      {/* Marquee Track (Repeated 2x for seamless continuous translation) */}
      <div className="marquee-track">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="marquee-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              background: item.color,
              border: '1px solid rgba(255, 255, 255, 0.09)',
              backdropFilter: 'blur(8px)',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              cursor: 'default',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
            }}
          >
            {item.icon}
            <span style={{ fontSize: '0.825rem', fontWeight: 700, color: '#f8fafc', letterSpacing: '-0.01em' }}>
              {item.label}
            </span>
            {item.badge && (
              <span
                style={{
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '999px',
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                {item.badge}
              </span>
            )}
            <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '0.75rem', marginLeft: '0.25rem' }}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
