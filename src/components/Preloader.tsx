import React, { useState, useEffect } from 'react';
import { sfx } from '../utils/soundEffects';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING ENVIRONMENT...');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const statuses = [
      { at: 15, text: 'INITIALIZING ASSETS...' },
      { at: 45, text: 'LOADING COMPONENT SHADERS...' },
      { at: 75, text: 'PREPARING PORTFOLIO DATA...' },
      { at: 95, text: 'SYSTEM READY // IBNU ZAKI AL' },
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8 + 4);
        if (next >= 100) {
          clearInterval(timer);
          setStatusText('WELCOME // IBNU ZAKI AL');
          sfx.playSuccess();
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const match = statuses.find((s) => next >= s.at);
        if (match) setStatusText(match.text);

        return next;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#040508',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.65s cubic-bezier(0.85, 0, 0.15, 1), opacity 0.6s ease',
        transform: isExiting ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isExiting ? 0.8 : 1,
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
    >
      {/* Background Subtle Grid */}
      <div className="hud-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '380px', width: '90%' }}>
        {/* Monogram Badge */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 800,
            fontSize: '1.75rem',
            fontFamily: 'var(--font-heading)',
            margin: '0 auto 2rem auto',
            boxShadow: '0 0 35px rgba(99, 102, 241, 0.6), 0 0 15px rgba(6, 182, 212, 0.4)',
            animation: 'pulse 1.8s infinite alternate ease-in-out',
          }}
        >
          IZ
        </div>

        {/* Counter Percentage */}
        <div
          style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            fontFamily: 'var(--font-mono)',
            color: '#ffffff',
            letterSpacing: '-0.04em',
            marginBottom: '0.5rem',
            lineHeight: 1,
          }}
        >
          {progress}<span style={{ fontSize: '1.75rem', color: 'var(--accent-cyan)' }}>%</span>
        </div>

        {/* Status Text */}
        <div
          style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
            minHeight: '1.2rem',
          }}
        >
          {statusText}
        </div>

        {/* Progress Track Bar */}
        <div
          style={{
            width: '100%',
            height: '3px',
            background: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '2px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 100%)',
              boxShadow: '0 0 12px rgba(6, 182, 212, 0.8)',
              transition: 'width 0.06s ease-out',
            }}
          />
        </div>
      </div>
    </div>
  );
};
