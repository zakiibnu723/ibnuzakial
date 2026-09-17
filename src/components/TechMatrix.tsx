import React, { useState } from 'react';
import { PORTFOLIO_DATA, TechItem } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  Code2, 
  FileCode2, 
  Code, 
  Globe, 
  Palette, 
  Layout, 
  Server, 
  Cpu, 
  Terminal, 
  Zap, 
  Database, 
  Layers, 
  Network, 
  Smartphone, 
  Activity, 
  Sparkles, 
  GitBranch, 
  Send, 
  Box, 
  PenTool,
  CheckCircle2
} from 'lucide-react';

export const TechMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'mobile' | 'tools'>('all');

  const getTechIcon = (iconName: string) => {
    const size = 20;
    switch (iconName) {
      case 'Code2': return <Code2 size={size} style={{ color: 'var(--accent-cyan)' }} />;
      case 'FileCode2': return <FileCode2 size={size} style={{ color: '#60a5fa' }} />;
      case 'Code': return <Code size={size} style={{ color: '#fbbf24' }} />;
      case 'Globe': return <Globe size={size} style={{ color: '#ffffff' }} />;
      case 'Palette': return <Palette size={size} style={{ color: '#38bdf8' }} />;
      case 'Layout': return <Layout size={size} style={{ color: '#fb923c' }} />;
      case 'Server': return <Server size={size} style={{ color: '#4ade80' }} />;
      case 'Cpu': return <Cpu size={size} style={{ color: '#a855f7' }} />;
      case 'Terminal': return <Terminal size={size} style={{ color: '#facc15' }} />;
      case 'Zap': return <Zap size={size} style={{ color: 'var(--accent-emerald)' }} />;
      case 'Database': return <Database size={size} style={{ color: '#38bdf8' }} />;
      case 'Layers': return <Layers size={size} style={{ color: '#c084fc' }} />;
      case 'Network': return <Network size={size} style={{ color: '#818cf8' }} />;
      case 'Smartphone': return <Smartphone size={size} style={{ color: '#a78bfa' }} />;
      case 'Activity': return <Activity size={size} style={{ color: '#f43f5e' }} />;
      case 'Sparkles': return <Sparkles size={size} style={{ color: '#fbbf24' }} />;
      case 'GitBranch': return <GitBranch size={size} style={{ color: '#f87171' }} />;
      case 'Send': return <Send size={size} style={{ color: '#fb923c' }} />;
      case 'Box': return <Box size={size} style={{ color: '#38bdf8' }} />;
      case 'Figma': return <PenTool size={size} style={{ color: '#f43f5e' }} />;
      default: return <Code2 size={size} />;
    }
  };

  const tabs = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & DB' },
    { id: 'mobile', label: 'Mobile Engineering' },
    { id: 'tools', label: 'Tools & IoT' },
  ];

  const filteredTech = activeTab === 'all'
    ? PORTFOLIO_DATA.techStack
    : PORTFOLIO_DATA.techStack.filter((t) => t.category === activeTab);

  return (
    <section id="skills" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <Cpu size={14} />
            <span>CORE COMPETENCY</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Technologies & <span className="text-gradient-purple">Tools</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Modern programming languages, frameworks, and developer toolchains used to build scalable web applications and native Android software.
          </p>

          {/* Tab Filter Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '2rem',
            }}
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    sfx.playModeSwitch();
                    setActiveTab(tab.id as typeof activeTab);
                  }}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: active ? 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)' : 'rgba(255, 255, 255, 0.04)',
                    border: active ? '1px solid transparent' : '1px solid var(--border-subtle)',
                    color: active ? '#ffffff' : 'var(--text-secondary)',
                    boxShadow: active ? '0 4px 15px rgba(6, 182, 212, 0.35)' : 'none',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tech Bento Grid (Icon/Logo Based) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(185px, 1fr))',
            gap: '1rem',
          }}
        >
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="glass-panel"
              style={{
                padding: '1.15rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                transition: 'all 0.2s ease',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                background: 'rgba(16, 20, 30, 0.6)',
              }}
              onMouseEnter={() => sfx.playHover()}
              onMouseOver={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(-3px)';
                el.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                el.style.background = 'rgba(26, 32, 48, 0.8)';
              }}
              onMouseOut={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                el.style.background = 'rgba(16, 20, 30, 0.6)';
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}
              >
                {getTechIcon(item.icon)}
              </div>

              <div style={{ overflow: 'hidden' }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#ffffff', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {item.name}
                </div>
                {item.badge && (
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.badge}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter 10-Second Summary Callout */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.5rem 2rem',
            borderRadius: '18px',
            background: 'rgba(99, 102, 241, 0.06)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <CheckCircle2 size={20} style={{ color: 'var(--accent-emerald)' }} />
            <span style={{ fontSize: '0.925rem', color: '#e2e8f0' }}>
              <strong>Pragmatic Fullstack Capability:</strong> Ready to build responsive React web interfaces, develop robust FastAPI/Node APIs, or deliver native Android Kotlin apps.
            </span>
          </div>

          <a
            href="#projects"
            style={{
              color: 'var(--accent-cyan)',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
            }}
            onClick={() => sfx.playClick()}
          >
            <span>See Project Implementations</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};
