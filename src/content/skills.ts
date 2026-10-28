// Kenntnisse nach Bereich (Abschnitt „Über mich“).
// Die Einordnung (`context`) sagt, wo Adrian die Kenntnis erworben hat.
// `tools` sind die Werkzeuge des Bereichs, gezeigt mit Logo unter der Bereichsüberschrift.

export interface Skill {
  name: string;
  /** z. B. Berufserfahrung, Studium, Lernpraxis */
  context: string;
}

export interface Tool {
  name: string;
  /** Symbol, wenn es kein Firmenlogo gibt, siehe `toolIcons` in src/components/ToolIcon.tsx */
  icon: 'code' | 'layers' | 'terminal' | 'server' | 'database' | 'git' | 'cpu' | 'workflow' | 'sparkles' | 'users' | 'network' | 'globe';
  /** Schlüssel aus techLogos.ts (optional) */
  logo?: string;
}

export interface SkillArea {
  title: string;
  skills: Skill[];
  tools?: Tool[];
  /** `id` eines Projekts aus projects.ts, auf das der Bereich verweist (optional) */
  projectId?: string;
}

export const skillsHeading = 'Kenntnisse nach Bereich';

export const skillAreas: SkillArea[] = [
  {
    title: 'Prozesse & ERP',
    projectId: 'odoo-erp',
    skills: [
      { name: 'ERP-Grundlagen mit Odoo: Einkauf, Lager, Verkauf, Rechnungswesen', context: 'Lernpraxis' },
      { name: 'Prozessmodellierung mit SAP Signavio und Camunda', context: 'Studium' },
    ],
    tools: [
      { name: 'Odoo', icon: 'layers' },
      { name: 'SAP Signavio', icon: 'workflow', logo: 'sap' },
      { name: 'Camunda', icon: 'workflow', logo: 'camunda' },
    ],
  },
  {
    title: 'Automatisierung & KI',
    projectId: 'mahnwesen-debitoren',
    skills: [
      { name: 'Workflows mit n8n', context: 'Lernprojekt' },
      { name: 'KI-Agenten und RAG', context: 'Lernpraxis' },
      { name: 'Power BI', context: 'Erste Lernpraxis' },
    ],
    tools: [
      { name: 'n8n', icon: 'workflow', logo: 'n8n' },
      { name: 'KI-Agenten & RAG', icon: 'sparkles' },
      { name: 'Power BI', icon: 'database', logo: 'powerbi' },
    ],
  },
  {
    title: 'Entwicklung',
    projectId: 'readnest',
    skills: [
      { name: 'Java und Python', context: 'Studium & Projekte' },
      { name: 'Datenbanken', context: 'Studium' },
      { name: 'Git und GitHub', context: 'Aktiv genutzt' },
      { name: 'Docker, HTML und CSS', context: 'Grundlagen' },
    ],
    tools: [
      { name: 'Java', icon: 'code', logo: 'java' },
      { name: 'Python', icon: 'terminal', logo: 'python' },
      { name: 'Git', icon: 'git', logo: 'git' },
      { name: 'Docker', icon: 'cpu', logo: 'docker' },
      { name: 'HTML', icon: 'code', logo: 'html5' },
      { name: 'CSS', icon: 'code', logo: 'css' },
    ],
  },
  {
    title: 'IT-Support & Infrastruktur',
    skills: [
      { name: 'First- und Second-Level-Support', context: 'Berufserfahrung' },
      { name: 'MS Active Directory und Benutzerrechte', context: 'Berufserfahrung' },
      { name: 'Windows Server und VMware Workstation', context: 'Lernpraxis' },
      { name: 'Netzwerke, DNS und DHCP', context: 'Grundlagen & Lernpraxis' },
    ],
    tools: [
      { name: 'Active Directory', icon: 'users' },
      { name: 'Windows Server', icon: 'server', logo: 'windows' },
      { name: 'VMware', icon: 'cpu' },
      { name: 'Netzwerke', icon: 'network' },
    ],
  },
];

export const learningFocus: { title: string; desc: string } | null = {
  title: 'Aktueller Lernfokus',
  desc: 'Ich vertiefe die Abläufe in Odoo, um sie später auf SAP oder Microsoft Dynamics zu übertragen, und beschäftige mich mit KI-Agenten und RAG.',
};
