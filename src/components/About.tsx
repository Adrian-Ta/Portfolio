import React from 'react';
import { ArrowUp } from 'lucide-react';
import { profile } from '../content/profile';
import { learningFocus, skillAreas, skillsHeading } from '../content/skills';
import { projects } from '../content/projects';

export const About: React.FC = () => {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <div className="section-header-left">
          <h2 className="section-title">{profile.about.title}</h2>
        </div>

        <div className="about-layout">
          <div className="about-story">
            {profile.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-skills">
            <h3 className="about-skills-title">{skillsHeading}</h3>

            {skillAreas.map((area) => {
              const project = projects.find((p) => p.id === area.projectId);

              return (
                <div key={area.title} className="skill-area">
                  <h4 className="skill-area-title">{area.title}</h4>
                  <ul className="skill-rows">
                    {area.skills.map((skill) => (
                      <li key={skill.name} className="skill-row">
                        <span>{skill.name}</span>
                        <span className="skill-row-context">{skill.context}</span>
                      </li>
                    ))}
                  </ul>
                  {project && (
                    <a href={`#${project.id}`} className="project-link skill-area-link">
                      Zum Projekt: {project.title} <ArrowUp size={15} aria-hidden="true" />
                    </a>
                  )}
                </div>
              );
            })}

            {learningFocus && (
              <p className="learning-note">
                <strong>{learningFocus.title}:</strong> {learningFocus.desc}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
