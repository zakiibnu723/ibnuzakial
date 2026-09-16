import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: 'var(--accent-emerald)',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <Briefcase size={14} />
            <span>BACKGROUND & EDUCATION</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Experience & <span className="text-gradient-emerald">Journey</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Educational background and hands-on experience building software, shipping academic capstones, and tackling real-world problems.
          </p>
        </div>

        {/* 2-Column or Stacked Clean Cards */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Work / Project Experience */}
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.period}
              className="glass-panel"
              style={{
                padding: '1.75rem 2rem',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginBottom: '0.2rem' }}>
                    {exp.period}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontSize: '0.925rem', color: '#c7d2fe', fontWeight: 500 }}>
                    {exp.company} • <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>

                <div
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                  }}
                >
                  ENGINEERING
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem', fontSize: '0.925rem' }}>
                {exp.description}
              </p>

              {/* Bullet Achievements */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {exp.achievements.map((ach, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-emerald)', marginTop: '0.2rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', color: '#e2e8f0' }}>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                {exp.skills.map((s) => (
                  <span key={s} className="tech-pill">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Education Card */}
          <div
            className="glass-panel"
            style={{
              padding: '1.75rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'rgba(18, 22, 34, 0.7)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#818cf8',
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  FORMAL DEGREE
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                  Bachelor of Computer Science / Informatics
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
              <span>Universitas / Institute of Technology</span>
              <span>•</span>
              <span>Graduated 2024</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>GPA: 3.75 / 4.00</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              Coursework highlights: Software Engineering, Data Structures & Algorithms, Database Systems, Mobile Application Development, Web Engineering, and Computer Vision Capstone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
