// Projekte: ein Eintrag in `projects` = eine Projektkarte auf der Seite, in dieser Reihenfolge.
// Ist die Liste leer, zeigt die Seite den Text `projectsSection.emptyText`.
//
// Noch nicht umgesetzte Projekte bekommen `status: 'Konzept'` (oder 'In Arbeit').
// Die Karte zeigt den Status dann sichtbar an. Fertige Projekte haben kein `status`.
//
// Beispiel für einen neuen Eintrag (Kommentarzeichen entfernen und ausfüllen):
//
// {
//   id: 'mein-projekt',                        // eindeutig, ohne Leerzeichen
//   title: 'Mein Projekt',
//   description: 'Ein bis zwei Sätze: Was ist das Projekt?',
//   status: 'Konzept',                         // optional: 'Konzept' oder 'In Arbeit'
//   image: '/projects/mein-projekt.png',       // optional, Datei liegt in public/projects/, Format 16:9
//   imageDark: '/projects/mein-projekt-dark.png', // optional, Version für den Dunkelmodus
//   imageAlt: 'Was ist auf dem Bild zu sehen?',
//   tags: ['n8n', 'Automatisierung'],          // höchstens drei bis vier
//   githubUrl: 'https://github.com/…',         // optional
//   liveUrl: 'https://…',                      // optional
// },

export interface Project {
  id: string;
  title: string;
  /** Ein bis zwei Sätze */
  description: string;
  /** Fehlt bei fertigen Projekten */
  status?: 'Konzept' | 'In Arbeit';
  /** Für die spätere Detailseite, aktuell nicht auf der Karte angezeigt */
  ausgangslage?: string;
  umsetzung?: string;
  ergebnis?: string;
  /** Pfad relativ zu `public/`, z. B. `/projects/mein-projekt.png`, Format 16:9 */
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
  intro: 'Woran ich arbeite und was ich als Nächstes umsetzen will. Konzepte sind als solche gekennzeichnet.',
  emptyText: 'Projekte folgen bald.',
};

export const projects: Project[] = [
  {
    id: 'odoo-erp',
    title: 'ERP-System mit Odoo',
    description: 'Einrichtung und Anpassung eines ERP-Systems zur Unterstützung typischer Geschäftsprozesse.',
    // Bitte prüfen: Texte aus Adrians Angaben formuliert.
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
    tags: ['Odoo', 'ERP', 'Geschäftsprozesse'],
    // githubUrl: 'https://github.com/Adrian-Ta/…', // Link eintragen, dann erscheint der GitHub-Button
  },
  {
    id: 'business-dashboard',
    title: 'Smart Business Dashboard',
    description: 'Interaktives Dashboard zur Analyse von Umsatz, Gewinn, Lagerbestand und Produktleistung.',
    status: 'Konzept',
    image: '/projects/business-dashboard.webp',
    imageAlt:
      'Power-BI-Bericht „Customer Analysis“ mit synthetischen Beispieldaten: Filter für Jahr, Region, Kundensegment und Vertriebskanal, Kennzahl-Karten, Diagramme zu Umsatz und Gewinn nach Segment, aktive Kunden pro Monat und eine Top-10-Kundentabelle.',
    tags: ['Power BI', 'Datenanalyse', 'KPIs'],
    githubUrl: 'https://github.com/Adrian-Ta/PowerBI_Sales_Overview',
  },
  {
    id: 'camunda-automation',
    title: 'Prozessautomatisierung mit Camunda',
    description:
      'Modellierung und Automatisierung eines Geschäftsprozesses mit BPMN und optionalen DMN-Entscheidungsregeln.',
    status: 'Konzept',
    image: '/projects/camunda-automation.svg',
    imageDark: '/projects/camunda-automation-dark.svg',
    imageAlt:
      'Konzept-Skizze eines BPMN-Prozesses: Startereignis, Anfrage prüfen, Entscheidung per DMN-Regel, Verzweigung zu Freigeben oder Rückfrage, Endereignis.',
    tags: ['Camunda', 'BPMN', 'DMN'],
    // githubUrl: 'https://github.com/Adrian-Ta/…', // Link eintragen, dann erscheint der GitHub-Button
  },
  {
    id: 'ai-rag-chatbot',
    title: 'AI Agent & RAG-Chatbot',
    description: 'KI-Assistent, der Fragen anhand bereitgestellter Wissensquellen beantwortet.',
    status: 'Konzept',
    image: '/projects/ai-rag-chatbot.svg',
    imageDark: '/projects/ai-rag-chatbot-dark.svg',
    imageAlt:
      'Konzept-Skizze: Chatfenster mit Frage und Antwort, daneben der Ablauf Dokumente, Wissenssuche, Sprachmodell, Antwort.',
    tags: ['LLM', 'RAG', 'KI-Automatisierung'],
    // githubUrl: 'https://github.com/Adrian-Ta/…', // Link eintragen, dann erscheint der GitHub-Button
  },
];
