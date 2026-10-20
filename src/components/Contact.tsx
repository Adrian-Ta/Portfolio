import React, { useState } from 'react';
import { Mail, Send, CheckCircle, MapPin, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../content/profile';

// Formular-Dienst, der die Nachricht als E-Mail an Adrian weiterleitet (siehe `formAccessKey` in profile.ts)
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [botcheck, setBotcheck] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.formAccessKey,
          from_name: 'Portfolio-Kontaktformular',
          subject: `Portfolio: ${formData.subject}`,
          name: formData.name,
          // Web3Forms setzt diese Adresse als Antwort-Adresse
          email: formData.email,
          message: formData.message,
          botcheck,
        }),
      });
      const result = await response.json();
      setFormStatus(result.success ? 'success' : 'error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-section dot-grid-bg">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-pill">Kontakt</span>
          <h2 className="section-title">
            Interesse an meinem <br />
            <span className="text-accent">Profil?</span>
          </h2>
          <p className="section-subtitle">
            Für Praktikums- und Werkstudentenangebote oder fachlichen Austausch freue ich mich über deine Nachricht.
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
                <span className="contact-value">{profile.location}</span>
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
                  rel="noopener"
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
              {formStatus === 'success' ? (
                <div className="form-success-state" role="status">
                  <div className="success-icon-wrap">
                    <CheckCircle size={36} />
                  </div>
                  <h3>Danke für deine Nachricht!</h3>
                  <p>Sie ist bei mir angekommen. Ich melde mich so bald wie möglich bei dir.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn-secondary small"
                  >
                      Zurück zum Formular
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
                      placeholder="Praktikum / Werkstudentenstelle / Austausch"
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

                  <input
                    type="checkbox"
                    className="form-honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    checked={botcheck}
                    onChange={(e) => setBotcheck(e.target.checked)}
                  />

                  {formStatus === 'error' && (
                    <p className="form-error" role="alert">
                      Die Nachricht konnte nicht gesendet werden. Bitte versuch es später noch einmal oder schreib direkt an{' '}
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary full-width"
                    disabled={formStatus === 'sending'}
                  >
                    <span>{formStatus === 'sending' ? 'Wird gesendet …' : 'Nachricht senden'}</span>
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
