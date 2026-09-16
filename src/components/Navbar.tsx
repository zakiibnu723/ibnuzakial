import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [scrolled, setScrolled] = useState(false);
  const [soundActive, setSoundActive] = useState(sfx.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sfx.toggle();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Tech Stack', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? 'rgba(6, 7, 10, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => sfx.playClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.35)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '1rem',
            }}
          >
            IZ
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <span>{PORTFOLIO_DATA.profile.name}</span>
              <span className="live-indicator" />
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
              Fullstack & Android Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.75rem',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onMouseEnter={() => sfx.playHover()}
              onClick={() => sfx.playClick()}
              style={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseOver={(e) => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
              onMouseOut={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundActive ? 'Sound FX Enabled (Click to Mute)' : 'Sound FX Muted (Click to Unmute)'}
            style={{
              background: soundActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: soundActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid var(--border-subtle)',
              color: soundActive ? '#818cf8' : 'var(--text-muted)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* CV Button */}
          <button
            onClick={() => {
              sfx.playClick();
              onOpenCv();
            }}
            className="btn-primary"
            style={{
              padding: '0.5rem 1.15rem',
              fontSize: '0.825rem',
            }}
          >
            <FileText size={15} />
            <span>CV Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9, 11, 17, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                sfx.playClick();
                setMobileMenuOpen(false);
              }}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
        @media (max-width: 859px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
