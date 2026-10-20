import React from 'react';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';
import { techSkills, softSkills, education, learningFocus } from '../content/skills';
import type { Education } from '../content/skills';

const educationIcons: Record<Education['icon'], React.ReactNode> = {
  cap: <GraduationCap size={22} />,
  award: <Award size={22} />,
};

export const EducationSkills: React.FC = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-pill">Qualifikation</span>
          <h2 className="section-title">
            Ausbildung & <br />
            <span className="text-accent">Kenntnisse</span>
          </h2>
          <p className="section-subtitle">
            Mein aktuelles Studium, mein Fachabitur und die technischen Themen, mit denen ich arbeite.
          </p>
        </div>

        {/* 1. Education: 2 Side-by-Side Cards */}
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.title} className="education-card">
              <div className="education-card-top">
                <div className="education-icon-box">{educationIcons[edu.icon]}</div>
                <span className="education-status-pill">{edu.status}</span>
              </div>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-subtitle">{edu.subtitle}</p>
              <p className="education-desc">{edu.desc}</p>
              <div className="education-highlights">
                {edu.tags.map((tag) => (
                  <span key={tag} className="edu-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2. Skills: Left Progress Bars, Right Soft Skill Pills + Learning Card */}
        <div className="skills-main-grid">
          {/* Left Column: Tech Skills with verbal level + gentle gradient progress bar */}
          <div className="skills-tech-panel">
            <div className="panel-header">
              <h3 className="panel-title">Technische Kernkompetenzen</h3>
            <span className="panel-sub">Nach Erfahrungskontext eingeordnet</span>
            </div>

            <div className="skills-list">
              {techSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-label-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-text">{skill.levelText}</span>
                  </div>
                  <div className="skill-context-rule" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Soft Skills & Continuous Learning Card */}
          <div className="skills-meta-panel">
            <div className="panel-header">
              <h3 className="panel-title">Methoden & Arbeitsweise</h3>
              <span className="panel-sub">Stärken aus meiner Berufspraxis</span>
            </div>

            <div className="soft-skills-cluster">
              {softSkills.map((sk) => (
                <span key={sk.label} className={`soft-skill-pill tint-${sk.tint}`}>
                  <Check size={13} className="soft-skill-check" />
                  {sk.label}
                </span>
              ))}
            </div>

            {/* Current Learning Card */}
            {learningFocus && (
              <div className="current-learning-card">
                <div className="learning-icon-box">
                  <BookOpen size={18} />
                </div>
                <div className="learning-content">
                  <h4 className="learning-title">{learningFocus.title}</h4>
                  <p className="learning-desc">{learningFocus.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
