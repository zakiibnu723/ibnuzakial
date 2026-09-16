import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sfx } from '../utils/soundEffects';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';

interface TerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCv: () => void;
}

export const TerminalDrawer: React.FC<TerminalDrawerProps> = ({ isOpen, onClose, onOpenCv }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; type: 'cmd' | 'output' | 'error' | 'success' }>>([
    { text: "⚡ Ibnu Zaki Al — Interactive Developer Shell [v2.4.0]", type: 'output' },
    { text: "Type 'help' to inspect available CLI commands, or 'cv' to open resume.", type: 'output' },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    sfx.playTerminalBeep();
    const newHistory = [...history, { text: `$ ${inputVal}`, type: 'cmd' as const }];
    setInputVal('');

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `Available commands:
  • help       - Show this command reference
  • bio        - Display architect background & identity
  • skills     - Print core technology stack & competencies
  • projects   - List flagship production applications
  • cv         - Open printable Curriculum Vitae modal
  • contact    - Display email & direct WhatsApp link
  • clear      - Clear terminal screen
  • exit       - Close developer console`,
          type: 'output'
        });
        break;

      case 'bio':
        newHistory.push({
          text: `${PORTFOLIO_DATA.profile.name} — ${PORTFOLIO_DATA.profile.title}
Location: ${PORTFOLIO_DATA.profile.location}
Status: ${PORTFOLIO_DATA.profile.status}
Summary: ${PORTFOLIO_DATA.profile.shortBio}`,
          type: 'output'
        });
        break;

      case 'skills':
        newHistory.push({
          text: `CORE TECHNICAL MATRIX:
[Web]    : React 19, TypeScript, Next.js, Node.js, WebSockets, PostgreSQL, Redis
[AI/ML]  : Ollama, Local LLMs (Llama 3.2, Mistral), Milvus Vector DB, LangChain, RAG
[Mobile] : Native Kotlin 2.0, Jetpack Compose, Coroutines & Flow, Room DB, BLE
[Systems]: Linux, Docker, Microservices, CI/CD Actions`,
          type: 'output'
        });
        break;

      case 'projects':
        newHistory.push({
          text: PORTFOLIO_DATA.projects.map((p, i) => `${i + 1}. ${p.title} (${p.categoryLabel}) - ${p.subtitle}`).join('\n'),
          type: 'output'
        });
        break;

      case 'cv':
      case 'resume':
        newHistory.push({ text: "Opening Curriculum Vitae modal...", type: 'success' });
        onClose();
        setTimeout(() => onOpenCv(), 200);
        break;

      case 'contact':
        newHistory.push({
          text: `Email: ${PORTFOLIO_DATA.profile.email}
WhatsApp: ${PORTFOLIO_DATA.profile.whatsapp}
GitHub: ${PORTFOLIO_DATA.profile.github}
LinkedIn: ${PORTFOLIO_DATA.profile.linkedin}`,
          type: 'output'
        });
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          text: `Command not found: '${cmd}'. Type 'help' for available commands.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(4, 5, 8, 0.85)',
        backdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '780px',
          height: '520px',
          background: '#090b10',
          border: '1px solid rgba(6, 182, 212, 0.35)',
          borderRadius: '20px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.95), 0 0 40px rgba(6, 182, 212, 0.15)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.85rem 1.25rem',
            background: '#0f131a',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', marginLeft: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <TerminalIcon size={14} />
              <span>ibnu-zaki-al@terminal:~$</span>
            </span>
          </div>

          <button
            onClick={() => {
              sfx.playClick();
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Body */}
        <div
          style={{
            flex: 1,
            padding: '1.5rem',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            lineHeight: 1.7,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {history.map((h, i) => (
            <div
              key={i}
              style={{
                color:
                  h.type === 'cmd'
                    ? 'var(--accent-cyan)'
                    : h.type === 'error'
                    ? '#f87171'
                    : h.type === 'success'
                    ? '#4ade80'
                    : '#cbd5e1',
                whiteSpace: 'pre-wrap',
              }}
            >
              {h.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Row */}
        <form
          onSubmit={handleCommand}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.85rem 1.25rem',
            background: '#0c0f17',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginRight: '0.65rem' }}>
            &gt;
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'skills', 'cv', 'contact'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
            }}
          />
          <button
            type="submit"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: 'var(--text-secondary)',
              borderRadius: '6px',
              padding: '0.35rem 0.65rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </div>
  );
};
