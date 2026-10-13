import React from 'react';
import { Layers, Workflow, Terminal, Network, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const focusAreas = [
    {
      icon: <Workflow size={22} className="focus-icon-accent" />,
      title: 'Wirtschaftsinformatik',
      desc: 'Schnittstelle zwischen geschäftlichen Anforderungen und technologischer Realisierung. Prozessoptimierung und fundierte Systemanalyse.',
    },
    {
      icon: <Layers size={22} className="focus-icon-accent" />,
      title: 'Modernes Frontend',
      desc: 'Entwicklung responsiver, intuitiver und schneller Webanwendungen mit React, TypeScript und modernen Design-Systemen.',
    },
    {
      icon: <Terminal size={22} className="focus-icon-accent" />,
      title: 'Automatisierung & Bots',
      desc: 'Konzeption von Python-basierten Automatisierungs-Pipelines, Datenvalidierung mit Pydantic und interaktiven Tools.',
    },
    {
      icon: <Network size={22} className="focus-icon-accent" />,
      title: 'Systemarchitektur',
      desc: 'Strukturierte API-Schnittstellen, saubere Datenmodelle und modulare Komponentenarchitekturen für langfristige Wartbarkeit.',
    },
  ];

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <span className="section-pill">Über mich</span>
            <h2 className="section-title">
              Technologie verstehen, <br />
              <span className="text-gradient">Werte schaffen.</span>
            </h2>

            <p className="about-lead">
              Als Wirtschaftsinformatiker betrachte ich Software nicht isoliert, sondern als
              Werkzeug zur Lösung realer betrieblicher und menschlicher Herausforderungen.
            </p>

            <p className="about-body">
              Mein Fokus liegt darauf, nutzerzentrierte Oberflächen mit stabilen, modularen Architekturen
              zu verbinden. Von agilen Kanban-Lösungen über KI-gestützte Dokumentenanalyse bis hin zu
              automatisierten Backend-Prozessen entwickle ich Lösungen, die performant, wartbar und
              ästhetisch überzeugend sind.
            </p>

            <div className="about-principles">
              <div className="principle-item">
                <CheckCircle2 size={18} className="principle-icon" />
                <span>Analytisches Denken & saubere Prozessmodellierung</span>
              </div>
              <div className="principle-item">
                <CheckCircle2 size={18} className="principle-icon" />
                <span>Hohe Detailtreue in Design, Barrierefreiheit & UX</span>
              </div>
              <div className="principle-item">
                <CheckCircle2 size={18} className="principle-icon" />
                <span>Wirtschaftlicher Weitblick gepaart mit moderner Tech-Praxis</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Focus Cards in 2x2 Grid */}
          <div className="about-focus-grid">
            {focusAreas.map((item, idx) => (
              <div key={idx} className="focus-card">
                <div className="focus-card-header">
                  <div className="focus-icon-box">{item.icon}</div>
                  <h3 className="focus-card-title">{item.title}</h3>
                </div>
                <p className="focus-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
