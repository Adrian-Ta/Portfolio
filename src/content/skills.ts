// Skills, Bildung und Technologieband.
// TODO (mit Adrian klären): Die Prozentwerte und Einstufungen sind noch die
// Platzhalter der alten Seite. `percentage` steuert nur die Länge des Balkens,
// `levelText` ist der sichtbare Text.

export interface TechSkill {
  name: string;
  levelText: string;
  /** 0–100, Länge des Fortschrittsbalkens */
  percentage: number;
}

export interface SoftSkill {
  label: string;
  tint: 'purple' | 'blue' | 'cyan' | 'emerald';
}

export interface Education {
  /** `cap` = Studium (Mütze), `award` = Weiterbildung (Auszeichnung) */
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
  /** Icon-Name, siehe `techIcons` in src/components/TechMarquee.tsx */
  icon: 'code' | 'layers' | 'boxes' | 'terminal' | 'server' | 'database' | 'git' | 'cpu' | 'workflow' | 'sparkles';
}

export const techSkills: TechSkill[] = [
  { name: 'TypeScript & Modern JavaScript', levelText: 'Vertiefte Praxis', percentage: 90 },
  { name: 'React & Komponenten-Design', levelText: 'Vertiefte Praxis', percentage: 88 },
  { name: 'Python, Automation & APIs', levelText: 'Projektpraxis', percentage: 82 },
  { name: 'CSS Architektur & Responsive Design', levelText: 'Vertiefte Praxis', percentage: 85 },
  { name: 'SQL, Datenbanken & PostgreSQL', levelText: 'Projektpraxis', percentage: 78 },
  { name: 'Git, DevOps & Docker Tools', levelText: 'Projektpraxis', percentage: 75 },
];

export const softSkills: SoftSkill[] = [
  { label: 'BPMN 2.0 Prozessmodellierung', tint: 'purple' },
  { label: 'Agiles Vorgehen & Scrum', tint: 'blue' },
  { label: 'Anforderungsanalyse (Requirements)', tint: 'cyan' },
  { label: 'Analytisches Denken', tint: 'emerald' },
  { label: 'Clean Code & Wartbarkeit', tint: 'purple' },
  { label: 'Barrierefreiheit (a11y) & UX', tint: 'blue' },
  { label: 'Schnittstellenkonzeption', tint: 'cyan' },
  { label: 'Teamorientiertes Arbeiten', tint: 'emerald' },
];

export const education: Education[] = [
  {
    icon: 'cap',
    status: 'Laufendes Studium',
    title: 'B.Sc. Wirtschaftsinformatik',
    subtitle: 'Akademische Hochschulausbildung',
    desc: 'Ganzheitliche Verbindung aus Wirtschaftswissenschaften und fundierter Informatik. Schwerpunkte in Systemanalyse, Softwarearchitektur, Geschäftsprozessen und Datenbanken.',
    tags: ['Software Engineering', 'Datenbanken', 'BPMN & Prozesse', 'IT-Management'],
  },
  {
    icon: 'award',
    status: 'Praxis & Spezialisierung',
    title: 'Moderne Webtechnologien & Automation',
    subtitle: 'Autodidaktische Vertiefung & Projektpraxis',
    desc: 'Kontinuierliche Weiterbildung in modernen Frontend-Frameworks, TypeScript, Python-Pipelines und aktuellen Architekturmustern zur Erstellung praxistauglicher Softwareprodukte.',
    tags: ['React Ecosystem', 'TypeScript Deep-Dive', 'Python & LLM Integration', 'UI/UX Standards'],
  },
];

/** Karte „Aktueller Lernfokus". `null` blendet die Karte aus. */
export const learningFocus: { title: string; desc: string } | null = {
  title: 'Aktueller Lern- & Erkundungsfokus',
  desc: 'Vertiefung in KI-Agenten-Architekturen, Fullstack Serverless mit Next.js App Router und skalierbare Event-Architekturen.',
};

/** Pills im Technologieband unter dem Hero */
export const techStack: TechItem[] = [
  { name: 'TypeScript', category: 'Language', icon: 'code' },
  { name: 'React', category: 'Frontend', icon: 'layers' },
  { name: 'Next.js', category: 'Framework', icon: 'boxes' },
  { name: 'Python', category: 'Backend & Data', icon: 'terminal' },
  { name: 'Node.js', category: 'Runtime', icon: 'server' },
  { name: 'PostgreSQL', category: 'Database', icon: 'database' },
  { name: 'Git & GitHub', category: 'Tooling', icon: 'git' },
  { name: 'Docker', category: 'DevOps', icon: 'cpu' },
  { name: 'Prozess-BPMN', category: 'Wirtschaftsinformatik', icon: 'workflow' },
  { name: 'REST & GraphQL', category: 'APIs', icon: 'code' },
  { name: 'Vite', category: 'Bundler', icon: 'sparkles' },
  { name: 'UI / UX Architecture', category: 'Design Systems', icon: 'layers' },
];
