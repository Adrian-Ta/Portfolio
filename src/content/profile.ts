// Persönliche Angaben: hier einmal ändern, die ganze Seite übernimmt es.

export interface SocialLink {
  label: string;
  url: string;
}

export interface FocusArea {
  // Name des Icons, siehe `focusIcons` in src/components/About.tsx
  icon: 'workflow' | 'layers' | 'terminal' | 'network';
  title: string;
  desc: string;
}

export interface Profile {
  /** Anzeigename in Navbar, Hero, Footer und Ausweis */
  name: string;
  /** Vollständiger Name (Copyright im Footer) */
  fullName: string;
  /** Initialen für Logo und Ausweis-Ersatz, falls das Foto fehlt */
  initials: string;
  /** Rolle / Ausrichtung (unter dem Namen im Ausweis) */
  role: string;
  /** Kurztext im Hero */
  heroText: string;
  /** Kurztext im Footer */
  footerText: string;
  /** Pfad zum Foto relativ zu `public/` – Datei dort ersetzen = Foto wechseln */
  photo: string;
  email: string;
  location: string;
  /** Text zur Verfügbarkeit (Hero-Pill und Kontaktbereich) */
  availability: string;
  availabilityNote: string;
  /**
   * Social-Links. Eintrag mit leerer `url` wird nicht angezeigt.
   * TODO (mit Adrian klären): echte Profil-Links eintragen – aktuell nur Platzhalter.
   */
  github: SocialLink;
  linkedin: SocialLink;
  /** Inhalt des Bereichs „Über mich" */
  about: {
    lead: string;
    body: string;
    principles: string[];
    focusAreas: FocusArea[];
  };
}

export const profile: Profile = {
  name: 'Adri',
  fullName: 'Adrian Tajik',
  initials: 'AT',
  role: 'Wirtschaftsinformatik & IT',
  heroText:
    'Wirtschaftsinformatiker mit Leidenschaft für moderne Frontend-Entwicklung, robuste Systemarchitekturen und intelligente Prozessautomatisierung. Ich verbinde analytisches Business-Denken mit sauberem, performantem Code.',
  footerText:
    'Wirtschaftsinformatik & moderne Softwareentwicklung. Kombination aus analytischer Struktur und detailgetreuem Design.',
  photo: '/avatar.jpg',
  email: 'kontakt@adrian-tajik.de',
  location: 'Deutschland',
  availability: 'Verfügbar für Projekte & neue Herausforderungen',
  availabilityNote: 'Offen für Praktika, Werkstudententätigkeiten & spannende Projekte.',
  github: { label: 'GitHub', url: 'https://github.com' },
  linkedin: { label: 'LinkedIn', url: 'https://linkedin.com' },
  about: {
    lead: 'Als Wirtschaftsinformatiker betrachte ich Software nicht isoliert, sondern als Werkzeug zur Lösung realer betrieblicher und menschlicher Herausforderungen.',
    body: 'Mein Fokus liegt darauf, nutzerzentrierte Oberflächen mit stabilen, modularen Architekturen zu verbinden. Von agilen Kanban-Lösungen über KI-gestützte Dokumentenanalyse bis hin zu automatisierten Backend-Prozessen entwickle ich Lösungen, die performant, wartbar und ästhetisch überzeugend sind.',
    principles: [
      'Analytisches Denken & saubere Prozessmodellierung',
      'Hohe Detailtreue in Design, Barrierefreiheit & UX',
      'Wirtschaftlicher Weitblick gepaart mit moderner Tech-Praxis',
    ],
    focusAreas: [
      {
        icon: 'workflow',
        title: 'Wirtschaftsinformatik',
        desc: 'Schnittstelle zwischen geschäftlichen Anforderungen und technologischer Realisierung. Prozessoptimierung und fundierte Systemanalyse.',
      },
      {
        icon: 'layers',
        title: 'Modernes Frontend',
        desc: 'Entwicklung responsiver, intuitiver und schneller Webanwendungen mit React, TypeScript und modernen Design-Systemen.',
      },
      {
        icon: 'terminal',
        title: 'Automatisierung & Bots',
        desc: 'Konzeption von Python-basierten Automatisierungs-Pipelines, Datenvalidierung mit Pydantic und interaktiven Tools.',
      },
      {
        icon: 'network',
        title: 'Systemarchitektur',
        desc: 'Strukturierte API-Schnittstellen, saubere Datenmodelle und modulare Komponentenarchitekturen für langfristige Wartbarkeit.',
      },
    ],
  },
};
