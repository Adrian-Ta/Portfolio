import React from 'react';
import { timeline, timelineSection } from '../content/timeline';
import type { TimelineType } from '../content/timeline';

const typeLabels: Record<TimelineType, string> = {
  work: 'Beruf',
  education: 'Ausbildung',
  project: 'Projekt',
};

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title">{timelineSection.title}</h2>
          <p className="section-subtitle">{timelineSection.intro}</p>
        </div>

        {/* Wie ein Lebenslauf: links Zeitraum und Art, rechts die Station.
            Die Linie mit Punkten greift den Ablauf der Projekte auf. */}
        {timeline.length > 0 && (
          <ol className="timeline-list">
            {timeline.map((item) => (
              <li key={`${item.year}-${item.role}`} className="timeline-entry">
                <p className="timeline-when">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-type">{typeLabels[item.type]}</span>
                </p>
                <div className="timeline-body">
                  <h3 className="timeline-role">{item.role}</h3>
                  <p className="timeline-org">{item.organization}</p>
                  <ul className="timeline-points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};
