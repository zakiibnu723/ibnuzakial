import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X
} from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [soundActive, setSoundActive] = useState(sfx.isEnabled());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY < 30) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
        transform: visible ? 'translateY(0)' : 'translateY(-110%)',
        transition: 'transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease, background 0.3s ease',
        padding: scrolled ? '0.6rem 0' : '0.85rem 0',
        background: scrolled ? 'rgba(6, 7, 10, 0.94)' : 'rgba(6, 7, 10, 0.75)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left Side: Avatar, Name & Role */}
        <a
          href="#hero"
          onClick={() => sfx.playClick()}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #6366F1 0%, #06B6D4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(99, 102, 241, 0.35)',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.9rem',
              flexShrink: 0,
            }}
          >
            IZ
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '0.4rem', lineHeight: 1.2 }}>
              <span>{PORTFOLIO_DATA.profile.name}</span>
              <span className="live-indicator" style={{ width: '7px', height: '7px' }} />
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', lineHeight: 1.2, marginTop: '2px' }}>
              Fullstack & Mobile Developer
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
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
                fontSize: '0.85rem',
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

        {/* Right Controls: Desktop Sound/CV, Mobile Hamburger Button on RIGHT */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          {/* Desktop Controls (Hidden on Mobile) */}
          <div className="desktop-controls" style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={toggleSound}
              title={soundActive ? 'Sound FX Enabled (Click to Mute)' : 'Sound FX Muted (Click to Unmute)'}
              style={{
                background: soundActive ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: soundActive ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid var(--border-subtle)',
                color: soundActive ? '#818cf8' : 'var(--text-muted)',
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {soundActive ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            <button
              onClick={() => {
                sfx.playClick();
                onOpenCv();
              }}
              className="btn-primary"
              style={{
                padding: '0.45rem 1rem',
                fontSize: '0.8rem',
              }}
            >
              <FileText size={14} />
              <span>CV Resume</span>
            </button>
          </div>

          {/* Mobile Hamburger Button (On the RIGHT side as requested) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only-btn"
            aria-label="Toggle navigation menu"
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Links + CV Button + Sound) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(9, 11, 17, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 20px 30px rgba(0, 0, 0, 0.8)',
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
                padding: '0.35rem 0',
              }}
            >
              {link.label}
            </a>
          ))}

          {/* Action Row inside Mobile Drawer */}
          <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              onClick={() => {
                sfx.playClick();
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="btn-primary"
              style={{ flex: 1, padding: '0.65rem 1rem', fontSize: '0.85rem' }}
            >
              <FileText size={15} />
              <span>View CV Resume</span>
            </button>

            <button
              onClick={toggleSound}
              style={{
                background: soundActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                border: '1px solid var(--border-subtle)',
                color: soundActive ? '#818cf8' : 'var(--text-muted)',
                padding: '0.65rem 0.9rem',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              {soundActive ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span>{soundActive ? 'SFX ON' : 'SFX OFF'}</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-controls { display: flex !important; }
          .mobile-only-btn { display: none !important; }
        }
        @media (max-width: 859px) {
          .desktop-nav { display: none !important; }
          .desktop-controls { display: none !important; }
          .mobile-only-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};
