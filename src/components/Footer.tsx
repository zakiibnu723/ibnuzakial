import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: '#040508',
        padding: '3rem 0 2rem 0',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.25rem' }}>
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                }}
              >
                IZ
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#ffffff' }}>
                {PORTFOLIO_DATA.profile.name}
              </span>
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
              Fullstack Web & Mobile Developer • Fresh Graduate
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
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

            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
              }}
            >
              <LinkedinIcon size={16} />
            </a>

            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
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
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            gap: '1rem',
          }}
        >
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript & Awwwards Modern Aesthetics
          </div>
        </div>
      </div>
    </footer>
  );
};
