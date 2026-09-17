import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const ExperienceImageSlideshow: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
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
        minHeight: '230px',
        height: '100%',
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#07090f',
        border: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {images.map((imgSrc, idx) => (
        <img
          key={imgSrc}
          src={imgSrc}
          alt={`${title} documentation ${idx + 1}`}
          loading="lazy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 0.8s ease-in-out, transform 0.6s ease',
            filter: 'brightness(0.92) contrast(1.05)',
          }}
        />
      ))}

      {/* Subtle Dark Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div
          style={{
            position: 'absolute',
            bottom: '0.65rem',
            right: '0.75rem',
            display: 'flex',
            gap: '0.35rem',
            zIndex: 3,
            background: 'rgba(0, 0, 0, 0.65)',
            padding: '0.2rem 0.45rem',
            borderRadius: '999px',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(i);
              }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === currentIndex ? '14px' : '5px',
                height: '5px',
                borderRadius: '999px',
                background: i === currentIndex ? '#38bdf8' : 'rgba(255, 255, 255, 0.4)',
                transition: 'all 0.3s ease',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div className="scroll-reveal" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
            maxWidth: '880px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
          }}
        >
          {/* Competition Experience Cards */}
          {PORTFOLIO_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-panel scroll-reveal stagger-${(idx % 3) + 1}`}
              style={{
                padding: '1.5rem 1.75rem',
                borderRadius: '20px',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color 0.2s ease',
              }}
            >
              {exp.images && exp.images.length > 0 ? (
                <div className="experience-card-layout">
                  <div style={{ position: 'relative', width: '100%', minHeight: '230px' }}>
                    <ExperienceImageSlideshow images={exp.images} title={exp.institution} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.65rem', marginBottom: '0.75rem' }}>
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
                        <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.35rem' }}>
                      {exp.role}
                    </h3>

                    <div style={{ fontSize: '0.88rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.75rem' }}>
                      {exp.institution}
                    </div>

                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem', fontSize: '0.9rem' }}>
                      {exp.description}
                    </p>

                    {/* Skills Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {exp.skills.map((s) => (
                        <span key={s} className="tech-pill" style={{ fontSize: '0.72rem', padding: '0.22rem 0.6rem' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <>
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
                </>
              )}
            </div>
          ))}

          {/* Education Card */}
          <div
            className="glass-panel scroll-reveal"
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
              Focused on modern software engineering disciplines with an emphasis on Fullstack Web Engineering, Mobile Application Development, Interactive Data Visualization, and Real-Time Monitoring Systems. Experienced in building scalable digital solutions from design to deployment, with a strong foundation in database architecture, responsive UI engineering, and clean code practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
