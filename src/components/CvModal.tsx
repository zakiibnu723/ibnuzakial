import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sfx.playClick();
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 3000,
        background: 'rgba(2, 4, 8, 0.9)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        className="printable-cv-card"
        style={{
          width: '100%',
          maxWidth: '840px',
          maxHeight: '92vh',
          background: '#0e111a',
          color: '#f8fafc',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.95)',
          overflowY: 'auto',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Control Bar (Hidden on print) */}
        <div
          className="no-print"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 10,
            background: 'rgba(14, 17, 26, 0.96)',
            backdropFilter: 'blur(12px)',
            padding: '1rem 2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              CURRICULUM VITAE
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              (Informatics • UIN Sunan Kalijaga Yogyakarta)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '0.5rem 1.15rem', fontSize: '0.825rem' }}
            >
              <Printer size={15} />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={() => {
                sfx.playClick();
                onClose();
              }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Content */}
        <div style={{ padding: '2.5rem' }}>
          {/* Header */}
          <div style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.1)', paddingBottom: '1.5rem', marginBottom: '1.75rem' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.2rem' }}>
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <div style={{ fontSize: '1.15rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '0.85rem' }}>
              {PORTFOLIO_DATA.profile.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Mail size={14} style={{ color: 'var(--accent-indigo)' }} />
                {PORTFOLIO_DATA.profile.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <Phone size={14} style={{ color: 'var(--accent-emerald)' }} />
                {PORTFOLIO_DATA.profile.whatsapp}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <MapPin size={14} style={{ color: '#f87171' }} />
                {PORTFOLIO_DATA.profile.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.65rem', borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '0.65rem' }}>
              Summary
            </h2>
            <p style={{ color: '#cbd5e1', lineHeight: 1.65, fontSize: '0.925rem' }}>
              {PORTFOLIO_DATA.cvDetails.summary}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderLeft: '3px solid var(--accent-emerald)', paddingLeft: '0.65rem' }}>
              Education
            </h2>
            {PORTFOLIO_DATA.cvDetails.education.map((edu, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '0.95rem' }}>{edu.degree}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{edu.institution}</div>
                </div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.825rem', fontFamily: 'var(--font-mono)' }}>
                  {edu.year} • <span style={{ color: 'var(--accent-emerald)', fontWeight: 600 }}>{edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Technical Skills */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderLeft: '3px solid var(--accent-indigo)', paddingLeft: '0.65rem' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', marginBottom: '0.25rem' }}>Frontend:</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>React, TypeScript, Next.js, Tailwind CSS, HTML5/CSS3</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', marginBottom: '0.25rem' }}>Backend & Database:</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Node.js, Express, Python, FastAPI, PostgreSQL, MySQL, Prisma</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', marginBottom: '0.25rem' }}>Mobile Engineering:</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Flutter, Dart, Kotlin, Jetpack Compose</div>
              </div>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.85rem', borderRadius: '10px' }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#ffffff', marginBottom: '0.25rem' }}>Tools & Engineering:</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Git, GitHub, Leaflet, Chart.js, VS Code, REST APIs</div>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderLeft: '3px solid var(--accent-cyan)', paddingLeft: '0.65rem' }}>
              Key Projects
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {PORTFOLIO_DATA.projects.map((proj) => (
                <div key={proj.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                      {proj.title} — <span style={{ color: 'var(--accent-cyan)', fontWeight: 500, fontSize: '0.85rem' }}>{proj.subtitle}</span>
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0.25rem 0' }}>
                    {proj.description}
                  </p>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    Stack: {proj.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem', borderLeft: '3px solid var(--accent-indigo)', paddingLeft: '0.65rem' }}>
              Certifications & Training
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
              {PORTFOLIO_DATA.cvDetails.certifications.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
