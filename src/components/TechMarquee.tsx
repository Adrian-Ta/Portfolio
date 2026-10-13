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

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techItems: TechItem[] = [
  { name: 'TypeScript', category: 'Language', icon: <Code2 size={16} /> },
  { name: 'React', category: 'Frontend', icon: <Layers size={16} /> },
  { name: 'Next.js', category: 'Framework', icon: <Boxes size={16} /> },
  { name: 'Python', category: 'Backend & Data', icon: <Terminal size={16} /> },
  { name: 'Node.js', category: 'Runtime', icon: <Server size={16} /> },
  { name: 'PostgreSQL', category: 'Database', icon: <Database size={16} /> },
  { name: 'Git & GitHub', category: 'Tooling', icon: <GitBranch size={16} /> },
  { name: 'Docker', category: 'DevOps', icon: <Cpu size={16} /> },
  { name: 'Prozess-BPMN', category: 'Wirtschaftsinformatik', icon: <Workflow size={16} /> },
  { name: 'REST & GraphQL', category: 'APIs', icon: <Code2 size={16} /> },
  { name: 'Vite', category: 'Bundler', icon: <Sparkles size={16} /> },
  { name: 'UI / UX Architecture', category: 'Design Systems', icon: <Layers size={16} /> },
];

export const TechMarquee: React.FC = () => {
  // We duplicate the list to ensure a seamless infinite loop
  const marqueeList = [...techItems, ...techItems];

  return (
    <div className="marquee-wrapper" aria-label="Technologieband">
      <div className="marquee-fade-left" aria-hidden="true" />
      <div className="marquee-fade-right" aria-hidden="true" />

      <div className="marquee-track">
        {marqueeList.map((item, index) => (
          <div key={`${item.name}-${index}`} className="marquee-pill">
            <span className="marquee-pill-icon">{item.icon}</span>
            <span className="marquee-pill-name">{item.name}</span>
            <span className="marquee-pill-cat">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
