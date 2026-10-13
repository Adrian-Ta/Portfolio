import React from 'react';
import {
  Code2,
  Database,
  Terminal,
  Layers,
  Cpu,
  GitBranch,
  Boxes,
  Workflow,
  Sparkles,
  Server,
} from 'lucide-react';
import { techStack } from '../content/skills';
import type { TechItem } from '../content/skills';

const techIcons: Record<TechItem['icon'], React.ReactNode> = {
  code: <Code2 size={16} />,
  layers: <Layers size={16} />,
  boxes: <Boxes size={16} />,
  terminal: <Terminal size={16} />,
  server: <Server size={16} />,
  database: <Database size={16} />,
  git: <GitBranch size={16} />,
  cpu: <Cpu size={16} />,
  workflow: <Workflow size={16} />,
  sparkles: <Sparkles size={16} />,
};

export const TechMarquee: React.FC = () => {
  if (techStack.length === 0) return null;

  // We duplicate the list to ensure a seamless infinite loop
  const marqueeList = [...techStack, ...techStack];

  return (
    <div className="marquee-wrapper" aria-label="Technologieband">
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      <div className="marquee-track">
        {marqueeList.map((item, index) => (
          <div key={`${item.name}-${index}`} className="marquee-pill">
            <span className="marquee-pill-icon">{techIcons[item.icon]}</span>
            <span className="marquee-pill-name">{item.name}</span>
            <span className="marquee-pill-cat">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
