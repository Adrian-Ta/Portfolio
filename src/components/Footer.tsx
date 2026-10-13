import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../content/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="logo-badge small">{profile.initials}</div>
              <span className="brand-name">{profile.name}</span>
            </div>
            <p className="footer-bio">{profile.footerText}</p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-links-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#hero">Start</a>
              <a href="#about">Über mich</a>
              <a href="#projects">Projekte</a>
              <a href="#experience">Laufbahn</a>
              <a href="#skills">Kompetenzen</a>
            </div>

            <div className="footer-links-col">
              <span className="footer-col-title">Netzwerk</span>
              {profile.github.url && (
                <a href={profile.github.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {profile.linkedin.url && (
                <a href={profile.linkedin.url} target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              )}
              <a href={`mailto:${profile.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Mail size={15} />
                <span>E-Mail</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {profile.name} ({profile.fullName}) — Alle Rechte vorbehalten.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Nach oben scrollen"
          >
            <span>Nach oben</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
