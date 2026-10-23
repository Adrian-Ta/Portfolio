import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectsSection } from '../content/projects';
import type { Project } from '../content/projects';

const assetUrl = (path: string) =>
  path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

/** Ausgangslage → Umsetzung → Ergebnis; leere Schritte entfallen. */
const flowSteps = (project: Project) =>
  [
    { label: 'Ausgangslage', text: project.ausgangslage },
    { label: 'Umsetzung', text: project.umsetzung },
    { label: 'Ergebnis', text: project.ergebnis },
  ].filter((step): step is { label: string; text: string } => Boolean(step.text));

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title">{projectsSection.title}</h2>
          <p className="section-subtitle">{projectsSection.intro}</p>
        </div>

        {projects.length === 0 ? (
          <p className="projects-empty">{projectsSection.emptyText}</p>
        ) : (
          <div className="project-list">
            {projects.map((project) => {
              const steps = flowSteps(project);

              return (
                <article
                  key={project.id}
                  id={project.id}
                  className="project-case"
                  aria-labelledby={`${project.id}-title`}
                >
                  <div className={`project-case-head${project.image ? '' : ' is-text-only'}`}>
                    <div className="project-case-intro">
                      <h3 id={`${project.id}-title`} className="project-case-title">
                        {project.title}
                      </h3>
                      <p className="project-case-meta">
                        {project.category} · {project.subtitle}
                      </p>
                      <p className="project-case-desc">{project.description}</p>

                      <ul className="project-tags" aria-label="Werkzeuge und Themen">
                        {project.tags.map((tag) => (
                          <li key={tag} className="project-tag-pill">
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {(project.githubUrl || project.liveUrl) && (
                        <div className="project-links">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link">
                              Code auf GitHub <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link">
                              Live ansehen <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                    {project.image && (
                      <figure className="project-case-figure">
                        {/* Öffnet das Bild in voller Größe, wichtig für Diagramme auf dem Handy */}
                        <a href={assetUrl(project.image)} target="_blank" rel="noreferrer">
                          <img
                            src={assetUrl(project.image)}
                            alt={project.imageAlt ?? `Abbildung zu ${project.title}`}
                            width={960}
                            height={540}
                            loading="lazy"
                            decoding="async"
                          />
                        </a>
                      </figure>
                    )}
                  </div>

                  {steps.length > 0 && (
                    <ol className="project-flow">
                      {steps.map((step) => (
                        <li key={step.label} className="project-flow-step">
                          <span className="project-flow-label">{step.label}</span>
                          <p className="project-flow-text">{step.text}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
