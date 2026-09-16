import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  ArrowUpRight, 
  Code2, 
  Sparkles, 
  Layers, 
  FileText,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        paddingTop: '8rem',
        paddingBottom: '4rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient glow orbs */}
      <div
        className="glow-orb"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
          top: '10%',
          left: '5%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, transparent 70%)',
          top: '25%',
          right: '8%',
          animationDelay: '-4s',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Badges */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '0.8rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span className="live-indicator" />
            <span>FRESH GRADUATE • OPEN FOR ROLES</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Sparkles size={14} />
            <span>Fullstack Web & Android Kotlin</span>
          </div>
        </div>

        {/* 2-Column Clean Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading & Concise Pitch */}
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                lineHeight: 1.1,
                marginBottom: '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              Building Clean <span className="text-gradient-purple">Fullstack Web</span> &{' '}
              <span className="text-gradient-cyan">Native Android</span> Apps.
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: '580px',
                marginBottom: '2rem',
              }}
            >
              Hi, I'm <strong style={{ color: '#fff' }}>{PORTFOLIO_DATA.profile.name}</strong>. A fresh graduate developer passionate about building reliable web systems (React, TypeScript, Node.js), native Android apps (Kotlin, Jetpack Compose), and wrapping open-source Hugging Face models into practical software.
            </p>

            {/* Quick Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={() => sfx.playClick()}
              >
                <span>View Projects</span>
                <ArrowUpRight size={17} />
              </a>

              <button
                onClick={() => {
                  sfx.playClick();
                  onOpenCv();
                }}
                className="btn-secondary"
              >
                <FileText size={16} />
                <span>Resume / CV</span>
              </button>

              <a
                href="#contact"
                className="btn-secondary"
                onClick={() => sfx.playClick()}
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Core Tech Quick Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginRight: '0.4rem' }}>
                STACK:
              </span>
              {['React', 'TypeScript', 'Node.js', 'Kotlin', 'Jetpack Compose', 'FastAPI', 'PostgreSQL', 'Hugging Face'].map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Clean Visual Profile Card */}
          <div>
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
                position: 'relative',
              }}
            >
              {/* Profile Image */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '340px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#090b10',
                  marginBottom: '1.25rem',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
                  alt="Ibnu Zaki Al Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.85) contrast(1.1)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 7, 10, 0.9) 0%, rgba(6, 7, 10, 0.15) 60%, transparent 100%)',
                  }}
                />

                {/* Floating Bottom Card Text */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                  }}
                >
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {PORTFOLIO_DATA.profile.name}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {PORTFOLIO_DATA.profile.title}
                  </div>
                </div>
              </div>

              {/* Quick Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span style={{ color: '#ffffff', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={14} style={{ color: '#f87171' }} />
                    Indonesia
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                  <span style={{ color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span className="live-indicator" />
                    Available for Work
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Specialty:</span>
                  <span style={{ color: '#c7d2fe', fontWeight: 500 }}>Web, Android & AI API</span>
                </div>
              </div>

              {/* Social Links Row */}
              <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.6rem', fontSize: '0.8rem' }}
                  onClick={() => sfx.playClick()}
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>

                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ flex: 1, padding: '0.6rem', fontSize: '0.8rem' }}
                  onClick={() => sfx.playClick()}
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          style={{
            marginTop: '3.5rem',
            padding: '1.5rem 2rem',
            borderRadius: '20px',
            background: 'rgba(15, 18, 28, 0.55)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
            <div
              key={stat.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: idx !== 0 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                paddingLeft: idx !== 0 ? '1.5rem' : '0',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                  fontWeight: 800,
                  fontFamily: 'var(--font-heading)',
                  color: '#ffffff',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
      `}</style>
    </section>
  );
};
