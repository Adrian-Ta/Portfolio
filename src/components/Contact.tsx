import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../content/profile';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper contact-section dot-grid-bg">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">Kontakt</span>
          <h2 className="section-title">
            Lass uns gemeinsam <br />
            <span className="text-accent">etwas bewegen.</span>
          </h2>
          <p className="section-subtitle">
            Interesse an einer Zusammenarbeit, einem Projekt oder einem fachlichen Austausch?
            Ich freue mich über jede Nachricht.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-col">
            <div className="contact-card highlight">
              <div className="contact-card-icon">
                <Mail size={22} />
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Direkte E-Mail</span>
                <span className="contact-value">{profile.email}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-email-btn"
                  title="E-Mail in Zwischenablage kopieren"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="copied-icon" />
                      <span>Kopiert!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Adresse kopieren</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={22} />
              </div>
              <div className="contact-card-body">
                <span className="contact-label">Standort & Verfügbarkeit</span>
                <span className="contact-value">{profile.location} (Remote & Vor Ort)</span>
                <p className="contact-note">{profile.availabilityNote}</p>
              </div>
            </div>

            <div className="contact-social-pills">
              {profile.github.url && (
                <a
                  href={profile.github.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-item"
                >
                  <GithubIcon size={18} />
                  <span>GitHub Profil</span>
                </a>
              )}
              {profile.linkedin.url && (
                <a
                  href={profile.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-pill-item"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn Netzwerk</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              {formSubmitted ? (
                <div className="form-success-state" role="status">
                  <div className="success-icon-wrap">
                    <CheckCircle size={36} />
                  </div>
                  <h3>Vielen Dank für Ihre Nachricht!</h3>
                  <p>
                    Ihre Anfrage ist eingegangen. Ich werde mich so schnell wie möglich bei Ihnen melden.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary small"
                  >
                    Weitere Nachricht verfassen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Max Mustermann"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        E-Mail-Adresse
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Betreff
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Projektanfrage / Austausch"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder={`Hallo ${profile.name}, ich habe Interesse an einer Zusammenarbeit bezüglich...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn-primary full-width">
                    <span>Nachricht senden</span>
                    <Send size={16} className="btn-icon" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
