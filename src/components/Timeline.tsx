import React from 'react';
import { Calendar, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  type: 'work' | 'education' | 'project';
  points: string[];
}

const timelineData: TimelineItem[] = [
  {
    year: '2024 – Heute',
    role: 'Wirtschaftsinformatik & Frontend-Entwicklung',
    organization: 'Fokus: Moderne Web-Architekturen & Automation',
    type: 'project',
    points: [
      'Entwicklung intuitiver Web-Applikationen mit React, Next.js und TypeScript',
      'Integration modularer Komponenten-Bibliotheken und flüssiger Interaktionsdesigns',
      'Kontinuierliche Optimierung von Performance, Lighthouse-Scores und Core Web Vitals',
    ],
  },
  {
    year: '2023 – 2024',
    role: 'IT-Automatisierung & KI-Assistenzsysteme',
    organization: 'Prozessautomatisierung & Python-Entwicklung',
    type: 'work',
    points: [
      'Entwicklung strukturierter Dokumenten-Assistenten zur automatisierten PDF-Auswertung',
      'Implementierung robuster Datenvalidierungs-Pipelines mit Pydantic und APIs',
      'Konzeption von interaktiven Test- und Feedback-Oberflächen mit Gradio',
    ],
  },
  {
    year: '2022 – 2023',
    role: 'Agiles Workflow- & Kanban-Management',
    organization: 'Web- & Prozessentwicklung',
    type: 'project',
    points: [
      'Konzeption und Umsetzung eines vollwertigen Kanban-Boards mit Drag-and-Drop',
      'Geschäftsprozessmodellierung nach BPMN 2.0 Standards',
      'Entwurf relationaler Schemata in PostgreSQL und Anbindung RESTful APIs',
    ],
  },
  {
    year: '2021 – 2022',
    role: 'Studienstart Wirtschaftsinformatik',
    organization: 'Akademische Fundierung',
    type: 'education',
    points: [
      'Grundlagen der Softwareentwicklung, Datenstrukturen und Algorithmen',
      'Betriebswirtschaftliche Grundlagen, Rechnungswesen und Projektmanagement',
      'Erste Full-Stack Projekte mit HTML5, modernem JavaScript und Python',
    ],
  },
];

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper timeline-section dot-grid-bg">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-header-centered">
          <span className="section-pill">Laufbahn</span>
          <h2 className="section-title">
            Stationen & <br />
            <span className="text-gradient">Praxiserfahrung</span>
          </h2>
          <p className="section-subtitle">
            Die kontinuierliche Verbindung von theoretischem Wissen und praktischer Softwareentwicklung.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="timeline-container">
          {/* Central Glowing Purple Line */}
          <div className="timeline-spine" aria-hidden="true" />

          {/* Timeline Cards alternating left & right */}
          <div className="timeline-list">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`timeline-row ${isEven ? 'row-left' : 'row-right'}`}
                >
                  {/* Glowing Node on Spine */}
                  <div className="timeline-node" aria-hidden="true">
                    <div className="node-glow" />
                    <div className="node-dot" />
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="timeline-period-pill">
                        <Calendar size={13} className="period-icon" />
                        <span>{item.year}</span>
                      </div>
                      <span className="timeline-badge-type">
                        {item.type === 'education' ? (
                          <GraduationCap size={15} />
                        ) : (
                          <Briefcase size={15} />
                        )}
                      </span>
                    </div>

                    <h3 className="timeline-card-role">{item.role}</h3>
                    <p className="timeline-card-org">{item.organization}</p>

                    <ul className="timeline-points">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="timeline-point-item">
                          <CheckCircle2 size={15} className="timeline-point-bullet" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
