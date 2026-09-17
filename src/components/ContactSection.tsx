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
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

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

    // Direct mailto link constructor to immediately open email client
    const subjectLine = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Halo Zaki,\n\nNama: ${formData.name}\nEmail Pengirim: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim via Portofolio ibnuzakial`
    );

    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subjectLine}&body=${emailBody}`;

    // Open email client with pre-filled message
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 400);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const directMailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Halo%20Ibnu%20Zaki%20Al%20-%20Job%20Opportunity%20/%20Project&body=Halo%20Zaki,%20saya%20tertarik%20dengan%20portofolio%20Anda.`;

  return (
    <section id="contact" style={{ padding: '5.5rem 0', position: 'relative' }}>
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
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              color: '#c7d2fe',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              marginBottom: '1rem',
            }}
          >
            <MessageSquare size={14} />
            <span>GET IN TOUCH</span>
          </div>

          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, marginBottom: '0.75rem' }}>
            Let's Build Something <span className="text-gradient-cyan">Great</span>.
          </h2>

          <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Have a project, full-time role, or internship opportunity? Feel free to reach out directly via WhatsApp or Email.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Info Cards */}
          <div className="scroll-reveal scroll-reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Card (With Direct Mailto & Copy) */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
                borderRadius: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818cf8' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>DIRECT EMAIL</div>
                  <a
                    href={directMailtoUrl}
                    style={{ fontWeight: 700, fontSize: '1.05rem', color: '#ffffff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                    onClick={() => sfx.playClick()}
                  >
                    <span>{PORTFOLIO_DATA.profile.email}</span>
                    <ExternalLink size={14} style={{ color: 'var(--accent-cyan)' }} />
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <a
                  href={directMailtoUrl}
                  className="btn-primary"
                  style={{ flex: 1, padding: '0.6rem 0.85rem', fontSize: '0.825rem' }}
                  onClick={() => sfx.playClick()}
                >
                  <Mail size={15} />
                  <span>Send Direct Email</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="btn-secondary"
                  style={{ padding: '0.6rem 0.85rem', fontSize: '0.825rem' }}
                  title="Copy Email Address"
                >
                  {copiedEmail ? (
                    <Check size={16} style={{ color: 'var(--accent-emerald)' }} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div
              className="glass-panel"
              style={{
                padding: '1.5rem',
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
                href={`https://wa.me/6285862174003?text=Halo%20Ibnu%20Zaki%20Al,%20saya%20tertarik%20dengan%20portofolio%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                onClick={() => sfx.playClick()}
                style={{ width: '100%', padding: '0.65rem 1rem', fontSize: '0.85rem', textDecoration: 'none' }}
              >
                <MessageSquare size={16} style={{ color: '#34d399' }} />
                <span>Open WhatsApp (+62 858-6217-4003)</span>
              </a>
            </div>

            {/* Location & Real-Time Clock */}
            <div
              className="glass-panel"
              style={{
                padding: '1.25rem 1.5rem',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Clock size={16} style={{ color: 'var(--accent-cyan)' }} />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>TIMEZONE (WIB)</div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>
                    {wibTime || '18:25:00'}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>AVAILABILITY</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-emerald)', fontSize: '0.78rem', fontWeight: 600 }}>
                  <span className="live-indicator" style={{ width: '6px', height: '6px' }} />
                  <span>Immediate Start</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex' }}>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '100%', padding: '0.65rem', fontSize: '0.825rem', justifyContent: 'center' }}
                onClick={() => sfx.playClick()}
              >
                <GithubIcon size={16} />
                <span>Visit GitHub Profile</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form (Dispatches directly to email) */}
          <div
            className="glass-panel scroll-reveal scroll-reveal-right"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(99, 102, 241, 0.25)',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.35rem', color: '#ffffff' }}>
              Send Direct Message
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Submitting this form immediately drafts and sends your message to <strong>zakiibnu723@gmail.com</strong>.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
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
                    padding: '0.75rem 0.95rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  SUBJECT
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role, project, or question..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="btn-primary"
                style={{ width: '100%', padding: '0.85rem', marginTop: '0.25rem' }}
              >
                {formSubmitted ? (
                  <>
                    <Check size={16} />
                    <span>Opening Email to Send to zakiibnu723@gmail.com...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message to zakiibnu723@gmail.com</span>
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
