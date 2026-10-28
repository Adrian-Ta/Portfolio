import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { legal, legalComplete, privacySections } from '../content/legal';

const home = import.meta.env.BASE_URL;

/** Impressum und Datenschutzerklärung auf einer Seite (/rechtliches/). */
export const LegalPage: React.FC = () => {
  return (
    <main id="main" className="legal-page">
      <div className="container legal-container">
        <a href={home} className="project-link legal-back">
          <ArrowLeft size={16} aria-hidden="true" /> Zur Startseite
        </a>

        {!legalComplete && (
          <p className="legal-missing" role="note">
            Die Angaben zum Impressum werden gerade ergänzt.
          </p>
        )}

        <section id="impressum" aria-labelledby="impressum-title">
          <h1 id="impressum-title" className="section-title">Impressum</h1>
          <h2 className="legal-heading">Angaben gemäß § 5 DDG</h2>
          <address className="legal-address">
            {legal.name && <span>{legal.name}</span>}
            {legal.street && <span>{legal.street}</span>}
            {legal.postalCodeCity && <span>{legal.postalCodeCity}</span>}
          </address>

          <h2 className="legal-heading">Kontakt</h2>
          <p>
            E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
            {legal.phone && (
              <>
                <br />
                Telefon: {legal.phone}
              </>
            )}
          </p>

          {legal.name && (
            <>
              <h2 className="legal-heading">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <p>{legal.name}, Anschrift wie oben</p>
            </>
          )}
        </section>

        <section id="datenschutz" aria-labelledby="datenschutz-title" className="legal-privacy">
          <h2 id="datenschutz-title" className="section-title">Datenschutzerklärung</h2>
          {privacySections.map((section) => (
            <React.Fragment key={section.title}>
              <h3 className="legal-heading">{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </React.Fragment>
          ))}
          <p className="legal-updated">Stand: {legal.lastUpdated}</p>
        </section>
      </div>
    </main>
  );
};
