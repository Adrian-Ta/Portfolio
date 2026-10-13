import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projectData: Project[] = [
  {
    id: 'kanban',
    title: 'OpenCode Kanban System',
    subtitle: 'Agiles Aufgaben- & Workflow-Board',
    category: 'Frontend & State Management',
    description:
      'Ein interaktives, performantes Kanban-Board mit flüssigem Drag & Drop, flexibler Spaltenverwaltung, Prioritäten-Tags und persisted Local/Remote State.',
    image: '/projects/kanban.jpg',
    tags: ['React', 'TypeScript', 'Drag & Drop', 'Tailwind', 'UX'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'pdf-assistant',
    title: 'AI Document Assistant',
    subtitle: 'Intelligente PDF-Analyse & Extraktion',
    category: 'Full-Stack & KI-Integration',
    description:
      'Web-Applikation zur semantischen Analyse komplexer Geschäftsberichte und Dokumente. Automatische Texterkennung, Zitate-Linking und strukturierte KPI-Extraktion.',
    image: '/projects/pdf-assistant.jpg',
    tags: ['TypeScript', 'Python', 'LLM API', 'PDF Processing', 'Analytics'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'automation-bot',
    title: 'Automations- & Bot-Pipeline',
    subtitle: 'Python Workflows mit Gradio & Pydantic',
    category: 'Automatisierung & Backend',
    description:
      'Modulares Bot- und Script-System zur automatisierten Aufgabenabarbeitung. Strikte Datenvalidierung über Pydantic Schemas und interaktive Testoberfläche via Gradio.',
    image: '/projects/automation-bot.jpg',
    tags: ['Python', 'Gradio', 'Pydantic', 'REST APIs', 'Logging'],
    githubUrl: 'https://github.com',
  },
  {
    id: 'process-hub',
    title: 'Enterprise Process Hub',
    subtitle: 'BPMN-Modellierung & Operations Dashboard',
    category: 'Wirtschaftsinformatik',
    description:
      'Konzept- und Dashboard-Plattform zur Visualisierung von Unternehmensabläufen, Durchlaufzeiten und Engpässen mit interaktiven Metrik-Widgets.',
    image: '/projects/process-hub.jpg',
    tags: ['Wirtschaftsinformatik', 'BPMN', 'KPI Dashboard', 'Data Viz'],
    githubUrl: 'https://github.com',
  },
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        {/* Header aligned left as requested in AGENTS.md */}
        <div className="section-header-left">
          <span className="section-pill">Ausgewählte Arbeiten</span>
          <h2 className="section-title">
            Projekte mit Fokus auf <br />
            <span className="text-gradient">Präzision & Funktion</span>
          </h2>
          <p className="section-subtitle">
            Reale Entwicklungen und Konzepte aus Webtechnologie, Systemintegration und Prozessautomatisierung.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, 1-Column on Mobile */}
        <div className="projects-grid">
          {projectData.map((project) => (
            <article key={project.id} className="project-card">
              {/* Image Frame */}
              <div className="project-image-box">
                <img
                  src={project.image}
                  alt={`Vorschau für ${project.title}`}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-image-overlay" />
                <div className="project-badge-top">
                  <span className="project-category-badge">{project.category}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="project-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-title-row">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-subtitle">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-btn"
                    aria-label={`Code für ${project.title} ansehen`}
                    title="Code / Details"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <p className="project-card-desc">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
