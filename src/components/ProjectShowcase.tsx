import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  ExternalLink, 
  Layers, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

// Subcomponent for 4-second fade transition slideshow on project cards
const ProjectImageSlideshow: React.FC<{ images: string[]; title: string; height?: string }> = ({
  images,
  title,
  height = '230px'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden',
        background: '#07090f',
      }}
    >
      {images.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${title} screenshot ${idx + 1}`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out, transform 0.6s ease',
            filter: 'brightness(0.9) contrast(1.05)',
          }}
        />
      ))}

      {/* Subtle Slide Indicators (If multiple images) */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '0.65rem',
            right: '0.75rem',
            display: 'flex',
            gap: '0.35rem',
            zIndex: 3,
            background: 'rgba(0, 0, 0, 0.6)',
            padding: '0.2rem 0.45rem',
            borderRadius: '999px',
            backdropFilter: 'blur(4px)',
          }}
        >
          {images.map((_, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              style={{
                width: idx === currentIndex ? '14px' : '5px',
                height: '5px',
                borderRadius: '999px',
                background: idx === currentIndex ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Fullstack Web' },
    { id: 'mobile', label: 'Mobile Engineering' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: '2.75rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
              marginBottom: '0.85rem',
            }}
          >
            <Layers size={14} />
            <span>SELECTED PORTFOLIO</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.1rem, 4vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '0.75rem',
            }}
          >
            Featured <span className="text-gradient-cyan">Engineering</span> Works.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Production-grade systems demonstrating responsive fullstack architectures, interactive geospatial analytics, dynamic weather forecasting, and native mobile development.
          </p>

          {/* Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '1.5rem',
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
                    padding: '0.5rem 1.15rem',
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

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project) => {
            const projectImages = project.images && project.images.length > 0 ? project.images : [project.image];

            return (
              <div
                key={project.id}
                className="glass-panel-interactive"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Slideshow Image Container (Fade every 4s) */}
                <div style={{ position: 'relative' }}>
                  <ProjectImageSlideshow images={projectImages} title={project.title} />

                  {/* Category Badge Overlay */}
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
                      zIndex: 2,
                    }}
                  >
                    {project.categoryLabel}
                  </div>

                  {project.featured && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '0.85rem',
                        right: '0.85rem',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(99, 102, 241, 0.9)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        fontSize: '0.725rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        zIndex: 2,
                      }}
                    >
                      <Sparkles size={11} />
                      <span>Featured</span>
                    </div>
                  )}
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

                  {/* Key Metrics Grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '0.4rem',
                      marginBottom: '1.25rem',
                      padding: '0.65rem',
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderRadius: '10px',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    {project.metrics.map((m) => (
                      <div key={m.label} style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-mono)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
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
                      {project.githubUrl ? (
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
                      ) : (
                        <span
                          title="Source Code: In Active Development"
                          style={{
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            fontSize: '0.7rem',
                            color: 'var(--text-muted)',
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          In Progress
                        </span>
                      )}

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
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.88)',
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
              maxWidth: '720px',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: '24px',
              padding: '2.25rem',
              position: 'relative',
              background: 'rgba(12, 15, 23, 0.96)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
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
                zIndex: 10,
              }}
            >
              <X size={18} />
            </button>

            {/* Modal Slideshow Header */}
            <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <ProjectImageSlideshow
                images={selectedProject.images && selectedProject.images.length > 0 ? selectedProject.images : [selectedProject.image]}
                title={selectedProject.title}
                height="280px"
              />
            </div>

            <div style={{ display: 'inline-block', padding: '0.3rem 0.8rem', borderRadius: 'var(--radius-full)', background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)', color: 'var(--accent-cyan)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '0.75rem' }}>
              {selectedProject.categoryLabel}
            </div>

            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.35rem', color: '#ffffff' }}>
              {selectedProject.title}
            </h3>

            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
              {selectedProject.subtitle}
            </div>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              {selectedProject.longDescription}
            </p>

            {/* Implementation Highlights */}
            <div style={{ marginBottom: '1.75rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.85rem', color: '#f8fafc' }}>
                Key Technical Features & Architecture
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
                TECHNOLOGY STACK:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {selectedProject.tags.map((t) => (
                  <span key={t} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  onClick={() => sfx.playClick()}
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={15} />
                  <span>Launch Live Platform</span>
                </a>
              ) : (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.55rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    color: 'var(--accent-cyan)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <span>Play Store / Web: Coming Soon</span>
                </div>
              )}

              {selectedProject.githubUrl ? (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  onClick={() => sfx.playClick()}
                  style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>View Source Code</span>
                </a>
              ) : (
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.55rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <GithubIcon size={14} />
                  <span>Repository: Coming Soon</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
