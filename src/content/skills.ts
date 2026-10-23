// Kenntnisse nach Bereich (Abschnitt „Über mich“) und Technologieband.
// Die Einordnung (`context`) sagt, wo Adrian die Kenntnis erworben hat.

export interface Skill {
  name: string;
  /** z. B. Berufserfahrung, Studium, Lernpraxis */
  context: string;
}

export interface SkillArea {
  title: string;
  skills: Skill[];
  /** `id` eines Projekts aus projects.ts, auf das der Bereich verweist (optional) */
  projectId?: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon: 'code' | 'layers' | 'boxes' | 'terminal' | 'server' | 'database' | 'git' | 'cpu' | 'workflow' | 'sparkles' | 'users' | 'network' | 'globe';
  /** Schlüssel aus techLogos.ts */
  logo?: string;
}

export const skillsHeading = 'Kenntnisse nach Bereich';

export const skillAreas: SkillArea[] = [
  {
    title: 'Prozesse & ERP',
    projectId: 'odoo-erp-prozesse',
    skills: [
      { name: 'ERP-Grundlagen mit Odoo: Einkauf, Lager, Verkauf, Rechnungswesen', context: 'Lernpraxis' },
      { name: 'Prozessmodellierung mit SAP Signavio und Camunda', context: 'Studium' },
    ],
  },
  {
    title: 'Automatisierung & KI',
    projectId: 'ki-assistent-jackie',
    skills: [
      { name: 'Workflows mit n8n', context: 'Lernprojekt' },
      { name: 'KI-Agenten und RAG', context: 'Lernpraxis' },
      { name: 'Power BI', context: 'Erste Lernpraxis' },
    ],
  },
  {
    title: 'Entwicklung',
    projectId: 'bibliotheks-desktop-app',
    skills: [
      { name: 'Java und Python', context: 'Studium & Projekte' },
      { name: 'Datenbanken', context: 'Studium' },
      { name: 'Git und GitHub', context: 'Aktiv genutzt' },
      { name: 'Docker, HTML und CSS', context: 'Grundlagen' },
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
  },
];

export const learningFocus: { title: string; desc: string } | null = {
  title: 'Aktueller Lernfokus',
  desc: 'Ich vertiefe die Abläufe in Odoo, um sie später auf SAP oder Microsoft Dynamics zu übertragen, und beschäftige mich mit KI-Agenten und RAG.',
};

/** Technologieband mit Themen aus Berufserfahrung, Studium und Lernpraxis. */
export const techStack: TechItem[] = [
  // Reihenfolge: ERP und Prozesse, Automatisierung und KI, Entwicklung, IT-Infrastruktur
  { name: 'Odoo', category: 'Lernpraxis', icon: 'layers', logo: 'odoo' },
  { name: 'SAP Signavio', category: 'Studium', icon: 'workflow', logo: 'sap' },
  { name: 'Camunda', category: 'Studium', icon: 'workflow', logo: 'camunda' },
  { name: 'n8n', category: 'Lernprojekt', icon: 'workflow', logo: 'n8n' },
  { name: 'KI-Agenten & RAG', category: 'Lernpraxis', icon: 'sparkles' },
  { name: 'Power BI', category: 'Lernpraxis', icon: 'database', logo: 'powerbi' },
  { name: 'Python', category: 'Studium', icon: 'terminal', logo: 'python' },
  { name: 'Java', category: 'Studium & Projekte', icon: 'code', logo: 'java' },
  { name: 'Git & GitHub', category: 'Aktiv genutzt', icon: 'git', logo: 'git' },
  { name: 'Docker', category: 'Grundlagen', icon: 'cpu', logo: 'docker' },
  { name: 'HTML', category: 'Grundlagen', icon: 'code', logo: 'html5' },
  { name: 'CSS', category: 'Grundlagen', icon: 'code', logo: 'css' },
  { name: 'Active Directory', category: 'Berufserfahrung', icon: 'users' },
  { name: 'Windows Server', category: 'Lernpraxis', icon: 'server', logo: 'windows' },
  { name: 'Netzwerktechnik', category: 'Lernpraxis', icon: 'network' },
  { name: 'DNS & DHCP', category: 'Lernpraxis', icon: 'globe' },
  { name: 'VMware Workstation', category: 'Lernpraxis', icon: 'cpu', logo: 'vmware' },
];
