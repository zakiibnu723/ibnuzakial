import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MessageSquare, 
  Clock, 
  Globe, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [wibTime, setWibTime] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format Jakarta / WIB Time
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setWibTime(new Intl.DateTimeFormat([], options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    sfx.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sfx.playSuccess();
    setFormSubmitted(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <MessageSquare size={14} />
            <span>INITIATE CONTACT</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '1rem' }}>
            Let's Build Something <span className="text-gradient-cyan">Extraordinary</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Ready to lead software initiatives, modernize legacy infrastructure, or engineer on-premise AI intelligence.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            maxWidth: '1050px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Quick Copy Email Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DIRECT EMAIL</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                    {PORTFOLIO_DATA.profile.email}
                  </div>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary"
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem' }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={16} style={{ color: 'var(--accent-emerald)' }} />
                    <span style={{ color: 'var(--accent-emerald)' }}>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct WhatsApp Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.75rem',
                borderRadius: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>WHATSAPP CHAT</div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff' }}>
                    {PORTFOLIO_DATA.profile.whatsapp}
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${PORTFOLIO_DATA.profile.whatsapp.replace(/[^0-9]/g, '')}?text=Halo%20Ibnu%20Zaki%20Al,%20saya%20tertarik%20dengan%20portofolio%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() => sfx.playClick()}
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                <MessageSquare size={16} style={{ color: '#34d399' }} />
                <span>Open Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Location & Real-Time Clock */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={18} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CURRENT TIME (WIB)</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffffff', fontSize: '1.1rem' }}>
                    {wibTime || '14:57:00'}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>STATUS</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-emerald)', fontSize: '0.8rem', fontWeight: 600 }}>
                  <span className="live-indicator" />
                  <span>Ready to Interview</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
                onClick={() => sfx.playClick()}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.85rem' }}
                onClick={() => sfx.playClick()}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
              Inquire about project collaboration, technical leadership, or upcoming job opportunities.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. HR Team / Engineering Lead"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Technical Role / Project Opportunity"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the challenge or opportunity..."
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="btn-primary"
                style={{ width: '100%', padding: '0.95rem', marginTop: '0.5rem' }}
              >
                {formSubmitted ? (
                  <>
                    <Check size={18} />
                    <span>Message Dispatched Successfully!</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message Dispatch</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
