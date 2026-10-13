import React from 'react';
import { GraduationCap, Award, BookOpen, Check } from 'lucide-react';

interface TechSkill {
  name: string;
  levelText: string;
  percentage: number;
}

const techSkills: TechSkill[] = [
  { name: 'TypeScript & Modern JavaScript', levelText: 'Vertiefte Praxis', percentage: 90 },
  { name: 'React & Komponenten-Design', levelText: 'Vertiefte Praxis', percentage: 88 },
  { name: 'Python, Automation & APIs', levelText: 'Projektpraxis', percentage: 82 },
  { name: 'CSS Architektur & Responsive Design', levelText: 'Vertiefte Praxis', percentage: 85 },
  { name: 'SQL, Datenbanken & PostgreSQL', levelText: 'Projektpraxis', percentage: 78 },
  { name: 'Git, DevOps & Docker Tools', levelText: 'Projektpraxis', percentage: 75 },
];

const softSkills = [
  { label: 'BPMN 2.0 Prozessmodellierung', tint: 'purple' },
  { label: 'Agiles Vorgehen & Scrum', tint: 'blue' },
  { label: 'Anforderungsanalyse (Requirements)', tint: 'cyan' },
  { label: 'Analytisches Denken', tint: 'emerald' },
  { label: 'Clean Code & Wartbarkeit', tint: 'purple' },
  { label: 'Barrierefreiheit (a11y) & UX', tint: 'blue' },
  { label: 'Schnittstellenkonzeption', tint: 'cyan' },
  { label: 'Teamorientiertes Arbeiten', tint: 'emerald' },
];

export const EducationSkills: React.FC = () => {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="section-pill">Qualifikation</span>
          <h2 className="section-title">
            Ausbildung & <br />
            <span className="text-gradient">Fachkompetenzen</span>
          </h2>
          <p className="section-subtitle">
            Fundierte akademische Ausbildung kombiniert mit stetiger praktischer Spezialisierung.
          </p>
        </div>

        {/* 1. Education: 2 Side-by-Side Cards */}
        <div className="education-grid">
          <div className="education-card">
            <div className="education-card-top">
              <div className="education-icon-box">
                <GraduationCap size={22} />
              </div>
              <span className="education-status-pill">Laufendes Studium</span>
            </div>
            <h3 className="education-title">B.Sc. Wirtschaftsinformatik</h3>
            <p className="education-subtitle">Akademische Hochschulausbildung</p>
            <p className="education-desc">
              Ganzheitliche Verbindung aus Wirtschaftswissenschaften und fundierter Informatik.
              Schwerpunkte in Systemanalyse, Softwarearchitektur, Geschäftsprozessen und Datenbanken.
            </p>
            <div className="education-highlights">
              <span className="edu-tag">Software Engineering</span>
              <span className="edu-tag">Datenbanken</span>
              <span className="edu-tag">BPMN & Prozesse</span>
              <span className="edu-tag">IT-Management</span>
            </div>
          </div>

          <div className="education-card">
            <div className="education-card-top">
              <div className="education-icon-box">
                <Award size={22} />
              </div>
              <span className="education-status-pill">Praxis & Spezialisierung</span>
            </div>
            <h3 className="education-title">Moderne Webtechnologien & Automation</h3>
            <p className="education-subtitle">Autodidaktische Vertiefung & Projektpraxis</p>
            <p className="education-desc">
              Kontinuierliche Weiterbildung in modernen Frontend-Frameworks, TypeScript, Python-Pipelines
              und aktuellen Architekturmustern zur Erstellung praxistauglicher Softwareprodukte.
            </p>
            <div className="education-highlights">
              <span className="edu-tag">React Ecosystem</span>
              <span className="edu-tag">TypeScript Deep-Dive</span>
              <span className="edu-tag">Python & LLM Integration</span>
              <span className="edu-tag">UI/UX Standards</span>
            </div>
          </div>
        </div>

        {/* 2. Skills: Left Progress Bars, Right Soft Skill Pills + Learning Card */}
        <div className="skills-main-grid">
          {/* Left Column: Tech Skills with verbal level + gentle gradient progress bar */}
          <div className="skills-tech-panel">
            <div className="panel-header">
              <h3 className="panel-title">Technische Kernkompetenzen</h3>
              <span className="panel-sub">Einstufung nach Projekt- und Praxiserfahrung</span>
            </div>

            <div className="skills-list">
              {techSkills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  <div className="skill-label-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-text">{skill.levelText}</span>
                  </div>
                  <div className="skill-progress-track">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Soft Skills & Continuous Learning Card */}
          <div className="skills-meta-panel">
            <div className="panel-header">
              <h3 className="panel-title">Methoden & Arbeitsweise</h3>
              <span className="panel-sub">Strukturierte Vorgehensweisen im Projektalltag</span>
            </div>

            <div className="soft-skills-cluster">
              {softSkills.map((sk, sIdx) => (
                <span key={sIdx} className={`soft-skill-pill tint-${sk.tint}`}>
                  <Check size={13} className="soft-skill-check" />
                  {sk.label}
                </span>
              ))}
            </div>

            {/* Current Learning Card */}
            <div className="current-learning-card">
              <div className="learning-icon-box">
                <BookOpen size={18} />
              </div>
              <div className="learning-content">
                <h4 className="learning-title">Aktueller Lern- & Erkundungsfokus</h4>
                <p className="learning-desc">
                  Vertiefung in KI-Agenten-Architekturen, Fullstack Serverless mit Next.js App Router
                  und skalierbare Event-Architekturen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
