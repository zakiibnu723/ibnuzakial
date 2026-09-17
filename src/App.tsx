import React, { useState, useEffect } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ParticleMeshCanvas } from './components/ParticleMeshCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarqueeSlider } from './components/TechMarqueeSlider';
import { ProjectShowcase } from './components/ProjectShowcase';
import { TechMatrix } from './components/TechMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { useScrollObserver } from './hooks/useScrollObserver';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cvOpen, setCvOpen] = useState(false);

  // Initialize scroll-triggered reveal observer
  useScrollObserver();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setCvOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Modern Awwwards Intro Loading Screen */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />
      <div className="hud-grid" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} />

      {/* 60 FPS Interactive Particle Canvas */}
      <ParticleMeshCanvas />

      {/* Awwwards Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Smart Auto-hide Navbar */}
      <Navbar onOpenCv={() => setCvOpen(true)} />

      {/* Main Clean Sections (10-Second Recruiter Friendly) */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero onOpenCv={() => setCvOpen(true)} />
        <TechMarqueeSlider />
        <ProjectShowcase />
        <TechMatrix />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Curriculum Vitae Printable Preview Modal */}
      <CvModal
        isOpen={cvOpen}
        onClose={() => setCvOpen(false)}
      />
    </div>
  );
};

export default App;
