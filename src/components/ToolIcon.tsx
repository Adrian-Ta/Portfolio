import React from 'react';
import {
  Code2,
  Database,
  Terminal,
  Layers,
  Cpu,
  GitBranch,
  Workflow,
  Sparkles,
  Server,
  UsersRound,
  Network,
  Globe,
} from 'lucide-react';
import type { Tool } from '../content/skills';
import { techLogos } from '../content/techLogos';

const toolIcons: Record<Tool['icon'], React.ReactNode> = {
  code: <Code2 size={18} />,
  layers: <Layers size={18} />,
  terminal: <Terminal size={18} />,
  server: <Server size={18} />,
  database: <Database size={18} />,
  git: <GitBranch size={18} />,
  cpu: <Cpu size={18} />,
  workflow: <Workflow size={18} />,
  sparkles: <Sparkles size={18} />,
  users: <UsersRound size={18} />,
  network: <Network size={18} />,
  globe: <Globe size={18} />,
};

/** Firmenlogo in Markenfarbe; ohne Logo ein einfaches Symbol in der Akzentfarbe. */
export const ToolIcon: React.FC<{ tool: Tool }> = ({ tool }) => {
  const logo = tool.logo ? techLogos[tool.logo] : undefined;
  if (!logo) return <span className="tool-icon tool-icon--plain">{toolIcons[tool.icon]}</span>;

  return (
    <span className="tool-icon">
      <svg
        viewBox={logo.viewBox ?? '0 0 24 24'}
        width={18}
        height={18}
        aria-hidden="true"
        focusable="false"
        style={{ fill: logo.color === 'text' ? 'var(--portfolio-text)' : logo.color }}
      >
        <path d={logo.path} />
      </svg>
    </span>
  );
};
