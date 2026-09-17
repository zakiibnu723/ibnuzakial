import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  ArrowUpRight, 
  FileText,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        paddingTop: '5.5rem',
        paddingBottom: '2.5rem',
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
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)',
          top: '5%',
          left: '5%',
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: '340px',
          height: '340px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          top: '20%',
          right: '8%',
          animationDelay: '-4s',
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10 }}>
        {/* Top Badges (Compact) */}
        <div
          className="hero-enter-badges"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '0.6rem',
            marginBottom: '1rem',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#34d399',
              fontSize: '0.75rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span className="live-indicator" style={{ width: '6px', height: '6px' }} />
            <span>AVAILABLE FOR HIRE</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.3rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Sparkles size={13} />
            <span>FULLSTACK, MOBILE & IOT</span>
          </div>
        </div>

        {/* 2-Column Responsive Hero Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Heading, Bio, CTAs & Tech */}
          <div>
            <h1
              className="hero-enter-title"
              style={{
                fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
                lineHeight: 1.12,
                marginBottom: '0.85rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
              }}
            >
              Crafting Modern <span className="text-gradient-purple">Web Systems</span> &{' '}
              <span className="text-gradient-cyan">Mobile Apps</span>.
            </h1>

            <p
              className="hero-enter-bio"
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                maxWidth: '560px',
                marginBottom: '1.35rem',
              }}
            >
              Hi, I'm <strong style={{ color: '#fff' }}>{PORTFOLIO_DATA.profile.name}</strong>. Fullstack Web & Mobile Developer with IoT Integration capabilities, focused on engineering <strong style={{ color: '#c7d2fe' }}>production-ready web systems, mobile apps, and real-time telemetry architectures</strong>. I transform real-world problems into scalable, reliable digital platforms that prioritize seamless user experiences and solid engineering.
            </p>

            {/* Quick Action CTAs */}
            <div
              className="hero-enter-ctas"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.35rem',
              }}
            >
              <a
                href="#projects"
                className="btn-primary"
                onClick={() => sfx.playClick()}
                style={{ padding: '0.65rem 1.35rem', fontSize: '0.85rem' }}
              >
                <span>View Projects</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="/CV-Ibnu-Zaki-Alhawari.pdf"
                download="CV - Ibnu Zaki Alhawari.pdf"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem', textDecoration: 'none' }}
                onClick={() => sfx.playClick()}
                title="Download Official CV PDF"
              >
                <FileText size={15} />
                <span>Resume / CV</span>
              </a>

              <a
                href="#contact"
                className="btn-secondary"
                onClick={() => sfx.playClick()}
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <Mail size={15} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Core Tech Stack Pills */}
            <div className="hero-enter-stack" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginRight: '0.3rem' }}>
                STACK:
              </span>
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'Flutter', 'Kotlin', 'ESP32 / IoT', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="tech-pill" style={{ padding: '0.25rem 0.65rem', fontSize: '0.72rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Compact Sleek Profile Card */}
          <div className="hero-enter-profile">
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 15px 35px -10px rgba(0, 0, 0, 0.7)',
                position: 'relative',
                maxWidth: '420px',
                margin: '0 auto',
              }}
            >
              {/* Profile Image (Using Pa_20260917_094505_0000.png) */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#090b10',
                  marginBottom: '1rem',
                }}
                className="hero-image-box"
              >
                <img
                  src="/profile.png"
                  alt="Ibnu Zaki Al Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    filter: 'contrast(1.05)',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(6, 7, 10, 0.9) 0%, rgba(6, 7, 10, 0.1) 50%, transparent 100%)',
                  }}
                />

                {/* Floating Bottom Card Text */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.85rem',
                    left: '1rem',
                    right: '1rem',
                  }}
                >
                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {PORTFOLIO_DATA.profile.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    {PORTFOLIO_DATA.profile.title}
                  </div>
                </div>
              </div>

              {/* Quick Details List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.825rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Location:</span>
                  <span style={{ color: '#ffffff', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} style={{ color: '#f87171' }} />
                    Indonesia
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                  <span style={{ color: '#34d399', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <span className="live-indicator" style={{ width: '6px', height: '6px' }} />
                    Open to Hire
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Focus:</span>
                  <span style={{ color: '#c7d2fe', fontWeight: 500 }}>Web, Mobile & IoT Integration</span>
                </div>
              </div>

              {/* Social Links Row */}
              <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <a
                  href={PORTFOLIO_DATA.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%', padding: '0.6rem', fontSize: '0.82rem', justifyContent: 'center' }}
                  onClick={() => sfx.playClick()}
                >
                  <GithubIcon size={15} />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row (Balanced 3 items, vertically aligned cleanly on mobile) */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1.15rem 1.5rem',
            borderRadius: '16px',
            background: 'rgba(15, 18, 28, 0.55)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--border-subtle)',
          }}
          className="hero-stats-box hero-enter-stats"
        >
          <div className="hero-stats-grid">
            {PORTFOLIO_DATA.profile.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="hero-stat-item"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: idx !== 0 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
                  paddingLeft: idx !== 0 ? '1.5rem' : '0',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)',
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  <AnimatedCounter target={parseInt(stat.value) || 0} suffix="+" />
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.75fr !important;
          }
        }

        @media (max-width: 767px) {
          .hero-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 0.85rem !important;
          }
          .hero-stat-item {
            border-left: none !important;
            padding-left: 0 !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
            padding-bottom: 0.65rem;
          }
          .hero-stat-item:last-child {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
          .hero-image-box {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  );
};
