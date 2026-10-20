// Projekte: ein Eintrag in `projects` = eine Karte auf der Seite.
// Ist die Liste leer, zeigt die Seite „Projekte folgen bald".
//
// Beispiel für einen neuen Eintrag (Kommentarzeichen entfernen und ausfüllen):
//
// {
//   id: 'mein-projekt',                       // eindeutig, ohne Leerzeichen
//   title: 'Mein Projekt',
//   subtitle: 'Kurzer Untertitel',
//   category: 'Frontend',                     // kleines Label oben im Bild
//   description: 'Was macht das Projekt?',
//   image: '/projects/mein-projekt.jpg',      // Datei liegt in public/projects/
//   tags: ['React', 'TypeScript'],
//   githubUrl: 'https://github.com/…',        // optional
//   liveUrl: 'https://…',                     // optional
// },

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  /** Pfad relativ zu `public/`, z. B. `/projects/mein-projekt.jpg` */
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'bibliotheks-desktop-app',
    title: 'Bibliotheks-Desktop-App',
    subtitle: 'Teamprojekt im Fachabitur',
    category: 'Studienprojekt',
    description: 'Im Team entwickelte Java-Desktopanwendung für eine Bibliothek. Im Projekt kam außerdem AWS S3 zum Einsatz.',
    tags: ['Java', 'Desktop-App', 'AWS S3'],
  },
  {
    id: 'ki-assistent-jackie',
    title: 'KI-Assistent „Jackie“',
    subtitle: 'Workflow mit n8n',
    category: 'Lernprojekt',
    description: 'Ein mit n8n entwickelter Assistent, an dem ich praktische Erfahrungen mit KI-gestützten Workflows gesammelt habe.',
    tags: ['n8n', 'KI-Assistent', 'Automatisierung'],
  },
];
