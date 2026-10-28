import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, projectsSection } from '../content/projects';

const assetUrl = (path: string) =>
  path.startsWith('http') ? path : `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

interface ProjectsProps {
  /** Aktuelles Design; im Dunkelmodus wird `imageDark` gezeigt, falls vorhanden */
  theme: 'light' | 'dark';
}

export const Projects: React.FC<ProjectsProps> = ({ theme }) => {
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
          <div className="project-grid">
            {projects.map((project) => {
              const src = theme === 'dark' && project.imageDark ? project.imageDark : project.image;

              return (
                <article
                  key={project.id}
                  id={project.id}
                  className="project-card"
                  aria-labelledby={`${project.id}-title`}
                >
                  <div className="project-card-head">
                    <h3 id={`${project.id}-title`} className="project-card-title">
                      {project.title}
                    </h3>
                    {project.status && <span className="project-status">{project.status}</span>}
                  </div>

                  {/* Bild steht optisch über dem Titel (CSS `order`), im Quelltext danach,
                      damit Screenreader zuerst den Titel vorlesen. */}
                  <figure className="project-card-figure">
                    {src ? (
                      // Ein Klick öffnet das Bild in voller Größe, wichtig für Diagramme auf dem Handy
                      <a href={assetUrl(src)} target="_blank" rel="noreferrer">
                        <img
                          src={assetUrl(src)}
                          alt={project.imageAlt ?? `Abbildung zu ${project.title}`}
                          width={960}
                          height={540}
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                    ) : (
                      <div className="project-card-placeholder" aria-hidden="true" />
                    )}
                  </figure>

                  <p className="project-card-desc">{project.description}</p>

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
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
