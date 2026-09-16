import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  Smartphone,
  Globe,
  Brain
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile' | 'ai-integration'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-integration', label: 'AI Model Integration' },
    { id: 'mobile', label: 'Android Kotlin' },
    { id: 'web', label: 'Fullstack Web' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <Layers size={14} />
            <span>SELECTED WORK</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            Featured <span className="text-gradient-cyan">Projects</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Real-world applications showcasing fullstack web development, native Android engineering, and practical open-source AI model deployment.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.75rem',
            }}
          >
            {categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    sfx.playModeSwitch();
                    setActiveCategory(cat.id as typeof activeCategory);
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
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid: Clean 2-column or 3-column cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel-interactive"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {/* Project Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  overflow: 'hidden',
                  background: '#090c13',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85) contrast(1.1)',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.05)')}
                  onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
                />

                {/* Badge Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0.85rem',
                    left: '0.85rem',
                    padding: '0.3rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(9, 12, 20, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    fontSize: '0.725rem',
                    fontFamily: 'var(--font-mono)',
                    color: '#ffffff',
                  }}
                >
                  {project.categoryLabel}
                </div>
              </div>

              {/* Project Details */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ marginBottom: '0.35rem', color: 'var(--accent-cyan)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                  {project.subtitle}
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.65rem', color: '#ffffff' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem', flex: 1 }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="tech-pill">+{project.tags.length - 4}</span>
                  )}
                </div>

                {/* Action Links */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  }}
                >
                  <button
                    onClick={() => {
                      sfx.playClick();
                      setSelectedProject(project);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-primary)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      padding: 0,
                    }}
                    onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-cyan)')}
                    onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-primary)')}
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={15} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub Repository"
                      onClick={() => sfx.playClick()}
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                      }}
                    >
                      <GithubIcon size={16} />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                        onClick={() => sfx.playClick()}
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          background: 'rgba(6, 182, 212, 0.1)',
                          border: '1px solid rgba(6, 182, 212, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          textDecoration: 'none',
                        }}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-panel"
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '88vh',
              overflowY: 'auto',
              borderRadius: '24px',
              padding: '2.25rem',
              position: 'relative',
              background: 'rgba(12, 15, 23, 0.95)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                sfx.playClick();
                setSelectedProject(null);
              }}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>

            <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
              {selectedProject.categoryLabel}
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.4rem', color: '#ffffff' }}>
              {selectedProject.title}
            </h3>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
              {selectedProject.subtitle}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              {selectedProject.longDescription}
            </p>

            {/* Highlights */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.85rem', color: '#f8fafc' }}>
                Key Implementation Highlights
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {selectedProject.highlights.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      padding: '0.75rem 0.95rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.15rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Tags */}
            <div style={{ marginBottom: '1.75rem' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                TECH STACK:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {selectedProject.tags.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                onClick={() => sfx.playClick()}
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <GithubIcon size={16} />
                <span>Source Code</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onClick={() => sfx.playClick()}
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={15} />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
