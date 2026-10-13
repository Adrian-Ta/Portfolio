// Leistungen: ein Eintrag = eine Karte im Bereich „Leistungen".

export interface Service {
  /** Icon-Name, siehe `serviceIcons` in src/components/Services.tsx */
  icon: 'layout' | 'process' | 'cpu' | 'database';
  title: string;
  desc: string;
  tags: string[];
}

export const services: Service[] = [
  {
    icon: 'layout',
    title: 'Web- & Frontend-Entwicklung',
    desc: 'Entwicklung zeitgemäßer Single-Page und Server-Side Web-Apps mit React, TypeScript und moderner CSS-Architektur. Fokus auf Performance, Barrierefreiheit und flüssige Interaktionen.',
    tags: ['React', 'TypeScript', 'Responsive', 'UX/UI'],
  },
  {
    icon: 'process',
    title: 'Prozessanalyse & BPMN',
    desc: 'Strukturierte Modellierung und Digitalisierung von Unternehmensprozessen nach BPMN 2.0. Identifikation von Engpässen und Übersetzung in klare IT-Anforderungsprofile.',
    tags: ['BPMN 2.0', 'Prozessoptimierung', 'Anforderungsanalyse'],
  },
  {
    icon: 'cpu',
    title: 'IT-Automatisierung & Scripting',
    desc: 'Konzeption von Workflows und Automatisierungs-Pipelines mit Python. Automatisierte Dokumentenverarbeitung, Datenextraktion und API-basierte Tool-Verknüpfungen.',
    tags: ['Python', 'Automation', 'Gradio', 'Pydantic'],
  },
  {
    icon: 'database',
    title: 'API-Integration & Datenarchitektur',
    desc: 'Saubere Schnittstellenanbindung über REST und GraphQL. Konzeption solider relationaler Datenmodelle in PostgreSQL und strukturierte Datenvalidierung.',
    tags: ['REST APIs', 'PostgreSQL', 'Systemintegration'],
  },
];
