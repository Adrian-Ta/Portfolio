import React from 'react';
import { ArrowRight, FileText, Mail } from 'lucide-react';
import { InteractiveBadge } from './InteractiveBadge';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section dot-grid-bg">
      <div className="container hero-container">
        {/* Left Column: Introduction & Call-to-actions */}
        <div className="hero-content">
          {/* Status Pill */}
          <div className="status-pill" role="status">
            <span className="status-dot-pulse" aria-hidden="true">
              <span className="status-dot-core" />
              <span className="status-dot-ring" />
            </span>
            <span className="status-pill-text">Verfügbar für Projekte & neue Herausforderungen</span>
          </div>

          {/* Heading */}
          <div className="hero-heading-block">
            <span className="hero-greeting">Hi, ich bin</span>
            <h1 className="hero-title text-gradient">Adri</h1>
          </div>

          {/* Tagline / Subtitle */}
          <p className="hero-subtext">
            Wirtschaftsinformatiker mit Leidenschaft für moderne Frontend-Entwicklung,
            robuste Systemarchitekturen und intelligente Prozessautomatisierung.
            Ich verbinde analytisches Business-Denken mit sauberem, performantem Code.
          </p>

          {/* CTA Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>Projekte ansehen</span>
              <ArrowRight size={18} className="btn-icon" />
            </a>

            <a href="#contact" className="btn-secondary">
              <FileText size={18} className="btn-icon" />
              <span>Kontakt / Lebenslauf</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="social-label">Connect:</span>
            <div className="social-icons-group">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                aria-label="GitHub Profil"
                title="GitHub"
              >
                <GithubIcon size={19} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profil"
                title="LinkedIn"
              >
                <LinkedinIcon size={19} />
              </a>
              <a
                href="mailto:kontakt@adrian-tajik.de"
                className="social-icon-link"
                aria-label="E-Mail senden"
                title="E-Mail"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile ID Badge suspended from top */}
        <div className="hero-badge-column">
          <InteractiveBadge />
        </div>
      </div>
    </section>
  );
};
