import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { ProfilePhoto } from './ProfilePhoto';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../content/profile';

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
            <span className="status-pill-text">{profile.availability}</span>
          </div>

          {/* Heading */}
          <div className="hero-heading-block">
            <h1 className="hero-title text-accent">{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
          </div>

          {/* Tagline / Subtitle */}
          <p className="hero-subtext">{profile.heroText}</p>

          {/* CTA Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>Projekte ansehen</span>
              <ArrowRight size={18} className="btn-icon" />
            </a>

            <a href="#contact" className="btn-secondary">
              <Mail size={18} className="btn-icon" />
              <span>Kontakt aufnehmen</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <span className="social-label">Profile:</span>
            <div className="social-icons-group">
              {profile.github.url && (
                <a
                  href={profile.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-link"
                  aria-label="GitHub Profil"
                  title="GitHub"
                >
                  <GithubIcon size={19} />
                </a>
              )}
              {profile.linkedin.url && (
                <a
                  href={profile.linkedin.url}
                  target="_blank"
                  rel="noopener"
                  className="social-icon-link"
                  aria-label="LinkedIn Profil"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={19} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Rechte Spalte: großes Profilfoto */}
        <div className="hero-photo-column">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  );
};
