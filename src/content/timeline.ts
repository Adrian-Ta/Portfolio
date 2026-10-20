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

export const timeline: TimelineItem[] = [
  {
    year: 'Aktuell',
    role: 'Student der Wirtschaftsinformatik',
    organization: 'Universitätsstudium',
    type: 'education',
    points: [
      'Studieninhalte in Java, Python, Datenbanken und Wirtschaft',
      'Prozessmodellierung mit SAP Signavio und Camunda',
      'Ergänzende Lernpraxis mit n8n, KI-Agenten, Docker und Power BI',
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
    year: 'Fachoberschule',
    role: 'Fachabitur',
    organization: 'Schulische IT-Grundlagen und Teamprojekt',
    type: 'education',
    points: [
      'Grundlagen in Java, Datenbanken, Netzwerken, HTML und CSS',
      'Entwicklung einer Java-Desktopanwendung für eine Bibliothek',
      'AWS S3 kam im Projekt zum Einsatz',
    ],
  },
  {
    year: 'Beruflicher Weg',
    role: 'Vom Mitarbeiter zum Restaurantleiter',
    organization: 'KFC',
    type: 'work',
    points: [
      'Entwicklung vom Mitarbeiter über den Assistant Manager bis zum Restaurantleiter',
      'Mit jedem Schritt wuchsen meine Aufgaben und meine Verantwortung',
    ],
  },
];
