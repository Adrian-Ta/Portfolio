import React from 'react';
import { Layout, GitPullRequest, Cpu, Database } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout size={24} />,
      title: 'Web- & Frontend-Entwicklung',
      desc: 'Entwicklung zeitgemäßer Single-Page und Server-Side Web-Apps mit React, TypeScript und moderner CSS-Architektur. Fokus auf Performance, Barrierefreiheit und flüssige Interaktionen.',
      tags: ['React', 'TypeScript', 'Responsive', 'UX/UI'],
    },
    {
      icon: <GitPullRequest size={24} />,
      title: 'Prozessanalyse & BPMN',
      desc: 'Strukturierte Modellierung und Digitalisierung von Unternehmensprozessen nach BPMN 2.0. Identifikation von Engpässen und Übersetzung in klare IT-Anforderungsprofile.',
      tags: ['BPMN 2.0', 'Prozessoptimierung', 'Anforderungsanalyse'],
    },
    {
      icon: <Cpu size={24} />,
      title: 'IT-Automatisierung & Scripting',
      desc: 'Konzeption von Workflows und Automatisierungs-Pipelines mit Python. Automatisierte Dokumentenverarbeitung, Datenextraktion und API-basierte Tool-Verknüpfungen.',
      tags: ['Python', 'Automation', 'Gradio', 'Pydantic'],
    },
    {
      icon: <Database size={24} />,
      title: 'API-Integration & Datenarchitektur',
      desc: 'Saubere Schnittstellenanbindung über REST und GraphQL. Konzeption solider relationaler Datenmodelle in PostgreSQL und strukturierte Datenvalidierung.',
      tags: ['REST APIs', 'PostgreSQL', 'Systemintegration'],
    },
  ];

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-header-centered">
          <span className="section-pill">Leistungen</span>
          <h2 className="section-title">
            Kompetenzen an der Schnittstelle von <br />
            <span className="text-gradient">Business & Code</span>
          </h2>
          <p className="section-subtitle">
            Gezielte Lösungen für effiziente digitale Abläufe und hochwertige Oberflächen.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="services-grid">
          {services.map((srv, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon-box">{srv.icon}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>

              <div className="service-tags">
                {srv.tags.map((t, ti) => (
                  <span key={ti} className="service-tag-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
