// Berufliche und akademische Stationen. Zeiträume ohne bestätigte Jahreszahlen
// werden bewusst als Phase statt als erfundenes Datum dargestellt.

export type TimelineType = 'work' | 'education' | 'project';

export interface TimelineItem {
  year: string;
  role: string;
  organization: string;
  type: TimelineType;
  points: string[];
}

export const timelineSection = {
  title: 'Laufbahn',
  intro: 'Vom Restaurantmanagement über die IT-Praxis zum Studium der Wirtschaftsinformatik.',
};

export const timeline: TimelineItem[] = [
  {
    year: 'Aktuell',
    role: 'Student der Wirtschaftsinformatik',
    organization: 'Universitätsstudium · aktuell im dritten Semester',
    type: 'education',
    points: [
      'Java, Python, Datenbanken und betriebswirtschaftliche Grundlagen',
      'Prozessmodellierung mit SAP Signavio und Camunda',
      'Daneben eigene Lernpraxis: ERP mit Odoo, n8n, KI-Agenten und RAG',
    ],
  },
  {
    year: 'August 2023 – Juni 2025',
    role: 'IT-Mitarbeiter',
    organization: 'BüchnerBarrella · IT-Abteilung',
    type: 'work',
    points: [
      'First- und Second-Level-Support sowie Troubleshooting vor Ort, telefonisch und per Fernwartung',
      'Benutzer-, Rechte- und Rollenverwaltung in einer MS-Active-Directory-Umgebung',
      'Einrichtung von Endgeräten sowie Patchen und Aktualisieren von Software',
    ],
  },
  {
    year: 'Abgeschlossen',
    role: 'Fachabitur',
    organization: 'Fachoberschule',
    type: 'education',
    points: [
      'Grundlagen in Java, Datenbanken, Netzwerken, HTML und CSS',
      'Im Team eine Java-Desktopanwendung für eine Bibliothek entwickelt, im Projekt kam AWS\u00a0S3 zum Einsatz',
    ],
  },
  {
    year: 'Davor',
    role: 'Vom Mitarbeiter zum Restaurantleiter',
    organization: 'KFC',
    type: 'work',
    points: [
      'Entwicklung vom Mitarbeiter über den Assistant Manager bis zum Restaurantleiter',
      'Mit jedem Schritt wuchsen meine Aufgaben und meine Verantwortung',
    ],
  },
];
