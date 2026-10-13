import React from 'react';
import { Layers, Workflow, Terminal, Network, CheckCircle2 } from 'lucide-react';
import { profile } from '../content/profile';
import type { FocusArea } from '../content/profile';

const focusIcons: Record<FocusArea['icon'], React.ReactNode> = {
  workflow: <Workflow size={22} className="focus-icon-accent" />,
  layers: <Layers size={22} className="focus-icon-accent" />,
  terminal: <Terminal size={22} className="focus-icon-accent" />,
  network: <Network size={22} className="focus-icon-accent" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div className="about-narrative">
            <span className="section-pill">Über mich</span>
            <h2 className="section-title">
              Technologie verstehen, <br />
              <span className="text-accent">Werte schaffen.</span>
            </h2>

            <p className="about-lead">{profile.about.lead}</p>

            <p className="about-body">{profile.about.body}</p>

            <div className="about-principles">
              {profile.about.principles.map((text) => (
                <div key={text} className="principle-item">
                  <CheckCircle2 size={18} className="principle-icon" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Focus Cards in 2x2 Grid */}
          <div className="about-focus-grid">
            {profile.about.focusAreas.map((item) => (
              <div key={item.title} className="focus-card">
                <div className="focus-card-header">
                  <div className="focus-icon-box">{focusIcons[item.icon]}</div>
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
