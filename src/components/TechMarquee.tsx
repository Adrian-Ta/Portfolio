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
  UsersRound,
  Network,
  Globe,
} from 'lucide-react';
import { techStack } from '../content/skills';
import type { TechItem } from '../content/skills';
import { techLogos } from '../content/techLogos';

const techIcons: Record<TechItem['icon'], React.ReactNode> = {
  code: <Code2 size={20} />,
  layers: <Layers size={20} />,
  boxes: <Boxes size={20} />,
  terminal: <Terminal size={20} />,
  server: <Server size={20} />,
  database: <Database size={20} />,
  git: <GitBranch size={20} />,
  cpu: <Cpu size={20} />,
  workflow: <Workflow size={20} />,
  sparkles: <Sparkles size={20} />,
  users: <UsersRound size={20} />,
  network: <Network size={20} />,
  globe: <Globe size={20} />,
};

/** Firmenlogo in Markenfarbe; ohne Logo ein einfaches Symbol in der Akzentfarbe. */
const TechIcon: React.FC<{ item: TechItem }> = ({ item }) => {
  const logo = item.logo ? techLogos[item.logo] : undefined;
  if (!logo) return <span className="marquee-pill-icon marquee-pill-icon--plain">{techIcons[item.icon]}</span>;

  return (
    <span className="marquee-pill-icon">
      <svg
        viewBox={logo.viewBox ?? '0 0 24 24'}
        width={22}
        height={22}
        aria-hidden="true"
        focusable="false"
        style={{ fill: logo.color === 'text' ? 'var(--portfolio-text)' : logo.color }}
      >
        <path d={logo.path} />
      </svg>
    </span>
  );
};

export const TechMarquee: React.FC = () => {
  if (techStack.length === 0) return null;

  // Die Liste wird verdoppelt, damit die Endlosschleife nahtlos läuft.
  const marqueeList = [...techStack, ...techStack];

  return (
    <div className="marquee-wrapper dot-grid-bg" aria-label="Technologieband">
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      <div className="marquee-track">
        {marqueeList.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="marquee-pill"
            aria-hidden={index >= techStack.length ? true : undefined}
          >
            <TechIcon item={item} />
            <span className="marquee-pill-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
