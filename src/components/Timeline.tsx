import React from 'react';
import { Calendar, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import { timeline, timelineSection } from '../content/timeline';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper timeline-section dot-grid-bg">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title">{timelineSection.title}</h2>
          <p className="section-subtitle">{timelineSection.intro}</p>
        </div>

        {timeline.length > 0 && (
          <div className="timeline-container">
            {/* Mittellinie, an der die Stationen abwechselnd links und rechts hängen */}
            <div className="timeline-spine" aria-hidden="true" />

            {/* Timeline Cards alternating left & right */}
            <div className="timeline-list">
              {timeline.map((item, index) => {
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
        )}
      </div>
    </section>
  );
};
