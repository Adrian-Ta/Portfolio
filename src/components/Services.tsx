import React from 'react';
import { Layout, GitPullRequest, Cpu, Database } from 'lucide-react';
import { services } from '../content/services';
import type { Service } from '../content/services';

const serviceIcons: Record<Service['icon'], React.ReactNode> = {
  layout: <Layout size={24} />,
  process: <GitPullRequest size={24} />,
  cpu: <Cpu size={24} />,
  database: <Database size={24} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-header-centered">
          <span className="section-pill">Leistungen</span>
          <h2 className="section-title">
            Kompetenzen an der Schnittstelle von <br />
            <span className="text-accent">Business & Code</span>
          </h2>
          <p className="section-subtitle">
            Gezielte Lösungen für effiziente digitale Abläufe und hochwertige Oberflächen.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.title} className="service-card">
              <div className="service-icon-box">{serviceIcons[srv.icon]}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>

              <div className="service-tags">
                {srv.tags.map((t) => (
                  <span key={t} className="service-tag-pill">
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
