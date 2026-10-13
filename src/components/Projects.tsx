import React from 'react';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '../content/projects';

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

        {projects.length === 0 ? (
          <p className="projects-empty" role="status">
            Projekte folgen bald.
          </p>
        ) : (
          /* 2-Column Grid on Desktop, 1-Column on Mobile */
          <div className="projects-grid">
            {projects.map((project) => (
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
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-title-row">
                    <div>
                      <h3 className="project-card-title">{project.title}</h3>
                      <p className="project-card-subtitle">{project.subtitle}</p>
                    </div>
                    <div className="project-actions">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action-btn"
                          aria-label={`Code für ${project.title} ansehen`}
                          title="Code ansehen"
                        >
                          <Code2 size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-action-btn is-arrow"
                          aria-label={`${project.title} live ansehen`}
                          title="Live ansehen"
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-card-desc">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
