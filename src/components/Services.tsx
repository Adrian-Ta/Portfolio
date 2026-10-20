import React from 'react';
import { Headset, Network, Code2, Workflow } from 'lucide-react';
import { services } from '../content/services';
import type { Service } from '../content/services';

const serviceIcons: Record<Service['icon'], React.ReactNode> = {
  support: <Headset size={24} />,
  network: <Network size={24} />,
  code: <Code2 size={24} />,
  workflow: <Workflow size={24} />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        {/* Centered Heading */}
        <div className="section-header-centered">
          <span className="section-pill">Praxisfelder</span>
          <h2 className="section-title">
            Was ich<br />
            <span className="text-accent">mitbringe</span>
          </h2>
          <p className="section-subtitle">
            Berufserfahrung, Studieninhalte und Themen aus meiner eigenen Lernpraxis.
          </p>
        </div>

        {/* 4 Clean Service Cards */}
        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.title} className="service-card">
              <div className="service-icon-box">{serviceIcons[srv.icon]}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>

              <span className="service-context">{srv.context}</span>

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
