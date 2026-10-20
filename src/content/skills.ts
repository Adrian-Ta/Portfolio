// Kenntnisse, Ausbildung und Technologieband.
// Die Einordnung beschreibt, wo Adrian die jeweilige Kenntnis erworben hat.

export interface TechSkill {
  name: string;
  levelText: string;
}

export interface SoftSkill {
  label: string;
  tint: 'purple' | 'blue' | 'cyan' | 'emerald';
}

export interface Education {
  icon: 'cap' | 'award';
  status: string;
  title: string;
  subtitle: string;
  desc: string;
  tags: string[];
}

export interface TechItem {
  name: string;
  category: string;
  icon: 'code' | 'layers' | 'boxes' | 'terminal' | 'server' | 'database' | 'git' | 'cpu' | 'workflow' | 'sparkles' | 'users' | 'network' | 'globe';
  /** Schlüssel aus techLogos.ts */
  logo?: string;
}

export const techSkills: TechSkill[] = [
  { name: 'First- und Second-Level-Support', levelText: 'Berufserfahrung' },
  { name: 'MS Active Directory & Benutzerrechte', levelText: 'Berufserfahrung' },
  { name: 'Netzwerke, DNS und DHCP', levelText: 'Grundlagen & Lernpraxis' },
  { name: 'Windows Server & VMware Workstation', levelText: 'Lernpraxis' },
  { name: 'Java & Python', levelText: 'Studium & Projekte' },
  { name: 'Git & GitHub', levelText: 'Aktiv genutzt' },
  { name: 'Docker', levelText: 'Grundlagen' },
  { name: 'Power BI & Power Query', levelText: 'Erste Lernpraxis' },
];

export const softSkills: SoftSkill[] = [
  { label: 'Schnelle Auffassungsgabe', tint: 'emerald' },
  { label: 'Analytische Fehlersuche', tint: 'emerald' },
  { label: 'Sorgfältig & zuverlässig', tint: 'emerald' },
  { label: 'Selbstständig und planvoll', tint: 'emerald' },
  { label: 'Ruhig und lösungsorientiert', tint: 'emerald' },
  { label: 'Hilfsbereit und freundlich', tint: 'emerald' },
];

export const education: Education[] = [
  {
    icon: 'cap',
    status: 'Laufend',
    title: 'Wirtschaftsinformatik',
    subtitle: 'Universitätsstudium · aktuell im dritten Semester',
    desc: 'Verbindung von Informatik und Wirtschaft. Im Studium beschäftige ich mich unter anderem mit Java, Python, Datenbanken, Prozessmodellierung und betriebswirtschaftlichen Grundlagen.',
    tags: ['Java', 'Python', 'Datenbanken', 'Prozessmodellierung'],
  },
  {
    icon: 'award',
    status: 'Abgeschlossen',
    title: 'Fachabitur',
    subtitle: 'Fachoberschule',
    desc: 'Grundlagen in Java, Datenbanken, Netzwerken, HTML und CSS. Im Team entstand eine Java-Desktopanwendung für eine Bibliothek; im Projekt kam auch AWS S3 zum Einsatz.',
    tags: ['Java', 'Netzwerke', 'HTML & CSS', 'AWS S3'],
  },
];

export const learningFocus: { title: string; desc: string } | null = {
  title: 'Aktueller Lernfokus',
  desc: 'KI-Agenten und Automatisierung: Ich beschäftige mich mit n8n, MCP und agentischen Entwicklungsabläufen sowie mit Power BI und Power Query.',
};

/** Technologieband mit Themen aus Berufserfahrung, Studium und Lernpraxis. */
export const techStack: TechItem[] = [
  { name: 'Windows Server', category: 'Lernpraxis', icon: 'server', logo: 'windows' },
  { name: 'Active Directory', category: 'Berufserfahrung', icon: 'users' },
  { name: 'Netzwerktechnik', category: 'Lernpraxis', icon: 'network' },
  { name: 'DNS & DHCP', category: 'Lernpraxis', icon: 'globe' },
  { name: 'VMware Workstation', category: 'Lernpraxis', icon: 'cpu', logo: 'vmware' },
  { name: 'Java', category: 'Studium & Projekte', icon: 'code', logo: 'java' },
  { name: 'Python', category: 'Studium', icon: 'terminal', logo: 'python' },
  { name: 'HTML', category: 'Grundlagen', icon: 'code', logo: 'html5' },
  { name: 'CSS', category: 'Grundlagen', icon: 'code', logo: 'css' },
  { name: 'Git & GitHub', category: 'Aktiv genutzt', icon: 'git', logo: 'git' },
  { name: 'n8n', category: 'Lernprojekt', icon: 'workflow', logo: 'n8n' },
  { name: 'SAP Signavio', category: 'Studium', icon: 'workflow', logo: 'sap' },
  { name: 'Camunda', category: 'Studium', icon: 'workflow', logo: 'camunda' },
  { name: 'Docker', category: 'Grundlagen', icon: 'cpu', logo: 'docker' },
  { name: 'Power BI', category: 'Lernpraxis', icon: 'database', logo: 'powerbi' },
];
