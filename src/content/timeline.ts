// Laufbahn / Lebenslauf: ein Eintrag = eine Karte in der Zeitleiste.
// Neueste Station zuerst. Reihenfolge im Array = Reihenfolge auf der Seite.
// TODO (mit Adrian klären): Die Stationen sind noch die Texte der alten Seite
// und müssen mit echten Stationen abgeglichen werden.

export type TimelineType = 'work' | 'education' | 'project';

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  /** `education` zeigt ein Hochschul-Icon, alle anderen ein Aktentaschen-Icon */
  type: TimelineType;
  points: string[];
}

export const timeline: TimelineItem[] = [
  {
    year: '2024 – Heute',
    role: 'Wirtschaftsinformatik & Frontend-Entwicklung',
    organization: 'Fokus: Moderne Web-Architekturen & Automation',
    type: 'project',
    points: [
      'Entwicklung intuitiver Web-Applikationen mit React, Next.js und TypeScript',
      'Integration modularer Komponenten-Bibliotheken und flüssiger Interaktionsdesigns',
      'Kontinuierliche Optimierung von Performance, Lighthouse-Scores und Core Web Vitals',
    ],
  },
  {
    year: '2023 – 2024',
    role: 'IT-Automatisierung & KI-Assistenzsysteme',
    organization: 'Prozessautomatisierung & Python-Entwicklung',
    type: 'work',
    points: [
      'Entwicklung strukturierter Dokumenten-Assistenten zur automatisierten PDF-Auswertung',
      'Implementierung robuster Datenvalidierungs-Pipelines mit Pydantic und APIs',
      'Konzeption von interaktiven Test- und Feedback-Oberflächen mit Gradio',
    ],
  },
  {
    year: '2022 – 2023',
    role: 'Agiles Workflow- & Kanban-Management',
    organization: 'Web- & Prozessentwicklung',
    type: 'project',
    points: [
      'Konzeption und Umsetzung eines vollwertigen Kanban-Boards mit Drag-and-Drop',
      'Geschäftsprozessmodellierung nach BPMN 2.0 Standards',
      'Entwurf relationaler Schemata in PostgreSQL und Anbindung RESTful APIs',
    ],
  },
  {
    year: '2021 – 2022',
    role: 'Studienstart Wirtschaftsinformatik',
    organization: 'Akademische Fundierung',
    type: 'education',
    points: [
      'Grundlagen der Softwareentwicklung, Datenstrukturen und Algorithmen',
      'Betriebswirtschaftliche Grundlagen, Rechnungswesen und Projektmanagement',
      'Erste Full-Stack Projekte mit HTML5, modernem JavaScript und Python',
    ],
  },
];
