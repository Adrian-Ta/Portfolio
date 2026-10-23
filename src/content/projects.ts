// Projekte: ein Eintrag in `projects` = ein Projekt auf der Seite, in dieser Reihenfolge.
// Ist die Liste leer, zeigt die Seite den Text `projectsSection.emptyText`.
//
// Jedes Projekt wird als Ablauf erzählt: Ausgangslage → Umsetzung → Ergebnis.
// Fehlen diese drei Felder, erscheint stattdessen nur die Beschreibung.
//
// Beispiel für einen neuen Eintrag (Kommentarzeichen entfernen und ausfüllen):
//
// {
//   id: 'mein-projekt',                        // eindeutig, ohne Leerzeichen
//   title: 'Mein Projekt',
//   subtitle: 'Kurzer Untertitel',
//   category: 'Lernprojekt',                   // z. B. Lernprojekt, Studienprojekt
//   description: 'Ein Satz: Was ist das Projekt?',
//   ausgangslage: 'Welches Problem oder welche Frage gab es?',   // optional
//   umsetzung: 'Wie bin ich vorgegangen, womit?',                // optional
//   ergebnis: 'Was ist herausgekommen, was habe ich gelernt?',   // optional
//   image: '/projects/mein-projekt.png',       // optional, Datei liegt in public/projects/
//   imageDark: '/projects/mein-projekt-dark.png', // optional, Version für den Dunkelmodus
//   imageAlt: 'Was ist auf dem Bild zu sehen?',
//   tags: ['n8n', 'Automatisierung'],
//   githubUrl: 'https://github.com/…',         // optional
//   liveUrl: 'https://…',                      // optional
// },

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  ausgangslage?: string;
  umsetzung?: string;
  ergebnis?: string;
  /** Pfad relativ zu `public/`, z. B. `/projects/mein-projekt.png` */
  image?: string;
  /** Optional: Variante für den Dunkelmodus (z. B. ein Diagramm mit dunkler Fläche) */
  imageDark?: string;
  /** Beschreibt den Bildinhalt für Screenreader */
  imageAlt?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsSection = {
  title: 'Projekte',
  intro: 'Woran ich lerne und was ich gebaut habe, jeweils mit Ausgangslage, Umsetzung und Ergebnis.',
  emptyText: 'Projekte folgen bald.',
};

export const projects: Project[] = [
  {
    // Bitte prüfen: Texte aus Adrians Angaben formuliert.
    id: 'odoo-erp-prozesse',
    title: 'ERP-Prozesse mit Odoo',
    subtitle: 'ERP-Grundlagen im Selbststudium',
    category: 'Lernprojekt',
    description: 'Ich lerne an Odoo, wie ein ERP-System Geschäftsprozesse über Abteilungen hinweg abbildet.',
    ausgangslage:
      'Ich möchte verstehen, wie Einkauf, Lager, Verkauf und Buchhaltung in einem ERP-System zusammenspielen, als Grundlage für die spätere Arbeit mit SAP oder Microsoft Dynamics.',
    umsetzung:
      'In Odoo arbeite ich die Module Einkauf, Lager, Verkauf und Rechnungswesen durch und verfolge, wie aus einer Bestellung ein Wareneingang, aus einem Kundenauftrag eine Lieferung und daraus eine Rechnung wird.',
    ergebnis:
      'Ich kenne die Grundabläufe vom Einkauf bis zur Rechnung und weiß, an welchen Stellen die Module Daten aneinander übergeben.',
    image: '/projects/odoo-erp-prozesse.svg',
    imageDark: '/projects/odoo-erp-prozesse-dark.svg',
    imageAlt:
      'Ablaufdiagramm: Einkauf mit Bestellung, Lager mit Wareneingang und Lieferung, Verkauf mit Kundenauftrag, Rechnungswesen mit Rechnung und Buchung.',
    tags: ['Odoo', 'Einkauf', 'Lager', 'Verkauf', 'Rechnungswesen'],
  },
  {
    // DEMO-TEXT: Ausgangslage, Umsetzung und Ergebnis bitte an das echte Projekt anpassen.
    id: 'ki-assistent-jackie',
    title: 'KI-Assistent „Jackie“',
    subtitle: 'Workflow mit n8n',
    category: 'Lernprojekt',
    description: 'Ein persönlicher Assistent, der über Telegram gesteuert wird und Google-Dienste anbindet.',
    ausgangslage:
      'Alltägliche Aufgaben sollten sich per Chatnachricht erledigen lassen, ohne dafür mehrere Apps zu öffnen.',
    umsetzung:
      'Ein n8n-Workflow nimmt Nachrichten aus Telegram entgegen, ein KI-Modell erkennt die Absicht und ruft die passenden Google-Dienste auf. Die Antwort geht zurück in den Chat.',
    ergebnis:
      'Ein funktionierender Prototyp, an dem ich KI-Agenten, Schnittstellen und Workflow-Automatisierung praktisch kennengelernt habe.',
    image: '/projects/ki-assistent-jackie.svg',
    imageDark: '/projects/ki-assistent-jackie-dark.svg',
    imageAlt:
      'Ablaufdiagramm: Telegram-Nachricht, n8n-Workflow mit KI-Modell, Google-Dienste, Antwort zurück an Telegram.',
    tags: ['n8n', 'KI-Agent', 'Telegram', 'Google-Dienste'],
  },
  {
    // DEMO-TEXT: Ausgangslage, Umsetzung und Ergebnis bitte an das echte Projekt anpassen.
    id: 'bibliotheks-desktop-app',
    title: 'Bibliotheks-Desktop-App',
    subtitle: 'Teamprojekt im Fachabitur',
    category: 'Schulprojekt',
    description: 'Im Team entwickelte Java-Desktopanwendung für eine Bibliothek.',
    ausgangslage:
      'Im Fachabitur sollte im Team eine Anwendung entstehen, mit der eine Bibliothek ihren Bestand und ihre Ausleihen verwaltet.',
    umsetzung:
      'Wir haben die Anwendung in Java als Desktopprogramm umgesetzt und Dateien in AWS S3 abgelegt.',
    ergebnis:
      'Eine lauffähige Desktopanwendung und erste Erfahrung mit Teamarbeit in einem Softwareprojekt und mit Cloud-Speicher.',
    image: '/projects/bibliotheks-desktop-app.svg',
    imageDark: '/projects/bibliotheks-desktop-app-dark.svg',
    imageAlt: 'Schema: Java-Desktopanwendung mit Bestand und Ausleihe, Dateien in AWS S3.',
    tags: ['Java', 'Desktop-App', 'AWS S3'],
  },
];
