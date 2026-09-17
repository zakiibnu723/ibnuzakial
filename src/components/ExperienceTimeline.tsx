import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

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
            <Trophy size={14} />
            <span>HONORS & JOURNEY</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Competitions & <span className="text-gradient-emerald">Journey</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto', fontSize: '1.02rem', lineHeight: 1.6 }}>
            Track record of participating and winning national-level software engineering, web design, and technological innovation competitions.
          </p>
        </div>

        {/* Minimal Stacked Cards */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {/* Competition Experience Cards */}
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '1.75rem 2rem',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span
                    style={{
                      padding: '0.28rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      background: 'rgba(234, 179, 8, 0.12)',
                      border: '1px solid rgba(234, 179, 8, 0.35)',
                      color: '#facc15',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <Award size={13} />
                    {exp.awardBadge}
                  </span>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={13} />
                  {exp.location}
                </div>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                {exp.role}
              </h3>

              <div style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
                {exp.institution}
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.15rem', fontSize: '0.92rem' }}>
                {exp.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.85rem' }}>
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
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  FORMAL EDUCATION
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                  Bachelor of Informatics / Computer Science (S1)
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
              <span style={{ color: '#ffffff', fontWeight: 600 }}>UIN Sunan Kalijaga Yogyakarta</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-cyan)' }}>2022 — 2026 (Expected Graduation)</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>Informatics Engineering</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.65 }}>
              Undergraduate program focused on software engineering principles, fullstack web architectures (React, Next.js, Node.js), mobile development (Flutter, Kotlin, Jetpack Compose), geospatial data algorithms, and database system design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
