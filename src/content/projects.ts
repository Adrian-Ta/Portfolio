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
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [];
