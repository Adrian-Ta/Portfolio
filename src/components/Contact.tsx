import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { profile } from '../content/profile';

// Formular-Dienst, der die Nachricht als E-Mail an Adrian weiterleitet (siehe `formAccessKey` in profile.ts)
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';
type CopyStatus = 'idle' | 'copied' | 'failed';

export const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const copyTimer = useRef<number | undefined>(undefined);
  const [botcheck, setBotcheck] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  // „Kopiert“ nur bei echtem Erfolg; ohne Zwischenablage (z. B. kein HTTPS) eine klare Meldung
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
    window.clearTimeout(copyTimer.current);
    copyTimer.current = window.setTimeout(() => setCopyStatus('idle'), 3000);
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
          subject: `Portfolio: ${formData.subject.trim() || 'Neue Nachricht'}`,
          name: formData.name,
          // Web3Forms setzt diese Adresse als Antwort-Adresse
          email: formData.email,
          message: formData.message,
          botcheck,
        }),
      });
      const result = await response.json().catch(() => null);
      setFormStatus(response.ok && result?.success ? 'success' : 'error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title">Kontakt</h2>
          <p className="section-subtitle">
            Für eine Werkstudentenstelle in ERP, Prozessmanagement oder KI-Automatisierung oder für fachlichen Austausch freue ich mich über deine Nachricht.
          </p>
        </div>

        <div className="contact-grid">
          {/* Linke Spalte: direkte Kontaktwege als ruhige Liste, ohne Karten */}
          <dl className="contact-details">
            <div className="contact-detail">
              <dt>E-Mail</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="contact-value contact-email-link">
                  {profile.email}
                </a>
                <button type="button" onClick={handleCopyEmail} className="copy-email-btn">
                  {copyStatus === 'copied' ? (
                    <Check size={14} className="copied-icon" aria-hidden="true" />
                  ) : (
                    <Copy size={14} aria-hidden="true" />
                  )}
                  <span>Adresse kopieren</span>
                </button>
                {/* Meldung wird von Screenreadern vorgelesen */}
                <span className="copy-status" aria-live="polite">
                  {copyStatus === 'copied' && 'In die Zwischenablage kopiert.'}
                  {copyStatus === 'failed' && 'Kopieren nicht möglich. Bitte die Adresse markieren und kopieren.'}
                </span>
              </dd>
            </div>

            {(profile.linkedin.url || profile.github.url) && (
              <div className="contact-detail">
                <dt>Profile</dt>
                <dd className="contact-profile-links">
                  {profile.linkedin.url && (
                    <a href={profile.linkedin.url} target="_blank" rel="noopener" className="project-link">
                      <LinkedinIcon size={16} /> LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                  {profile.github.url && (
                    <a href={profile.github.url} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon size={16} /> GitHub <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  )}
                </dd>
              </div>
            )}

            <div className="contact-detail">
              <dt>Verfügbarkeit</dt>
              <dd>{profile.availabilityNote}</dd>
            </div>

            <div className="contact-detail">
              <dt>Standort</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>

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
                        autoComplete="name"
                        maxLength={100}
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
                        autoComplete="email"
                        maxLength={254}
                        placeholder="max@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Betreff <span className="form-optional">(optional)</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      maxLength={150}
                      placeholder="z. B. Werkstudentenstelle ERP"
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
                      maxLength={5000}
                      placeholder="Worum geht es?"
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
